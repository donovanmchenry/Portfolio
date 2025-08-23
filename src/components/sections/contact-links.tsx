'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Section } from './section'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Best way to reach me for professional inquiries',
    value: 'dzm3@njit.edu',
    href: 'mailto:dzm3@njit.edu',
    primary: true
  },
  {
    icon: Github,
    title: 'GitHub',
    description: 'Check out my code and contributions',
    value: 'donovanmchenry',
    href: 'https://github.com/donovanmchenry',
    external: true
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Connect with me professionally',
    value: 'donovanmchenry',
    href: 'https://linkedin.com/in/donovanmchenry',
    external: true
  }
]

export function ContactLinks() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-heading mb-8 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full ${method.primary ? 'border-accent' : ''}`}>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <method.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="text-center">
                  <Button
                    asChild
                    variant={method.primary ? 'default' : 'outline'}
                    className="w-full"
                  >
                    <Link
                      href={method.href}
                      target={method.external ? '_blank' : undefined}
                      rel={method.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center justify-center gap-2"
                    >
                      {method.value}
                      {method.external && <ExternalLink className="h-3 w-3" />}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
