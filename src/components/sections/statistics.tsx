"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { TrendingUp, DollarSign, Zap, Target } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "+47%",
    label: "Efficiency Improvement",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: DollarSign,
    value: "-32%",
    label: "Expense Reduction",
    gradient: "from-purple-600 to-purple-700"
  },
  {
    icon: Zap,
    value: "+56%",
    label: "Productivity Increase",
    gradient: "from-purple-700 to-purple-800"
  },
  {
    icon: Target,
    value: "3.8x",
    label: "Return On Investment",
    gradient: "from-purple-500 to-purple-700"
  }
]

export function Statistics() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#7c3bed] via-[#7c3bed] to-[#7c3bed] text-white relative overflow-hidden">
      {/* Enhanced Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
          >
            Proven AI Development Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white max-w-4xl mx-auto text-justify leading-relaxed"
          >
            Real results from real clients. See the measurable impact our AI solutions have delivered across diverse industries and business models.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-gray-100 hover:border-[#7c3bed] relative overflow-hidden shadow-lg">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Enhanced Icon */}
              <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl`} style={{ background: "linear-gradient(to right, #7c3bed, #7c3bed)" }}>
                <stat.icon className="w-8 h-8 text-white" />
                {/* Icon glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg scale-110 transition-all duration-300" style={{ background: "linear-gradient(to right, #7c3bed, #7c3bed)" }} />
              </div>

                {/* Enhanced Value */}
                <div className="text-4xl md:text-5xl font-bold mb-4 mt-4" style={{ color: "#7c3bed" }}>
                  {stat.value}
                </div>

                {/* Enhanced Label */}
                <h3 className="text-lg font-semibold" style={{ color: "#7c3bed" }}>
                  {stat.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>


      </Container>
    </section>
  )
}
