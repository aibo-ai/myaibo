"use client"

import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

const founders = [
  {
    name: "Tathagat Bagchi",
    role: "Co-Founder",
    bio: "Sales leader with 15+ years at Flipkart and InMobi. Now making AI-driven solutions accessible.",
    avatar: "TB",
    gradient: "from-purple-500 to-purple-600",
    linkedinUrl: "https://www.linkedin.com/in/tathagatbagchi/"
  },
  {
    name: "Vamsi Krishna Kaki",
    role: "Co-Founder",
    bio: "Marketing leader with 15+ years at Zomato and Leena.ai. Now combining product thinking with AI to create transformative solutions.",
    avatar: "VK",
    gradient: "from-purple-600 to-purple-700",
    linkedinUrl: "https://www.linkedin.com/in/vamsi-krishna-kaki-3a502229/"
  }
]

// Removed unused values array

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
                  To democratize AI automation and making sophisticated solutions accessible.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6"
              >
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
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
                Industry veterans with 30+ years of combined experience. They bring a unique perspective on building scalable technology, informed by experience spanning early-stage startups to billion-dollar enterprises.
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
                      <p className="text-gray-600 leading-relaxed mb-6">{founder.bio}</p>

                      {/* LinkedIn Link */}
                      <a
                        href={founder.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                        aria-label={`Connect with ${founder.name} on LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
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
