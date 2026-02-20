"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
      {/* White background for navigation area - static */}
      <div className="absolute top-0 left-0 right-0 h-32 lg:h-40 bg-white z-10" />

      {/* Video background starting below white header */}
      <div className="absolute inset-0 top-32 lg:top-40 h-screen"
      style={{
    backgroundImage: "url('/tech-background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}>
        {/* <Image
          src="/MyAibo-bg-Video.gif"
          alt="AI Network Animation"
          fill
          className="w-full h-full object-cover"
          priority
        /> */}
      </div>

      {/* Content area positioned below navigation */}
      <div className="relative z-20 flex-1 flex items-center pt-32 lg:pt-40">
        <Container className="relative z-10">
          <div className="flex items-center justify-start h-full py-20">
            {/* White Rounded Rectangle Card - Left Aligned with logo */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0 }}
  className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16 shadow-2xl max-w-[95vw] sm:max-w-3xl lg:max-w-4xl ml-0"
            >
              {/* Main headline - SEO optimized H1
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 text-left">
                AI Development Services | Custom AI Solutions for Business Growth
              </h1> */}

              {/* Brand tagline */}
  <div className="text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-bold tracking-tight leading-tight mb-6 sm:mb-8 text-left line-clamp-2">
    <span className="text-black font-bold">Custom AI Agents & Marketing Solutions</span>
    <br />
    <span className="text-[#7c3bed] font-bold">Cut Costs, Scale Faster</span>
  </div>

  {/* Description */}
<p className="text-base sm:text-lg lg:text-[22px] text-gray-800 leading-relaxed mb-6 sm:mb-10 text-left font-bold line-clamp-2">
    We provide AI powered marketing solutions and build full stack agentic workforces. No additional overheads, just outcomes.
  </p>

              {/* CTA Button */}
              <div className="flex justify-start"
              >
                <Button
                  size="lg"
                  asChild
      className="bg-[#7c3bed] hover:bg-[#7300c4] text-white px-4 sm:px-6 py-3 text-base sm:text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                  <Link href="https://outlook.office365.com/owa/calendar/MyAiboConsultation@myaibo.in/bookings/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    📅 Book Free Strategy Session
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Scroll indicator
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center bg-black/30 backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div> */}
    </section>
  )
}
