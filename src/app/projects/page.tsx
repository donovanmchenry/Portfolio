'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Globe } from 'lucide-react'
import { Footer } from '@/components/layout/footer'

const projects = [
  {
    title: 'NJIT Schedule Pro',
    description: 'Course schedule generator using constraint-solving algorithms to find optimal schedules based on preferences and availability with 800+ users.',
    tech: ['FastAPI', 'Next.js', 'TypeScript', 'Python'],
    href: 'https://www.njitschedulepro.com/',
    previewImage: '/project-previews/njit-schedule-pro.png',
  },
  {
    title: 'NJIT Empty Room Finder',
    description: 'Real-time classroom availability finder helping students locate empty rooms with next-occupied time information.',
    tech: ['Flask', 'Python', 'JavaScript', 'REST API'],
    href: 'https://njitemptyroomfinder.onrender.com/',
    previewImage: '/project-previews/njit-empty-room.png',
  },
  {
    title: 'Learnflix',
    description: 'Interactive learning platform that transforms passive video consumption into active study sessions by pausing at configurable intervals to present AI-generated quiz questions and AI videos generated with Kling via Replicate that smoothly integrate into the experience.',
    tech: ['Next.js', 'TypeScript', 'OpenAI', 'Replicate', 'FFmpeg'],
    href: 'https://github.com/donovanmchenry/learnflix',
    previewImage: null,
    noPreview: true,
  },
]

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/backgroundimage.JPG)' }}
    >
      <div className="flex-1 flex items-center justify-center p-6 pt-20">
      <motion.div
        className="max-w-4xl w-full bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] border border-white/10 p-8"
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-2xl font-bold mb-6">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={index === projects.length - 1 && projects.length % 2 !== 0 ? 'md:col-span-2 md:max-w-[calc(50%-8px)] md:mx-auto w-full' : ''}
              onMouseEnter={() => !project.noPreview && setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="h-full p-4 bg-[#111111]/40 rounded-xl hover:bg-[#161616]/50 transition-all shadow-sm hover:shadow-md space-y-2 border border-white/10">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold leading-tight">{project.title}</h3>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                  <p className="text-xs text-[#888888] leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-[#1a1a1a]/40 rounded text-[#aaaaaa] border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
      </div>
      <Footer />

      {/* Preview Overlay */}
      <AnimatePresence mode="wait">
        {hoveredProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] pointer-events-none"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1], opacity: { duration: 0.25 } }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] pointer-events-none w-[900px] h-[550px] max-w-[90vw] max-h-[90vh]"
            >
              <div className="w-full h-full rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] border border-white/20 bg-[#0a0a0a]/90 backdrop-blur-xl">
                <div className="w-full h-12 bg-[#1a1a1a]/80 border-b border-white/10 flex items-center px-4 gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 flex items-center gap-2 px-4 h-8 bg-[#0a0a0a]/60 rounded-md border border-white/10">
                    <Globe className="h-3 w-3 text-gray-400" />
                    <span className="text-xs text-gray-300 truncate">
                      {projects.find(p => p.title === hoveredProject)?.href}
                    </span>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="w-full h-[calc(100%-3rem)] bg-[#0a0a0a] relative"
                >
                  {projects.find(p => p.title === hoveredProject)?.previewImage ? (
                    <Image
                      src={projects.find(p => p.title === hoveredProject)?.previewImage || ''}
                      alt={`Preview of ${hoveredProject}`}
                      fill
                      className="object-cover object-top"
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-gray-400">
                      <Globe className="h-16 w-16 opacity-20" />
                      <p className="text-sm">No preview available</p>
                      <p className="text-xs text-gray-500">Add a screenshot to:</p>
                      <code className="text-xs bg-[#1a1a1a] px-3 py-1 rounded border border-white/10">
                        public/project-previews/{hoveredProject?.toLowerCase().replace(/\s+/g, '-')}.png
                      </code>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
