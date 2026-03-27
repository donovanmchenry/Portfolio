'use client'

import { motion } from 'framer-motion'
import { Footer } from '@/components/layout/footer'
import { Download, ExternalLink } from 'lucide-react'

export default function ResumePage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/backgroundimage.JPG)' }}
    >
      <div className="flex-1 flex items-center justify-center p-6 pt-20">
        <motion.div
          className="max-w-md w-full bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] border border-white/10 p-8 flex flex-col items-center gap-6 text-center"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-1">
            <h1 className="text-xl font-semibold">Resume</h1>
            <p className="text-sm text-white/50">Donovan McHenry</p>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              View PDF
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
