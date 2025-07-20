"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { TrendingUp, DollarSign, Users, Target, BarChart3 } from "lucide-react"
import Image from "next/image"

const caseStudies = [
  {
    company: "Trudiance Beauty",
    industry: "Beauty & Skincare",
    logo: "TB",
    logoImage: "/logos/trudiance.png",
    challenge: "Trudiance, a beauty brand combining makeup with skincare benefits, struggled with:",
    challengePoints: [
      "Market differentiation among competitors with similar claims",
      "Limited personalization capabilities for diverse customer segments",
      "Rising customer acquisition costs despite significant ad spend"
    ],
    solution: "MyAibo implemented AI-powered marketing transformation:",
    solutionPoints: [
      "Refined brand positioning around \"Active Beauty\" concept",
      "Created personalized content for 4 key customer personas",
      "Deployed AI-optimized performance marketing across channels",
      "Developed \"routine-based\" content strategy to boost retention"
    ],
    results: [
      { icon: TrendingUp, metric: "67%", label: "Increase in conversion rate" },
      { icon: DollarSign, metric: "43%", label: "Reduction in customer acquisition cost" },
      { icon: Users, metric: "78%", label: "Improvement in customer lifetime value" }
    ],
    gradient: "from-purple-500 to-purple-600"
  },
  {
    company: "Iluvia",
    industry: "Premium Haircare",
    logo: "IL",
    logoImage: "/logos/iluvia.png",
    challenge: "Illuvia Pro, a premium haircare brand offering hardwater-optimized shampoo, struggled with:",
    challengePoints: [
      "Inconsistent messaging across multiple e-commerce platforms (Amazon, Flipkart, Nykaa)",
      "Difficulty communicating technical benefits of their hardwater formulation",
      "Underperforming social media presence despite quality product",
      "High customer acquisition costs across digital channels"
    ],
    solution: "MyAibo implemented AI-powered marketing transformation:",
    solutionPoints: [
      "Created scientifically-backed product listings highlighting hard water benefits",
      "Deployed Performance Marketing Agents to optimize budgets across platforms",
      "Developed educational content explaining hard water hair damage",
      "Established data-driven social media strategy with platform-level content"
    ],
    results: [
      { icon: TrendingUp, metric: "156%", label: "Increase in website conversion rate" },
      { icon: Users, metric: "63%", label: "Improvement in Amazon and Nykaa rankings" },
      { icon: Target, metric: "51%", label: "Reduction in customer acquisition costs" },
      { icon: BarChart3, metric: "92%", label: "Growth in repeat purchase rate" }
    ],
    gradient: "from-purple-600 to-purple-700"
  },
  {
    company: "vPersonalize",
    industry: "Enterprise SaaS",
    logo: "VP",
    logoImage: "/logos/vpersonalize.png",
    challenge: "vPersonalize, a customizable fashion platform, struggled with high CAC and low conversion rates due to ineffective targeting and generic messaging. They needed a solution to deliver personalized marketing at scale while maintaining their unique brand voice.",
    challengePoints: [],
    solution: "MyAibo implemented AI-powered marketing strategy:",
    solutionPoints: [
      "Implemented HypeCraft AI to create personalized ABM campaigns targeting key prospects",
      "Deployed Content Flow AI to generate compelling website copy highlighting their solution's benefits",
      "Utilized Social Media Visual Creator to develop platform-specific visual content showcasing their platform",
      "Leveraged Market Pulse to identify emerging industry trends and buyer preferences"
    ],
    results: [
      { icon: TrendingUp, metric: "63%", label: "Increase in conversion rates" },
      { icon: DollarSign, metric: "41%", label: "Reduction in customer acquisition costs" },
      { icon: Target, metric: "47%", label: "Improvement in email engagement metrics" }
    ],
    gradient: "from-purple-600 to-purple-700"
  }
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-40 py-24 bg-gradient-to-b from-white to-purple-50/30">
      <Container>
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
          >
            <span className="text-black">AI Success</span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Stories
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
          </motion.p>
        </div>

        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden hover:shadow-3xl transition-all duration-500">
                <CardContent className="p-0">
  <div className="flex flex-col lg:grid lg:grid-cols-5 gap-0">
                    {/* Content Side - Takes 3 columns */}
    <div className="lg:col-span-3 p-4 sm:p-10 lg:p-16">
                      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-8 sm:mb-10 gap-4">
        <div className="w-20 h-14 sm:w-24 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-50 to-white flex items-center justify-center mr-0 sm:mr-6 shadow-xl border border-purple-100">
          <div className="relative w-16 h-10 sm:w-20 sm:h-12">
                            <Image
                              src={study.logoImage}
                              alt={`${study.company} logo`}
                              fill
                              className="object-contain rounded-lg"
                            />
                          </div>
                        </div>
                        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{study.company}</h3>
          <p className="text-purple-600 font-semibold text-base sm:text-lg">{study.industry}</p>
                        </div>
                      </div>

                      {/* Challenge */}
      <div className="mb-8 sm:mb-10">
        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
          <div className="w-2 h-6 sm:h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full mr-2 sm:mr-3"></div>
                          Challenges
                        </h4>
        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-justify">{study.challenge}</p>
                        {study.challengePoints && study.challengePoints.length > 0 && (
          <ul className="text-gray-700 leading-relaxed space-y-2 sm:space-y-3">
                            {study.challengePoints.map((point, index) => (
                              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-2 sm:mr-4 mt-2 flex-shrink-0"></div>
                                <span className="text-justify">{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Solution */}
      <div className="mb-8 sm:mb-10">
        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
          <div className="w-2 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-2 sm:mr-3"></div>
                          Solution
                        </h4>
        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-justify">{study.solution}</p>
                        {study.solutionPoints && study.solutionPoints.length > 0 && (
          <ul className="text-gray-700 leading-relaxed space-y-2 sm:space-y-3">
                            {study.solutionPoints.map((point, index) => (
                              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 sm:mr-4 mt-2 flex-shrink-0"></div>
                                <span className="text-justify">{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* Results Side - Takes 2 columns */}
    <div className={`lg:col-span-2 bg-gradient-to-br ${study.gradient} p-4 sm:p-8 lg:p-12 text-white relative overflow-hidden flex flex-col justify-center`}>
                      {/* Enhanced Background decoration */}
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/3 rounded-full blur-3xl" />

                      <div className="relative z-10">
                        <div className="text-center mb-10">
                          <h4 className="text-2xl lg:text-3xl font-bold mb-3">Results</h4>
                          <div className="w-16 h-1 bg-white/40 mx-auto rounded-full"></div>
                        </div>

                        <div className="space-y-6">
                          {study.results.map((result, resultIndex) => (
                            <motion.div
                              key={resultIndex}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: resultIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="bg-white/15 rounded-2xl p-6 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                            >
                              <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-white/25 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                  <result.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{result.metric}</div>
                                  <div className="text-purple-100 text-sm lg:text-base leading-relaxed font-medium">{result.label}</div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
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
