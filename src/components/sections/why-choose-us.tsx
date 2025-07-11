"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Users, Lightbulb, TrendingUp, Eye } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Built for You",
    description: "Tailored custom AI solutions that adapts to your unique world, not the other way around",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Lightbulb,
    title: "Inventive Resolutions",
    description: "Our solutioning architecture is complex, robust and modular. Best amongst the competition",
    gradient: "from-purple-600 to-purple-700"
  },
  {
    icon: TrendingUp,
    title: "Infinite Scale",
    description: "Multiply your capabilities, not headcount or budget. We build scalable solutions that drive continued growth",
    gradient: "from-purple-700 to-purple-800"
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "No hidden costs and no surprises during development. We work by our ethos of complete clarity with clients",
    gradient: "from-purple-500 to-purple-700"
  }
]

export function WhyChooseUs() {
  return (
    <section id="services" className="pt-12 pb-24 bg-gradient-to-b from-white to-purple-50/30">
      <Container>
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              MyAibo
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-4xl mx-auto text-justify leading-relaxed"
          >
            We deliver AI solutions that transform your business with precision, innovation, and complete transparency.
            Our approach combines technical excellence with deep business understanding, ensuring every solution we create
            drives measurable value and sustainable growth for your organization.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm group-hover:scale-105 group-hover:bg-white">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100/50 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <feature.icon className="w-10 h-10 text-white" />
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-30 blur-lg scale-110 transition-all duration-300`} />
                  </div>

                  <h3 className="text-xl font-bold mb-6 text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-justify">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
