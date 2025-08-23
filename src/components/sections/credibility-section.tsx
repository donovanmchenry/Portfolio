'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section } from './section'

export function CredibilitySection() {
  return (
    <Section className="py-12">
      <div className="flex flex-col items-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="ghost" size="sm" asChild>
            <Link
              href="https://github.com/donovanmchenry"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </Button>
          
          <Button variant="ghost" size="sm" asChild>
            <Link
              href="https://linkedin.com/in/donovanmchenry"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </Button>
          
          <Button variant="ghost" size="sm" asChild>
            <Link
              href="mailto:dzm3@njit.edu"
              className="flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Email
            </Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
