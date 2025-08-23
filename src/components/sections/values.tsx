'use client'

import { motion } from 'framer-motion'
import { Users, Code, Lightbulb, Target } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Section } from './section'

const values = [
  {
    icon: Users,
    title: 'Mentorship',
    description: 'Believing in the power of knowledge sharing and helping others grow in their technical journey.'
  },
  {
    icon: Code,
    title: 'Clean Systems',
    description: 'Writing maintainable, well-documented code that stands the test of time and scale.'
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'Staying curious and adapting to new technologies while building on solid fundamentals.'
  },
  {
    icon: Target,
    title: 'Pragmatic Solutions',
    description: 'Focusing on practical, user-centered solutions that solve real problems effectively.'
  }
]

export function Values() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-heading mb-12 text-center">Values & Approach</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
