'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { List, Globe, Sparkles, RotateCcw, Loader2, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { IconCloud } from '@/components/ui/icon-cloud'
import { Footer } from '@/components/layout/footer'
import { usePhoto } from '@/components/providers/photo-context'

const skills = [
  { name: 'Python', icons: ['https://cdn.simpleicons.org/python/ffffff'], background: '#3776AB' },
  { name: 'JavaScript', icons: ['https://cdn.simpleicons.org/javascript/111111'], background: '#F7DF1E', foreground: '#111111' },
  { name: 'TypeScript', icons: ['https://cdn.simpleicons.org/typescript/ffffff'], background: '#3178C6' },
  { name: 'Java', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'], background: '#F5F5F5', foreground: '#1F2937' },
  { name: 'C++', icons: ['https://cdn.simpleicons.org/cplusplus/ffffff'], background: '#00599C' },
  { name: 'Bash', icons: ['https://cdn.simpleicons.org/gnubash/ffffff'], background: '#4EAA25' },
  { name: 'SQL', icons: [], background: '#336791' },
  { name: 'React', icons: ['https://cdn.simpleicons.org/react/111111'], background: '#61DAFB', foreground: '#111111' },
  { name: 'Next.js', icons: ['https://cdn.simpleicons.org/nextdotjs/ffffff'], background: '#000000' },
  { name: 'MUI', icons: ['https://cdn.simpleicons.org/mui/ffffff'], background: '#007FFF' },
  { name: 'Zustand', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg'], background: '#F5E8D0', foreground: '#2D221B' },
  { name: 'Tailwind', icons: ['https://cdn.simpleicons.org/tailwindcss/ffffff'], background: '#06B6D4' },
  { name: 'Node.js', icons: ['https://cdn.simpleicons.org/nodedotjs/ffffff'], background: '#339933' },
  { name: 'Express', icons: ['https://cdn.simpleicons.org/express/ffffff'], background: '#404D59' },
  { name: 'FastAPI', icons: ['https://cdn.simpleicons.org/fastapi/ffffff'], background: '#009688' },
  { name: 'Pydantic', icons: ['https://cdn.simpleicons.org/pydantic/ffffff'], background: '#E92063' },
  { name: 'OpenAI', icons: ['https://cdn.simpleicons.org/openai/ffffff'], background: '#412991' },
  { name: 'Anthropic', icons: ['https://cdn.simpleicons.org/anthropic/ffffff'], background: '#191919' },
  { name: 'MCP', icons: ['https://cdn.simpleicons.org/modelcontextprotocol/ffffff'], background: '#5B5B5B' },
  { name: 'Git', icons: ['https://cdn.simpleicons.org/git/ffffff'], background: '#F05032' },
  { name: 'GitHub Actions', icons: ['https://cdn.simpleicons.org/githubactions/ffffff'], background: '#2088FF' },
  { name: 'Docker', icons: ['https://cdn.simpleicons.org/docker/ffffff'], background: '#2496ED' },
  { name: 'Playwright', icons: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg'], background: '#F5F5F5', foreground: '#1F2937' },
  { name: 'FFmpeg', icons: ['https://cdn.simpleicons.org/ffmpeg/ffffff'], background: '#007808' },
]

const skillIcons = [
  'https://cdn.simpleicons.org/python',
  'https://cdn.simpleicons.org/javascript',
  'https://cdn.simpleicons.org/typescript',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'https://cdn.simpleicons.org/cplusplus',
  'https://cdn.simpleicons.org/react',
  'https://cdn.simpleicons.org/nextdotjs/ffffff',
  'https://cdn.simpleicons.org/mui',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg',
  'https://cdn.simpleicons.org/nodedotjs',
  'https://cdn.simpleicons.org/express/ffffff',
  'https://cdn.simpleicons.org/fastapi',
  'https://cdn.simpleicons.org/pydantic',
  'https://cdn.simpleicons.org/tailwindcss',
  'https://cdn.simpleicons.org/openai/ffffff',
  'https://cdn.simpleicons.org/anthropic/ffffff',
  'https://cdn.simpleicons.org/modelcontextprotocol/ffffff',
  'https://cdn.simpleicons.org/git',
  'https://cdn.simpleicons.org/githubactions',
  'https://cdn.simpleicons.org/docker',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg',
  'https://cdn.simpleicons.org/ffmpeg',
  'https://cdn.simpleicons.org/gnubash',
]

const experience = [
  {
    title: 'Software Engineering Intern',
    company: 'Universal Music Group',
    period: 'Summer 2026',
    description: 'Developing release planning software for GR4O Global Technology, coordinating distribution across global markets.',
  },
  {
    title: 'Claude Builder Ambassador',
    company: 'Anthropic',
    period: 'Fall 2025 – Spring 2026',
    description: 'Founded NJIT\'s Claude Builder Club with 100+ members, hosting workshops and coordinating speaking engagements with Anthropic staff.',
  },
  {
    title: 'Software Engineering Intern',
    company: 'Obsidian Security',
    period: 'Summer 2025',
    description: 'Built enterprise deployment features using React, TypeScript, and MUI, and improved UI accessibility.',
  },
]


export default function Home() {
  const [showCloudView, setShowCloudView] = useState(true)
  const [canTiltPhoto, setCanTiltPhoto] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [aiPrompt, setAiPrompt] = useState('')
  const { editedImage, setEditedImage } = usePhoto()
  const [isGenerating, setIsGenerating] = useState(false)
  const [aiError, setAiError] = useState<string | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const updateCanTilt = () => setCanTiltPhoto(mediaQuery.matches)

    updateCanTilt()
    mediaQuery.addEventListener('change', updateCanTilt)
    return () => mediaQuery.removeEventListener('change', updateCanTilt)
  }, [])

  async function handleEditPhoto() {
    if (!aiPrompt.trim() || isGenerating) return
    setIsGenerating(true)
    setAiError(null)
    try {
      const res = await fetch('/api/edit-photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: aiPrompt }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed')
      setEditedImage(data.image)
    } catch (err) {
      setAiError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/background-beach.jpeg)',
      }}
    >
      <div className="flex-1 flex items-center justify-center p-6 pt-20">
      <motion.div
        className="max-w-6xl w-full bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] border border-white/10"
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="grid md:grid-cols-[350px_1fr] gap-0 items-stretch">
          {/* Left Column - Profile */}
          <div className="flex flex-col items-center text-center p-8 space-y-6">
            <div
              className="relative w-40 h-40 rounded-xl overflow-hidden shadow-lg transition-transform duration-200 ease-out cursor-pointer"
              onMouseMove={canTiltPhoto && !editedImage ? handleMouseMove : undefined}
              onMouseLeave={canTiltPhoto && !editedImage ? handleMouseLeave : undefined}
              style={{
                transform: canTiltPhoto && !editedImage
                  ? `perspective(1000px) rotateX(${mousePosition.y * -10}deg) rotateY(${mousePosition.x * 10}deg) translateZ(10px)`
                  : undefined,
              }}
            >
              {isGenerating && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-xl">
                  <Loader2 className="h-6 w-6 animate-spin text-white/70" />
                </div>
              )}
              <Image
                src={editedImage ?? '/imagealt.jpeg'}
                alt="Donovan McHenry"
                fill
                className="object-cover"
                priority
                sizes="160px"
                unoptimized={!!editedImage}
              />
            </div>

            <div className="w-44 space-y-1.5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={aiPrompt}
                  onChange={e => setAiPrompt(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleEditPhoto()}
                  placeholder="Alter my photo!"
                  disabled={isGenerating}
                  className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/25 transition-colors disabled:opacity-50"
                />
                {editedImage ? (
                  <button
                    onClick={() => { setEditedImage(null); setAiPrompt(''); setAiError(null) }}
                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                    title="Reset"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleEditPhoto}
                    disabled={!aiPrompt.trim() || isGenerating}
                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <Sparkles className="h-4 w-4" />
                  </button>
                )}
              </div>
              {aiError && <p className="text-xs text-red-400">{aiError}</p>}
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tight">
                Donovan McHenry
              </h1>
              <p className="text-sm text-[#ffffff]">
                Prev. SWE @ Universal Music Group &amp; Obsidian Security · CS @ NJIT
              </p>
            </div>

            <p className="text-sm text-[#666666] leading-relaxed">
              Full-stack engineer with a focus on performance, systems design, and AI-native applications. I work across the stack: from REST APIs and database architecture to responsive UIs, and am currently deep in agentic AI, MCP tooling, and building LLM-powered workflows.
            </p>

          </div>

          {/* Right Column - Experience & Skills */}
          <div className="p-8 h-full flex flex-col">
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
              {/* Experience Section */}
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-xl font-semibold">Experience</h2>
                <div className="space-y-4">
                  {experience.map((exp) => (
                    <div key={exp.company} className="p-4 bg-[#111111]/40 rounded-xl border border-white/10 space-y-2">
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold leading-tight">{exp.title}</h3>
                        <p className="text-xs text-[#aaaaaa]">{exp.company}</p>
                        <p className="text-xs text-[#666666]">{exp.period}</p>
                      </div>
                      <p className="text-xs text-[#888888] leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Section */}
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-semibold mb-0">Skills</h2>
                <div className="relative w-full h-[350px] flex items-center justify-center overflow-hidden">
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${showCloudView ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="-mt-8">
                      <IconCloud images={skillIcons} />
                    </div>
                  </div>
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${!showCloudView ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="flex flex-wrap gap-2 justify-center max-w-sm">
                      {skills.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="secondary"
                          className="gap-1.5 border border-white/10 px-2.5 py-1 text-xs text-white shadow-sm transition-transform hover:-translate-y-0.5"
                          style={{
                            background: skill.background,
                            color: skill.foreground ?? '#ffffff',
                          }}
                        >
                          {skill.icons.length > 0 ? (
                            <span className="flex items-center gap-0.5" aria-hidden="true">
                              {skill.icons.map((icon) => (
                                <Image
                                  key={icon}
                                  src={icon}
                                  alt=""
                                  width={12}
                                  height={12}
                                  className="size-3"
                                  unoptimized
                                />
                              ))}
                            </span>
                          ) : (
                            <Database className="size-3" aria-hidden="true" />
                          )}
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCloudView(!showCloudView)}
                  className="text-xs text-[#888888] hover:text-foreground -mt-4 transition-all relative z-10"
                >
                  {showCloudView ? (
                    <>
                      <List className="h-3 w-3 mr-1" />
                      View as List
                    </>
                  ) : (
                    <>
                      <Globe className="h-3 w-3 mr-1" />
                      View as Cloud
                    </>
                  )}
                </Button>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
      </div>
      <Footer />
    </div>
  )
}
