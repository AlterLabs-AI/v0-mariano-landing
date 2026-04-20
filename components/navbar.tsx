"use client"

import Link from "next/link"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-sm border-b border-[#1A1A1A]">
      <nav className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-lg font-semibold text-[#F5F5F7]">
              Alter Labs<span className="text-[#f97316]">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B6B6B]">
              Ruma Intelligence
            </span>
          </div>
        </div>
      </nav>
    </header>
  )
}
