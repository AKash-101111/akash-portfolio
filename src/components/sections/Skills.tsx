import { motion } from 'framer-motion'
import { Code, Layout, Server, Database, Wrench, Brain } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    color: 'text-[#3B82F6] border-[#3B82F6]/20 bg-[#3B82F6]/5',
    glow: 'rgba(59, 130, 246, 0.15)',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    title: 'Frontend',
    icon: Layout,
    color: 'text-[#22D3EE] border-[#22D3EE]/20 bg-[#22D3EE]/5',
    glow: 'rgba(34, 211, 238, 0.15)',
    skills: ['React.js', 'Tailwind CSS', 'Vite', 'REST APIs']
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'text-[#3B82F6] border-[#3B82F6]/20 bg-[#3B82F6]/5',
    glow: 'rgba(59, 130, 246, 0.15)',
    skills: ['Node.js', 'Express.js']
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'text-[#22D3EE] border-[#22D3EE]/20 bg-[#22D3EE]/5',
    glow: 'rgba(34, 211, 238, 0.15)',
    skills: ['MySQL', 'Firebase', 'Supabase']
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    color: 'text-[#3B82F6] border-[#3B82F6]/20 bg-[#3B82F6]/5',
    glow: 'rgba(59, 130, 246, 0.15)',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Google Colab', 'Jupyter Notebook', 'Vercel']
  },
  {
    title: 'Artificial Intelligence',
    icon: Brain,
    color: 'text-[#22D3EE] border-[#22D3EE]/20 bg-[#22D3EE]/5',
    glow: 'rgba(34, 211, 238, 0.15)',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'CNN',
      'Computer Vision',
      'Retrieval-Augmented Generation (RAG)',
      'Ollama',
      'Small Language Models',
      'AI Agents'
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0D1117]/10">
      {/* Decorative Radial Background */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full radial-glow pointer-events-none opacity-40" />

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
            Technical Stack
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] mx-auto rounded-full"
          />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4, borderColor: 'rgba(34, 211, 238, 0.3)' }}
                className="p-6 rounded-2xl border border-white/5 bg-[#111827]/40 text-left relative group transition-all duration-300"
              >
                {/* Glow Background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${category.glow} 0%, transparent 70%)`
                  }}
                />

                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className={`p-2.5 rounded-xl border ${category.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight font-mono uppercase">
                    {category.title}
                  </h3>
                </div>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/[0.02] hover:bg-[#3B82F6]/10 text-gray-300 border border-white/5 hover:border-[#22D3EE]/25 transition-all font-mono select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
