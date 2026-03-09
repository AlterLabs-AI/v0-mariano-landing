"use client"

import { useEffect, useRef } from "react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Abstract grid animation
    const nodes: { x: number; y: number; vx: number; vy: number }[] = []
    const nodeCount = 40

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      })
    }

    const animate = () => {
      ctx.fillStyle = "#050505"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Draw connections
        nodes.forEach((other, j) => {
          if (i === j) return
          const dx = other.x - node.x
          const dy = other.y - node.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(255, 68, 0, ${0.05 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(107, 107, 107, 0.5)"
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => window.removeEventListener("resize", resize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-12 py-24 text-center">
        {/* Eyebrow */}
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-8">
          PROPUESTA EJECUTIVA // RUMA MUEBLES X ALTER LABS
        </p>

        {/* Headline */}
        <h1 className="font-sans text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#F5F5F7] mb-12 leading-[1.1] text-balance">
          De la Fricción Operativa a la Ingeniería de lo Invisible.
        </h1>

        {/* Manifesto - Editorial Serif */}
        <p className="font-serif text-xl md:text-2xl lg:text-[1.75rem] text-[#F5F5F7] leading-relaxed max-w-3xl mx-auto">
          Hola Mariano. En Alter Labs somos un laboratorio de optimización. Nuestra misión es crear tecnología que no se note: la máquina procesa masivamente, tú decides estratégicamente.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#6B6B6B] to-transparent" />
      </div>
    </section>
  )
}
