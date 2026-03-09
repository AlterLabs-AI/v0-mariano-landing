"use client"

import type { ProposalState } from "@/app/page"

interface CTASectionProps {
  proposalState: ProposalState
  onProtocolSelect: (protocol: string) => void
  selectedProtocol: string
}

export function CTASection({ proposalState, onProtocolSelect }: CTASectionProps) {
  return (
    <section className="py-32 px-6 lg:px-12 min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-4xl w-full text-center">
        {proposalState === "idle" && (
          <>
            {/* Section Header */}
            <div className="mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-4">
                SIGUIENTE PASO
              </p>
              <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F7]">
                Selecciona tu Protocolo de Inicio
              </h2>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => onProtocolSelect("core")}
                className="w-full sm:w-auto px-8 py-4 font-mono text-sm uppercase tracking-wider border border-[#F5F5F7] text-[#F5F5F7] rounded hover:bg-[#F5F5F7] hover:text-[#050505] transition-colors"
              >
                Iniciar Protocolo Core
              </button>
              <button
                onClick={() => onProtocolSelect("apex")}
                className="w-full sm:w-auto px-8 py-4 font-mono text-sm uppercase tracking-wider bg-[#FF4400] text-[#050505] rounded hover:bg-[#FF4400]/90 transition-colors font-semibold"
              >
                Desplegar Protocolo Apex
              </button>
            </div>
          </>
        )}

        {proposalState === "loading" && (
          <div className="flex flex-col items-center justify-center gap-8">
            {/* Spinner */}
            <div className="relative">
              <div className="w-16 h-16 border-2 border-[#1A1A1A] rounded-full" />
              <div className="absolute top-0 left-0 w-16 h-16 border-2 border-transparent border-t-[#FF4400] rounded-full animate-spin" />
            </div>
            
            {/* Loading Text */}
            <div className="animate-flicker">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#F5F5F7]">
                INICIALIZANDO PROTOCOLO...
              </p>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#6B6B6B] mt-2">
                ENVIANDO NOTIFICACIÓN
              </p>
            </div>
          </div>
        )}

        {proposalState === "success" && (
          <div className="flex flex-col items-center justify-center gap-8">
            {/* Success Message */}
            <h2 className="font-sans text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-[#F5F5F7]">
              YOU ARE IN.
            </h2>
            
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#6B6B6B] max-w-md">
              Protocolo bloqueado y confirmado. El equipo de Alter Labs iniciará el despliegue.
            </p>

            {/* Footer Logo */}
            <div className="mt-12">
              <span className="text-lg font-semibold text-[#F5F5F7]">
                Alter Labs<span className="text-[#FF4400]">.</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
