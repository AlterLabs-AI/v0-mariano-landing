"use client"

interface StatusIndicatorProps {
  currentSection: string
}

const sectionLabels: Record<string, string> = {
  "hero": "PROTOCOLO DE INICIO",
  "diagnostico": "ANÁLISIS DE CONTEXTO",
  "solucion": "ARQUITECTURA DE SOLUCIÓN",
  "que-no-hacemos": "DEFINICIÓN DE ALCANCE",
  "rentabilidad": "MATRIZ DE RENTABILIDAD",
  "inversion": "ESTRUCTURA DE INVERSIÓN",
  "soberania": "FILOSOFÍA DE EJECUCIÓN",
  "cta": "PROTOCOLO DE ACTIVACIÓN",
}

export function StatusIndicator({ currentSection }: StatusIndicatorProps) {
  const label = sectionLabels[currentSection] || "PROTOCOLO DE INICIO"

  return (
    <div className="fixed top-20 left-6 lg:left-12 z-40 hidden lg:block">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[hsl(25,95%,53%)] animate-pulse" />
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6B6B6B]">
          <span className="text-[hsl(25,95%,53%)]">ESTÁS EN:</span>{" "}
          <span className="text-[#F5F5F7]">{label}</span>
        </div>
      </div>
    </div>
  )
}
