import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Custom Full Stack AI Development | Build Scalable Web & Mobile Apps with AI Integration",
  description: "End-to-end full stack AI development: React, Node.js, OpenAI integrations for automation, personalization, and scalability. Tailored platforms that drive growth. Start your project with a free consultation.",
  keywords: "full stack AI development, custom AI web apps, AI engineering, React AI integration, Node.js backend AI, cloud AI deployment, scalable AI platforms, DevOps AI automation",
};

export default function FullStackPage() {
  return (
    <>
      <Header />
      <main className="pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Full Stack Illustration */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <Image
                    src="/fullstack-hero-illustration.jpg"
                    alt="Full Stack Development Illustration showing web and mobile development with AI integration"
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
                  End-to-End Custom Full Stack Development
                </h1>
                <p>Develop web and mobile platforms with builtin AI that power automation, intelligent personalization and predictive analytics. Engineered for future-ready features, high performance and seamless scalability.</p>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-8" style={{ color: "#7c3bed" }}>
                The Problem
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Modern businesses need seamless user experiences, leverage data-driven intelligence, and scalable platforms. Manual processes and untapped data slow innovation and risk security.
              </p>
            </div>
          </Container>
        </section>

        {/* Solutions We Build */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                Solutions We Build
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  AI-Powered Applications
                </h3>
                <ul className="space-y-2 text-gray-600 flex-1">
                  <li>• <strong>Conversational AI</strong></li>
                  <li>• <strong>Smart Search</strong></li>
                  <li>• <strong>Recommendation Systems</strong></li>
                  <li>• <strong>Predictive Analytics</strong></li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Cloud-Native + AI Microservices
                </h3>
                <ul className="space-y-2 text-gray-600 flex-1">
                  <li>• <strong>Containerized AI Services</strong></li>
                  <li>• <strong>Event-Driven Architecture</strong></li>
                  <li>• <strong>API Gateway Management</strong></li>
                  <li>• <strong>Serverless AI Functions</strong></li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Enterprise API Integration
                </h3>
                <ul className="space-y-2 text-gray-600 flex-1">
                  <li>• <strong>CRM/ERP Connectors</strong></li>
                  <li>• <strong>Payment & Finance APIs</strong></li>
                  <li>• <strong>Data Warehouse Integration</strong></li>
                  <li>• <strong>Third-Party AI Services</strong></li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Custom SaaS Platforms
                </h3>
                <ul className="space-y-2 text-gray-600 flex-1">
                  <li>• <strong>AI-Personalized Dashboards</strong></li>
                  <li>• <strong>Subscription Management</strong></li>
                  <li>• <strong>Multi-Tenancy Architecture</strong></li>
                  <li>• <strong>Admin & Analytics Portals</strong></li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  DevOps & AI Ops Automation
                </h3>
                <ul className="space-y-2 text-gray-600 flex-1">
                  <li>• <strong>CI/CD Pipelines</strong></li>
                  <li>• <strong>Model Retraining Automation</strong></li>
                  <li>• <strong>Infrastructure as Code</strong></li>
                  <li>• <strong>Monitoring & Alerting</strong></li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Progressive Web & Mobile Apps
                </h3>
                <ul className="space-y-2 text-gray-600 flex-1">
                  <li>• <strong>React Native & Flutter</strong></li>
                  <li>• <strong>Progressive Web Apps</strong></li>
                  <li>• <strong>On-Device AI</strong></li>
                  <li>• <strong>Real-Time Sync</strong></li>
                </ul>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border text-center">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/strategy.png"
                    alt="Discovery & Strategy Icon"
                    width={64}
                    height={64}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Discovery & Strategy
                </h3>
                <p className="text-gray-600">
                  Business and AI architecture mapping
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border text-center">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/full-stack.png"
                    alt="Full Stack & AI Engineering Icon"
                    width={64}
                    height={64}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Full Stack & AI Engineering
                </h3>
                <p className="text-gray-600">
                  Complete development with embedded AI features
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border text-center">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/delivery.png"
                    alt="Delivery & Optimization Icon"
                    width={64}
                    height={64}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Delivery & Optimization
                </h3>
                <p className="text-gray-600">
                  Analytics followed by post-launch AI fine-tuning
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Tech Stack Expertise */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                Tech Stack Expertise (Not Limited To)
              </h2>
              <p className="text-xl text-gray-600">(not limited to)</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Frontend
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>React.js, Next.js, Vue.js</strong></li>
                  <li>• <strong>HTML5, CSS3, Tailwind CSS</strong></li>
                  <li>• <strong>TypeScript, JavaScript (ES6+)</strong></li>
                  <li>• <strong>Redux, Zustand, Context API</strong></li>
                  <li>• <strong>Material-UI, Ant Design, Chakra UI</strong></li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Backend
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Node.js, Express.js, Fastify</strong></li>
                  <li>• <strong>Python, Django, FastAPI</strong></li>
                  <li>• <strong>Java, Spring Boot</strong></li>
                  <li>• <strong>Go for high-performance services</strong></li>
                  <li>• <strong>GraphQL, REST APIs, gRPC</strong></li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Cloud & DevOps
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>AWS (EC2, Lambda, S3, RDS)</strong></li>
                  <li>• <strong>Google Cloud Platform (GCP)</strong></li>
                  <li>• <strong>Microsoft Azure</strong></li>
                  <li>• <strong>Docker, Kubernetes, Helm</strong></li>
                  <li>• <strong>Terraform, Ansible, CloudFormation</strong></li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Integration
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>REST/GraphQL APIs</strong></li>
                  <li>• <strong>OAuth 2.0, JWT authentication</strong></li>
                  <li>• <strong>Webhooks & event streaming</strong></li>
                  <li>• <strong>Third-party SDKs & libraries</strong></li>
                  <li>• <strong>Message queues (RabbitMQ, Kafka)</strong></li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Database
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>PostgreSQL, MySQL</strong></li>
                  <li>• <strong>MongoDB, DynamoDB</strong></li>
                  <li>• <strong>Redis for caching</strong></li>
                  <li>• <strong>Elasticsearch for search</strong></li>
                  <li>• <strong>Vector DBs (Pinecone, Weaviate)</strong></li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Data & Analytics
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Apache Airflow, Dagster</strong></li>
                  <li>• <strong>Snowflake, BigQuery, Redshift</strong></li>
                  <li>• <strong>Pandas, NumPy, scikit-learn</strong></li>
                  <li>• <strong>Tableau, Looker, Power BI</strong></li>
                  <li>• <strong>ETL pipelines & data warehousing</strong></li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Business Impact */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                Business Impact
              </h2>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 lg:p-12 rounded-lg text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center">
                AI-enabled SaaS rollout
              </h3>
              <p className="text-lg lg:text-xl mb-8 opacity-90 text-center mx-[105px]">
                Migrated legacy systems to cloud-native & AI architecture, added smart recommendations and automated 40% of manual queries.
              </p>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">4x</div>
                  <p className="opacity-90">Faster release cycles</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$1.5M</div>
                  <p className="opacity-90">Savings</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Higher</div>
                  <p className="opacity-90">User engagement</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99%</div>
                  <p className="opacity-90">Uptime achieved</p>
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
                Ready to Build Your Next Project?
              </h2>
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
    </>
  );
}
