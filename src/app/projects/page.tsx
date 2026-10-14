'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Footer } from '@/components/layout/footer'

const projects = [
  {
    title: 'NJIT Schedule Pro',
    description: 'Course schedule generator using constraint-solving algorithms to find optimal schedules based on preferences and availability with 800+ users.',
    tech: ['FastAPI', 'Next.js', 'TypeScript', 'Python'],
    href: 'https://www.njitschedulepro.com/',
    previewImage: '/project-previews/njit-schedule-pro-logo.png',
  },
  {
    title: 'NJIT Empty Room Finder',
    description: 'Real-time classroom availability finder helping students locate empty rooms with next-occupied time information.',
    tech: ['Flask', 'Python', 'JavaScript', 'REST API'],
    href: 'https://njitemptyroomfinder.onrender.com/',
    previewImage: '/project-previews/njit-empty-room-logo.png',
  },
  {
    title: 'Learnflix',
    description: 'Interactive learning platform that transforms passive video consumption into active study sessions by pausing at configurable intervals to present AI-generated quiz questions and AI videos generated with Kling via Replicate that smoothly integrate into the experience.',
    tech: ['Next.js', 'TypeScript', 'OpenAI', 'Replicate', 'FFmpeg'],
    href: 'https://github.com/donovanmchenry/learnflix',
    previewImage: '/project-previews/learnflix-logo.png',
  },
]

export default function ProjectsPage() {
  return (
    <div className="page-shell portfolio-page flex flex-col">
      <div className="portfolio-main flex-1 flex items-center justify-center p-6 pt-20">
        <motion.div
          className="portfolio-panel projects-panel max-w-6xl w-full bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] border border-white/10 p-6 sm:p-8"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-2xl font-bold mb-4">Projects</h1>
          <div className="projects-list flex flex-col gap-4">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-row group grid grid-cols-1 md:grid-cols-[1fr_280px] items-center gap-6 p-4 bg-[#111111]/40 rounded-xl hover:bg-[#161616]/50 transition-colors border border-white/10 focus-visible:outline-white"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="text-base font-semibold leading-tight">{project.title}</h2>
                  </div>
                  <p className="text-sm text-[#888888] leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-0.5 bg-[#1a1a1a]/40 rounded text-[#aaaaaa] border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-preview relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-[#0a0a0a] order-first md:order-none">
                  <Image
                    src={project.previewImage}
                    alt={`${project.title} logo`}
                    fill
                    className="object-contain p-4"
                    sizes="(min-width: 768px) 280px, (min-width: 640px) calc(100vw - 144px), calc(100vw - 112px)"
                  />
                  <span className="absolute top-2 right-2 z-10 flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-black/70 text-white/60 transition-colors group-hover:text-white group-focus-visible:text-white" aria-hidden="true">
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
