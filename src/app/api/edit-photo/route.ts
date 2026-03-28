import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenAI } from '@google/genai'
import * as fs from 'node:fs'
import * as path from 'node:path'

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()

    if (!prompt?.trim()) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY! })

    const imagePath = path.join(process.cwd(), 'public', 'imagealt.jpeg')
    const imageData = fs.readFileSync(imagePath)
    const base64Image = imageData.toString('base64')

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: [
        {
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: 'image/jpeg',
                data: base64Image,
              },
            },
          ],
        },
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    })

    const parts = response.candidates?.[0]?.content?.parts ?? []
    for (const part of parts) {
      if (part.inlineData) {
        return NextResponse.json({
          image: `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`,
        })
      }
    }

    return NextResponse.json({ error: 'No image returned from model' }, { status: 500 })
  } catch (err: unknown) {
    console.error('[edit-photo]', err)
    const msg = err instanceof Error ? err.message : ''
    if (msg.includes('429') || msg.includes('RESOURCE_EXHAUSTED')) {
      return NextResponse.json({ error: 'API quota exceeded — billing needs to be enabled on your Google AI account.' }, { status: 429 })
    }
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 })
  }
}
