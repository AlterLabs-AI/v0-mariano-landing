"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { DiagnosticoSection } from "@/components/sections/diagnostico"
import { ArquitecturaSection } from "@/components/sections/arquitectura"
import { RentabilidadSection } from "@/components/sections/rentabilidad"
import { InversionSection } from "@/components/sections/inversion"
import { RetornoSection } from "@/components/sections/retorno"
import { CTASection } from "@/components/sections/cta"

export type ProposalState = "idle" | "loading" | "success"

export default function ProposalPage() {
  const [proposalState, setProposalState] = useState<ProposalState>("idle")
  const [selectedProtocol, setSelectedProtocol] = useState<string>("")

  const handleProtocolSelect = (protocol: string) => {
    setSelectedProtocol(protocol)
    setProposalState("loading")
    
    setTimeout(() => {
      setProposalState("success")
    }, 2500)
  }

  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <HeroSection />
      <DiagnosticoSection />
      <ArquitecturaSection />
      <RentabilidadSection />
      <InversionSection />
      <RetornoSection />
      <CTASection 
        proposalState={proposalState}
        onProtocolSelect={handleProtocolSelect}
        selectedProtocol={selectedProtocol}
      />
    </main>
  )
}
