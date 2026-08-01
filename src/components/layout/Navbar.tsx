import { useState, useEffect } from 'react'
import { Menu, X, Terminal } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificates', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active Section Highlighting
      const sections = navLinks.map(link => link.href.substring(1))
      
      let currentSection = 'home'
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          // Check if section is near the top of the viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section
            break
          }
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    // Run once on load to highlight correct link
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
        scrolled
          ? 'py-3.5 bg-[#050816]/80 backdrop-blur-lg border-b border-[#111827]/80'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8.5 h-8.5 rounded-lg bg-gradient-to-tr from-[#3B82F6] to-[#22D3EE] flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 shadow-[0_0_12px_rgba(34,211,238,0.2)]">
            <Terminal className="w-4.5 h-4.5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white to-[#9CA3AF] bg-clip-text text-transparent">
            Akash<span className="text-[#22D3EE]">.N</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1.5 p-1 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
          {navLinks.map((link) => {
            const id = link.href.substring(1)
            const isActive = activeSection === id
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 tracking-wide uppercase ${
                  isActive
                    ? 'text-white bg-[#3B82F6]/15 border border-[#22D3EE]/30 shadow-[0_0_8px_rgba(34,211,238,0.1)]'
                    : 'text-[#9CA3AF] hover:text-white border border-transparent'
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-4.5 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-[#9CA3AF] hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#050816]/95 backdrop-blur-xl border-t border-[#111827] transition-all duration-300 ease-in-out z-45 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 gap-5">
          {navLinks.map((link) => {
            const id = link.href.substring(1)
            const isActive = activeSection === id
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold tracking-wide uppercase border-l-2 pl-4 transition-all duration-300 ${
                  isActive
                    ? 'text-[#22D3EE] border-[#22D3EE]'
                    : 'text-[#9CA3AF] border-transparent hover:text-white hover:border-gray-500'
                }`}
              >
                {link.name}
              </a>
            )
          })}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3.5 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] text-white font-bold uppercase tracking-wider text-xs"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  )
}
