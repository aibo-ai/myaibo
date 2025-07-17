"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import Image from "next/image"

const brands = [
  {
    name: "Iluvia",
    logo: "/logos/iluvia.png",
    description: "Beauty & Wellness"
  },
  {
    name: "Trudiance",
    logo: "/logos/trudiance.png",
    description: "Beauty & Wellness"
  },
  {
    name: "Fego",
    logo: "/logos/fego.png",
    description: "Accessories"
  },
  {
    name: "Optimhire",
    logo: "/logos/optimhire.jpeg",
    description: "HR Technology"
  },
  {
    name: "vPersonalize",
    logo: "/logos/vpersonalize.png",
    description: "SaaS"
  },
  {
    name: "Brokenatom",
    logo: "/logos/brokenatom.png",
    description: "SaaS"
  }
]

export function TrustedBrands() {
  return (
    <section className="pt-24 pb-12 bg-white">
      <Container>
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Trusted By
            </span>{" "}
            Leading Brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            List of companies that have transformed their business with our AI solutions
          </motion.p>
        </div>

        {/* Brand logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-purple-100/50 shadow-lg">
                {/* Logo */}
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Brand name */}
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors text-sm">
                  {brand.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500">
                  {brand.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


      </Container>
    </section>
  )
}
