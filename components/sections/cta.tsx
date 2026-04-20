"use client"

import type { ProposalState } from "@/app/page"

interface CTASectionProps {
  proposalState: ProposalState
  onProtocolSelect: (protocol: string) => void
  selectedProtocol: string
}

export function CTASection({ proposalState, onProtocolSelect }: CTASectionProps) {
  return (
    <section className="py-32 px-6 lg:px-12 min-h-[50vh] flex items-center">
      <div className="mx-auto max-w-6xl w-full">
        {proposalState === "idle" && (
          <>
            <div className="mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#6B6B6B] mb-6">
                SIGUIENTE PASO
              </p>
              <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F7] max-w-3xl">
                Selecciona tu Protocolo de Inicio
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button
                onClick={() => onProtocolSelect("core")}
                className="px-8 py-4 font-mono text-sm uppercase tracking-wider border border-[#2A2A2A] text-[#F5F5F7] hover:border-[#F5F5F7] transition-colors"
              >
                Iniciar Protocolo Core
              </button>
              <button
                onClick={() => onProtocolSelect("apex")}
                className="px-8 py-4 font-mono text-sm uppercase tracking-wider bg-[#f97316] text-[#050505] hover:bg-[#f97316]/90 transition-colors font-semibold"
              >
                Desplegar Protocolo Apex
              </button>
            </div>
          </>
        )}

        {proposalState === "loading" && (
          <div className="flex flex-col items-start gap-8">
            <div className="relative">
              <div className="w-12 h-12 border border-[#2A2A2A] rounded-full" />
              <div className="absolute top-0 left-0 w-12 h-12 border border-transparent border-t-[#f97316] rounded-full animate-spin" />
            </div>
            
            <div className="animate-pulse">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#F5F5F7]">
                INICIALIZANDO PROTOCOLO...
              </p>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#6B6B6B] mt-2">
                ENVIANDO NOTIFICACION
              </p>
            </div>
          </div>
        )}

        {proposalState === "success" && (
          <div className="flex flex-col items-start gap-8">
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F7]">
              Protocolo Confirmado.
            </h2>
            
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#6B6B6B] max-w-md">
              El equipo de Alter Labs iniciara el despliegue. Nos pondremos en contacto contigo pronto.
            </p>

            <div className="mt-8 pt-8 border-t border-[#2A2A2A]">
              <span className="text-lg font-semibold text-[#F5F5F7]">
                Alter Labs<span className="text-[#f97316]">.</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
