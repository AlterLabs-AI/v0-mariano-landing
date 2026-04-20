"use client"

import { useEffect, useState } from "react"

interface TransitionScreenProps {
  isActive: boolean
  protocol: string
  onComplete: () => void
}

export function TransitionScreen({ isActive, protocol, onComplete }: TransitionScreenProps) {
  const [progress, setProgress] = useState(0)
  const [statusLines, setStatusLines] = useState<string[]>([])

  const protocolLines: Record<string, string[]> = {
    core: [
      "Iniciando protocolo CORE...",
      "Conectando motor de flujo vital...",
      "Cargando estructura de costos unitarios...",
      "Verificando integridad de datos...",
      "Motor de presupuestación activo.",
      "Protocolo CORE inicializado.",
    ],
    apex: [
      "Iniciando protocolo APEX...",
      "Desplegando agente de abordaje...",
      "Desplegando agente de procesamiento...",
      "Desplegando agente de propuesta...",
      "Conectando ecosistema autónomo...",
      "Sincronizando criterio comercial...",
      "Protocolo APEX inicializado.",
    ],
  }

  useEffect(() => {
    if (!isActive) {
      setProgress(0)
      setStatusLines([])
      return
    }

    const lines = protocolLines[protocol] || protocolLines.core
    let currentLine = 0

    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setStatusLines(prev => [...prev, lines[currentLine]])
        setProgress(((currentLine + 1) / lines.length) * 100)
        currentLine++
      } else {
        clearInterval(interval)
        setTimeout(onComplete, 500)
      }
    }, 400)

    return () => clearInterval(interval)
  }, [isActive, protocol, onComplete])

  if (!isActive) return null

  return (
    <div className="fixed inset-0 z-50 bg-[#050505] flex items-center justify-center">
      {/* Grid background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(107, 107, 107, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(107, 107, 107, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Scan line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute left-0 right-0 h-[2px] animate-scan-line"
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(25, 95%, 53%), transparent)',
            opacity: 0.5
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl w-full px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[hsl(25,95%,53%)] mb-4">
            ALTER LABS // SISTEMA
          </p>
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-[#F5F5F7]">
            Procesando Solicitud
          </h2>
        </div>

        {/* Terminal output */}
        <div className="bg-[#0A0A0A] border border-[#2A2A2A] p-6 mb-8 min-h-[200px]">
          <div className="font-mono text-sm space-y-2">
            {statusLines.map((line, index) => (
              <div 
                key={index}
                className="flex items-start gap-3"
              >
                <span className="text-[hsl(25,95%,53%)]">{">"}</span>
                <span className="text-[#A0A0A0]">{line}</span>
              </div>
            ))}
            {progress < 100 && (
              <div className="flex items-start gap-3">
                <span className="text-[hsl(25,95%,53%)]">{">"}</span>
                <span className="text-[#6B6B6B] animate-flicker">_</span>
              </div>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-mono text-xs uppercase tracking-wider text-[#6B6B6B]">
              Progreso
            </span>
            <span className="font-mono text-xs text-[hsl(25,95%,53%)]">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-[2px] bg-[#1A1A1A] overflow-hidden">
            <div 
              className="h-full bg-[hsl(25,95%,53%)] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
