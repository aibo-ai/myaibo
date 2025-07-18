"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FileText, BarChart3, Zap, MousePointer, Bot, Settings } from "lucide-react"

const solutions = [
  {
    icon: FileText,
    title: "Content That Sells",
    description: "Curated AI-optimized content that captures your voice and converts prospects into customers",
    gradient: "from-purple-500 to-purple-600",
    features: ["Brand voice optimization", "Conversion-focused copy", "Multi-channel content"]
  },
  {
    icon: BarChart3,
    title: "Market Dashboard",
    description: "Real-time competitive intelligence that prevents your next winning move",
    gradient: "from-purple-600 to-purple-700",
    features: ["Competitor analysis", "Market insights", "Strategic recommendations"]
  },
  {
    icon: Zap,
    title: "Creative Crystal Ball",
    description: "AI framework that predicts which campaigns will crush it—before you launch",
    gradient: "from-purple-700 to-purple-800",
    features: ["Campaign prediction", "Performance forecasting", "ROI optimization"]
  },
  {
    icon: MousePointer,
    title: "Conversion Catalyst",
    description: "Turn more browsers into buyers with AI-optimized user experiences",
    gradient: "from-purple-500 to-purple-700",
    features: ["UX optimization", "A/B testing", "Conversion rate boost"]
  },
  {
    icon: Settings,
    title: "Intelligent Operations",
    description: "AI-powered workflow automation that scales your business operations seamlessly",
    gradient: "from-purple-600 to-purple-700",
    features: ["Process automation", "Resource optimization", "Predictive maintenance"]
  },
  {
    icon: Bot,
    title: "Custom Agents",
    description: "No matter the ask, we will build a solution tailored to your specific needs",
    gradient: "from-purple-600 to-purple-800",
    features: ["Bespoke development", "Industry-specific", "Scalable architecture"]
  }
]

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-40 py-24 bg-gradient-to-b from-purple-50/30 to-white">
      <Container>
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              AI Solutions
            </span>{" "}
            That Drive Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-4xl mx-auto text-justify leading-relaxed"
          >
            Powerful AI solutions designed to accelerate your business. Each solution is carefully crafted to address specific business challenges while providing scalable, measurable results that drive long-term success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group ${index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white backdrop-blur-sm group-hover:scale-105 overflow-hidden">
                <CardContent className="p-10 relative">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex justify-center mb-8">
                    <div className={`relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${solution.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <solution.icon className="w-10 h-10 text-white" />
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-30 blur-lg scale-110 transition-all duration-300`} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-6 text-purple-700 transition-colors duration-300 leading-tight text-center">
                    {solution.title}
                  </h3>

                  <p className="text-gray-900 leading-relaxed mb-8 text-justify">
                    {solution.description}
                  </p>

                  <div className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start text-sm text-black">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span className="text-justify">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>


      </Container>
    </section>
  )
}
