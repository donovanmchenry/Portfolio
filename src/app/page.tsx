'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, ExternalLink, List, Globe, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { IconCloud } from '@/components/ui/icon-cloud'
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text'

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
  },
  {
    title: 'NJIT Empty Room Finder',
    description: 'Real-time classroom availability finder helping students locate empty rooms with next-occupied time information.',
    tech: ['Flask', 'Python', 'JavaScript', 'REST API'],
    href: 'https://njitemptyroomfinder.onrender.com/',
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
      <div className="max-w-6xl w-full bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] overflow-hidden border border-white/10">
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
              I truly enjoy building clean, performant web applications with modern tools. In addition, I'm very interested in the implementation of AI across different fields. 
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
                  className="bg-[#141414]/60 hover:bg-[#1a1a1a]/70 backdrop-blur-md shadow-sm border border-white/5"
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
                    <div key={exp.title} className="p-4 bg-[#111111]/60 backdrop-blur-md rounded-xl space-y-2 border border-white/5">
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
                        <Badge key={skill} variant="secondary" className="text-xs bg-[#1a1a1a]/60 backdrop-blur-md border border-white/5">
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
                  <Link
                    key={project.title}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="h-full p-4 bg-[#111111]/60 backdrop-blur-md rounded-xl hover:bg-[#161616]/70 transition-all shadow-sm hover:shadow-md space-y-2 border border-white/5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold leading-tight">{project.title}</h3>
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </div>
                      <p className="text-xs text-[#888888] leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => (
                          <span key={tech} className="text-xs px-2 py-1 bg-[#1a1a1a]/60 backdrop-blur-sm rounded text-[#aaaaaa] border border-white/5">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
