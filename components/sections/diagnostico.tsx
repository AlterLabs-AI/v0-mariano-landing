export function DiagnosticoSection() {
  return (
    <section id="diagnostico" className="py-16 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#6B6B6B] mb-6">
            ORIGEN: EL ENTORNO DE DISEÑO
          </p>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#F5F5F7] mb-8 max-w-3xl text-left">
            El Desafío de la Escala
          </h2>
          <p className="font-sans text-lg md:text-xl text-[#A0A0A0] leading-relaxed max-w-3xl text-left">
            La brecha entre el modelo digital y la lista de materiales final es el punto donde la eficiencia se detiene. Ruma Intelligence soluciona esta desconexión, asegurando que la visión del experto se transforme en una lista de corte milimétrica de forma instantánea.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2A2A2A]/30">
          <div className="bg-[#050505] p-8 lg:p-12">
            <div className="w-8 h-px bg-[hsl(25,95%,53%)] mb-6" />
            <h3 className="font-sans text-lg font-semibold text-[#F5F5F7] mb-4 text-left">
              Fragmentación de Datos
            </h3>
            <p className="font-sans text-[#6B6B6B] leading-relaxed text-left">
              Dispersión de información entre múltiples plataformas que complica el proceso de producción.
            </p>
          </div>

          <div className="bg-[#050505] p-8 lg:p-12">
            <div className="w-8 h-px bg-[hsl(25,95%,53%)] mb-6" />
            <h3 className="font-sans text-lg font-semibold text-[#F5F5F7] mb-4 text-left">
              Transición Técnica
            </h3>
            <p className="font-sans text-[#6B6B6B] leading-relaxed text-left">
              El paso del dibujo técnico al presupuesto requiere un proceso de extracción optimizado.
            </p>
          </div>

          <div className="bg-[#050505] p-8 lg:p-12">
            <div className="w-8 h-px bg-[hsl(25,95%,53%)] mb-6" />
            <h3 className="font-sans text-lg font-semibold text-[#F5F5F7] mb-4 text-left">
              Concentración de Conocimiento
            </h3>
            <p className="font-sans text-[#6B6B6B] leading-relaxed text-left">
              Proceso que depende de conocimiento especializado, limitando la capacidad de escalar.
            </p>
          </div>

          <div className="bg-[#050505] p-8 lg:p-12">
            <div className="w-8 h-px bg-[hsl(25,95%,53%)] mb-6" />
            <h3 className="font-sans text-lg font-semibold text-[#F5F5F7] mb-4 text-left">
              Costo de Oportunidad
            </h3>
            <p className="font-sans text-[#6B6B6B] leading-relaxed text-left">
              Cada hora dedicada a la gestión operativa es una hora que no se invierte en innovación.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
