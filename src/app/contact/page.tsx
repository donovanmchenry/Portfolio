import { Metadata } from 'next'
import { ContactHero } from '@/components/sections/contact-hero'
import { ContactForm } from '@/components/sections/contact-form'
import { ContactLinks } from '@/components/sections/contact-links'

export const metadata: Metadata = {
  title: 'Contact - Donovan McHenry',
  description: 'Get in touch for opportunities, collaborations, or just to say hello.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactLinks />
      <ContactForm />
    </>
  )
}
