'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
]

interface Bolt { id: number; path: string; strokeWidth: number; color: string }
interface Spark { id: number; x: number; y: number; dx: number; dy: number }

function makeBolt(x1: number, y1: number, x2: number, y2: number): string {
  const segs = 6 + Math.floor(Math.random() * 5)
  const spread = Math.abs(x2 - x1) * 0.14
  const pts: string[] = [`M${x1},${y1}`]
  for (let i = 1; i < segs; i++) {
    const t = i / segs
    const x = x1 + (x2 - x1) * t + (Math.random() - 0.5) * spread
    const y = y1 + (Math.random() - 0.5) * 11
    pts.push(`L${x},${y}`)
  }
  pts.push(`L${x2},${y2}`)
  return pts.join(' ')
}

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [activePath, setActivePath] = useState(pathname)
  const navRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null)
  const prevPillRef = useRef<{ left: number; width: number } | null>(null)
  const [bolts, setBolts] = useState<Bolt[]>([])
  const [sparks, setSparks] = useState<Spark[]>([])
  const idRef = useRef(0)

  useEffect(() => { setActivePath(pathname) }, [pathname])

  useEffect(() => {
    const activeIndex = navigation.findIndex(item => item.href === activePath)
    const button = buttonRefs.current[activeIndex]
    const nav = navRef.current
    if (!button || !nav) return

    const nr = nav.getBoundingClientRect()
    const br = button.getBoundingClientRect()
    const newPill = { left: br.left - nr.left, width: br.width }

    if (prevPillRef.current && prevPillRef.current.left !== newPill.left) {
      const fromX = prevPillRef.current.left + prevPillRef.current.width / 2
      const toX = newPill.left + newPill.width / 2
      const cy = nr.height / 2
      const colors = ['#ffffff', '#ffe566', '#ff9d00']

      setBolts(Array.from({ length: 6 }, (_, i) => ({
        id: idRef.current++,
        path: makeBolt(
          fromX, cy + (Math.random() - 0.5) * 8,
          toX, cy + (Math.random() - 0.5) * 8,
        ),
        strokeWidth: 0.6 + Math.random() * 1.6,
        color: colors[i % 3],
      })))

      setSparks(Array.from({ length: 8 }, () => {
        const angle = Math.random() * Math.PI * 2
        const dist = 10 + Math.random() * 18
        return {
          id: idRef.current++,
          x: fromX + (toX - fromX) * (0.3 + Math.random() * 0.4),
          y: cy,
          dx: Math.cos(angle) * dist,
          dy: Math.sin(angle) * dist * 0.5,
        }
      }))

      const t = setTimeout(() => { setBolts([]); setSparks([]) }, 450)
      prevPillRef.current = newPill
      setPill(newPill)
      return () => clearTimeout(t)
    }

    prevPillRef.current = newPill
    setPill(newPill)
  }, [activePath])

  function handleNav(href: string) {
    if (href === activePath) return
    setActivePath(href)
    router.push(href)
  }

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto relative flex items-center px-2 py-2 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.6)]"
      >
        {/* Pill glow — same position as pill, bleeds outward. Opacity driven imperatively. */}
        {/* Pill */}
        <div ref={navRef} className="absolute inset-0 pointer-events-none">
          {pill && (
            <motion.div
              className="absolute top-2 bottom-2 rounded-lg"
              style={{ background: '#1e1e1e' }}
              animate={{ left: pill.left, width: pill.width }}
              initial={false}
              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            />
          )}
        </div>

        {/* SVG: bolts + sparks */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ overflow: 'visible', zIndex: 20 }}
        >
          <defs>
            <filter id="bolt-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="spark-glow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {bolts.map((bolt, i) => (
            <motion.path
              key={bolt.id}
              d={bolt.path}
              stroke={bolt.color}
              strokeWidth={bolt.strokeWidth}
              fill="none"
              filter="url(#bolt-glow)"
              initial={{ opacity: 1, pathLength: 0 }}
              animate={{ opacity: 0, pathLength: 1 }}
              transition={{ duration: 0.22 + i * 0.03, ease: 'easeOut', delay: i * 0.025 }}
            />
          ))}

          {sparks.map((s) => (
            <motion.circle
              key={s.id}
              r={2}
              fill="#ffe566"
              filter="url(#spark-glow)"
              initial={{ cx: s.x, cy: s.y, opacity: 1 }}
              animate={{ cx: s.x + s.dx, cy: s.y + s.dy, opacity: 0, r: 0.3 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          ))}
        </svg>

        {navigation.map((item, index) => (
          <button
            key={item.href}
            ref={el => { buttonRefs.current[index] = el }}
            onClick={() => handleNav(item.href)}
            className="relative z-10 px-3 py-1.5 rounded-lg text-sm font-medium cursor-pointer"
          >
            <span className={cn(
              'transition-colors duration-150',
              activePath === item.href ? 'text-white' : 'text-white/55 hover:text-white/80'
            )}>
              {item.name}
            </span>
          </button>
        ))}
      </motion.div>
    </div>
  )
}
