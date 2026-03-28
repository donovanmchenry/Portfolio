import Link from 'next/link'
import { Mail, Github, Linkedin } from 'lucide-react'

const socials = [
  { name: 'Email', href: 'mailto:dzm3@njit.edu', icon: Mail, external: false },
  { name: 'GitHub', href: 'https://github.com/donovanmchenry', icon: Github, external: true },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/donovanmchenry', icon: Linkedin, external: true },
]

export function Footer() {
  return (
    <div className="flex justify-center pt-4 pb-8">
      <div className="flex items-center gap-1 px-2 py-2 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.6)]">
        {socials.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target={social.external ? '_blank' : undefined}
            rel={social.external ? 'noopener noreferrer' : undefined}
            aria-label={social.name}
            className="flex items-center justify-center w-8 h-8 rounded-lg text-white/55 hover:text-white hover:bg-white/5 transition-colors duration-150"
          >
            <social.icon className="h-4 w-4" />
          </Link>
        ))}
      </div>
    </div>
  )
}
