'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './project-card'

const projects = [
  {
    title: 'NJIT Auto Schedule Builder',
    summary: 'Find every clash-free schedule for your chosen NJIT courses in one click. Features automatic weekly catalog refresh via GitHub Actions, enumeration of all valid schedules, and a tiny Flask + Gunicorn footprint hosted on Render\'s free tier.',
    technologies: [
      { name: 'Python', icon: '🐍' },
      { name: 'Flask', icon: '🌶️' },
      { name: 'GitHub Actions', icon: '🤖' },
      { name: 'Render', icon: '☁️' },
      { name: 'Web Scraping', icon: '🔍' },
      { name: 'Algorithm Design', icon: '🧮' }
    ],
    href: 'https://njitautoschedulebuilder.onrender.com/',
  },
  {
    title: 'Chatify - AI Music Recommendations',
    summary: 'Personalized music chatbot that integrates with Spotify to provide intelligent recommendations using OpenAI\'s GPT-3.5. Features secure OAuth authentication, session management, smart music detection, and automatic token refresh for seamless user experience.',
    technologies: [
      { name: 'Node.js', icon: '💚' },
      { name: 'Express.js', icon: '🚀' },
      { name: 'OpenAI API', icon: '🤖' },
      { name: 'Spotify API', icon: '🎵' },
      { name: 'OAuth 2.0', icon: '🔐' },
      { name: 'Session Management', icon: '🗂️' }
    ],
    href: 'https://chatify4o.netlify.app/',
  },
  {
    title: 'Order Up - Dynamic Card Matching',
    summary: 'Memory-based web game that challenges players with exponentially increasing difficulty, supporting up to 12 ingredients per order. Features smooth animations, responsive design, progressive difficulty scaling, and engaging gameplay mechanics with high score tracking.',
    technologies: [
      { name: 'JavaScript', icon: '⚡' },
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'Game Logic', icon: '🎮' },
      { name: 'Animations', icon: '✨' },
      { name: 'Local Storage', icon: '💾' }
    ],
    href: 'https://orderupgame.netlify.app/',
  },
]

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
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
  )
}
