"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, DollarSign, Users, Target } from "lucide-react"

const caseStudies = [
  {
    company: "Trudiance Beauty",
    industry: "Beauty & Skincare",
    logo: "TB",
    challenge: "Market differentiation among competitors with similar claims, limited personalization capabilities for diverse customer segments, and rising customer acquisition costs despite significant ad spend.",
    solution: "MyAibo implemented AI-powered marketing transformation with refined brand positioning around 'Active Beauty' concept, created personalized content for 4 key customer personas, deployed AI-optimized performance marketing across channels, and developed routine-based content strategy to boost retention.",
    results: [
      { icon: TrendingUp, metric: "67%", label: "Increase in conversion rate" },
      { icon: DollarSign, metric: "43%", label: "Reduction in customer acquisition cost" },
      { icon: Users, metric: "78%", label: "Improvement in customer lifetime value" },
      { icon: Target, metric: "4.3x", label: "ROI on marketing spend" }
    ],
    gradient: "from-purple-500 to-purple-600"
  },
  {
    company: "Iluvia Pro",
    industry: "Premium Haircare",
    logo: "IP",
    challenge: "Inconsistent messaging across multiple e-commerce platforms (Amazon, Flipkart, Nykaa), difficulty communicating technical benefits of their hardwater formulation, underperforming social media presence despite quality product, and high customer acquisition costs across digital channels.",
    solution: "MyAibo implemented AI-powered marketing transformation with scientifically-backed product listings highlighting hard water benefits, deployed Performance Marketing Agents to optimize budgets across platforms, developed educational content explaining hard water hair damage, and established data-driven social media strategy with platform-level content.",
    results: [
      { icon: TrendingUp, metric: "156%", label: "Increase in website conversion rate" },
      { icon: Target, metric: "63%", label: "Improvement in Amazon and Nykaa rankings" },
      { icon: DollarSign, metric: "51%", label: "Reduction in customer acquisition costs" },
      { icon: Users, metric: "92%", label: "Growth in repeat purchase rate" }
    ],
    gradient: "from-purple-600 to-purple-700"
  }
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-gradient-to-b from-white to-purple-50/30">
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
              Success Stories
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-4xl mx-auto text-justify leading-relaxed"
          >
            Real transformations, real results. See how our AI solutions have revolutionized businesses across industries.
            These comprehensive case studies showcase the strategic implementation process and measurable outcomes achieved
            through our tailored AI solutions.
          </motion.p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Content Side */}
                    <div className="p-8 lg:p-12">
                      {/* Header */}
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${study.gradient} flex items-center justify-center text-white font-bold text-xl mr-4`}>
                          {study.logo}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                          <p className="text-purple-600 font-medium">{study.industry}</p>
                        </div>
                      </div>

                      {/* Challenge */}
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Challenges</h4>
                        <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Solution</h4>
                        <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                      </div>

                      {/* CTA */}
                      <button className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* Results Side */}
                    <div className={`bg-gradient-to-br ${study.gradient} p-8 lg:p-12 text-white`}>
                      <h4 className="text-2xl font-bold mb-8">Results</h4>
                      <div className="grid grid-cols-2 gap-6">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center">
                            <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                              <result.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-3xl font-bold mb-2">{result.metric}</div>
                            <div className="text-purple-100 text-sm leading-tight">{result.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Additional metric */}
                      <div className="mt-8 pt-8 border-t border-white/20">
                        <div className="text-center">
                          <div className="text-4xl font-bold mb-2">3.8x</div>
                          <div className="text-purple-100">ROI on marketing spend</div>
                        </div>
                      </div>
                    </div>
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
