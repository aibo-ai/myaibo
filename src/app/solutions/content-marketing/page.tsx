import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Content Marketing Strategies That Build Pipeline & Drive Sales | B2B & D2C Focus",
  description: "Create content that converts: qualified leads for B2B, direct sales for D2C. Our framework boosts engagement 210% via research, creation, and ROI tracking. Audit your content strategy free.",
  keywords: "content marketing strategies, B2B content pipeline, D2C content sales, topic clusters, content ROI measurement, demand generation content, UGC campaigns, brand storytelling content",
};

export default function ContentMarketingPage() {
  return (
    <>
      <Header />
      <main className="pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16 lg:py-24">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/content.jpg"
                  alt="Content Marketing Illustration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                  Content Marketing That Actually Converts
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
                  Build a content engine that generates qualified leads (B2B) or drives sales (D2C). Stop publishing into the void.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-xl font-bold" asChild>
                    <a href="https://outlook.office365.com/book/MyAiboConsultation@myaibo.in/?ismsaljsauthenabled=true">Book Strategy session</a>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Our Framework */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                Our Framework
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 mr-3 flex-shrink-0" style={{ color: "#7c3bed" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "#7c3bed" }}>
                    Foundation
                  </h3>
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex items-center">
                    <span className="text-sm mr-2" style={{ color: "#7C3BED" }}>→</span>
                    <span className="text-gray-800 text-sm">Audience research</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm mr-2" style={{ color: "#7C3BED" }}>→</span>
                    <span className="text-gray-800 text-sm">Journey mapping</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm mr-2" style={{ color: "#7C3BED" }}>→</span>
                    <span className="text-gray-800 text-sm">Competitive analysis</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm mr-2" style={{ color: "#7C3BED" }}>→</span>
                    <span className="text-gray-800 text-sm">Channel strategy</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 mr-3 flex-shrink-0" style={{ color: "#7c3bed" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "#7c3bed" }}>
                    Creation
                  </h3>
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex items-center">
                    <span className="text-sm mr-2" style={{ color: "#7C3BED" }}>→</span>
                    <span className="text-gray-800 text-sm">Topic clusters</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm mr-2" style={{ color: "#7C3BED" }}>→</span>
                    <span className="text-gray-800 text-sm">Multi-format production</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm mr-2" style={{ color: "#7C3BED" }}>→</span>
                    <span className="text-gray-800 text-sm">Channel wise content structuring</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm mr-2" style={{ color: "#7C3BED" }}>→</span>
                    <span className="text-gray-800 text-sm">Brand voice</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 mr-3 flex-shrink-0" style={{ color: "#7c3bed" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "#7c3bed" }}>
                    Measurement
                  </h3>
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex items-center">
                    <span className="text-sm mr-2" style={{ color: "#7C3BED" }}>→</span>
                    <span className="text-gray-800 text-sm">Attribution modeling</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm mr-2" style={{ color: "#7C3BED" }}>→</span>
                    <span className="text-gray-800 text-sm">Engagement tracking</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm mr-2" style={{ color: "#7C3BED" }}>→</span>
                    <span className="text-gray-800 text-sm">ROI analysis</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm mr-2" style={{ color: "#7C3BED" }}>→</span>
                    <span className="text-gray-800 text-sm">Continuous optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* The Problem */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                The Problem
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Content marketing isn&apos;t about publishing more, it&apos;s about publishing smarter. The best content strategies align every piece of content with specific outcomes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg border text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
                <p className="text-gray-600">of blog posts get zero Google traffic</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">13</div>
                <p className="text-gray-600">pieces consumed by B2B buyers before purchase</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3x</div>
                <p className="text-gray-600">higher CLV for D2C brands with strong content</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">62%</div>
                <p className="text-gray-600">less cost than paid ads for strategic content</p>
              </div>
            </div>
            
          </Container>
        </section>

        {/* B2B Content */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                B2B Content
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                The Challenge: Your consumers are skeptical, busy, and bombarded with mediocre content. Breaking through requires substance, not just surface-level thought leadership.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <div className="grid lg:grid-cols-2 gap-6 items-center h-full">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      Educational Authority
                    </h3>
                    <ul className="space-y-2 flex-1">
                      <li>• <strong>Original research and data</strong></li>
                      <li>• <strong>Technical frameworks</strong></li>
                      <li>• <strong>Problem-solving deep-dives</strong></li>
                      <li>• <strong>Best practice guides</strong></li>
                      <li>• <strong>Resource libraries</strong></li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Image
                      src="/content-b2b-education.jpg"
                      alt="Educational Authority"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <div className="grid lg:grid-cols-2 gap-6 items-center h-full">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      Demand Generation
                    </h3>
                    <ul className="space-y-2 flex-1">
                      <li>• <strong>Problem-aware blog content</strong></li>
                      <li>• <strong>Solution comparisons</strong></li>
                      <li>• <strong>Interactive calculators</strong></li>
                      <li>• <strong>Webinar series</strong></li>
                      <li>• <strong>Video content</strong></li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Image
                      src="/content-b2b-demand-generation.jpg"
                      alt="Demand Generation"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <div className="grid lg:grid-cols-2 gap-6 items-center h-full">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      Sales Enablement
                    </h3>
                    <ul className="space-y-2 flex-1">
                      <li>• <strong>Case studies with metrics</strong></li>
                      <li>• <strong>Product comparison pages</strong></li>
                      <li>• <strong>ROI justification tools</strong></li>
                      <li>• <strong>Implementation guides</strong></li>
                      <li>• <strong>Battle cards</strong></li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Image
                      src="/content-b2b-sales-enablement.jpg"
                      alt="Sales Enablement"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <div className="grid lg:grid-cols-2 gap-6 items-center h-full">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      Customer Marketing
                    </h3>
                    <ul className="space-y-2 flex-1">
                      <li>• <strong>Onboarding campaigns</strong></li>
                      <li>• <strong>Feature announcements</strong></li>
                      <li>• <strong>Success spotlights</strong></li>
                      <li>• <strong>Community content</strong></li>
                      <li>• <strong>Upsell plays</strong></li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Image
                      src="/content-b2b-customer-marketing.jpg"
                      alt="Customer Marketing"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                Business Impact
              </h2>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 lg:p-12 rounded-lg text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center">
                B2B Productivity Platform Result
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$1.2M</div>
                  <div className="text-lg">pipeline from content in 12 months</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">23%</div>
                  <div className="text-lg">higher deal size from content-engaged prospects</div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* D2C Content */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                D2C Content
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                The Opportunity: Content builds affinity that turns buyers into evangelists. It&apos;s relationship infrastructure.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <div className="grid lg:grid-cols-2 gap-6 items-center h-full">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      Lifestyle & Brand
                    </h3>
                    <ul className="space-y-2 flex-1">
                      <li>• <strong>Visual storytelling</strong></li>
                      <li>• <strong>Behind-the-scenes</strong></li>
                      <li>• <strong>Founder stories</strong></li>
                      <li>• <strong>Values and mission</strong></li>
                      <li>• <strong>Sustainability narrative</strong></li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Image
                      src="/content-d2c-brand.jpg"
                      alt="Lifestyle & Brand"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <div className="grid lg:grid-cols-2 gap-6 items-center h-full">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      Product Education
                    </h3>
                    <ul className="space-y-2 flex-1">
                      <li>• <strong>How-to guides</strong></li>
                      <li>• <strong>Styling inspiration</strong></li>
                      <li>• <strong>Product care</strong></li>
                      <li>• <strong>Ingredient stories</strong></li>
                      <li>• <strong>Selection guides</strong></li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Image
                      src="/content-d2c-education.jpg"
                      alt="Product Education"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <div className="grid lg:grid-cols-2 gap-6 items-center h-full">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      Social Commerce
                    </h3>
                    <ul className="space-y-2 flex-1">
                      <li>• <strong>UGC campaigns</strong></li>
                      <li>• <strong>Influencer collabs</strong></li>
                      <li>• <strong>Customer testimonials</strong></li>
                      <li>• <strong>Unboxing content</strong></li>
                      <li>• <strong>Live shopping</strong></li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Image
                      src="/content-d2c-social.jpg"
                      alt="Social Commerce"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <div className="grid lg:grid-cols-2 gap-6 items-center h-full">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      Community
                    </h3>
                    <ul className="space-y-2 flex-1">
                      <li>• <strong>Customer features</strong></li>
                      <li>• <strong>Ambassador programs</strong></li>
                      <li>• <strong>Hashtag campaigns</strong></li>
                      <li>• <strong>Contests</strong></li>
                      <li>• <strong>Co-creation</strong></li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Image
                      src="/content-d2c-community.jpg"
                      alt="Community"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border mb-8">
              <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: "#7c3bed" }}>
                Metrics We Track:
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">
                <div 
                  className="px-8 py-4 rounded-full shadow-lg flex-1 max-w-xs"
                  style={{ backgroundColor: "#7c3bed" }}
                >
                  <h4 className="font-bold text-white text-center text-sm md:text-base">Content led revenue</h4>
                </div>
                <div 
                  className="px-8 py-4 rounded-full shadow-lg flex-1 max-w-xs"
                  style={{ backgroundColor: "#7c3bed" }}
                >
                  <h4 className="font-bold text-white text-center text-sm md:text-base">Email engagement</h4>
                </div>
                <div 
                  className="px-8 py-4 rounded-full shadow-lg flex-1 max-w-xs"
                  style={{ backgroundColor: "#7c3bed" }}
                >
                  <h4 className="font-bold text-white text-center text-sm md:text-base">Social engagement rate</h4>
                </div>
                <div 
                  className="px-8 py-4 rounded-full shadow-lg flex-1 max-w-xs"
                  style={{ backgroundColor: "#7c3bed" }}
                >
                  <h4 className="font-bold text-white text-center text-sm md:text-base">CAC from content</h4>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                Business Impact
              </h2>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 lg:p-12 rounded-lg text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center">
                D2C Apparel Brand Result
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">180K</div>
                  <div className="text-lg">email list</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">43%</div>
                  <div className="text-lg">of monthly revenue from email</div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8" style={{ color: "#7c3bed" }}>
                Ready to Build Your Content Engine?
              </h2>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-xl font-bold" asChild>
                <a href="https://outlook.office365.com/book/MyAiboConsultation@myaibo.in/?ismsaljsauthenabled=true">Book Strategy session</a>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}