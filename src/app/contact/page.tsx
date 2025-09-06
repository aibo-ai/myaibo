"use client"

import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Mail, Calendar } from "lucide-react"
import React, { useState } from "react"


const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@myaibo.in",
    description: ""
  }
]

export default function Contact() {
  const [result, setResult] = useState("")

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target as HTMLFormElement);

  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you for your interest. We'll get back to you soon");
      (event.target as HTMLFormElement).reset();
    } else {
      setResult(data.message || "An error occurred. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    setResult("An error occurred. Please try again.");
  }
};

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-white">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              >
                Let&apos;s{" "}
                <span className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{ color: "#7c3bed" }}>
                  Transform
                </span>{" "}
                Together
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
              >
                Ready to revolutionize your business with AI? Book your free strategy session 
                and discover how we can drive measurable results for your organization.
              </motion.p>
            </div>
          </Container>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-xl bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Calendar className="w-6 h-6 text-[#7c3bed] mr-3" />
                      <h2 className="text-2xl font-bold text-gray-900">Book Your Free Strategy Session</h2>
                    </div>

                    {/* Web3Forms Contact Form */}
                    <form onSubmit={onSubmit} className="space-y-6">
                      {/* Hidden fields for Web3Forms configuration */}
                      <input type="hidden" name="subject" value="New Contact Form Submission from MyAibo Website" />
                      <input type="hidden" name="from_name" value="MyAibo Team" />
                      <input type="hidden" name="replyto" value="info@myaibo.in" />

                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7c3bed] focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7c3bed] focus:border-transparent"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Enter your company name"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Tell us about your AI needs and goals"
                        ></textarea>
                      </div>

                      {/* Result message */}
                      {result && (
                        <div className={`p-4 rounded-lg ${
                          result === "Thank you for your interest. We'll get back to you soon"
                            ? "bg-green-50 border border-green-200 text-green-800"
                            : result === "Sending...."
                            ? "bg-blue-50 border border-blue-200 text-blue-800"
                            : "bg-red-50 border border-red-200 text-red-800"
                        }`}>
                          <div className="flex items-center">
                            <div className="mr-3">
                              {result === "Thank you for your interest. We'll get back to you soon" ? "✅" :
                               result === "Sending...." ? "⏳" : "❌"}
                            </div>
                            <div>
                              <p className="font-semibold">
                                {result}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={result === "Sending...."}
                        className="w-full bg-[#7c3bed] hover:bg-[#7c3bed] disabled:bg-purple-400 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                      >
                        {result === "Sending...." ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Have questions? We&apos;re here to help. Reach out through any of these channels
                    and our team will get back to you promptly.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-[#7c3bed] to-[#7c3bed] rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-[#7c3bed] font-medium mb-1">{info.details}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>



                {/* FAQ Section */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Does a strategy session have to be in-person?</h4>
                      <p className="text-gray-600 text-sm">No, our strategy sessions can be conducted virtually via video call for your convenience. We accommodate your preferred meeting format.</p>
                    </div>
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Is there any obligation after a free strategy session?</h4>
                      <p className="text-gray-600 text-sm">Absolutely not. Our free strategy session is genuinely free with no strings attached. You&apos;re under no obligation to proceed with our services.</p>
                    </div>
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Any preparations that we need to do for a strategy session?</h4>
                      <p className="text-gray-600 text-sm">Just come prepared to discuss your business challenges and goals. Having basic information about your current processes and pain points will help us provide more targeted insights.</p>
                    </div>
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">What is the mode of engagement?</h4>
                      <p className="text-gray-600 text-sm">We offer flexible engagement models including project-based work, retainer arrangements, and ongoing partnerships based on your specific needs and preferences.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Can we choose not to work after the solution architecture is presented?</h4>
                      <p className="text-gray-600 text-sm">Unfortunately no. The solution architecture is at a post purchase order release stage of the engagement.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>


      </main>

      <Footer />
    </div>
  )
}
