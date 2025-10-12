import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "SEO Services | MyAibo - Search Engine Optimization Solutions",
  description: "Boost your online visibility with our comprehensive SEO services. Technical SEO, content optimization, and digital marketing strategies.",
  keywords: "SEO services, search engine optimization, digital marketing, technical SEO, content marketing, online visibility",
};

export default function SEOPage() {
  return (
    <>
      <Header />
      <main className="pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/SEO.jpeg"
                  alt="SEO Services Illustration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                  Stop Chasing Rankings. Start Onboarding Customers.
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 mb-8">
                  Strategic SEO that puts your company in front of actively searching consumers
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-xl font-bold"
                    asChild
                  >
                    <a href="/contact">Get Free SEO Audit</a>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* The Problem */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8" style={{ color: "#7c3bed" }}>
                The Problem
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Modern SEO isn't about gaming algorithms—it's about connecting your company with the people actively searching for relevant solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/B2B.png"
                      alt="B2B SEO Illustration"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      B2B
                    </h3>
                    <p className="text-gray-600">
                      Competitors own page one for your keywords. If you're invisible in search, you don't exist.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/D2C.png"
                      alt="D2C SEO Illustration"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      D2C
                    </h3>
                    <p className="text-gray-600">
                      Paid ads are bleeding you dry. E-Commerce outranks you for your own products. You need sustainable customer acquisition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Proof/Statistics */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <Container>
            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <p className="text-lg font-semibold text-gray-800 text-center">
                  <span className="text-purple-600 font-bold">50+ B2B & D2C clients</span> witnessed exponential increase in qualified organic traffic
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Our Approach */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                Our Approach
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/intelligence.png"
                      alt="Intelligence Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      Month 1: Intelligence
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Competitive gaps</li>
                      <li>• Search intent</li>
                      <li>• Quick wins</li>
                      <li>• Technical audit</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/foundation.png"
                      alt="Foundation Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      Month 2-3: Foundation
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Technical fixes</li>
                      <li>• Site architecture</li>
                      <li>• Content strategy</li>
                      <li>• Conversion optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/scale.png"
                      alt="Scale Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      Month 4+: Scale
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Content execution</li>
                      <li>• Link building</li>
                      <li>• Performance tracking</li>
                      <li>• Revenue attribution</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: "#7c3bed" }}>
                We Track What Matters:
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Pipeline from organic traffic</h4>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Market share of voice</h4>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Search-to-conversion paths</h4>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* B2B SEO */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                B2B SEO
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                The Reality: Buyers conduct 12+ searches before engaging with sales. Your SEO strategy must address every stage of their research journey.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Bottom-Funnel Dominance
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">"X vs Y" comparison pages</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">"Best [solution] for enterprise"</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Pricing page optimization</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Alternative and competitor pages</h4>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Mid-Funnel Authority
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Technical documentation SEO</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Problem-solution content hubs</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Integration/compatibility pages</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Use case pages by vertical</h4>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Top-Funnel Leadership
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Category definition content</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Original research and data</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Industry trend analysis</h4>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Technical Execution
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Enterprise site architecture</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Developer docs optimization</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Knowledge base SEO</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Schema for rich results</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 lg:p-12 rounded-lg text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                B2B SaaS Client Result
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">340%</div>
                  <p className="opacity-90">Increase in demo requests</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$2.8M</div>
                  <p className="opacity-90">Pipeline contribution in 6 months</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* D2C SEO */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                D2C SEO
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                The Opportunity: With CAC rising across paid channels, organic search offers sustainable customer acquisition at scale.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Product Discovery
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Product page optimization</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Category page authority building</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Product schema for Google Shopping</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Image optimization for visual search</h4>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Content Commerce
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Buying guides that rank + convert</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">How-to content for purchase research</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Comparison content ("X vs Y")</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Seasonal content calendars</h4>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Omnichannel
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Local SEO for retail locations</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Store locator optimization</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">"Near me" search capture</h4>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Technical E-commerce
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Site speed for conversions</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Mobile shopping experience</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Faceted navigation handling</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Duplicate content management</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 lg:p-12 rounded-lg text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                D2C Skincare Client Result
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">76%</div>
                  <p className="opacity-90">Of new customers from organic</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">58%</div>
                  <p className="opacity-90">Reduction in CAC</p>
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
                Ready to Dominate Search Results?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Let our SEO experts analyze your current performance and create a customized strategy to boost your online visibility.
              </p>
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-xl font-bold"
                asChild
              >
                <a href="/contact">Get SEO Audit</a>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
