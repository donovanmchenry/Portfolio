'use client'

import { motion } from 'framer-motion'
import { Section } from './section'

export function AboutHero() {
  return (
    <Section className="pt-24">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-display mb-8">About Me</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-body mb-6 leading-relaxed">
              I&apos;m a Computer Science student at NJIT with a passion for programming and designing innovative applications with emerging technologies. Currently I am working as a Software Engineering Intern 
              at Obsidian Security, where I focus on improving developer experience and 
              building robust systems.
            </p>
            
            <p className="text-body mb-6 leading-relaxed">
              My journey in tech began in highschool, mentoring elementary students through CS@WH (Our school's Computer Science club), 
              where I discovered my love for teaching and helping others understand complex concepts. 
              This experience taught me the importance of clear communication and showed me the potential of technology to change lives.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
