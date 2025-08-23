import { Metadata } from 'next'
import { ProjectGrid } from '@/components/sections/project-grid'
import { Section } from '@/components/sections/section'

export const metadata: Metadata = {
  title: 'Work - Donovan McHenry',
  description: 'A collection of projects showcasing my technical skills and problem-solving approach.',
}

export default function WorkPage() {
  return (
    <Section className="pt-24">
      <div className="max-w-4xl">
        <h1 className="text-display mb-6">Work</h1>
        <p className="text-body text-muted-foreground mb-12 max-w-2xl">
          A collection of projects that demonstrate my approach to building scalable, 
          user-focused applications with clean code and thoughtful architecture.
        </p>
      </div>
      
      <ProjectGrid />
    </Section>
  )
}
