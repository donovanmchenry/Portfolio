'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Section } from './section'

const timelineEvents = [
  {
    title: 'Software Engineering Intern',
    company: 'Universal Music Group',
    period: 'Summer 2026',
    location: 'Remote',
    description: 'Joining the GR4O Global Technology team to develop release planning software that coordinates physical, merch, and digital distribution across global markets. Working with Python, TypeScript, and modern web technologies to build internal tools supporting UMG\'s worldwide music release strategy.',
    highlights: [
      'Release planning software for global markets',
      'Coordinating physical, merch, and digital distribution',
      'Python, TypeScript, and modern web technologies'
    ],
    current: true
  },
  {
    title: 'Software Engineering Intern',
    company: 'Obsidian Security',
    period: 'July 2025 – Present',
    location: 'Remote',
    description: 'Extended templated PowerShell installer with configurable deployment flags, improved internal documentation, and wrote comprehensive tests to validate REST endpoints.',
    highlights: [
      'Reduced manual setup time for admins',
      'Streamlined developer experience',
      'Improved system reliability through testing'
    ]
  },
  {
    title: 'Claude Builder Ambassador',
    company: 'Anthropic',
    period: 'Fall 2025 – Spring 2026',
    location: 'Newark, NJ',
    description: 'Founded and lead NJIT\'s Claude Builder Club with 100+ members, organizing workshops, hackathons, and technical events. Coordinated speaking engagements with Anthropic technical staff and teach students best practices for building AI applications using Claude and MCP architecture.',
    highlights: [
      'Founded club with 100+ members',
      'Coordinated speaking engagements with Anthropic staff',
      'Teaching Claude API and MCP architecture'
    ]
  },
  {
    title: 'Computer Science Student',
    company: 'New Jersey Institute of Technology',
    period: 'Expected May 2027',
    location: 'Newark, NJ',
    description: 'Pursuing B.S. in Computer Science with focus on software engineering, algorithms, and system design.',
    highlights: [
      'CodePath WEB101 (Honors)',
      'ColorStack Member',
      'Strong foundation in CS fundamentals'
    ]
  },
  {
    title: 'Organizer & Mentor',
    company: 'CS@WH',
    period: 'Sep 2019 – Jun 2023',
    location: 'Washington, NJ',
    description: 'Mentored 300+ elementary students in computational thinking and programming, organized community hackathons, and presented STEM career talks.',
    highlights: [
      'Mentored 300+ students',
      'Organized 100+ participant hackathon',
      'Annual presentations to ~150 middle-schoolers'
    ]
  }
]

export function Timeline() {
  return (
    <Section>
      <div className="max-w-4xl">
        <h2 className="text-heading mb-12 text-center">Experience</h2>
        
        <div className="space-y-6">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={`${event.company}-${event.period}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={event.current ? 'border-accent' : ''}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {event.title}
                        {event.current && (
                          <Badge variant="default" className="text-xs">
                            Current
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="text-accent font-medium">
                        {event.company}
                      </CardDescription>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{event.period}</div>
                      <div>{event.location}</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-body mb-4">{event.description}</p>
                  
                  <ul className="space-y-1">
                    {event.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
