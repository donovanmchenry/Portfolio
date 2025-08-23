import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {currentYear} Donovan McHenry. Built with Next.js and Tailwind CSS.
            </p>
          </div>
          
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/donovanmchenry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/donovanmchenry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:dzm3@njit.edu">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
