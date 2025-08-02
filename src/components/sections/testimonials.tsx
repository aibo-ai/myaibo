"use client"

import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "From struggling to scaling. MyAibo's AI platform transformed our customer acquisition from a cost center into a profit engine. 52% conversion increase in three months? That's not just growth—that's exponential success.",
    author: "CEO",
    company: "vPersonalize",
    logo: "vP",
    rating: 5,
    gradient: "from-[#7c3bed] to-[#7c3bed]"
  },
  {
    quote: "The precision we've been searching for. After trying countless solutions, MyAibo finally cracked the code. Their AI doesn't just target customers—it finds the exact people who will love our brand and buy repeatedly.",
    author: "CEO",
    company: "Iluvia",
    logo: "IL",
    rating: 5,
    gradient: "from-[#7c3bed] to-[#7c3bed]"
  },
  {
    quote: "MyAibo allowed us to communicate our unique value proposition with clarity while personalizing customer experiences at scale. Higher conversions, lower acquisition costs, and customers who truly understand what makes Trudiance different.",
    author: "Founder",
    company: "Trudiance",
    logo: "TB",
    rating: 5,
    gradient: "from-[#7c3bed] to-[#7c3bed]"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-black">Client</span>{" "}
            <span className="bg-gradient-to-r from-[#7c3bed] to-[#7c3bed] bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-purple-50/30 group-hover:from-purple-50/50 group-hover:to-purple-100/50">
                <CardContent className="p-8 lg:p-10 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-[#7c3bed] group-hover:text-[#7c3bed] transition-colors duration-300" />
                  </div>

                  {/* Star Rating */}
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mr-1 group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>

                  {/* Enhanced Quote */}
                  <blockquote className="text-base text-gray-700 leading-relaxed mb-10 italic text-justify">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold mr-4`}>
                      {testimonial.logo}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-[#7c3bed] transition-colors duration-300">
                        {testimonial.author}
                      </div>
                      <div className="text-[#7c3bed] font-medium">
                        {testimonial.company}
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
