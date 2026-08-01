import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Activity, Settings } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      role: 'Founder & Software Engineer',
      company: 'Quroix Labs',
      location: 'Chennai, India',
      period: 'Sep 2025 -- Present',
      summary: 'Founded and scaled a custom software studio executing robust backend architectures, dynamic web applications, and automated workflow pipelines.',
      details: [
        'Architected and led engineering delivery for a 10-person software studio (4 core + 6 team members), shipping 15+ production-grade systems spanning full-stack web platforms, workflow automation pipelines, and custom backend services.',
        'Designed end-to-end technical solutions -- system architecture, API design, database schema, and deployment pipelines -- translating client requirements into scalable, production-ready engineering specifications.',
        'Built reusable workflow automation systems and internal tooling that eliminated repetitive manual operations for client businesses, while establishing version-control and deployment standards and mentoring a small engineering team.'
      ],
      highlights: [
        { icon: Users, text: 'Led 10-person engineering studio' },
        { icon: Activity, text: 'Delivered 15+ production builds' },
        { icon: Settings, text: 'Scaled revenue from 0 to Rs. 50k+' }
      ]
    }
  ]

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#0D1117]/20 to-transparent">
      {/* Glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none" />

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
            Professional History
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] mx-auto rounded-full"
          />
        </div>

        {/* Timeline container */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 sm:pl-12 border-l border-gradient-to-b from-[#3B82F6] via-[#22D3EE]/30 to-[#111827] pb-12 last:pb-0"
            >
              {/* Animated node dot with pulsing core */}
              <div className="absolute left-0 top-2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#050816] border-2 border-[#22D3EE] flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.45)] z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] animate-pulse" />
              </div>

              {/* Box card */}
              <div className="p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#111827]/40 hover:bg-[#111827]/60 hover:border-[#22D3EE]/20 transition-all duration-300 relative overflow-hidden group">
                {/* Visual gradient backdrop */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#3B82F6]/5 rounded-full blur-3xl group-hover:bg-[#22D3EE]/10 transition-colors pointer-events-none" />

                {/* Card Title Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2.5 mt-2">
                      <span className="px-3 py-1 rounded-md text-xs font-bold font-mono uppercase tracking-wider text-[#22D3EE] bg-[#22D3EE]/10 border border-[#22D3EE]/20">
                        {exp.company}
                      </span>
                      <span className="text-gray-600 font-mono">•</span>
                      <div className="flex items-center gap-1.5 text-xs text-[#9CA3AF] font-mono">
                        <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-xs font-bold font-mono text-gray-300 self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 font-light leading-relaxed text-sm sm:text-base">
                  {exp.summary}
                </p>

                {/* Dashboard Metrics pills */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {exp.highlights.map((hl) => {
                    const Icon = hl.icon
                    return (
                      <div key={hl.text} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.01] border border-white/5 group-hover:border-white/10 transition-all">
                        <div className="p-2 rounded-lg bg-[#3B82F6]/10 text-[#22D3EE]">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <span className="text-xs font-semibold text-gray-300 leading-snug">{hl.text}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Detailed descriptions */}
                <div className="space-y-4 border-t border-white/5 pt-6">
                  {exp.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-2 shrink-0 shadow-[0_0_6px_#22D3EE]" />
                      <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed font-light">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
