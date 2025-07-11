"use client"

import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Target, Eye, Heart, Users, Lightbulb, TrendingUp } from "lucide-react"

const founders = [
  {
    name: "Tathagat Bagchi",
    role: "Co-Founder",
    bio: "Sales leader with 15+ years at Flipkart and InMobi, now building scalable AI-driven solutions.",
    avatar: "TB",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    name: "Vamsi Krishna Kaki",
    role: "Co-Founder",
    bio: "Ex-Zomato and Leena.ai, combining product thinking with AI to power intelligent marketing transformation.",
    avatar: "VK",
    gradient: "from-purple-600 to-purple-700"
  }
]

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every solution we build is designed to deliver measurable business impact and ROI."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Complete clarity in our processes, pricing, and progress. No hidden costs or surprises."
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We&apos;re partners in your transformation journey."
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We work as an extension of your team, not just an external vendor."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Cutting-edge AI solutions that give you a competitive advantage."
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused",
    description: "Building scalable solutions that grow with your business needs."
  }
]

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">


        {/* Vision Section */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                    Vision
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We&apos;re on a mission to democratize AI and make it accessible to businesses of all sizes. Our team of AI experts and business strategists work together to create solutions that don&apos;t just impress—they deliver real, measurable results.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-8"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">3.8x</div>
                    <div className="text-sm text-gray-600">Average ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Founders Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50/30">
          <Container>
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Meet Our{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  Founders
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                Led by industry veterans with decades of combined experience in AI, machine learning, and business transformation.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${founder.gradient} flex items-center justify-center text-white text-2xl font-bold`}>
                        {founder.avatar}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                      <p className="text-purple-600 font-medium mb-4">{founder.role}</p>
                      <p className="text-gray-600 leading-relaxed">{founder.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <Container>
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Our{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  Values
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                The principles that guide everything we do and shape how we work with our clients.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 mb-6">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>


      </main>

      <Footer />
    </div>
  )
}
