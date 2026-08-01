import { motion } from 'framer-motion'
import { ExternalLink, ShieldCheck, FileText, BrainCircuit, Cpu } from 'lucide-react'
import autopentestImg from '../../assets/autopentest.png'
import skillsnapImg from '../../assets/skillsnap.png'
import braintumorImg from '../../assets/braintumor.png'

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const projects = [
  {
    title: 'AutoPentest AI',
    subtitle: 'AI-Powered Security Assistant',
    description: 'Designed and developed an AI-powered penetration testing assistant to streamline reconnaissance, vulnerability assessment, and security report generation through an intelligent, guided workflow.',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'AI', 'Git', 'Vite'],
    icon: ShieldCheck,
    color: 'from-[#3B82F6] to-[#22D3EE]',
    image: autopentestImg,
    bullets: [
      'Designed and developed an AI-powered penetration testing assistant to streamline reconnaissance, vulnerability assessment, and security report generation through an intelligent, guided workflow.',
      'Engineered a modular React and TypeScript frontend with responsive dashboards and reusable components, resulting in a scalable, maintainable project architecture and improved user experience.',
      'Integrated AI-assisted security analysis and automated reporting to reduce manual penetration testing effort and increase overall workflow efficiency.',
      'Applied modern software engineering practices, including component-based development, Git version control, responsive design, and deployment-ready architecture.'
    ],
    github: 'https://github.com/AKash-101111',
    demo: '#'
  },
  {
    title: 'SkillSnap AI',
    subtitle: 'AI Resume Assessment Engine',
    description: 'Built an AI-powered resume analysis platform that evaluates resumes and generates ATS-style scoring to assist candidate profile assessment and hiring readiness.',
    tags: ['Python', 'AI', 'React', 'Next.js'],
    icon: FileText,
    color: 'from-[#22D3EE] to-[#3B82F6]',
    image: skillsnapImg,
    bullets: [
      'Built an AI-powered resume analysis platform that evaluates resumes and generates ATS-style scoring to assist candidate profile assessment and hiring readiness.',
      'Implemented intelligent resume parsing and automated feedback to improve resume quality assessment for candidates.',
      'Designed an interactive dashboard delivering resume scoring, candidate insights, and structured evaluation reports.',
      'Collaborated within a hackathon team to rapidly prototype, develop, and deliver a functional AI-powered application under time constraints.'
    ],
    github: 'https://github.com/AKash-101111',
    demo: '#'
  },
  {
    title: 'Brain Tumor Prediction',
    subtitle: 'Medical Computer Vision Pipeline',
    description: 'Developed a convolutional neural network using TensorFlow and Keras to classify brain MRI images across multiple diagnostic categories, achieving 99% classification accuracy.',
    tags: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Streamlit'],
    icon: BrainCircuit,
    color: 'from-[#3B82F6] to-[#22D3EE]',
    image: braintumorImg,
    bullets: [
      'Developed a convolutional neural network using TensorFlow and Keras to classify brain MRI images across multiple diagnostic categories, achieving 99% classification accuracy.',
      'Built an end-to-end machine learning pipeline covering image preprocessing, model training, evaluation, and real-time inference.',
      'Designed and deployed a Streamlit-based web application enabling users to upload MRI scans and receive instant, AI-driven predictions.'
    ],
    github: 'https://github.com/AKash-101111',
    demo: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#0D1117]/30 to-transparent">
      {/* Dynamic glow overlay */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4 uppercase tracking-wider"
          >
            Engineering Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#9CA3AF] font-light max-w-xl mx-auto text-sm sm:text-base"
          >
            AI-driven applications, medical computer vision pipelines, and scalable architectures designed for top-tier product teams.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] mx-auto rounded-full mt-4"
          />
        </div>

        {/* Projects Stack */}
        <div className="space-y-24">
          {projects.map((proj, idx) => {
            const Icon = proj.icon
            const isEven = idx % 2 === 0
            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Image card block */}
                <div
                  className={`lg:col-span-6 relative group ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Glowing border card wrapper */}
                  <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${proj.color} opacity-20 blur-md group-hover:opacity-45 transition-all duration-500`} />
                  
                  {/* Main card box with image */}
                  <div className="relative rounded-2xl border border-white/10 bg-[#111827] overflow-hidden flex flex-col justify-between hover:border-[#22D3EE]/30 transition-all duration-300">
                    
                    {/* Visual Illustration */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-950/80 border-b border-white/5 flex items-center justify-center">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-60" />
                    </div>

                    {/* Content bar */}
                    <div className="p-6 text-left">
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div>
                          <span className="text-[10px] font-bold font-mono tracking-widest text-[#22D3EE] uppercase block mb-1">
                            {proj.subtitle}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                            {proj.title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-2">
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-white/5 bg-white/[0.02] text-gray-400 hover:text-white hover:border-white/15 transition-all"
                            aria-label="View Source code"
                          >
                            <GithubIcon className="w-5 h-5" />
                          </a>
                          <a
                            href={proj.demo}
                            className="p-2 rounded-lg border border-white/5 bg-white/[0.02] text-gray-400 hover:text-white hover:border-white/15 transition-all"
                            aria-label="Live Demo Link"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </div>
                      </div>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5 mt-4">
                        {proj.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-[10px] font-bold font-mono rounded bg-white/[0.03] text-gray-300 border border-white/5 hover:border-[#22D3EE]/25 transition-all uppercase"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info and bullet points block */}
                <div
                  className={`lg:col-span-6 text-left ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#3B82F6]/10 text-[#22D3EE]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-white tracking-tight">
                        Product Architecture
                      </h4>
                    </div>

                    <p className="text-[#9CA3AF] font-light text-sm sm:text-base leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="h-px bg-white/10 w-full" />

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-white font-bold text-xs tracking-wider uppercase font-mono">
                        <Cpu className="w-4 h-4 text-[#22D3EE]" />
                        <span>Technical Contributions</span>
                      </div>
                      
                      <ul className="space-y-3.5 pl-1">
                        {proj.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-2 shrink-0 shadow-[0_0_6px_#22D3EE]" />
                            <span className="text-xs sm:text-sm text-[#9CA3AF] font-light leading-relaxed">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
