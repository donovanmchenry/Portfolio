'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section } from './section'

export function MiniAboutSection() {
  return (
    <Section className="py-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-heading mb-6">About Me</h2>
          
          <p className="text-body mb-6 leading-relaxed">
            Computer Science student at NJIT with hands-on experience building scalable systems at Obsidian Security. 
            I&apos;ve mentored 300+ students through CS@WH and believe in clean code, pragmatic solutions, and continuous learning.
          </p>
          
          <p className="text-body mb-8 leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source, 
            or helping fellow developers navigate their journey in tech.
          </p>
          
          <Link
            href="/about"
            className="inline-flex items-center text-accent hover:text-accent/80 font-medium link-underline"
          >
            More about me
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  )
}
