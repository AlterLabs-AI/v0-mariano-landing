"use client"

import type { ProposalState } from "@/app/page"

interface CTASectionProps {
  proposalState: ProposalState
  onProtocolSelect: (protocol: string) => void
  selectedProtocol: string
}

export function CTASection({ proposalState, onProtocolSelect }: CTASectionProps) {
  return (
    <section id="cta" className="py-16 px-6 lg:px-12 min-h-[50vh] flex items-center">
      <div className="mx-auto max-w-6xl w-full">
        {proposalState === "idle" && (
          <>
            <div className="mb-16">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#6B6B6B] mb-6">
                SIGUIENTE PASO
              </p>
              <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F5F7] max-w-3xl text-left">
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
                className="px-8 py-4 font-mono text-sm uppercase tracking-wider bg-[hsl(25,95%,53%)] text-[#050505] hover:opacity-90 transition-colors font-semibold"
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
              <div className="absolute top-0 left-0 w-12 h-12 border border-transparent border-t-[hsl(25,95%,53%)] rounded-full animate-spin" />
            </div>
            
            <div className="animate-pulse">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#F5F5F7] text-left">
                INICIALIZANDO PROTOCOLO...
              </p>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#6B6B6B] mt-2 text-left">
                ENVIANDO NOTIFICACIÓN
              </p>
            </div>
          </div>
        )}

        {proposalState === "success" && (
          <div className="flex flex-col items-start gap-8">
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F5F5F7] text-left">
              Protocolo Confirmado.
            </h2>
            
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#6B6B6B] max-w-md text-left">
              El equipo de Alter Labs iniciará el despliegue. Nos pondremos en contacto contigo pronto.
            </p>

            <div className="mt-8 pt-8 border-t border-[#2A2A2A]">
              <span className="text-lg font-semibold text-[#F5F5F7]">
                Alter Labs<span className="text-[hsl(25,95%,53%)]">.</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
