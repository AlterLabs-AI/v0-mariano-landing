export function RentabilidadSection() {
  return (
    <section id="rentabilidad" className="py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-4">
            COMPARATIVA
          </p>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F7]">
            Análisis de Rentabilidad
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Delegación Humana */}
          <div className="bg-[#1A1A1A] p-8 lg:p-10 rounded-lg border border-[#2A2A2A]/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#6B6B6B]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#6B6B6B]">
                Opción A
              </span>
            </div>
            
            <h3 className="font-sans text-2xl font-bold text-[#F5F5F7] mb-6">
              Delegación Humana
            </h3>

            <div className="space-y-6">
              <div>
                <p className="font-mono text-3xl font-bold text-[#F5F5F7] mb-2">
                  $500 <span className="text-lg text-[#6B6B6B]">USD/mes</span>
                </p>
                <p className="text-[#6B6B6B] text-sm">
                  Costo de contratar un asistente junior
                </p>
              </div>
              
              <div className="pt-6 border-t border-[#2A2A2A]">
                <p className="text-[#6B6B6B] leading-relaxed">
                  <span className="text-[#FF4400] font-semibold">Riesgo:</span> Curva de aprendizaje y error humano.
                </p>
              </div>
            </div>
          </div>

          {/* Automatización */}
          <div className="bg-[#1A1A1A] p-8 lg:p-10 rounded-lg border border-[#FF4400]/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#FF4400]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#FF4400]">
                Opción B
              </span>
            </div>
            
            <h3 className="font-sans text-2xl font-bold text-[#F5F5F7] mb-6">
              Automatización
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-[#F5F5F7] mb-4">
                  Protocolo Core:
                </p>
                <div className="flex items-baseline gap-4">
                  <p className="font-mono text-3xl font-bold text-[#F5F5F7]">
                    56%
                  </p>
                  <p className="text-[#6B6B6B] text-sm">
                    ahorro el primer año
                  </p>
                </div>
                <div className="flex items-baseline gap-4 mt-2">
                  <p className="font-mono text-3xl font-bold text-[#F5F5F7]">
                    90%
                  </p>
                  <p className="text-[#6B6B6B] text-sm">
                    ahorro a partir del segundo
                  </p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-[#2A2A2A]">
                <p className="text-[#F5F5F7] leading-relaxed">
                  Inversión fija, no variable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
