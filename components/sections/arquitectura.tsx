export function ArquitecturaSection() {
  return (
    <section id="arquitectura" className="py-32 px-6 lg:px-12 bg-[#050505]">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-4">
            EL CAMINO AL PUNTO B
          </p>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F7]">
            Arquitectura del Sistema
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Protocol Core */}
          <div className="bg-[#1A1A1A] p-8 lg:p-10 rounded-lg border border-[#2A2A2A]/50">
            <div className="mb-8">
              <span className="font-mono text-xs uppercase tracking-wider text-[#6B6B6B]">
                Foco: Simplicidad y resolución técnica.
              </span>
              <h3 className="font-sans text-2xl font-bold text-[#F5F5F7] mt-4">
                Protocolo Core
              </h3>
              <p className="font-mono text-sm text-[#6B6B6B] mt-1">
                Motor de Flujo Vital - MVP
              </p>
            </div>

            {/* Qué hacemos */}
            <div className="mb-8">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#F5F5F7] mb-4">
                Qué hacemos:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#F5F5F7] mt-2 flex-shrink-0" />
                  <span className="text-[#F5F5F7] text-sm leading-relaxed">
                    Descargas el reporte de SolidWorks y lo cargas manualmente.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#F5F5F7] mt-2 flex-shrink-0" />
                  <span className="text-[#F5F5F7] text-sm leading-relaxed">
                    El motor procesa datos basados en costos unitarios.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#F5F5F7] mt-2 flex-shrink-0" />
                  <span className="text-[#F5F5F7] text-sm leading-relaxed">
                    Generación automática de presupuesto optimizado.
                  </span>
                </li>
              </ul>
            </div>

            {/* Qué NO hacemos */}
            <div className="mb-8">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#6B6B6B] mb-4">
                Qué NO hacemos:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#6B6B6B] mt-2 flex-shrink-0" />
                  <span className="text-[#6B6B6B] text-sm leading-relaxed">
                    No incluye interacción con el cliente final.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#6B6B6B] mt-2 flex-shrink-0" />
                  <span className="text-[#6B6B6B] text-sm leading-relaxed">
                    Requiere tu intervención para la carga.
                  </span>
                </li>
              </ul>
            </div>

            {/* Valor Entregado */}
            <div className="pt-6 border-t border-[#2A2A2A]">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#F5F5F7] mb-3">
                Valor Entregado:
              </h4>
              <p className="text-[#F5F5F7] leading-relaxed">
                Cotización profesional y precisa en una fracción del tiempo.
              </p>
            </div>
          </div>

          {/* Protocol Apex */}
          <div className="bg-[#1A1A1A] p-8 lg:p-10 rounded-lg border border-[#2A2A2A]/50">
            <div className="mb-8">
              <span className="font-mono text-xs uppercase tracking-wider text-[#FF4400]">
                Foco: Automatización multi-agente.
              </span>
              <h3 className="font-sans text-2xl font-bold text-[#F5F5F7] mt-4">
                Protocolo Apex
              </h3>
              <p className="font-mono text-sm text-[#6B6B6B] mt-1">
                Ecosistema Autónomo - Integral
              </p>
            </div>

            {/* Qué hacemos */}
            <div className="mb-8">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#F5F5F7] mb-4">
                Qué hacemos:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#F5F5F7] mt-2 flex-shrink-0" />
                  <span className="text-[#F5F5F7] text-sm leading-relaxed">
                    Despliegue de tres agentes: Abordaje, Procesamiento y Propuesta.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#F5F5F7] mt-2 flex-shrink-0" />
                  <span className="text-[#F5F5F7] text-sm leading-relaxed">
                    Atención al cliente desde el primer contacto.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#F5F5F7] mt-2 flex-shrink-0" />
                  <span className="text-[#F5F5F7] text-sm leading-relaxed">
                    Lectura técnica exhaustiva del archivo SolidWorks.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#F5F5F7] mt-2 flex-shrink-0" />
                  <span className="text-[#F5F5F7] text-sm leading-relaxed">
                    Envío autónomo basado en tu criterio comercial.
                  </span>
                </li>
              </ul>
            </div>

            {/* Qué NO hacemos */}
            <div className="mb-8">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#6B6B6B] mb-4">
                Qué NO hacemos:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#6B6B6B] mt-2 flex-shrink-0" />
                  <span className="text-[#6B6B6B] text-sm leading-relaxed">
                    No reemplaza tu decisión final; el sistema propone, tú validas.
                  </span>
                </li>
              </ul>
            </div>

            {/* Valor Entregado */}
            <div className="pt-6 border-t border-[#2A2A2A]">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#F5F5F7] mb-3">
                Valor Entregado:
              </h4>
              <p className="text-[#F5F5F7] leading-relaxed">
                Experiencia de compra inmediata y personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
