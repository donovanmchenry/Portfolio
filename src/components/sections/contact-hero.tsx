'use client'

import { motion } from 'framer-motion'
import { Section } from './section'

export function ContactHero() {
  return (
    <Section className="pt-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-display mb-6">Let&apos;s Connect</h1>
          
          <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always interested in new opportunities, interesting projects, and conversations about technology. 
            Whether you&apos;re looking for a software engineer, want to collaborate on a project, or just want to chat about tech, 
            I&apos;d love to hear from you.
          </p>
        </motion.div>
      </div>
    </Section>
  )
}
