const stats = [
  {
    value: "480",
    unit: "Horas",
    description: "Recuperadas al año para innovar.",
  },
  {
    value: "$100-$500",
    unit: "USD",
    description: "Ahorrados por evitar errores.",
  },
  {
    value: "15",
    unit: "Minutos",
    description: "Tiempo de respuesta (antes 48hs).",
  },
  {
    value: "Escalabilidad",
    unit: "",
    description: "Crece sin aumentar tu carga.",
  },
]

export function RetornoSection() {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-4">
            ROI DIRECTO
          </p>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F7]">
            El Punto B
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-8 rounded-lg border border-[#2A2A2A]/50 text-center"
            >
              <p className="font-mono text-4xl md:text-5xl font-bold text-[#F5F5F7] mb-1">
                {stat.value}
              </p>
              {stat.unit && (
                <p className="font-mono text-sm text-[#FF4400] uppercase tracking-wider mb-4">
                  {stat.unit}
                </p>
              )}
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
