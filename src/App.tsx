import Navbar from './components/layout/Navbar'
import SmoothScroll from './components/layout/SmoothScroll'
import ParticleCanvas from './components/3d/ParticleCanvas'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Certifications from './components/sections/Certifications'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'

function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen text-gray-200 select-none antialiased">
        {/* Floating Particle Canvas in Background */}
        <ParticleCanvas />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Sections Wrapper */}
        <main className="relative z-10 w-full overflow-hidden">
          <Hero />
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />
          </div>
          
          <About />

          <div className="max-w-7xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />
          </div>
          
          <Experience />

          <div className="max-w-7xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />
          </div>
          
          <Projects />

          <div className="max-w-7xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />
          </div>
          
          <Skills />

          <div className="max-w-7xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />
          </div>
          
          <Certifications />

          <div className="max-w-7xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />
          </div>
          
          <Achievements />

          <div className="max-w-7xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />
          </div>
          
          <Contact />
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/5 py-8 bg-[#030712]/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Akash N. All rights reserved.</p>
            <p className="font-mono">
              Built with <span className="text-brand-cyan">TypeScript</span> & Tailwind CSS v4
            </p>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  )
}

export default App
