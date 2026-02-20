"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { Search, FileText, Code, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery: Free Strategy Session",
    description: "We deep-dive into your challenges and identify game-changing opportunities for AI"
  },
  {
    number: "02",
    icon: FileText,
    title: "Blueprint: Smart Architecture",
    description: "We design a class leading, bulletproof framework that scales with your growth"
  },
  {
    number: "03",
    icon: Code,
    title: "Build: Agile Development",
    description: "Development with constant feedback loops ensure we're building what you need"
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch: Seamless Integration",
    description: "Rigorous testing followed by smooth deployment ensures near zero downtime"
  }
]

export function TransformationProcess() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
          >
            Transforming businesses with{" "}
            <span className="bg-gradient-to-rs bg-clip-text text-transparent"
            style={{ color: "#7c3bed" }}>
              AI
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-4xl mx-auto text-center leading-relaxed"
          >
            Each phase is carefully designed to minimize risk while maximizing value, ensuring your business
            transformation is both strategic and sustainable.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Enhanced connection line for desktop */}
          <div className="hidden lg:block absolute top-32 left-16 right-16 h-1 bg-gradient-to-r from-[#7c3bed]/20 via-[#7c3bed] to-[#7c3bed]/20 transform z-0 rounded-full shadow-sm" />

          {/* Progress dots */}
          <div className="hidden lg:flex absolute top-32 left-16 right-16 justify-between transform -translate-y-0.5 z-10">
            {steps.map((_, index) => (
              <div key={index} className="w-3 h-3 rounded-full shadow-sm" style={{ background: "#7c3bed" }} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Enhanced step card */}
                <div className="bg-gradient-to-br from-white to-[#7c3bed]/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#7c3bed]/30 h-full">
                  {/* Step number with enhanced design */}
                  <div className="relative mb-8 flex justify-center">
                    <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-[#7c3bed] to-[#7c3bed] text-white text-2xl font-bold shadow-xl">
                      {step.number}
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7c3bed] to-[#7c3bed] opacity-20 blur-lg scale-110" />
                    </div>
                    {/* Enhanced icon overlay */}
                    <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[#7c3bed]/30">
                      <step.icon className="w-6 h-6" style={{ color: "#7c3bed" }} />
                    </div>
                  </div>

                  {/* Enhanced content */}
                  <div className="space-y-6 text-left">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Enhanced mobile connection line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-12 mb-12">
                    <div className="flex flex-col items-center">
                      <div className="w-1 h-12 rounded-full" style={{ background: "linear-gradient(to bottom, #7c3bed, #7c3bed)" }} />
      <div className="w-3 h-3 rounded-full mt-2" style={{ background: "#7c3bed" }} />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
