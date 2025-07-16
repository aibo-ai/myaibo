"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* White background for navigation area */}
      <div className="absolute top-0 left-0 right-0 h-32 lg:h-40 bg-white z-10" />

      {/* Video background for content area */}
      <div className="absolute inset-0 top-32 lg:top-40">
        <img
          src="/MyAibo-bg-Video.gif"
          alt="AI Network Animation"
          className="w-full h-full object-cover"
          style={{ minHeight: 'calc(100vh - 8rem)' }}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content area positioned below navigation */}
      <div className="relative z-20 flex-1 flex items-center justify-center pt-32 lg:pt-40">
        <Container className="relative z-10">
        <div className="flex items-center justify-start min-h-screen py-20">
          {/* Left-aligned Content */}
          <div className="w-full max-w-6xl mx-auto text-left space-y-8 px-4 md:px-8">
            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight drop-shadow-lg"
            >
              <span className="text-white">Elegant</span>{" "}
              <span className="text-[#8600e1]">
                AI-Powered Solutions
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-3xl font-bold drop-shadow-md"
            >
              We harness the power of AI to create innovative solutions that deliver impactful and measurable improvements
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-start"
            >
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="https://outlook.office365.com/owa/calendar/MyAiboConsultation@myaibo.in/bookings/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  📅 Book Free Strategy Session
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
        </Container>
      </div>

      {/* Get Started floating button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          size="lg"
          asChild
          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <Link href="https://outlook.office365.com/owa/calendar/MyAiboConsultation@myaibo.in/bookings/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
