"use client"

import Link from "next/link"

const navLinks = [
  { href: "#diagnostico", label: "DIAGNÓSTICO" },
  { href: "#arquitectura", label: "ARQUITECTURA" },
  { href: "#rentabilidad", label: "RENTABILIDAD" },
  { href: "#inversion", label: "INVERSIÓN" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-sm border-b border-[#1A1A1A]">
      <nav className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-lg font-semibold text-[#F5F5F7]">
              Alter Labs<span className="text-[#FF4400]">.</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-wider text-[#6B6B6B] hover:text-[#F5F5F7] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-[#F5F5F7]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
