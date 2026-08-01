import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, FileText, CheckCircle2 } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'

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

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1200)
  }

  const contactInfo = [
    {
      label: 'Email Address',
      value: 'narayanan.akash10@gmail.com',
      href: 'mailto:narayanan.akash10@gmail.com',
      icon: Mail,
    },
    {
      label: 'Phone Contact',
      value: '+91 9342521826',
      href: 'tel:+919342521826',
      icon: Phone,
    },
    {
      label: 'Current Location',
      value: 'Chennai, Tamil Nadu, India',
      href: 'https://maps.google.com/?q=Chennai,TamilNadu,India',
      icon: MapPin,
    },
    {
      label: 'Curriculum Vitae',
      value: 'Preview / Download Resume',
      href: `/Akash_Resume.pdf?v=${Date.now()}`,
      icon: FileText,
      download: true
    }
  ]

  const socials = [
    { name: 'GitHub', href: 'https://github.com/AKash-101111', icon: GithubIcon },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/akash-n01', icon: LinkedinIcon },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#050816] to-[#0D1117]/10">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-[#3B82F6]/5 blur-3xl pointer-events-none" />

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
            Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#9CA3AF] font-light max-w-xl mx-auto text-sm sm:text-base"
          >
            Let's discuss internship opportunities, software consulting, or ML collaborations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] mx-auto rounded-full mt-4"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6 text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Information Portal
              </h3>
              <p className="text-[#9CA3AF] font-light text-sm sm:text-base leading-relaxed">
                Recruiters can download my official resume or ping me directly using the communication card elements below.
              </p>

              <div className="space-y-3.5 pt-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.label === 'Current Location' || info.download ? '_blank' : '_self'}
                      download={info.download}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#111827]/30 hover:bg-[#111827]/60 hover:border-[#22D3EE]/20 transition-all duration-300 group"
                    >
                      <div className="p-3 rounded-lg bg-[#3B82F6]/15 text-[#3B82F6] group-hover:text-[#22D3EE] transition-colors shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-left overflow-hidden">
                        <span className="text-[10px] text-gray-500 font-bold uppercase font-mono block">
                          {info.label}
                        </span>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors block break-all whitespace-normal">
                          {info.value}
                        </span>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Social Connect */}
            <div className="text-left pt-6 border-t border-white/5">
              <h4 className="text-xs font-bold text-gray-400 mb-4 tracking-wider uppercase font-mono">
                Connect on Socials
              </h4>
              <div className="flex items-center gap-3">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] text-gray-400 hover:text-white transition-all font-mono uppercase tracking-wider"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{social.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#111827]/40 text-left h-full relative"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold text-gray-400 uppercase font-mono mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg border border-white/5 bg-white/[0.02] text-white placeholder-gray-600 focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all text-sm font-light"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold text-gray-400 uppercase font-mono mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-white/5 bg-white/[0.02] text-white placeholder-gray-600 focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all text-sm font-light"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold text-gray-400 uppercase font-mono mb-2">
                    Message Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Briefly describe your inquiry..."
                    className="w-full px-4 py-3 rounded-lg border border-white/5 bg-white/[0.02] text-white placeholder-gray-600 focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all text-sm font-light resize-none"
                  />
                </div>

                {isSuccess && (
                  <div className="flex items-center gap-2.5 text-[#22D3EE] text-sm font-semibold border border-[#22D3EE]/20 bg-[#22D3EE]/10 p-4 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-[#10B981]" />
                    <span>Message received. I will reach out shortly.</span>
                  </div>
                )}

                <MagneticButton className="w-full rounded-lg" type="submit">
                  <div className="w-full px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all cursor-pointer">
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </div>
                </MagneticButton>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
