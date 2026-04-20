export function ArquitecturaSection() {
  return (
    <section id="solucion" className="py-32 px-6 lg:px-12 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#6B6B6B] mb-6">
            DESTINO: EL MOTOR DE PRODUCCION
          </p>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F5F7] mb-8 max-w-3xl">
            La Arquitectura del Dato: Solid-to-Excel
          </h2>
          <p className="font-sans text-lg md:text-xl text-[#A0A0A0] leading-relaxed max-w-3xl">
            Nuestra ingenieria traduce tus disenos de Solidworks directamente a una estructura de datos ejecutable. El sistema identifica cada parte del dibujo para generar automaticamente una planilla con cantidades exactas, dimensiones (largo, ancho, espesor) y la ubicacion tecnica de los cantos. Si esta en el dibujo, esta en tu Excel de produccion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Protocol Core */}
          <div className="border border-[#2A2A2A] p-8 lg:p-10">
            <div className="mb-10">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B6B6B]">
                Foco: Simplicidad y resolucion tecnica
              </span>
              <h3 className="font-sans text-2xl font-bold text-[#F5F5F7] mt-4">
                Protocolo Core
              </h3>
              <p className="font-mono text-sm text-[#6B6B6B] mt-2">
                Motor de Flujo Vital - MVP
              </p>
            </div>

            <div className="mb-10">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F5F5F7] mb-6">
                Que hacemos:
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-2 flex-shrink-0" />
                  <span className="text-[#A0A0A0] text-sm leading-relaxed">
                    Descargas el reporte de SolidWorks y lo cargas al sistema.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-2 flex-shrink-0" />
                  <span className="text-[#A0A0A0] text-sm leading-relaxed">
                    El motor procesa datos basados en costos unitarios.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-2 flex-shrink-0" />
                  <span className="text-[#A0A0A0] text-sm leading-relaxed">
                    Generacion automatica de presupuesto optimizado.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-[#2A2A2A]">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F5F5F7] mb-4">
                Valor Entregado:
              </h4>
              <p className="text-[#A0A0A0] leading-relaxed">
                Cotizacion profesional y precisa en una fraccion del tiempo.
              </p>
            </div>
          </div>

          {/* Protocol Apex */}
          <div className="border border-[#f97316]/30 p-8 lg:p-10">
            <div className="mb-10">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#f97316]">
                Foco: Automatizacion multi-agente
              </span>
              <h3 className="font-sans text-2xl font-bold text-[#F5F5F7] mt-4">
                Protocolo Apex
              </h3>
              <p className="font-mono text-sm text-[#6B6B6B] mt-2">
                Ecosistema Autonomo - Integral
              </p>
            </div>

            <div className="mb-10">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F5F5F7] mb-6">
                Que hacemos:
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-2 flex-shrink-0" />
                  <span className="text-[#A0A0A0] text-sm leading-relaxed">
                    Despliegue de tres agentes: Abordaje, Procesamiento y Propuesta.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-2 flex-shrink-0" />
                  <span className="text-[#A0A0A0] text-sm leading-relaxed">
                    Atencion al cliente desde el primer contacto.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-2 flex-shrink-0" />
                  <span className="text-[#A0A0A0] text-sm leading-relaxed">
                    Lectura tecnica exhaustiva del archivo SolidWorks.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-2 flex-shrink-0" />
                  <span className="text-[#A0A0A0] text-sm leading-relaxed">
                    Envio autonomo basado en tu criterio comercial.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-[#2A2A2A]">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#F5F5F7] mb-4">
                Valor Entregado:
              </h4>
              <p className="text-[#A0A0A0] leading-relaxed">
                Experiencia de compra inmediata y personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
