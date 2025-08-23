'use client'

import { motion } from 'framer-motion'
import { Section } from './section'

// Simple icon component with brand colors
const SkillIcon = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${className}`}>
    {children}
  </div>
)

const skills = [
  // Programming Languages
  { 
    name: 'Python', 
    icon: (
      <SkillIcon className="bg-[#3776ab]/10">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3776ab] to-[#ffde57] flex items-center justify-center">
          <span className="text-white font-bold text-sm">Py</span>
        </div>
      </SkillIcon>
    )
  },
  { 
    name: 'JavaScript', 
    icon: (
      <SkillIcon className="bg-[#f7df1e]/10">
        <div className="w-8 h-8 rounded bg-[#f7df1e] flex items-center justify-center">
          <span className="text-black font-bold text-sm">JS</span>
        </div>
      </SkillIcon>
    )
  },
  { 
    name: 'TypeScript', 
    icon: (
      <SkillIcon className="bg-[#3178c6]/10">
        <div className="w-8 h-8 rounded bg-[#3178c6] flex items-center justify-center">
          <span className="text-white font-bold text-sm">TS</span>
        </div>
      </SkillIcon>
    )
  },
  { 
    name: 'Java', 
    icon: (
      <SkillIcon className="bg-[#ed8b00]/10">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ed8b00] to-[#f89820] flex items-center justify-center">
          <span className="text-white font-bold text-xs">☕</span>
        </div>
      </SkillIcon>
    )
  },
  { 
    name: 'C++', 
    icon: (
      <SkillIcon className="bg-[#00599c]/10">
        <div className="w-8 h-8 rounded bg-[#00599c] flex items-center justify-center">
          <span className="text-white font-bold text-xs">C++</span>
        </div>
      </SkillIcon>
    )
  },
  { 
    name: 'HTML/CSS', 
    icon: (
      <SkillIcon className="bg-[#e34f26]/10">
        <div className="w-8 h-8 rounded bg-gradient-to-br from-[#e34f26] to-[#1572b6] flex items-center justify-center">
          <span className="text-white font-bold text-xs">{ }</span>
        </div>
      </SkillIcon>
    )
  },

  // Frameworks & Libraries
  { 
    name: 'React', 
    icon: (
      <SkillIcon className="bg-[#61dafb]/10">
        <div className="w-8 h-8 rounded-full bg-[#61dafb] flex items-center justify-center">
          <span className="text-[#20232a] font-bold text-sm">⚛</span>
        </div>
      </SkillIcon>
    )
  },
  { 
    name: 'Next.js', 
    icon: (
      <SkillIcon className="bg-black/10 dark:bg-white/10">
        <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center">
          <span className="text-white dark:text-black font-bold text-sm">N</span>
        </div>
      </SkillIcon>
    )
  },
  { 
    name: 'Node.js', 
    icon: (
      <SkillIcon className="bg-[#339933]/10">
        <div className="w-8 h-8 rounded bg-[#339933] flex items-center justify-center">
          <span className="text-white font-bold text-sm">⬢</span>
        </div>
      </SkillIcon>
    )
  },
  { 
    name: 'Express', 
    icon: (
      <SkillIcon className="bg-black/10 dark:bg-white/10">
        <div className="w-8 h-8 rounded bg-black dark:bg-white flex items-center justify-center">
          <span className="text-white dark:text-black font-bold text-xs">Ex</span>
        </div>
      </SkillIcon>
    )
  },
  { 
    name: 'Flask', 
    icon: (
      <SkillIcon className="bg-black/10 dark:bg-white/10">
        <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center">
          <span className="text-white dark:text-black font-bold text-xs">🌶</span>
        </div>
      </SkillIcon>
    )
  },
  { 
    name: 'Tailwind', 
    icon: (
      <SkillIcon className="bg-[#06b6d4]/10">
        <div className="w-8 h-8 rounded bg-[#06b6d4] flex items-center justify-center">
          <span className="text-white font-bold text-xs">TW</span>
        </div>
      </SkillIcon>
    )
  },

  // Tools & Technologies
  { 
    name: 'Git', 
    icon: (
      <SkillIcon className="bg-[#f05032]/10">
        <div className="w-8 h-8 rounded bg-[#f05032] flex items-center justify-center">
          <span className="text-white font-bold text-sm">⎇</span>
        </div>
      </SkillIcon>
    )
  },
  { 
    name: 'GitHub', 
    icon: (
      <SkillIcon className="bg-black/10 dark:bg-white/10">
        <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center">
          <span className="text-white dark:text-black font-bold text-sm">⚈</span>
        </div>
      </SkillIcon>
    )
  },
  { 
    name: 'Docker', 
    icon: (
      <SkillIcon className="bg-[#2496ed]/10">
        <div className="w-8 h-8 rounded bg-[#2496ed] flex items-center justify-center">
          <span className="text-white font-bold text-sm">🐳</span>
        </div>
      </SkillIcon>
    )
  },
  { 
    name: 'VS Code', 
    icon: (
      <SkillIcon className="bg-[#007acc]/10">
        <div className="w-8 h-8 rounded bg-[#007acc] flex items-center justify-center">
          <span className="text-white font-bold text-xs">{ }</span>
        </div>
      </SkillIcon>
    )
  },

  // APIs & Integrations
  { 
    name: 'OpenAI', 
    icon: (
      <SkillIcon className="bg-[#412991]/10">
        <div className="w-8 h-8 rounded-full bg-[#412991] flex items-center justify-center">
          <span className="text-white font-bold text-sm">AI</span>
        </div>
      </SkillIcon>
    )
  },
  { 
    name: 'REST APIs', 
    icon: (
      <SkillIcon className="bg-[#25d366]/10">
        <div className="w-8 h-8 rounded bg-[#25d366] flex items-center justify-center">
          <span className="text-white font-bold text-xs">API</span>
        </div>
      </SkillIcon>
    )
  }
]

// Create seamless loop by duplicating skills
const duplicatedSkills = [...skills, ...skills]

export function SkillsConveyor() {
  const skillWidth = 100 // Width of each skill item including gap
  const totalWidth = skills.length * skillWidth
  
  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-heading mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend and backend development, 
            from modern web frameworks to AI integrations and developer tools.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Conveyor belt container */}
          <div className="py-8">
            <motion.div
              className="flex gap-4"
              animate={{
                x: [0, -totalWidth],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{ 
                width: `${duplicatedSkills.length * skillWidth}px`,
              }}
            >
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="flex flex-col items-center justify-center min-w-[96px] p-3 rounded-lg bg-card/50 border border-border/30 hover:border-accent/50 hover:bg-card transition-all group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-2 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <div className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  )
}