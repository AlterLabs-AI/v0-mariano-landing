export function RentabilidadSection() {
  return (
    <section id="rentabilidad" className="py-32 px-6 lg:px-12 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#6B6B6B] mb-6">
            COMPARATIVA
          </p>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F5F7] max-w-3xl text-left">
            Análisis de Rentabilidad
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Delegación Tradicional */}
          <div className="border border-[#2A2A2A] p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#6B6B6B]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B6B6B]">
                Opción A
              </span>
            </div>
            
            <h3 className="font-sans text-2xl font-semibold text-[#F5F5F7] mb-8 text-left">
              Delegación Tradicional
            </h3>

            <div className="space-y-8">
              <div>
                <p className="font-mono text-4xl font-bold text-[#F5F5F7] mb-2">
                  $500 <span className="text-lg text-[#6B6B6B]">USD/mes</span>
                </p>
                <p className="text-[#6B6B6B] text-sm text-left">
                  Costo estimado de delegación tradicional
                </p>
              </div>
              
              <div className="pt-8 border-t border-[#2A2A2A]">
                <p className="text-[#6B6B6B] leading-relaxed text-left">
                  Incluye curva de aprendizaje y tiempo de adaptación.
                </p>
              </div>
            </div>
          </div>

          {/* Automatización */}
          <div className="border border-[hsl(25,95%,53%)]/30 p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[hsl(25,95%,53%)]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[hsl(25,95%,53%)]">
                Opción B
              </span>
            </div>
            
            <h3 className="font-sans text-2xl font-semibold text-[#F5F5F7] mb-8 text-left">
              Extracción Instantánea
            </h3>

            <div className="space-y-8">
              <div>
                <p className="text-[#A0A0A0] mb-4 text-left">
                  Protocolo Core:
                </p>
                <div className="flex items-baseline gap-4 mb-3">
                  <p className="font-mono text-4xl font-bold text-[#F5F5F7]">
                    56%
                  </p>
                  <p className="text-[#6B6B6B] text-sm text-left">
                    optimización el primer año
                  </p>
                </div>
                <div className="flex items-baseline gap-4">
                  <p className="font-mono text-4xl font-bold text-[#F5F5F7]">
                    90%
                  </p>
                  <p className="text-[#6B6B6B] text-sm text-left">
                    optimización a partir del segundo
                  </p>
                </div>
              </div>
              
              <div className="pt-8 border-t border-[#2A2A2A]">
                <p className="text-[#A0A0A0] leading-relaxed text-left">
                  Inversión fija, no variable. Flujo optimizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
