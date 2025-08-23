import { Metadata } from 'next'
import { AboutHero } from '@/components/sections/about-hero'
import { Timeline } from '@/components/sections/timeline'
import { SkillsConveyor } from '@/components/sections/skills-conveyor'

export const metadata: Metadata = {
  title: 'About - Donovan McHenry',
  description: 'Learn more about my journey, skills, and technical expertise as a software engineer.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <SkillsConveyor />
    </>
  )
}
