export function RentabilidadSection() {
  return (
    <section id="rentabilidad" className="py-32 px-6 lg:px-12 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#6B6B6B] mb-6">
            COMPARATIVA
          </p>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F7] max-w-3xl">
            Analisis de Rentabilidad
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Delegacion Humana */}
          <div className="border border-[#2A2A2A] p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#6B6B6B]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B6B6B]">
                Opcion A
              </span>
            </div>
            
            <h3 className="font-sans text-2xl font-bold text-[#F5F5F7] mb-8">
              Delegacion Tradicional
            </h3>

            <div className="space-y-8">
              <div>
                <p className="font-mono text-4xl font-bold text-[#F5F5F7] mb-2">
                  $500 <span className="text-lg text-[#6B6B6B]">USD/mes</span>
                </p>
                <p className="text-[#6B6B6B] text-sm">
                  Costo estimado de delegacion tradicional
                </p>
              </div>
              
              <div className="pt-8 border-t border-[#2A2A2A]">
                <p className="text-[#6B6B6B] leading-relaxed">
                  Incluye curva de aprendizaje y tiempo de adaptacion.
                </p>
              </div>
            </div>
          </div>

          {/* Automatizacion */}
          <div className="border border-[#f97316]/30 p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#f97316]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#f97316]">
                Opcion B
              </span>
            </div>
            
            <h3 className="font-sans text-2xl font-bold text-[#F5F5F7] mb-8">
              Automatizacion
            </h3>

            <div className="space-y-8">
              <div>
                <p className="text-[#A0A0A0] mb-4">
                  Protocolo Core:
                </p>
                <div className="flex items-baseline gap-4 mb-3">
                  <p className="font-mono text-4xl font-bold text-[#F5F5F7]">
                    56%
                  </p>
                  <p className="text-[#6B6B6B] text-sm">
                    optimizacion el primer ano
                  </p>
                </div>
                <div className="flex items-baseline gap-4">
                  <p className="font-mono text-4xl font-bold text-[#F5F5F7]">
                    90%
                  </p>
                  <p className="text-[#6B6B6B] text-sm">
                    optimizacion a partir del segundo
                  </p>
                </div>
              </div>
              
              <div className="pt-8 border-t border-[#2A2A2A]">
                <p className="text-[#A0A0A0] leading-relaxed">
                  Inversion fija, no variable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
