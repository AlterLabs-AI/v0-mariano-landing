"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "diagnostico", label: "El Desafio" },
  { id: "solucion", label: "La Solucion" },
  { id: "que-no-hacemos", label: "Que No Hacemos" },
  { id: "rentabilidad", label: "Rentabilidad" },
  { id: "inversion", label: "Inversion" },
  { id: "soberania", label: "Soberania" },
]

export function ScrollSpyNav() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="flex flex-col items-end gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center gap-3"
          >
            <span
              className={`font-mono text-xs uppercase tracking-wider transition-colors duration-300 ${
                activeSection === section.id
                  ? "text-[hsl(25,95%,53%)]"
                  : "text-[#6B6B6B] group-hover:text-[#F5F5F7]"
              }`}
            >
              {section.label}
            </span>
            <span
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-[hsl(25,95%,53%)] scale-125"
                  : "bg-[#2A2A2A] group-hover:bg-[#6B6B6B]"
              }`}
            />
          </button>
        ))}
      </div>
    </nav>
  )
}
