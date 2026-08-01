import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, BookOpen, MapPin } from 'lucide-react'

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
}

function CountUp({ end, duration = 1.2, suffix = '' }: CountUpProps) {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let observer: IntersectionObserver
    let animationId: number

    const startAnimation = () => {
      const startTime = performance.now()
      const animate = (currentTime: number) => {
        const elapsed = (currentTime - startTime) / 1000
        const progress = Math.min(elapsed / duration, 1)
        
        // Ease out quadratic
        const easeProgress = progress * (2 - progress)
        const currentCount = Math.floor(easeProgress * end)
        
        setCount(currentCount)

        if (progress < 1) {
          animationId = requestAnimationFrame(animate)
        } else {
          setCount(end) // Ensure exact final count
        }
      }
      animationId = requestAnimationFrame(animate)
    }

    if (elementRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAnimation()
            observer.disconnect()
          }
        },
        { threshold: 0.1 }
      )
      observer.observe(elementRef.current)
    }

    return () => {
      if (observer) observer.disconnect()
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [end, duration])

  return <span ref={elementRef}>{count}{suffix}</span>
}

export default function About() {
  const stats = [
    { label: 'Projects Shipped', value: 15, suffix: '+' },
    { label: 'Hackathons Won/Fought', value: 3, suffix: '+' },
    { label: 'B.E. CSE CGPA', value: 8.56, decimal: true, suffix: '/10' },
    { label: 'ML Specializations', value: 1, suffix: '' },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#050816] to-[#0D1117]/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4 uppercase tracking-wider"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Summary Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-bold text-white tracking-tight"
            >
              AI & Software Engineering Student
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#9CA3AF] leading-relaxed font-light text-sm sm:text-base"
            >
              I build scalable, AI-powered applications that combine robust full stack architecture with advanced deep learning pipelines. Proficient in React, TypeScript, Python, and TensorFlow, I thrive at the intersection of production systems and machine learning.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#9CA3AF] leading-relaxed font-light text-sm sm:text-base"
            >
              As a founder, I scaled Quroix Labs to deliver production websites and workflow automations, demonstrating leadership and client engineering capabilities that prepare me to deliver immediate value at top product teams.
            </motion.p>

            {/* Premium Animated Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl border border-white/5 bg-[#111827]/30 backdrop-blur-sm text-center relative overflow-hidden"
                >
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent mb-1 font-mono">
                    {stat.decimal ? (
                      <span>8.56</span>
                    ) : (
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    )}
                    {stat.decimal ? stat.suffix : ''}
                  </div>
                  <div className="text-[10px] text-[#9CA3AF] font-bold tracking-widest uppercase mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-white/5 bg-[#111827]/40 text-left relative overflow-hidden hover:border-[#22D3EE]/20 transition-all duration-300 group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#22D3EE]/5 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-3 rounded-xl bg-[#3B82F6]/15 text-[#3B82F6]">
                  <GraduationCap className="w-5.5 h-5.5" />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Education Background
                </h4>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="font-bold text-gray-200 text-sm sm:text-base">
                    Meenakshi Sundararajan Engineering College
                  </h5>
                  <div className="flex items-center gap-1.5 text-xs text-[#9CA3AF] mt-1.5 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                    <span>Chennai, India</span>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <p className="text-xs font-semibold text-[#22D3EE] font-mono uppercase tracking-wider">
                    Bachelor of Engineering
                  </p>
                  <p className="text-sm text-white mt-1">
                    Computer Science and Engineering
                  </p>
                  <div className="flex justify-between items-center mt-4 text-[10px] font-mono text-[#9CA3AF]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>2024 -- 2028</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#3B82F6]">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>CGPA: 8.56 / 10</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
