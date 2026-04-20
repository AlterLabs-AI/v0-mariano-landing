export function DiagnosticoSection() {
  return (
    <section id="diagnostico" className="py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#6B6B6B] mb-6">
            ORIGEN: EL ENTORNO DE DISENO
          </p>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F7] mb-8 max-w-3xl">
            El Desafio de la Escala
          </h2>
          <p className="font-serif text-lg md:text-xl text-[#A0A0A0] leading-relaxed max-w-3xl">
            La brecha entre el modelo digital y la lista de materiales final representa el punto de friccion donde el crecimiento del negocio suele estancarse. Identificamos que la transferencia de informacion tecnica requiere un filtrado inteligente para asegurar que la vision del disenador llegue al taller sin alteraciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2A2A2A]/30">
          <div className="bg-[#050505] p-8 lg:p-12">
            <div className="w-8 h-px bg-[#f97316] mb-6" />
            <h3 className="font-sans text-lg font-semibold text-[#F5F5F7] mb-4">
              Fragmentacion de Datos
            </h3>
            <p className="font-sans text-[#6B6B6B] leading-relaxed">
              Dispersion de informacion entre multiples plataformas que complica el proceso de produccion.
            </p>
          </div>
          
          <div className="bg-[#050505] p-8 lg:p-12">
            <div className="w-8 h-px bg-[#f97316] mb-6" />
            <h3 className="font-sans text-lg font-semibold text-[#F5F5F7] mb-4">
              Transicion Tecnica
            </h3>
            <p className="font-sans text-[#6B6B6B] leading-relaxed">
              El paso del dibujo tecnico al presupuesto requiere un proceso de carga exhaustivo.
            </p>
          </div>
          
          <div className="bg-[#050505] p-8 lg:p-12">
            <div className="w-8 h-px bg-[#f97316] mb-6" />
            <h3 className="font-sans text-lg font-semibold text-[#F5F5F7] mb-4">
              Concentracion de Conocimiento
            </h3>
            <p className="font-sans text-[#6B6B6B] leading-relaxed">
              Proceso que depende de conocimiento especializado, limitando la capacidad de escalar.
            </p>
          </div>
          
          <div className="bg-[#050505] p-8 lg:p-12">
            <div className="w-8 h-px bg-[#f97316] mb-6" />
            <h3 className="font-sans text-lg font-semibold text-[#F5F5F7] mb-4">
              Costo de Oportunidad
            </h3>
            <p className="font-sans text-[#6B6B6B] leading-relaxed">
              Cada hora dedicada a la gestion operativa es una hora que no se invierte en innovacion.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
