"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "From struggling to scaling. MyAibo's AI platform transformed our customer acquisition from a cost center into a profit engine. 52% conversion increase in three months? That's not just growth—that's exponential success.",
    author: "CEO, vPersonalize",
    company: "vPersonalize",
    logo: "vP",
    rating: 5,
    gradient: "from-purple-500 to-purple-600"
  },
  {
    quote: "The precision we've been searching for. After trying countless solutions, MyAibo finally cracked the code. Their AI doesn't just target customers—it finds the exact people who will love our brand and buy repeatedly. Our ROI has never been higher.",
    author: "CEO, Iluvia",
    company: "Iluvia",
    logo: "IL",
    rating: 5,
    gradient: "from-purple-600 to-purple-700"
  }
]

export function Testimonials() {
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
            What Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-4xl mx-auto text-justify leading-relaxed"
          >
            Don&apos;t just take our word for it. Hear directly from the leaders who have experienced transformational results.
            These authentic testimonials showcase the real impact of our AI solutions on business operations,
            growth metrics, and competitive positioning across various industries.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-white to-purple-50/30 hover:shadow-2xl transition-all duration-500 group-hover:scale-105 overflow-hidden">
                <CardContent className="p-10 lg:p-12 relative">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100/30 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Enhanced Quote icon */}
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <Quote className="w-8 h-8 text-white" />
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-30 blur-lg scale-110 transition-all duration-300`} />
                  </div>

                  {/* Enhanced Rating */}
                  <div className="flex items-center mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mr-1 group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>

                  {/* Enhanced Quote */}
                  <blockquote className="text-lg text-gray-700 leading-relaxed mb-10 italic text-justify">
                    "                    &ldquo;{testimonial.quote}&rdquo;"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold mr-4`}>
                      {testimonial.logo}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-purple-600 text-sm">{testimonial.company}</div>
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
