import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { Container } from "@/components/ui/container"

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 bg-white">
          <Container size="md">
            <div className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              
              <p className="text-gray-600 mb-8">
                <strong>Last updated:</strong> January 1, 2024
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing and using MyAibo&apos;s services, you accept and agree to be bound by the
                    terms and provision of this agreement. If you do not agree to abide by the above, 
                    please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
                  <p className="text-gray-600 leading-relaxed">
                    MyAibo provides AI-powered business solutions including but not limited to marketing 
                    automation, data analysis, and custom AI implementations. Our services are designed 
                    to help businesses improve their operations and achieve measurable results.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    As a user of our services, you agree to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Use our services in compliance with applicable laws</li>
                    <li>Not interfere with or disrupt our services</li>
                    <li>Respect intellectual property rights</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Payment terms will be specified in your service agreement. All fees are non-refundable 
                    unless otherwise stated. We reserve the right to modify our pricing with 30 days notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                  <p className="text-gray-600 leading-relaxed">
                    All content, features, and functionality of our services are owned by MyAibo and are 
                    protected by copyright, trademark, and other intellectual property laws. You may not 
                    reproduce, distribute, or create derivative works without our express written permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                  <p className="text-gray-600 leading-relaxed">
                    MyAibo shall not be liable for any indirect, incidental, special, consequential, or 
                    punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                    or other intangible losses, resulting from your use of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may terminate or suspend your access to our services immediately, without prior 
                    notice or liability, for any reason whatsoever, including without limitation if you 
                    breach the Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right to modify or replace these Terms at any time. If a revision is 
                    material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <p className="text-gray-600">
                      <strong>Email:</strong> legal@myaibo.com<br />
                      <strong>Address:</strong> MyAibo, San Francisco, CA
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
