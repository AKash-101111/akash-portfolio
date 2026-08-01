import { motion } from 'framer-motion'
import { Award, CheckCircle2, ArrowUpRight } from 'lucide-react'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0D1117]/30 to-[#050816]">
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
            Certifications
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] mx-auto rounded-full"
          />
        </div>

        {/* Coursera Certificate Card */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#111827]/40 text-left relative overflow-hidden hover:border-[#22D3EE]/30 transition-all duration-300 group"
          >
            {/* Glow design */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#22D3EE]/10 transition-colors" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-[#3B82F6]/15 text-[#22D3EE] border border-[#22D3EE]/20 shrink-0">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <span className="px-2.5 py-1 text-[9px] font-extrabold tracking-widest text-[#22D3EE] bg-[#22D3EE]/10 border border-[#22D3EE]/20 rounded-full font-mono uppercase">
                    Coursera Verification
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2 leading-tight group-hover:text-[#22D3EE] transition-colors">
                    Machine Learning Specialization
                  </h3>
                  <p className="text-xs text-[#9CA3AF] mt-1 font-semibold">
                    Issued by Stanford University & DeepLearning.AI
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
              A foundational and advanced curriculum covering Supervised Learning (Linear Regression, Logistic Classification), Advanced Learning Algorithms (Neural Networks, Decision Trees, Random Forests, XGBoost), and Unsupervised Learning (Clustering, Anomaly Detection, Recommender Systems, Deep Q-Learning Reinforcement Learning).
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6 mt-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#9CA3AF]">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#10B981]" />
                <span>Verified Certificate • Completed July 2026</span>
              </div>

              <a
                href="https://coursera.org/verify/specialization/stanford-deeplearning-ml"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] transition-all"
              >
                <span>View Credential</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
