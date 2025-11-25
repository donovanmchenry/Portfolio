'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, ExternalLink, List, Globe, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { IconCloud } from '@/components/ui/icon-cloud'

const skills = [
  'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'HTML/CSS',
  'React', 'Next.js', 'Node.js', 'Express', 'Flask', 'Tailwind',
  'Git', 'GitHub', 'Docker', 'VS Code', 'OpenAI', 'REST APIs'
]

const skillIcons = [
  'https://cdn.simpleicons.org/python',
  'https://cdn.simpleicons.org/javascript',
  'https://cdn.simpleicons.org/typescript',
  'https://cdn.simpleicons.org/oracle',
  'https://cdn.simpleicons.org/cplusplus',
  'https://cdn.simpleicons.org/html5',
  'https://cdn.simpleicons.org/react',
  'https://cdn.simpleicons.org/nextdotjs/ffffff',
  'https://cdn.simpleicons.org/nodedotjs',
  'https://cdn.simpleicons.org/express/ffffff',
  'https://cdn.simpleicons.org/flask',
  'https://cdn.simpleicons.org/tailwindcss',
  'https://cdn.simpleicons.org/git',
  'https://cdn.simpleicons.org/github/ffffff',
  'https://cdn.simpleicons.org/docker',
  'https://cdn.simpleicons.org/visualstudiocode',
  'https://cdn.simpleicons.org/openai',
]

const experience = [
  {
    title: 'Software Engineering Intern',
    company: 'Obsidian Security',
    period: 'Summer 2024',
    description: 'Led enterprise deployment features using React, TypeScript, and MUI, re-architected download infrastructure, and built end-to-end validation systems while improving UI accessibility.',
  },
  {
    title: 'Claude Builder Ambassador',
    company: 'Anthropic',
    period: 'Fall 2024 - Present',
    description: 'Leading NJIT\'s Claude Builder Club with 100+ members, organizing AI workshops and hackathons while teaching students best practices for building with Anthropic\'s AI tools and MCP architecture.',
  },
]

const projects = [
  {
    title: 'NJIT Schedule Pro',
    description: 'Course schedule generator using constraint-solving algorithms to find optimal schedules based on preferences and availability with 800+ users.',
    tech: ['FastAPI', 'Next.js', 'TypeScript', 'Python'],
    href: 'https://www.njitschedulepro.com/',
    previewImage: '/project-previews/njit-schedule-pro.png', // Add screenshot to public/project-previews/
  },
  {
    title: 'NJIT Empty Room Finder',
    description: 'Real-time classroom availability finder helping students locate empty rooms with next-occupied time information.',
    tech: ['Flask', 'Python', 'JavaScript', 'REST API'],
    href: 'https://njitemptyroomfinder.onrender.com/',
    previewImage: '/project-previews/njit-empty-room.png', // Add screenshot to public/project-previews/
  },
]

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:dzm3@njit.edu',
    icon: Mail,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/donovanmchenry',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/donovanmchenry',
  },
]

export default function Home() {
  const [showCloudView, setShowCloudView] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

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
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/backgroundimage.JPG)',
      }}
    >
      <div className="max-w-6xl w-full bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] border border-white/10">
        <div className="grid md:grid-cols-[350px_1fr] gap-0">
          {/* Left Column - Profile */}
          <div className="flex flex-col items-center text-center p-8 space-y-6">
            <div
              className="relative w-40 h-40 rounded-xl overflow-hidden shadow-lg transition-transform duration-200 ease-out cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * -10}deg) rotateY(${mousePosition.x * 10}deg) translateZ(10px)`,
              }}
            >
              <Image
                src="/imagealt.jpeg"
                alt="Donovan McHenry"
                fill
                className="object-cover"
                priority
                sizes="160px"
              />
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tight">
                Donovan McHenry
              </h1>
              <p className="text-sm text-[#ffffff]">
                NJIT CS &apos;27 · Claude Builder Ambassador @ Anthropic · Prev. SWE Intern @ Obsidian Security
              </p>
            </div>

            <p className="text-sm text-[#666666] leading-relaxed">
              I truly enjoy building clean, performant web applications with modern tools. In addition, I&apos;m very interested in the implementation of AI across different fields.
              I aspire to connect with the next generation of ambitious engineers working on turning science fiction into reality.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="bg-[#141414]/40 hover:bg-[#1a1a1a]/50 shadow-sm border border-white/10"
                >
                  <Link
                    href={link.href}
                    target={link.name !== 'Email' ? '_blank' : undefined}
                    rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    aria-label={link.name}
                  >
                    {link.name === 'Email' && <Mail className="h-4 w-4" />}
                    {link.name === 'GitHub' && <Github className="h-4 w-4" />}
                    {link.name === 'LinkedIn' && <Linkedin className="h-4 w-4" />}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Right Column - Experience & Skills */}
          <div className="p-8 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
              {/* Experience Section */}
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-xl font-semibold">Experience</h2>
                <div className="space-y-4">
                  {experience.map((exp) => (
                    <div key={exp.title} className="p-4 bg-[#111111]/40 rounded-xl space-y-2 border border-white/10">
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold leading-tight">{exp.title}</h3>
                        <p className="text-xs text-[#aaaaaa]">{exp.company}</p>
                        <p className="text-xs text-[#666666]">{exp.period}</p>
                      </div>
                      <p className="text-xs text-[#888888]">{exp.description}</p>
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
                        <Badge key={skill} variant="secondary" className="text-xs bg-[#1a1a1a]/40 border border-white/10">
                          {skill}
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

            {/* Projects Section - Full Width Below */}
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-xl font-semibold">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    onMouseEnter={() => setHoveredProject(project.title)}
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
            </div>
          </div>
        </div>
      </div>

      {/* Preview Overlay */}
      <AnimatePresence mode="wait">
        {hoveredProject && (
          <>
            {/* Backdrop with glassmorphism */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1.0]
              }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] pointer-events-none"
            />

            {/* Preview Window */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 20
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 10
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
                opacity: { duration: 0.25 }
              }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] pointer-events-none w-[900px] h-[550px] max-w-[90vw] max-h-[90vh]"
            >
              <div className="w-full h-full rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] border border-white/20 bg-[#0a0a0a]/90 backdrop-blur-xl">
              {/* Browser Chrome */}
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

              {/* Website Screenshot */}
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
