const diagnosticCards = [
  {
    title: "Multiplataforma Innecesaria",
    description: "Dispersión de datos que fragmentan el proceso.",
  },
  {
    title: "Data-Entry Manual",
    description: "Transición del dibujo técnico al presupuesto requiere carga manual exhaustiva.",
  },
  {
    title: "El Límite eres Tú",
    description: "Proceso indelegable sin capacitación masiva. Eres el cuello de botella de tu propia empresa.",
  },
  {
    title: "Costo de Oportunidad",
    description: "Cada hora frente a una planilla es una hora robada a la innovación.",
  },
]

export function DiagnosticoSection() {
  return (
    <section id="diagnostico" className="py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-4">
            EL PUNTO A
          </p>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F7]">
            El Cuello de Botella Operativo
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {diagnosticCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-8 lg:p-10 rounded-lg border border-[#2A2A2A]/50 hover:border-[#2A2A2A] transition-colors"
            >
              <h3 className="font-sans text-xl font-semibold text-[#F5F5F7] mb-4">
                {card.title}
              </h3>
              <p className="font-sans text-[#6B6B6B] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
