"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, MapPin, Twitter, Linkedin, Youtube, Instagram } from "lucide-react"

const footerLinks = {
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none shadow-lg"
              />
              <Button className="bg-white text-purple-700 hover:bg-purple-50 px-10 py-4 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Subscribe
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Enhanced Main Footer */}
      <Container>
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Enhanced Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-8">
                <img src="/logo.svg" alt="MyAibo" className="h-10 w-auto" />
              </Link>
              <p className="text-gray-400 mb-8 leading-relaxed text-justify">
                Transforming businesses with elegant AI-powered solutions that deliver measurable results and sustainable growth.
                We combine cutting-edge technology with strategic business insight to create competitive advantages that last.
              </p>

              {/* Enhanced Contact Info */}
              <div className="space-y-4">
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

            {/* Navigation Links */}
            <div>
              <ul className="space-y-3">
                {footerLinks.successStories.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors font-semibold">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-3">
                {footerLinks.aboutUs.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors font-semibold">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-3">
                {footerLinks.contactUs.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors font-semibold">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
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
