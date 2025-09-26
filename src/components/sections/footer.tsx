"use client"

import { Container } from "@/components/ui/container"
import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react"
import { useState } from "react"

// const footerLinks = {
//   solutions: [
//     { name: "Solutions", href: "/#solutions" }
//   ],
//   successStories: [
//     { name: "Success Stories", href: "/#case-studies" }
//   ],
//   aboutUs: [
//     { name: "About Us", href: "/about" }
//   ],
//   contactUs: [
//     { name: "Contact Us", href: "/contact" }
//   ]
// }

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/myaibo", icon: Linkedin },
  { name: "YouTube", href: "https://www.youtube.com/@my-aibo", icon: Youtube },
  { name: "X", href: "https://x.com/my_aibo2", icon: Twitter },
  { name: "Instagram", href: "https://www.instagram.com/my_aibo/", icon: Instagram }
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
      setErrorMsg("")


    try {
      // const formData = new FormData()
      // formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '')
      // formData.append('email', email)
      // formData.append('subject', 'New Newsletter Subscription - MyAibo')
      // formData.append('from_name', 'MyAibo Newsletter')
      // formData.append('message', `New newsletter subscription from: ${email}`)

      // const response = await fetch('https://api.web3forms.com/submit', {
      //   method: 'POST',
      //   body: formData
      // })

      // if (response.ok) {
      //   setSubmitStatus('success')
      //   setEmail('')
      // } else {
      //   setSubmitStatus('error')
      // }
       const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })

    if (response.ok) {
      setSubmitStatus('success')
      setEmail('')
    } else {
       const data = await response.json()
      if (data?.error === "already_subscribed") {
        setErrorMsg("This email address is already subscribed.")
      } else {
        setErrorMsg("Something went wrong. Please try again or contact us at info@myaibo.in")
      }
      setSubmitStatus('error')
    }
    } catch (error) {
      console.error('Newsletter subscription error: Please try again or contact us at info@myaibo.in', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Enhanced Newsletter Section */}
      <div className="bg-gradient-to-r from-[#7c3bed] to-[#7c3bed] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

        <Container>
          <div className="py-20 text-center relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Ahead with AI Insights
            </h3>
            <p className="text-lg text-purple-100 mb-10 max-w-3xl mx-auto text-justify leading-relaxed">
              Get the latest AI trends, case studies, and exclusive insights delivered to your inbox monthly.
            </p>
            {/* Newsletter Subscription Form */}
            <div className="max-w-lg mx-auto">
              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="border border-white-500/30 rounded-lg p-6 mb-4">
                    <h4 className="text-white-400 font-semibold mb-2">Successfully Subscribed!</h4>
                    <p className="text-white-300 text-sm">Thank you for subscribing to our newsletter. We&apos;ll keep you updated with the latest AI insights.</p>
                  </div>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="text-[#7c3bed] hover:text-white text-sm underline"
                  >
                    Subscribe another email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7c3bed] focus:border-[#7c3bed]"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting || !email}
                      className="px-6 py-3 bg-white text-[#7c3bed] rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap border border-gray-300"
                    >
                      {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </div>
                  {/* <Link
  href="/unsubscribe"
  className="px-6 py-3 bg-white text-[#7c3bed] rounded-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap border border-gray-300 text-center block"
>
  Unsubscribe
</Link> */}

                  {/* {submitStatus === 'error' && (
                    <div className="text-center">
                      <p className="text-red-300 text-sm">
                        Something went wrong. Please try again or contact us at{' '}
                        <a href="mailto:info@myaibo.in" className="underline hover:text-white">
                          info@myaibo.in
                        </a>
                      </p>
                    </div>
                  )} */}
                  {submitStatus === 'error' && (
  <div className="text-center">
    <p className="text-red-300 text-sm">
      {errorMsg}
    </p>
  </div>
)}
                </form>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Enhanced Main Footer */}
      <Container>
        <div className="pt-10 pb-4">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
            {/* Logo */}
      <div className="flex flex-col items-center lg:items-start">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/MyAibo-logo-white.png" alt="MyAibo" width={600} height={200} className="h-30 w-auto"/>
              </Link>
            </div>

            {/* Contact Info */}
      <div className="flex flex-col items-center lg:items-center">
              <span className="font-bold text-lg mb-2">Contact</span>
              <span className="text-gray-400 mb-2 text-base">info@myaibo.in</span>
            </div>

            {/* Navigation Links */}
      <div className="flex flex-col items-center lg:items-center">
              <Link href="/#solutions" className="text-gray-400 hover:text-white transition-colors font-semibold text-lg mb-2">Solutions</Link>
              <Link href="/#case-studies" className="text-gray-400 hover:text-white transition-colors font-semibold text-lg mb-2">Success Stories</Link>
            </div>
      <div className="flex flex-col items-center lg:items-center">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors font-semibold text-lg mb-2">About Us</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors font-semibold text-lg mb-2">Contact Us</Link>
            </div>
          </div>
          </div>
          {/* Logo and Navigation in same line */}
          {/* <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16 mb-4"> */}
          {/* Logo */}
          {/* <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/MyAibo-logo-white.png" alt="MyAibo" width={600} height={200} className="h-20 lg:h-26 w-auto" />
              </Link>
            </div> */}

          {/* Navigation Links - Horizontal layout */}
          {/* <div className="flex flex-wrap items-center gap-8 lg:gap-12">
              <div>
                {footerLinks.solutions.map((link) => (
                  <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors font-semibold text-lg">
                    {link.name}
                  </Link>
                ))}
              </div> */}

          {/* <div>
                {footerLinks.successStories.map((link) => (
                  <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors font-semibold text-lg">
                    {link.name}
                  </Link>
                ))}
              </div>

              <div>
                {footerLinks.aboutUs.map((link) => (
                  <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors font-semibold text-lg">
                    {link.name}
                  </Link>
                ))}
              </div>

              <div>
                {footerLinks.contactUs.map((link) => (
                  <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors font-semibold text-lg">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div> */}

          {/* Contact Information - Separate section below */}
          {/* <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
            <div className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center mr-4">
                <Mail className="w-5 h-5" />
              </div>
              <span>info@myaibo.in</span>
            </div>
            <div className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center mr-4">
                <MapPin className="w-5 h-5" />
              </div>
              <span>Bengaluru, KA</span>
            </div>
          </div>
        </div> */}

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025, Hillsa Ventures Pvt Ltd. All rights reserved.
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
      </Container>
    </footer>
  )
}
