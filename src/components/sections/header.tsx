"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Solutions", href: "#solutions" },
  { name: "Success Stories", href: "#case-studies" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
]

export function Header() {
  // const [isScrolled, setIsScrolled] = useState(false)

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // useEffect(() => {
  //   // const handleScroll = () => {
  //   //   const scrollY = window.scrollY
  //   //   // setIsScrolled(scrollY > 10)


  //   // }

  //   handleScroll() // Call once on mount
  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white" 
        // isScrolled
        //   ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
        //   : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-32 lg:h-40 py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/MyAibo_Logo.png"
              alt="MyAibo"
              width={1200}
              height={360}
              className="h-60 lg:h-72 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }
                }}
                className="text-xl lg:text-2xl font-bold transition-colors text-purple-600 hover:text-purple-700"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-3 transition-colors text-purple-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault()
                    handleNavClick(item.href)
                  } else {
                    setIsMobileMenuOpen(false)
                  }
                }}
                className="block px-4 py-3 text-xl font-bold text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
