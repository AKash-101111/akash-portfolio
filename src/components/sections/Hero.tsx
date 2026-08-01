import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Mail, Sparkles, CheckCircle2, Download, X } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import myPhoto from '../../assets/my.jpg'

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

import { useEffect, useRef } from 'react'

function HeroProfileParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let width = (canvas.width = 380)
    let height = (canvas.height = 380)

    const particles: Array<{ x: number; y: number; vx: number; vy: number; r: number }> = []
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.5 + 0.5
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(34, 211, 238, 0.45)'
        ctx.fill()
      })

      ctx.lineWidth = 0.5
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 80) {
            const alpha = (80 - dist) / 80 * 0.15
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(render)
    }

    render()
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute w-[125%] h-[125%] -z-10 pointer-events-none opacity-85"
    />
  )
}

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
      >
        {/* Background glows */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full radial-glow pointer-events-none opacity-45" />
        <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[550px] h-[550px] rounded-full radial-glow-cyan pointer-events-none opacity-45" />

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#22D3EE]/20 bg-[#22D3EE]/10 text-[#22D3EE] text-xs font-bold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(34,211,238,0.15)]"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>AI & Software Engineering</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight"
            >
              Engineering the <br />
              <span className="bg-gradient-to-r from-[#3B82F6] via-[#22D3EE] to-[#3B82F6] bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">
                AI-Powered Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#9CA3AF] mb-8 max-w-2xl font-light leading-relaxed"
            >
              I am <strong className="text-white font-semibold">Akash N</strong>, a Computer Science Engineering student passionate about developing intelligent, real-world AI products. I combine robust full stack engineering with deep learning to build scalable, production-grade applications.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10 w-full"
            >
              <MagneticButton className="shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all rounded-lg">
                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] text-white font-semibold flex items-center gap-2 group text-xs uppercase tracking-wider"
                >
                  View Projects
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </MagneticButton>

              <MagneticButton className="rounded-lg">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3.5 rounded-lg border border-white/10 bg-white/[0.03] text-gray-200 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all font-semibold text-xs uppercase tracking-wider cursor-pointer"
                >
                  View Resume
                </button>
              </MagneticButton>

              <MagneticButton className="rounded-lg">
                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-lg border border-[#3B82F6]/30 bg-[#3B82F6]/5 text-[#22D3EE] hover:bg-[#3B82F6]/15 hover:border-[#22D3EE]/40 transition-all font-semibold text-xs uppercase tracking-wider"
                >
                  Contact Me
                </a>
              </MagneticButton>
            </motion.div>

            {/* Stats & Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-6 pt-4 border-t border-white/5 w-full text-[#9CA3AF]"
            >
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/AKash-101111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5.5 h-5.5" />
                </a>
                <a
                  href="https://linkedin.com/in/akash-n01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5.5 h-5.5" />
                </a>
                <a
                  href="mailto:narayanan.akash10@gmail.com"
                  className="hover:text-white transition-colors"
                  aria-label="Email Address"
                >
                  <Mail className="w-5.5 h-5.5" />
                </a>
              </div>

              <div className="h-4 w-px bg-white/10" />

              <div className="flex items-center gap-2 text-xs text-[#22D3EE] font-mono uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Open for 2026/2027 internships</span>
              </div>
            </motion.div>
          </div>

          {/* Right Frame (Glow Frame & Orbiting AI tags) */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center"
            >
              {/* Particle animation behind the image */}
              <HeroProfileParticles />

              {/* Glowing Background Ring - reduced opacity by 60% (from 0.35 to 0.14) */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#3B82F6] via-[#22D3EE] to-[#3B82F6] opacity-14 blur-2xl animate-pulse pointer-events-none" />

              {/* Rotating ring behind the photo */}
              <div 
                className="absolute w-[98%] h-[98%] rounded-full border border-dashed border-[#22D3EE]/25 pointer-events-none animate-[spin_25s_linear_infinite]"
              />

              {/* Profile circular frame - thin 2px border, soft glow */}
              <div className="relative w-[90%] h-[90%] rounded-full p-[2px] bg-gradient-to-tr from-[#3B82F6] via-[#22D3EE] to-[#3b82f6] shadow-[0_0_16px_rgba(34,211,238,0.15)] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full rounded-full bg-[#050816] overflow-hidden relative">
                  <img
                    src={myPhoto}
                    alt="Akash N"
                    className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500 scale-105 hover:scale-100"
                  />
                  {/* Subtle Tech Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Resume Preview Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050816]/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-4xl h-[85vh] bg-[#0D1117] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between shadow-[0_24px_48px_-12px_rgba(0,0,0,0.7)]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#3B82F6]" />
                  <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                    Akash_Resume.pdf
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* PDF Preview Content */}
              <div className="flex-1 bg-[#050816] overflow-hidden p-2 relative">
                <iframe
                  src="/Akash_Resume.pdf#toolbar=0"
                  className="w-full h-full border-none rounded-lg"
                  title="Akash N Resume Preview"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/5 bg-[#0D1117]">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4.5 py-2.5 rounded-lg text-xs font-semibold text-[#9CA3AF] hover:text-white hover:bg-white/5 transition-colors cursor-pointer uppercase tracking-wider"
                >
                  Close
                </button>

                <a
                  href="/Akash_Resume.pdf"
                  download="Akash_Resume.pdf"
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
