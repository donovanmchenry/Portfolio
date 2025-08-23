'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Section } from './section'

const skillCategories = [
  {
    title: 'Programming Languages',
    description: 'Core languages I work with regularly',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'HTML/CSS']
  },
  {
    title: 'Frameworks & Libraries',
    description: 'Tools and frameworks for building applications',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Flask', 'Tailwind CSS']
  },
  {
    title: 'Tools & Technologies',
    description: 'Development tools and platforms',
    skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'IntelliJ', 'Figma']
  },
  {
    title: 'APIs & Integrations',
    description: 'External services and API integrations',
    skills: ['REST APIs', 'OpenAI API', 'Spotify API', 'OAuth', 'JSON', 'MDX']
  }
]

export function Skills() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-heading mb-12 text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
