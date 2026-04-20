"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { ScrollSpyNav } from "@/components/scroll-spy-nav"
import { StatusIndicator } from "@/components/status-indicator"
import { TransitionScreen } from "@/components/transition-screen"
import { HeroSection } from "@/components/sections/hero"
import { DiagnosticoSection } from "@/components/sections/diagnostico"
import { ArquitecturaSection } from "@/components/sections/arquitectura"
import { QueNoHacemosSection } from "@/components/sections/que-no-hacemos"
import { RentabilidadSection } from "@/components/sections/rentabilidad"
import { InversionSection } from "@/components/sections/inversion"
import { SoberaniaSection } from "@/components/sections/soberania"
import { CTASection } from "@/components/sections/cta"

export type ProposalState = "idle" | "loading" | "success"

const sections = [
  "hero",
  "diagnostico", 
  "solucion",
  "que-no-hacemos",
  "rentabilidad",
  "inversion",
  "soberania",
  "cta"
]

export default function ProposalPage() {
  const [proposalState, setProposalState] = useState<ProposalState>("idle")
  const [selectedProtocol, setSelectedProtocol] = useState<string>("")
  const [showTransition, setShowTransition] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleProtocolSelect = (protocol: string) => {
    setSelectedProtocol(protocol)
    setShowTransition(true)
    setProposalState("loading")
  }

  const handleTransitionComplete = () => {
    setShowTransition(false)
    setProposalState("success")
  }

  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <ScrollSpyNav />
      <StatusIndicator currentSection={activeSection} />
      <TransitionScreen 
        isActive={showTransition}
        protocol={selectedProtocol}
        onComplete={handleTransitionComplete}
      />
      <HeroSection />
      <DiagnosticoSection />
      <ArquitecturaSection />
      <QueNoHacemosSection />
      <RentabilidadSection />
      <InversionSection />
      <SoberaniaSection />
      <CTASection 
        proposalState={proposalState}
        onProtocolSelect={handleProtocolSelect}
        selectedProtocol={selectedProtocol}
      />
    </main>
  )
}
