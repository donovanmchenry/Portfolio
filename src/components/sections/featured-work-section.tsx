'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProjectCard } from './project-card'
import { Section } from './section'

const featuredProjects = [
  {
    title: 'NJIT Auto Schedule Builder',
    summary: 'Find every clash-free schedule for your chosen NJIT courses in one click. Features automatic weekly catalog refresh, enumeration of all valid schedules, and a tiny Flask + Gunicorn footprint.',
    technologies: [
      { name: 'Python', icon: '🐍' },
      { name: 'Flask', icon: '🌶️' },
      { name: 'GitHub Actions', icon: '🤖' },
      { name: 'Render', icon: '☁️' }
    ],
    href: 'https://njitautoschedulebuilder.onrender.com/',
  },
  {
    title: 'Chatify - AI Music Recommendations',
    summary: 'Personalized music chatbot that integrates with Spotify to provide intelligent recommendations using OpenAI\'s GPT-3.5. Features secure OAuth, session management, and smart music detection.',
    technologies: [
      { name: 'Node.js', icon: '💚' },
      { name: 'OpenAI API', icon: '🤖' },
      { name: 'Spotify API', icon: '🎵' },
      { name: 'OAuth 2.0', icon: '🔐' }
    ],
    href: 'https://chatify4o.netlify.app/',
  },
  {
    title: 'Order Up - Dynamic Card Matching',
    summary: 'Memory-based web game that challenges players with exponentially increasing difficulty. Features smooth animations, progressive difficulty scaling, and engaging gameplay mechanics.',
    technologies: [
      { name: 'JavaScript', icon: '⚡' },
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'Game Logic', icon: '🎮' }
    ],
    href: 'https://orderupgame.netlify.app/',
  },
]

export function FeaturedWorkSection() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-heading mb-4">Featured Work</h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          A selection of projects that showcase my approach to problem-solving and technical execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/work"
          className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 link-underline"
        >
          View all projects
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}
