"use client"

import { Container } from "@/components/ui/container"
import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Twitter, Linkedin, Youtube, Instagram } from "lucide-react"
import { useEffect } from "react"

// TypeScript declaration for HubSpot
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region: string
          portalId: string
          formId: string
          target: string
          onFormReady?: () => void
          onFormSubmit?: () => void
        }) => void
      }
    }
  }
}

const footerLinks = {
  solutions: [
    { name: "Solutions", href: "/#solutions" }
  ],
  successStories: [
    { name: "Success Stories", href: "/#case-studies" }
  ],
  aboutUs: [
    { name: "About Us", href: "/about" }
  ],
  contactUs: [
    { name: "Contact Us", href: "/contact" }
  ]
}

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/myaibo", icon: Linkedin },
  { name: "YouTube", href: "https://www.youtube.com/@my-aibo", icon: Youtube },
  { name: "X", href: "https://x.com/my_aibo2", icon: Twitter },
  { name: "Instagram", href: "https://www.instagram.com/my_aibo/", icon: Instagram }
]

export function Footer() {
  useEffect(() => {
    // Load HubSpot script for subscriber form
    const loadHubSpotSubscriberForm = () => {
      console.log('🚀 Loading subscriber form')

      // Remove any existing scripts first
      const existingScripts = document.querySelectorAll('script[src*="243268505.js"]')
      if (existingScripts.length === 0) {
        // Create and load the HubSpot script only if it doesn't exist
        const script = document.createElement('script')
        script.src = 'https://js-na2.hsforms.net/forms/embed/243268505.js'
        script.defer = true

        script.onload = () => {
          console.log('✅ HubSpot subscriber form script loaded successfully')
          // Wait for form to render
          setTimeout(() => {
            const formContainer = document.querySelector('.hubspot-subscriber-form')
            if (formContainer && formContainer.children.length > 0) {
              const loadingDiv = document.getElementById('subscriber-form-loading')
              if (loadingDiv) {
                loadingDiv.style.display = 'none'
              }
            } else {
              // Show fallback
              const loadingDiv = document.getElementById('subscriber-form-loading')
              if (loadingDiv) {
                loadingDiv.innerHTML = `
                  <div class="text-center">
                    <a href="mailto:info@myaibo.in?subject=Newsletter Subscription"
                       class="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                      Subscribe via Email
                    </a>
                  </div>
                `
              }
            }
          }, 3000)
        }

        script.onerror = (error) => {
          console.error('❌ Failed to load HubSpot subscriber form script:', error)
          // Show fallback
          const loadingDiv = document.getElementById('subscriber-form-loading')
          if (loadingDiv) {
            loadingDiv.innerHTML = `
              <div class="text-center">
                <a href="mailto:info@myaibo.in?subject=Newsletter Subscription"
                   class="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Subscribe via Email
                </a>
              </div>
            `
          }
        }

        document.head.appendChild(script)
      } else {
        console.log('HubSpot script already loaded for subscriber form')
        // Check if form is already rendered
        setTimeout(() => {
          const formContainer = document.querySelector('.hubspot-subscriber-form')
          if (formContainer && formContainer.children.length > 0) {
            const loadingDiv = document.getElementById('subscriber-form-loading')
            if (loadingDiv) {
              loadingDiv.style.display = 'none'
            }
          }
        }, 1000)
      }
    }

    // Start loading HubSpot form
    loadHubSpotSubscriberForm()
  }, [])

  return (
    <footer className="bg-gray-900 text-white">
      {/* Enhanced Newsletter Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

        <Container>
          <div className="py-20 text-center relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Ahead with AI Insights
            </h3>
            <p className="text-lg text-purple-100 mb-10 max-w-3xl mx-auto text-justify leading-relaxed">
              Get the latest AI trends, case studies, and exclusive insights delivered to your inbox monthly.
              Join thousands of business leaders who rely on our expert analysis to stay competitive
              in the rapidly evolving AI landscape.
            </p>
            {/* HubSpot Subscriber Form */}
            <div className="max-w-lg mx-auto">
              <div
                className="hs-form-frame hubspot-subscriber-form"
                data-region="na2"
                data-form-id="5f90120f-9356-4939-aca2-96063b0e09ed"
                data-portal-id="243268505"
              >
              </div>

              {/* Loading message */}
              <div id="subscriber-form-loading" className="text-center py-4">
                <p className="text-purple-100 text-sm">Loading subscription form...</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Enhanced Main Footer */}
      <Container>
        <div className="py-20">
          {/* Logo and Navigation in same line */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16 mb-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/MyAibo-logo-white.png" alt="MyAibo" width={600} height={200} className="h-20 lg:h-24 w-auto" />
              </Link>
            </div>

            {/* Navigation Links - Horizontal layout */}
            <div className="flex flex-wrap items-center gap-8 lg:gap-12">
              <div>
                {footerLinks.solutions.map((link) => (
                  <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors font-semibold text-lg">
                    {link.name}
                  </Link>
                ))}
              </div>

              <div>
                {footerLinks.successStories.map((link) => (
                  <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors font-semibold text-lg">
                    {link.name}
                  </Link>
                ))}
              </div>

              <div>
                {footerLinks.aboutUs.map((link) => (
                  <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors font-semibold text-lg">
                    {link.name}
                  </Link>
                ))}
              </div>

              <div>
                {footerLinks.contactUs.map((link) => (
                  <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors font-semibold text-lg">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information - Separate section below */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
            <div className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center mr-4">
                <Mail className="w-5 h-5" />
              </div>
              <span>info@myaibo.in</span>
            </div>
            <div className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center mr-4">
                <MapPin className="w-5 h-5" />
              </div>
              <span>Bengaluru, KA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025, Hillsa Ventures Pvt Ltd. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
