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
import { InversionSection } from "@/components/sections/inversion"
import { SoberaniaSection } from "@/components/sections/soberania"
import { CTASection } from "@/components/sections/cta"

export type ProposalState = "idle" | "loading" | "success"

const sections = [
  "hero",
  "diagnostico",
  "solucion",
  "que-no-hacemos",
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

  const handleProtocolSelect = async (protocol: string) => {
    // 1. Cambiamos el estado para activar la animación de "Inicializando Protocolo"
    setProposalState("loading");
    setSelectedProtocol(protocol);

    try {
      // 2. Disparamos al webhook de producción de n8n
      const response = await fetch("https://ng-alterlabs.app.n8n.cloud/webhook/mariano-propuesta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          protocol: protocol, // Envía "core" o "apex" dependiendo del botón
          clientName: "Mariano",
          proposalTitle: "Ruma Intelligence: Solid-to-Excel",
          proposalId: "RUMA-001"
        }),
      });

      if (!response.ok) {
        throw new Error("Falla en la comunicación con el laboratorio.");
      }

      // 3. Si n8n responde 200 OK, pasamos a la pantalla de éxito
      setProposalState("success");

    } catch (error) {
      console.error("Error al inicializar el protocolo:", error);
      // Opcional: si querés que el botón vuelva a estar disponible si hay un error, 
      // descomentá la línea de abajo.
      // setProposalState("idle"); 
    }
  };

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
