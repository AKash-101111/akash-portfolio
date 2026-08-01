import { motion } from 'framer-motion'
import { Trophy, Users, Sparkles, Award } from 'lucide-react'

const achievements = [
  {
    title: 'Best Innovation Award',
    event: 'Techno Sprint Hackathon',
    organization: 'Sri Sairam Institute of Technology',
    description: 'Awarded for designing and presenting an AI-powered software solution. Recognized for exceptional engineering innovation and rapid prototyping.',
    icon: Trophy,
    color: 'from-[#3B82F6] to-[#22D3EE]',
    badge: '1st Place Innovation'
  },
  {
    title: 'Best Team Award',
    event: 'MSEC Joint Hackathon',
    organization: 'Engineering College Tech Fest',
    description: 'Recognized for outstanding teamwork while delivering an AI-powered application. Collaborated effectively across system designs under intense constraints.',
    icon: Users,
    color: 'from-[#22D3EE] to-[#3B82F6]',
    badge: 'Team Excellence'
  },
  {
    title: 'Top 5 Finalist',
    event: 'HackInThym 24-Hour Hackathon',
    organization: 'State-Level Hackathon',
    description: 'Ranked among 100+ participating teams after developing a complete full-stack AI solution within 24 hours.',
    icon: Sparkles,
    color: 'from-[#3B82F6] to-[#22D3EE]',
    badge: 'Top 5 %'
  }
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#050816] via-[#0D1117]/20 to-[#050816]">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#22D3EE]/5 rounded-full blur-3xl pointer-events-none" />

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
            Honors & Achievements
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] mx-auto rounded-full"
          />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((ach, index) => {
            const Icon = ach.icon
            return (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group h-full"
              >
                {/* Glow border background */}
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${ach.color} opacity-10 group-hover:opacity-30 transition-all duration-300 blur`} />

                {/* Main Box Card */}
                <div className="relative p-6 rounded-2xl border border-white/5 bg-[#111827]/40 hover:bg-[#111827]/60 hover:border-[#22D3EE]/25 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-[#3B82F6]/10 text-[#22D3EE] border border-[#22D3EE]/15">
                        <Icon className="w-5.5 h-5.5" />
                      </div>
                      <span className="px-2.5 py-1 text-[9px] font-bold font-mono tracking-widest text-[#22D3EE] bg-[#22D3EE]/10 border border-[#22D3EE]/20 rounded-full uppercase">
                        {ach.badge}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold font-mono tracking-wider text-[#9CA3AF] uppercase block mb-1">
                      {ach.event}
                    </span>
                    <span className="text-[9px] text-[#3B82F6] font-mono uppercase block mb-3 font-semibold">
                      {ach.organization}
                    </span>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#22D3EE] transition-colors leading-tight">
                      {ach.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#9CA3AF] font-light leading-relaxed">
                      {ach.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-[9px] font-mono tracking-widest text-[#3B82F6] uppercase font-extrabold border-t border-white/5 pt-4">
                    <Award className="w-3.5 h-3.5" />
                    <span>Distinguished Honor</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
