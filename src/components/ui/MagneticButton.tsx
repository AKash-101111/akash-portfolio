import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  type = 'button'
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power2.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power2.out' })

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const dx = e.clientX - centerX
      const dy = e.clientY - centerY

      const distance = Math.sqrt(dx * dx + dy * dy)
      const magneticRadius = 80 // Increased radius for better interaction

      if (distance < magneticRadius) {
        // Pull the button towards the mouse (35% of the distance)
        xTo(dx * 0.35)
        yTo(dy * 0.35)
      } else {
        xTo(0)
        yTo(0)
      }
    }

    const handleMouseLeave = () => {
      xTo(0)
      yTo(0)
    }

    window.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center transition-shadow select-none cursor-pointer ${className}`}
      style={{ willChange: 'transform' }}
    >
      {children}
    </button>
  )
}
