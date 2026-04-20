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

    const nodes: { x: number; y: number; vx: number; vy: number }[] = []
    const nodeCount = 35

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      })
    }

    const animate = () => {
      ctx.fillStyle = "#050505"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        nodes.forEach((other, j) => {
          if (i === j) return
          const dx = other.x - node.x
          const dy = other.y - node.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 180) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(249, 115, 22, ${0.03 * (1 - dist / 180)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })

        ctx.beginPath()
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(107, 107, 107, 0.4)"
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => window.removeEventListener("resize", resize)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12 py-24 w-full">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#6B6B6B] mb-8">
          ALTER LABS // FURNITURE INTELLIGENCE
        </p>

        <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#F5F5F7] mb-10 leading-[1.1] max-w-4xl">
          Furniture Intelligence: Ingenieria de lo Invisible
        </h1>

        <p className="font-serif text-lg md:text-xl lg:text-2xl text-[#A0A0A0] leading-relaxed max-w-3xl">
          Optimizando la transicion del diseno a la realidad tecnica para recuperar tu recurso mas valioso: el tiempo de creacion.
        </p>
      </div>

      <div className="absolute bottom-12 left-6 lg:left-12 z-10">
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#6B6B6B] to-transparent" />
      </div>
    </section>
  )
}
