import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
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
    <div>
      <Header />
      <main className="pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/SEO.jpeg"
                  alt="SEO Services"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                  SEO That Drives Results
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Stop losing customers to competitors. We optimize your entire search presence to capture high-intent buyers at every stage of their journey.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-xl font-bold"
                    asChild
                  >
                    <a href="https://outlook.office365.com/book/MyAiboConsultation@myaibo.in/?ismsaljsauthenabled=true">Book Strategy session</a>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                The Problem
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex items-center space-x-4">
                <Image
                  src="/seo-b2b.jpg"
                  alt="B2B SEO"
                  width={80}
                  height={80}
                  className="rounded-lg flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#7c3bed" }}>
                    B2B: You're invisible when buyers research
                  </h3>
                  <p className="text-gray-600">
                    Your prospects are searching for solutions, but they're finding your competitors instead. You need to be there when they're ready to buy.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src="/seo-d2c.jpg"
                  alt="D2C SEO"
                  width={80}
                  height={80}
                  className="rounded-lg flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#7c3bed" }}>
                    D2C: E-commerce giants outrank you
                  </h3>
                  <p className="text-gray-600">
                    Paid ads are bleeding you dry. E-Commerce outranks you for your own products. You need sustainable customer acquisition.
                  </p>
                </div>
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
                      <li>• <strong>Competitive gaps</strong></li>
                      <li>• <strong>Search intent</strong></li>
                      <li>• <strong>Quick wins</strong></li>
                      <li>• <strong>Technical audit</strong></li>
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
                      <li>• <strong>Technical fixes</strong></li>
                      <li>• <strong>Site architecture</strong></li>
                      <li>• <strong>Content strategy</strong></li>
                      <li>• <strong>Conversion optimization</strong></li>
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
                      <li>• <strong>Content execution</strong></li>
                      <li>• <strong>Link building</strong></li>
                      <li>• <strong>Performance tracking</strong></li>
                      <li>• <strong>Revenue attribution</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: "#7c3bed" }}>
                We Track What Matters:
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">
                <div 
                  className="px-8 py-4 rounded-full shadow-lg flex-1 max-w-xs"
                  style={{ backgroundColor: "#7c3bed" }}
                >
                  <h4 className="font-bold text-white text-center text-sm md:text-base">Pipeline from organic traffic</h4>
                </div>
                <div 
                  className="px-8 py-4 rounded-full shadow-lg flex-1 max-w-xs"
                  style={{ backgroundColor: "#7c3bed" }}
                >
                  <h4 className="font-bold text-white text-center text-sm md:text-base">Market share of voice</h4>
                </div>
                <div 
                  className="px-8 py-4 rounded-full shadow-lg flex-1 max-w-xs"
                  style={{ backgroundColor: "#7c3bed" }}
                >
                  <h4 className="font-bold text-white text-center text-sm md:text-base">Search-to-conversion paths</h4>
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
                The Reality: Buyers conduct 12+ searches before engaging with sales. Your SEO strategy must address every stage of their research journey to capture and convert them.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <div className="grid lg:grid-cols-2 gap-6 items-center h-full">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      Bottom-Funnel Dominance
                    </h3>
                    <ul className="space-y-2 flex-1">
                      <li>• <strong>"X vs Y" comparison pages</strong></li>
                      <li>• <strong>"Best [solution] for enterprise"</strong></li>
                      <li>• <strong>Pricing page optimization</strong></li>
                      <li>• <strong>Alternative and competitor pages</strong></li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Image
                      src="/seo-b2b-bottom.jpg"
                      alt="Bottom-Funnel Dominance"
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
                      Mid-Funnel Authority
                    </h3>
                    <ul className="space-y-2 flex-1">
                      <li>• <strong>Technical documentation SEO</strong></li>
                      <li>• <strong>Problem-solution content hubs</strong></li>
                      <li>• <strong>Integration/compatibility pages</strong></li>
                      <li>• <strong>Use case pages by vertical</strong></li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Image
                      src="/seo-b2b-middle.jpg"
                      alt="Mid-Funnel Authority"
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
                      Top-Funnel Leadership
                    </h3>
                    <ul className="space-y-2 flex-1">
                      <li>• <strong>Industry trend content</strong></li>
                      <li>• <strong>Thought leadership pieces</strong></li>
                      <li>• <strong>Educational resources</strong></li>
                      <li>• <strong>Brand awareness campaigns</strong></li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Image
                      src="/seo-b2b-top.jpg"
                      alt="Top-Funnel Leadership"
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
                      Technical Execution
                    </h3>
                    <ul className="space-y-2 flex-1">
                      <li>• <strong>Site speed optimization</strong></li>
                      <li>• <strong>Core Web Vitals</strong></li>
                      <li>• <strong>Schema markup</strong></li>
                      <li>• <strong>Mobile optimization</strong></li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Image
                      src="/seo-b2b-technical-execution.jpg"
                      alt="Technical Execution"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
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
                The Opportunity: With CAC rising across paid channels, organic search offers sustainable customer acquisition at scale for long-term growth.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <div className="grid lg:grid-cols-2 gap-6 items-center h-full">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      Product Discovery
                    </h3>
                    <ul className="space-y-2 flex-1">
                      <li>• <strong>Product page optimization</strong></li>
                      <li>• <strong>Category page authority building</strong></li>
                      <li>• <strong>Product schema for Google Shopping</strong></li>
                      <li>• <strong>Image optimization for visual search</strong></li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Image
                      src="/seo-d2c-product-discovery.jpg"
                      alt="Product Discovery"
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
                      Content Commerce
                    </h3>
                    <ul className="space-y-2 flex-1">
                      <li>• <strong>Buying guides that rank + convert</strong></li>
                      <li>• <strong>How-to content for purchase research</strong></li>
                      <li>• <strong>Comparison content ("X vs Y")</strong></li>
                      <li>• <strong>Seasonal content calendars</strong></li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Image
                      src="/seo-d2c-content-commerce.jpg"
                      alt="Content Commerce"
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
                      Omnichannel
                    </h3>
                    <ul className="space-y-2 flex-1">
                      <li>• <strong>Local SEO for retail locations</strong></li>
                      <li>• <strong>Store locator optimization</strong></li>
                      <li>• <strong>"Near me" search capture</strong></li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Image
                      src="/seo-d2c-omnichannel.jpg"
                      alt="Omnichannel"
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
                      Technical E-commerce
                    </h3>
                    <ul className="space-y-2 flex-1">
                      <li>• <strong>Site speed for conversions</strong></li>
                      <li>• <strong>Mobile shopping experience</strong></li>
                      <li>• <strong>Faceted navigation handling</strong></li>
                      <li>• <strong>Duplicate content management</strong></li>
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Image
                      src="/seo-d2c-technical-ecommerce.jpg"
                      alt="Technical E-commerce"
                      width={300}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                Ready to Dominate Search?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Stop losing customers to competitors. Let's build your search presence that converts.
              </p>
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-xl font-bold"
                asChild
              >
                <a href="/contact">Book Strategy session</a>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
