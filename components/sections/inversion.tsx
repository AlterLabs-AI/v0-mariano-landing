export function InversionSection() {
  return (
    <section id="inversion" className="py-32 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B6B6B] mb-4">
            ROADMAP
          </p>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F7]">
            Inversión
          </h2>
        </div>

        {/* Investment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Protocol Core */}
          <div className="bg-[#1A1A1A] p-8 lg:p-10 rounded-lg border border-[#2A2A2A]/50">
            <h3 className="font-sans text-2xl font-bold text-[#F5F5F7] mb-2">
              Protocolo Core
            </h3>
            <p className="font-mono text-xs uppercase tracking-wider text-[#6B6B6B] mb-8">
              Motor de Flujo Vital
            </p>

            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-[#2A2A2A]">
                <span className="text-[#6B6B6B]">Tiempo</span>
                <span className="font-mono text-xl font-bold text-[#F5F5F7]">2 Meses</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-[#2A2A2A]">
                <span className="text-[#6B6B6B]">Inversión</span>
                <span className="font-mono text-xl font-bold text-[#F5F5F7]">$2,000 USD</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-[#6B6B6B]">Soporte</span>
                <span className="font-mono text-xl font-bold text-[#F5F5F7]">$50 USD<span className="text-sm text-[#6B6B6B]">/mes</span></span>
              </div>
            </div>
          </div>

          {/* Protocol Apex */}
          <div className="bg-[#1A1A1A] p-8 lg:p-10 rounded-lg border border-[#FF4400]/20">
            <h3 className="font-sans text-2xl font-bold text-[#F5F5F7] mb-2">
              Protocolo Apex
            </h3>
            <p className="font-mono text-xs uppercase tracking-wider text-[#FF4400] mb-8">
              Ecosistema Autónomo
            </p>

            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-[#2A2A2A]">
                <span className="text-[#6B6B6B]">Tiempo</span>
                <span className="font-mono text-xl font-bold text-[#F5F5F7]">4 Meses</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-[#2A2A2A]">
                <span className="text-[#6B6B6B]">Inversión</span>
                <span className="font-mono text-xl font-bold text-[#F5F5F7]">$5,800 USD</span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-[#6B6B6B]">Soporte</span>
                <span className="font-mono text-xl font-bold text-[#F5F5F7]">$80 USD<span className="text-sm text-[#6B6B6B]">/mes</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
