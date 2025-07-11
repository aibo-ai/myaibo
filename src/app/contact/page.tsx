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
declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormReady?: () => void;
          onFormSubmit?: () => void;
        }) => void;
      };
    };
  }
}

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
    // Test script accessibility first
    const testScriptAccess = async () => {
      try {
        const response = await fetch('https://js-na2.hsforms.net/forms/embed/23064856.js', {
          method: 'HEAD',
          mode: 'no-cors'
        })
        console.log('HubSpot script is accessible')
        return true
      } catch (error) {
        console.error('HubSpot script accessibility test failed:', error)
        return false
      }
    }

    // Simple HubSpot form loading
    const loadHubSpotForm = async () => {
      // Test if script is accessible
      const isAccessible = await testScriptAccess()
      if (!isAccessible) {
        console.error('HubSpot script not accessible, trying iframe fallback')
        showIframeFallback()
        return
      }

      // Check if HubSpot script already exists
      if (window.hbspt) {
        createForm()
        return
      }

      // Load HubSpot script
      const script = document.createElement('script')
      script.src = 'https://js-na2.hsforms.net/forms/embed/23064856.js'
      script.async = true
      script.crossOrigin = 'anonymous'

      script.onload = () => {
        console.log('✅ HubSpot script loaded successfully')
        console.log('Script content length:', script.innerHTML?.length || 'N/A')
        console.log('Immediate window.hbspt check:', !!window.hbspt)
        // Wait for HubSpot to be available
        let attempts = 0
        const maxAttempts = 100 // 10 seconds with 100ms intervals

        const checkHubSpot = setInterval(() => {
          attempts++
          console.log(`Checking HubSpot availability (attempt ${attempts}/100):`, {
            'window.hbspt exists': !!window.hbspt,
            'window.hbspt.forms exists': !!(window.hbspt && window.hbspt.forms),
            'window keys containing "hb"': Object.keys(window).filter(key => key.toLowerCase().includes('hb')),
            'all window keys count': Object.keys(window).length
          })

          if (window.hbspt && window.hbspt.forms) {
            clearInterval(checkHubSpot)
            console.log('✅ HubSpot forms API is available!')
            createForm()
          } else if (attempts >= maxAttempts) {
            clearInterval(checkHubSpot)
            console.error('❌ HubSpot failed to initialize after 10 seconds')
            console.error('Final window state:', {
              'window.hbspt': window.hbspt,
              'typeof window.hbspt': typeof window.hbspt,
              'window.hbspt keys': window.hbspt ? Object.keys(window.hbspt) : 'N/A'
            })
            showIframeFallback()
          }
        }, 100)
      }

      script.onerror = (error) => {
        console.error('Failed to load HubSpot script:', error)
        console.error('Script URL:', script.src)
        console.error('This could be due to:')
        console.error('1. Network connectivity issues')
        console.error('2. Ad blockers blocking HubSpot')
        console.error('3. CORS policy restrictions')
        console.error('4. Invalid portal ID or form ID')
        showIframeFallback()
      }

      document.head.appendChild(script)
    }

    const createForm = () => {
      try {
        console.log('Creating HubSpot form with CORRECTED IDs:', {
          region: "na2",
          portalId: "23064856",
          formId: "ffaaff69-9dd4-4469-974d-d39a5d83f672",
          target: "#hubspot-form-container"
        })

        window.hbspt.forms.create({
          region: "na2",
          portalId: "23064856",
          formId: "ffaaff69-9dd4-4469-974d-d39a5d83f672",
          target: "#hubspot-form-container",
          onFormReady: function() {
            console.log('HubSpot form is ready')
            // Hide loading message
            const loadingDiv = document.getElementById('form-loading')
            if (loadingDiv) {
              loadingDiv.style.display = 'none'
            }
          },
          onFormSubmit: function() {
            console.log('HubSpot form submitted')
          }
        })

        console.log('HubSpot form creation initiated')
      } catch (error) {
        console.error('Error creating HubSpot form:', error)
        showIframeFallback()
      }
    }

    const showIframeFallback = () => {
      const container = document.getElementById('hubspot-form-container')
      const loading = document.getElementById('form-loading')
      const iframe = document.getElementById('hubspot-iframe-fallback')

      console.log('🔄 Trying alternative approach - showing backup form directly')

      // Hide loading and main container
      if (loading) loading.style.display = 'none'
      if (container) container.style.display = 'none'

      // Skip iframe and go directly to backup form for now
      showBackupForm()
    }

    const showBackupForm = () => {
      const container = document.getElementById('hubspot-form-container')
      const loading = document.getElementById('form-loading')
      const iframe = document.getElementById('hubspot-iframe-fallback')
      const backup = document.getElementById('backup-form')

      console.log('Showing backup form')

      // Hide all other elements
      if (loading) loading.style.display = 'none'
      if (container) container.style.display = 'none'
      if (iframe) iframe.style.display = 'none'

      // Show backup form
      if (backup) {
        backup.classList.remove('hidden')
      }
    }

    // Log form details for debugging
    console.log('Attempting to load HubSpot form with CORRECTED IDs:')
    console.log('Portal ID: 23064856 (corrected from 243268505)')
    console.log('Form ID: ffaaff69-9dd4-4469-974d-d39a5d83f672 (corrected from ffaff69a-77d4-4f1a-974d-39a6d83f2672)')
    console.log('Region: na2')
    console.log('Script URL: https://js-na2.hsforms.net/forms/embed/23064856.js')

    // Start loading
    loadHubSpotForm()

    // Fallback timer - if form doesn't load after 8 seconds, try iframe
    const fallbackTimer = setTimeout(() => {
      const container = document.getElementById('hubspot-form-container')
      const loading = document.getElementById('form-loading')

      console.log('Checking form status after 8 seconds...')
      console.log('Container children count:', container?.children.length)
      console.log('Loading display:', loading?.style.display)

      if (container && container.children.length === 0) {
        console.log('HubSpot form timeout, trying iframe fallback')
        showIframeFallback()
      }
    }, 8000)

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

                    {/* HubSpot Form Container */}
                    <div
                      id="hubspot-form-container"
                      className="min-h-[400px]"
                    ></div>

                    {/* Alternative HubSpot Iframe (hidden by default) */}
                    <div id="hubspot-iframe-fallback" className="hidden">
                      <div className="text-center py-8">
                        <p className="text-gray-600 mb-4">Loading alternative contact form...</p>
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
                      </div>
                    </div>



                    {/* Loading message */}
                    <div id="form-loading" className="text-center py-8">
                      <p className="text-gray-600">Loading form...</p>
                      <div className="mt-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto"></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">If this takes too long, we'll show an alternative form</p>
                    </div>

                    {/* Backup Contact Form */}
                    <div id="backup-form" className="hidden">
                      <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-blue-800 text-sm">
                          📧 <strong>Alternative Contact Form</strong> - We'll get back to you within 24 hours!
                        </p>
                      </div>
                      <form
                        className="space-y-6"
                        onSubmit={(e) => {
                          e.preventDefault()
                          alert('Thank you for your message! We will get back to you soon. For immediate assistance, please email us at info@myaibo.in')
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
