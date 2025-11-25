'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

interface ProjectCardProps {
  title: string
  summary: string
  technologies: { name: string; icon: string }[]
  href: string
  image?: string
  previewImage?: string
  className?: string
}

export function ProjectCard({
  title,
  summary,
  technologies,
  href,
  image,
  previewImage,
  className
}: ProjectCardProps) {
  const isExternal = href.startsWith('http')
  const [showPreview, setShowPreview] = useState(false)
  const [previewPosition, setPreviewPosition] = useState<'left' | 'right'>('right')

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('🔍 HOVER DETECTED:', {
      title,
      isExternal,
      previewImage,
      href
    })
    setShowPreview(true)

    // Determine preview position based on card position
    const rect = e.currentTarget.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const spaceOnRight = viewportWidth - rect.right

    // If less than 550px space on right, show on left
    setPreviewPosition(spaceOnRight < 550 ? 'left' : 'right')
  }

  return (
    <>
      {/* Debug indicator */}
      <div className="text-xs text-red-500 font-bold mb-2">
        Preview: {showPreview ? 'SHOWN' : 'HIDDEN'} | Has previewImage: {previewImage ? 'YES' : 'NO'}
      </div>

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => {
          console.log('🔵 MOUSE LEFT')
          setShowPreview(false)
        }}
        onMouseOver={(e) => {
          console.log('🟢 MOUSE OVER (bubbling)', e.target)
        }}
      >
        <Card className="h-full card-hover group relative">
        <Link
          href={href}
          className="block h-full"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {image && (
            <div className="aspect-video overflow-hidden rounded-t-lg relative">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          
          <CardHeader>
            <div className="flex items-start justify-between">
              <CardTitle className="text-heading group-hover:text-accent transition-colors">
                {title}
              </CardTitle>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </div>
            <CardDescription className="text-body">
              {summary}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge
                  key={tech.name}
                  variant="secondary"
                  className="text-xs flex items-center gap-1 px-2 py-1"
                >
                  <span className="text-sm">{tech.icon}</span>
                  <span>{tech.name}</span>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Link>

        {/* Preview Popup */}
        {console.log('🎨 RENDER CHECK:', { showPreview, isExternal, hasPreviewImage: !!previewImage })}
        <AnimatePresence>
          {showPreview && isExternal && previewImage && (
            <>
              {console.log('✅ RENDERING PREVIEW!')}
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/80 z-[9999] pointer-events-none"
              />

              {/* Simple Test Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] pointer-events-none"
                style={{ width: '800px', height: '500px', maxWidth: '90vw', maxHeight: '90vh' }}
              >
                <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl border-4 border-red-500 bg-white p-8">
                  <h2 className="text-4xl font-bold text-black mb-4">PREVIEW VISIBLE!</h2>
                  <p className="text-2xl text-black mb-4">Title: {title}</p>
                  <p className="text-xl text-black mb-4">URL: {href}</p>
                  <p className="text-xl text-black">PreviewImage: {previewImage}</p>

                  {/* Try to load the image */}
                  <div className="mt-4 w-full h-64 bg-gray-200 relative">
                    <Image
                      src={`https://image.thum.io/get/width/1200/crop/800/noanimate/${previewImage}`}
                      alt={`Preview of ${title}`}
                      fill
                      className="object-cover object-top"
                      unoptimized
                      onLoad={() => console.log('✅ Image loaded!')}
                      onError={(e) => console.error('❌ Image failed to load:', e)}
                    />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
    </>
  )
}
