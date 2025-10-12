import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "AI & ML Solutions | MyAibo - Custom AI Development Services",
  description: "Transform your business with cutting-edge AI and Machine Learning solutions. Custom AI development, ML models, and intelligent automation services.",
  keywords: "AI development, machine learning, AI solutions, ML models, artificial intelligence, AI automation",
};

export default function AIMLPage() {
  return (
    <>
      <Header />
      <main className="pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* AI Illustration */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <Image
                    src="/ai-hero-illustration.jpg"
                    alt="AI and Machine Learning Illustration showing neural networks, AI processing, and human interaction with technology"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                    priority
                  />
                </div>
              </div>
              
              {/* Text Content */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                  Transform Your Business with AI and Machine Learning
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Unlock automation, deep insights, and growth with enterprise-grade AI & ML solutions—built, deployed, and optimized by experts who understand your industry's challenges.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-xl font-bold"
                    asChild
                  >
                    <a href="/contact">Book a Strategy Session</a>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* The AI & ML Advantage */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                The AI & ML Advantage
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/cost-effective.png"
                      alt="Cost Effective Automation Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      Cost-Effective Automation
                    </h3>
                    <p className="text-gray-600">
                      Reduce overhead with AI-powered process automation for support, operations, marketing, & more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/smarter-decisions.png"
                      alt="Smart Decisions Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      Smarter Decisions
                    </h3>
                    <p className="text-gray-600">
                      Predictive models provide actionable insights for demand planning, risk analysis, and personalized offers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/user-experience.png"
                      alt="Enhanced User Experience Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      Enhanced User Experience
                    </h3>
                    <p className="text-gray-600">
                      Intelligent chatbots, recommendation engines, and NLP elevate digital engagement and retention.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/competetive-edge.png"
                      alt="Competitive Edge Icon"
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                      Competitive Edge
                    </h3>
                    <p className="text-gray-600">
                      Custom machine learning lets you act faster, adapt instantly, and scale without manual limits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Proof/Statistics Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <Container>
            <div className="text-center">
              <p className="text-6xl lg:text-8xl font-bold text-gray-800 leading-tight">
                <span className="text-purple-600">25+ projects</span> delivered across financial, retail, and SaaS
              </p>
              <p className="text-2xl lg:text-3xl text-gray-600 mt-4">Partnered with leading AI platforms</p>
            </div>
          </Container>
        </section>

        {/* What We Deliver */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                What We Deliver
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1">
                      <Image
                        src="/Custom-AI.jpeg"
                        alt="Custom AI Solutions Illustration"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="order-1 lg:order-2">
                      <h3 className="text-2xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                        Custom AI Solutions
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• <strong>AI-powered workflows</strong></li>
                        <li>• <strong>Chatbots & virtual assistants</strong></li>
                        <li>• <strong>Recommendation engines</strong></li>
                        <li>• <strong>Computer vision solutions</strong></li>
                        <li>• <strong>Predictive analytics</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1">
                      <Image
                        src="/ML-Development.jpg"
                        alt="ML Model Development Illustration"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="order-1 lg:order-2">
                      <h3 className="text-2xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                        ML Model Development
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• <strong>Data preparation & feature engineering</strong></li>
                        <li>• <strong>Supervised & unsupervised training</strong></li>
                        <li>• <strong>Scalable model deployment</strong></li>
                        <li>• <strong>Performance monitoring & retraining</strong></li>
                        <li>• <strong>Model optimization & compression</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1">
                      <Image
                        src="/AI-platform-integration.jpg"
                        alt="AI Platform Integration Illustration"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="order-1 lg:order-2">
                      <h3 className="text-2xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                        AI Platform Integration
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• <strong>CRM & ERP integration</strong></li>
                        <li>• <strong>Marketing platform connectivity</strong></li>
                        <li>• <strong>Third-party API orchestration</strong></li>
                        <li>• <strong>Legacy system modernization</strong></li>
                        <li>• <strong>Real-time data synchronization</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1">
                      <Image
                        src="/AI-Strategy.jpeg"
                        alt="AI Consulting & Strategy Illustration"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="order-1 lg:order-2">
                      <h3 className="text-2xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                        Consulting & Strategy
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• <strong>Use case discovery & prioritization</strong></li>
                        <li>• <strong>ROI calculation & feasibility analysis</strong></li>
                        <li>• <strong>AI roadmap creation</strong></li>
                        <li>• <strong>Technology stack assessment</strong></li>
                        <li>• <strong>Team enablement & training</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* How We Work */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                How We Work
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Discovery & Use Case Mapping
                </h3>
                <p className="text-gray-600">
                  Identify key opportunities to automate or enhance your business with AI
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Rapid Prototyping
                </h3>
                <p className="text-gray-600">
                  Develop proof-of-concepts using modern ML frameworks
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Production-Grade Engineering
                </h3>
                <p className="text-gray-600">
                  Build scalable pipelines for data ingestion, model management, and cloud deployment
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Ongoing Optimization
                </h3>
                <p className="text-gray-600">
                  Monitor KPIs, retrain models, and continuously improve results
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Tech Stack & Platforms */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                Tech Stack & Platforms
              </h2>
              <p className="text-xl text-gray-600">Comprehensive expertise across the AI/ML development ecosystem</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  AI Cloud Providers
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Enterprise-grade cloud infrastructure for scalable AI deployment and hosting
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>OpenAI, Ollama, Claude, Mistral</strong></li>
                  <li>• <strong>Google Vertex AI</strong></li>
                  <li>• <strong>Amazon SageMaker</strong></li>
                  <li>• <strong>Azure Cognitive Services</strong></li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  ML Frameworks
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Industry-leading frameworks for building and training machine learning models
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>TensorFlow, PyTorch</strong></li>
                  <li>• <strong>Scikit-learn, Keras</strong></li>
                  <li>• <strong>XGBoost, LightGBM</strong></li>
                  <li>• <strong>Hugging Face Transformers</strong></li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  DevOps & MLOps
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Automated deployment pipelines and infrastructure management for ML systems
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Docker, Kubernetes</strong></li>
                  <li>• <strong>MLflow, Jenkins</strong></li>
                  <li>• <strong>Terraform</strong></li>
                  <li>• <strong>Prometheus, Grafana</strong></li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Programming Languages
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Versatile programming expertise for AI development and integration
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Python</strong></li>
                  <li>• <strong>Go</strong></li>
                  <li>• <strong>Java</strong></li>
                  <li>• <strong>JavaScript/TypeScript</strong></li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Data Pipelines
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Robust data engineering solutions for processing and managing large-scale datasets
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Apache Airflow</strong></li>
                  <li>• <strong>AWS Glue</strong></li>
                  <li>• <strong>GCP Dataflow</strong></li>
                  <li>• <strong>Databricks</strong></li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  AI Infrastructure & Tools
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Specialized infrastructure components essential for production AI systems
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Vector Databases</strong></li>
                  <li>• <strong>Model Serving</strong></li>
                  <li>• <strong>Feature Stores</strong></li>
                  <li>• <strong>Experiment Tracking</strong></li>
                  <li>• <strong>Data Labeling</strong></li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Case Study */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                Case Study
              </h2>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 lg:p-12 rounded-lg text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Automated Customer Support for BFSI
              </h3>
              <p className="text-lg lg:text-xl mb-8 opacity-90">
                Launched NLP-based virtual assistants and auto-tagging using LLMs, driving 60% reduction in support turnaround, improved NPS by 30%, and enabled real-time compliance checks.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">60%</div>
                  <p className="opacity-90">Reduction in support turnaround</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">30%</div>
                  <p className="opacity-90">Improved NPS</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Real-time</div>
                  <p className="opacity-90">Compliance checks</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8" style={{ color: "#7c3bed" }}>
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Let our AI experts help you identify opportunities and implement cutting-edge solutions that drive real business value.
              </p>
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-xl font-bold"
                asChild
              >
                <a href="/contact">Get Started Today</a>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
