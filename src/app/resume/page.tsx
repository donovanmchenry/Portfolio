'use client'

import { motion } from 'framer-motion'
import { Footer } from '@/components/layout/footer'

export default function ResumePage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/backgroundimage.JPG)' }}
    >
      <div className="flex-1 flex items-center justify-center p-6 pt-20">
      <motion.div
        className="max-w-4xl w-full h-[85vh] bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] border border-white/10 overflow-hidden flex flex-col"
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h1 className="text-sm font-semibold">Resume</h1>
          <a
            href="/resume.pdf"
            download
            className="text-xs text-white/60 hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
          >
            Download PDF
          </a>
        </div>
        <iframe
          src="/resume.pdf"
          className="flex-1 w-full"
          title="Donovan McHenry Resume"
        />
      </motion.div>
      </div>
      <Footer />
    </div>
  )
}
