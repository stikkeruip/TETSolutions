"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Procurement", href: "/procurement" },
  { name: "Software", href: "/software" },
  { name: "Raw Materials", href: "/raw-materials" },
  { name: "EU Projects", href: "/eu-projects" },
  { name: "News", href: "/news" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <nav className="relative">
        <div className="absolute inset-0 bg-[#f1e5d1] opacity-75"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/public" className="flex items-center">
                <img
                    src="/ico.svg"
                    alt="TET Logo"
                    className="h-8 w-8 mr-2"
                />
                <span className="font-bold text-xl">TETSolutions</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="px-3 py-2 rounded-full text-sm font-medium text-[#013d60] hover:bg-[#013d60] hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-full text-[#013d60] hover:bg-[#9A7E43] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
            <div className="md:hidden relative z-10">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#013d60] bg-opacity-90">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-full text-base font-medium text-white hover:bg-[#9A7E43] hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                ))}
              </div>
            </div>
        )}
      </nav>
  )
}