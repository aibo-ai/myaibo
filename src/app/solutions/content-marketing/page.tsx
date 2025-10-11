import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Content Marketing That Actually Converts | MyAibo - Strategic Content Solutions",
  description: "Build a content engine that generates qualified leads (B2B) or drives sales (D2C). Stop publishing into the void with our strategic content marketing.",
  keywords: "content marketing, content strategy, B2B content, D2C content, content creation, digital marketing, lead generation",
};

export default function ContentMarketingPage() {
  return (
    <>
      <Header />
      <main className="pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16 lg:py-24">
          <Container>
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                Content Marketing That Actually Converts
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Build a content engine that generates qualified leads (B2B) or drives sales (D2C). Stop publishing into the void.
              </p>
              <div className="flex justify-center mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg border">
                  <p className="text-lg font-semibold text-gray-800">
                    <span className="text-purple-600 font-bold">210% avg. engagement increase</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-xl font-bold">
                  Audit Your Content
                </Button>
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
                Content marketing isn't about publishing more—it's about publishing smarter. The best content strategies align every piece of content with specific business outcomes
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
            
            <div className="text-center">
              <p className="text-xl text-gray-600 font-semibold">
                You're publishing. Nobody's reading. Nothing's converting.
              </p>
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
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Foundation
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Audience research</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Journey mapping</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Competitive analysis</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Channel strategy</h4>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Creation
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Topic clusters</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Multi-format production</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Channel wise content structuring</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Brand voice</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">SEO + CRO optimization</h4>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Measurement
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Attribution modeling</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Engagement tracking</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">ROI analysis</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Continuous optimization</h4>
                  </div>
                </div>
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
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Educational Authority
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Original research and data</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Technical frameworks</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Problem-solving deep-dives</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Best practice guides</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Resource libraries</h4>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Demand Generation
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Problem-aware blog content</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Solution comparisons</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Interactive calculators</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Webinar series</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Video content</h4>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Sales Enablement
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Case studies with metrics</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Product comparison pages</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">ROI justification tools</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Implementation guides</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Battle cards</h4>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Customer Marketing
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Onboarding campaigns</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Feature announcements</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Success spotlights</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Community content</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Upsell plays</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: "#7c3bed" }}>
                Metrics We Track:
              </h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Content-influenced MQLs/SQLs</h4>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Pipeline by content type</h4>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Sales cycle velocity</h4>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">CAC from content</h4>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 lg:p-12 rounded-lg text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
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
                The Opportunity: Content builds affinity that turns buyers into evangelists. It's relationship infrastructure.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Lifestyle & Brand
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Visual storytelling</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Behind-the-scenes</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Founder stories</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Values and mission</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Sustainability narrative</h4>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Product Education
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">How-to guides</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Styling inspiration</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Product care</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Ingredient stories</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Selection guides</h4>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Social Commerce
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">UGC campaigns</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Influencer collabs</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Customer testimonials</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Unboxing content</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Live shopping</h4>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Community
                </h3>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Customer features</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Ambassador programs</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Hashtag campaigns</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Contests</h4>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Co-creation</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: "#7c3bed" }}>
                Metrics We Track:
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Content-attributed revenue</h4>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Email growth + engagement</h4>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Social engagement rate</h4>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">UGC volume</h4>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">CLV by segment</h4>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Return customer rate</h4>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 lg:p-12 rounded-lg text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
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
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Stop publishing into the void. Let's create content that actually converts and drives business results.
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-xl font-bold">
                Audit Your Content
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}