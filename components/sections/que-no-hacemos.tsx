const items = [
  {
    title: "No vendemos software generico",
    description: "Cada solucion es disenada a medida para tu flujo de trabajo especifico.",
  },
  {
    title: "No somos consultoria de marketing",
    description: "Nos enfocamos exclusivamente en la ingenieria operativa.",
  },
  {
    title: "No imponemos procesos que alteren tu forma de disenar",
    description: "Nos adaptamos a tu metodologia existente, no al reves.",
  },
  {
    title: "No almacenamos tu propiedad intelectual en servidores externos",
    description: "Tu IP permanece bajo tu control absoluto.",
  },
]

export function QueNoHacemosSection() {
  return (
    <section id="que-no-hacemos" className="py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#6B6B6B] mb-6">
            LIMITES CLAROS
          </p>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F7] max-w-3xl">
            Que no hacemos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-[#2A2A2A]">
                <span className="font-mono text-sm text-[#6B6B6B]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-[#F5F5F7] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6B6B6B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
