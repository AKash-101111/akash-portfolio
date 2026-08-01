import { useRef, useEffect } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      baseRadius: number
      color: string
    }> = []

    // Generate nodes
    const particleCount = Math.min(100, Math.floor((width * height) / 15000))
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2 + 1
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: radius,
        baseRadius: radius,
        color: Math.random() > 0.5 ? 'rgba(34, 211, 238, 0.45)' : 'rgba(59, 130, 246, 0.45)', // Cyan and Blue accent
      })
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Mouse movement tracking
    let mouse = { x: -1000, y: -1000, targetX: width / 2, targetY: height / 2 }
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Render loop
    const render = () => {
      // Lerp mouse coordinates for smooth lag-behind movement
      mouse.x += (mouse.targetX - mouse.x) * 0.08
      mouse.y += (mouse.targetY - mouse.y) * 0.08

      // Background color matches theme
      ctx.fillStyle = '#050816'
      ctx.fillRect(0, 0, width, height)

      // Draw Grid Overlay
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.02)'
      ctx.lineWidth = 1
      const gridSize = 45
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Draw Blue Light Rays / Radial Glow at cursor location
      if (mouse.x > -500) {
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, 450)
        glow.addColorStop(0, 'rgba(59, 130, 246, 0.045)')
        glow.addColorStop(0.5, 'rgba(34, 211, 238, 0.015)')
        glow.addColorStop(1, 'transparent')
        ctx.fillStyle = glow
        ctx.fillRect(0, 0, width, height)
      }

      // Render Nodes & Constellation Connections
      ctx.shadowBlur = 0 // Disable blur for high performance

      // Update positions
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        // Wrap around borders
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        // Subtle mouse pull
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) {
          const force = (200 - dist) / 2000
          p.x += dx * force
          p.y += dy * force
          p.radius = p.baseRadius * 1.5
        } else {
          p.radius = p.baseRadius
        }

        // Draw node
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      })

      // Draw constellation connections
      ctx.lineWidth = 0.55
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          // Connect if particles are close
          if (dist < 115) {
            const alpha = (115 - dist) / 115 * 0.14
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-20 block pointer-events-none"
    />
  )
}
