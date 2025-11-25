'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ProjectCardProps {
  title: string
  summary: string
  technologies: { name: string; icon: string }[]
  href: string
  image?: string
  className?: string
}

export function ProjectCard({
  title,
  summary,
  technologies,
  href,
  image,
  className
}: ProjectCardProps) {
  const isExternal = href.startsWith('http')

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
        <Card className="h-full card-hover group relative">
        <Link
          href={href}
          className="block h-full"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {image && (
            <div className="aspect-video overflow-hidden rounded-t-lg relative">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          
          <CardHeader>
            <div className="flex items-start justify-between">
              <CardTitle className="text-heading group-hover:text-accent transition-colors">
                {title}
              </CardTitle>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </div>
            <CardDescription className="text-body">
              {summary}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge
                  key={tech.name}
                  variant="secondary"
                  className="text-xs flex items-center gap-1 px-2 py-1"
                >
                  <span className="text-sm">{tech.icon}</span>
                  <span>{tech.name}</span>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  )
}
