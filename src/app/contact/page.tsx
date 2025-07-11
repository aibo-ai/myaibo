"use client"

import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Mail, MapPin, Calendar } from "lucide-react"
import { useEffect } from "react"

// Declare HubSpot global


const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@myaibo.in",
    description: "Send us an email and we'll respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Bengaluru, Karnataka",
    description: "Schedule an in-person meeting at our office"
  }
]

export default function Contact() {
  useEffect(() => {
    // Load HubSpot script using the official embed method
    const loadHubSpotForm = () => {
      console.log('🚀 Loading HubSpot form with official embed code')

      // Check if script already exists
      if (document.querySelector('script[src*="243268505.js"]')) {
        console.log('HubSpot script already loaded')
        return
      }

      // Create and load the HubSpot script
      const script = document.createElement('script')
      script.src = 'https://js-na2.hsforms.net/forms/embed/243268505.js'
      script.defer = true

      script.onload = () => {
        console.log('✅ HubSpot script loaded successfully')
        // Hide loading message
        const loadingDiv = document.getElementById('form-loading')
        if (loadingDiv) {
          loadingDiv.style.display = 'none'
        }
      }

      script.onerror = (error) => {
        console.error('❌ Failed to load HubSpot script:', error)
        showBackupForm()
      }

      document.head.appendChild(script)
    }

    const showBackupForm = () => {
      const container = document.getElementById('hubspot-form-container')
      const loading = document.getElementById('form-loading')
      const backup = document.getElementById('backup-form')

      console.log('📋 Showing backup contact form')

      // Hide HubSpot elements
      if (loading) loading.style.display = 'none'
      if (container) container.style.display = 'none'

      // Show backup form
      if (backup) {
        backup.classList.remove('hidden')
        backup.style.display = 'block'
      }
    }

    // Start loading HubSpot form
    loadHubSpotForm()

    // Fallback timer - if form doesn't appear after 10 seconds, show backup
    const fallbackTimer = setTimeout(() => {
      const hubspotForm = document.querySelector('.hs-form-frame')
      if (!hubspotForm || hubspotForm.children.length === 0) {
        console.log('⏰ HubSpot form timeout, showing backup form')
        showBackupForm()
      }
    }, 10000)

    return () => {
      clearTimeout(fallbackTimer)
    }
  }, [])

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
                Let's{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
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
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-xl bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Calendar className="w-6 h-6 text-purple-600 mr-3" />
                      <h2 className="text-2xl font-bold text-gray-900">Book Your Free Strategy Session</h2>
                    </div>

                    {/* HubSpot Form - Official Embed */}
                    <div className="hs-form-frame"
                         data-region="na2"
                         data-form-id="ffaff69a-77d4-4f1a-974d-39a6d83f2672"
                         data-portal-id="243268505">
                    </div>

                    {/* Loading message */}
                    <div id="form-loading" className="text-center py-8">
                      <p className="text-gray-600">Loading HubSpot form...</p>
                      <div className="mt-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">Please wait while we load the contact form</p>
                    </div>

                    {/* Primary Contact Form */}
                    <div id="backup-form" className="hidden" style={{display: 'none'}}>
                      <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg">
                        <p className="text-purple-800 text-sm">
                          🚀 <strong>Get Started with AI Solutions</strong> - We&apos;ll respond within 24 hours!
                        </p>
                      </div>
                      <form
                        className="space-y-6"
                        onSubmit={(e) => {
                          e.preventDefault()
                          const formData = new FormData(e.target as HTMLFormElement)
                          const data = Object.fromEntries(formData.entries())
                          console.log('Form submitted:', data)

                          // Show success message
                          const successDiv = document.createElement('div')
                          successDiv.className = 'p-4 bg-green-50 border border-green-200 rounded-lg mb-4'
                          successDiv.innerHTML = `
                            <div class="flex items-center">
                              <div class="text-green-600 mr-3">✅</div>
                              <div>
                                <h4 class="text-green-800 font-semibold">Message Sent Successfully!</h4>
                                <p class="text-green-700 text-sm">Thank you for your interest. We'll get back to you within 24 hours.</p>
                                <p class="text-green-600 text-xs mt-1">For immediate assistance: <a href="mailto:info@myaibo.in" class="underline">info@myaibo.in</a></p>
                              </div>
                            </div>
                          `

                          const form = e.target as HTMLFormElement
                          form.parentNode?.insertBefore(successDiv, form)
                          form.reset()

                          // Remove success message after 10 seconds
                          setTimeout(() => {
                            successDiv.remove()
                          }, 10000)
                        }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                              First Name *
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="Enter your first name"
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                              Last Name *
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="Enter your last name"
                            />
                          </div>
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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

                        <Button
                          type="submit"
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                          onClick={(e) => {
                            e.preventDefault()
                            window.location.href = 'mailto:info@myaibo.in?subject=Strategy Session Request'
                          }}
                        >
                          Send Message
                        </Button>
                      </form>
                    </div>
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Have questions? We're here to help. Reach out through any of these channels 
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
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-purple-600 font-medium mb-1">{info.details}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>



                {/* FAQ Link */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">Frequently Asked Questions</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Find answers to common questions about our AI solutions and implementation process.
                  </p>
                  <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                    View FAQ
                  </Button>
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
