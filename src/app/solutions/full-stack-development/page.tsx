import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Full Stack Development | MyAibo - Complete Web & App Solutions",
  description: "End-to-end full stack development services. From frontend to backend, we build scalable, modern web applications and mobile apps.",
  keywords: "full stack development, web development, app development, frontend, backend, React, Node.js, mobile apps",
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
                  End-to-End Customized Full Stack Development, Tailored for Your Growth
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Build web and mobile platforms with embedded AI features—automation, smart personalization, predictive analytics—plus future-ready functionality, speed, and scalability.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-xl font-bold"
                    asChild
                  >
                    <a href="/contact">Get Started Today</a>
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

        {/* Our Approach */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                Our Approach
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Discovery & Strategy
                </h3>
                <p className="text-gray-600">
                  Business and AI architecture mapping
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Full Stack & AI Engineering
                </h3>
                <p className="text-gray-600">
                  Complete development with embedded AI features
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Delivery & Optimization
                </h3>
                <p className="text-gray-600">
                  Analytics, post-launch AI fine-tuning, performance & SEO
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Solutions We Build */}
        <section className="py-16 lg:py-24">
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
                <p className="text-gray-600 mb-4 text-sm">
                  Intelligent applications that leverage machine learning and natural language processing to deliver exceptional user experiences and business value.
                </p>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Conversational AI</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Context-aware chatbots with multi-turn dialogue, sentiment analysis, and multilingual support
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Smart Search</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Semantic search engines with natural language queries, filters, and personalized rankings
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Recommendation Systems</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Real-time personalization for products, content, and user experiences
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Predictive Analytics</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Forecasting models for demand planning, customer behavior, and operational insights
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Cloud-Native + AI Microservices
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Scalable, resilient microservices architecture with embedded AI capabilities designed for high availability and rapid iteration.
                </p>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Containerized AI Services</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Docker and Kubernetes orchestration for ML model deployment and scaling
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Event-Driven Architecture</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Real-time data processing with message queues and streaming pipelines
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">API Gateway Management</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Secure, rate-limited APIs with authentication and monitoring
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Serverless AI Functions</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Cost-effective, auto-scaling inference endpoints on AWS Lambda and Azure Functions
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Enterprise API Integration
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Seamless connectivity between AI systems and existing enterprise infrastructure for unified data flow and automation.
                </p>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">CRM/ERP Connectors</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Bi-directional sync with Salesforce, SAP, Oracle, and Microsoft Dynamics
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Payment & Finance APIs</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Secure integration with Stripe, PayPal, and banking systems
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Data Warehouse Integration</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      ETL pipelines connecting to Snowflake, Redshift, and BigQuery
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Third-Party AI Services</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Orchestration of multiple AI providers for enhanced capabilities
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Custom SaaS Platforms
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Multi-tenant SaaS solutions with AI-driven personalization, analytics, and automated workflows tailored to your business model.
                </p>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">AI-Personalized Dashboards</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Dynamic interfaces that adapt to user roles, preferences, and usage patterns
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Subscription Management</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Flexible billing, tiered pricing, and usage-based monetization
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Multi-Tenancy Architecture</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Secure data isolation with shared infrastructure for cost efficiency
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Admin & Analytics Portals</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Comprehensive tools for user management, reporting, and business intelligence
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  DevOps & AI Ops Automation
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  End-to-end automation for continuous integration, deployment, and model lifecycle management to accelerate delivery and maintain quality.
                </p>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">CI/CD Pipelines</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Automated testing, building, and deployment with GitLab, Jenkins, and GitHub Actions
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Model Retraining Automation</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Scheduled and trigger-based model updates with performance monitoring
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Infrastructure as Code</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Terraform and CloudFormation for reproducible, version-controlled environments
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Monitoring & Alerting</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Real-time performance tracking with Prometheus, Grafana, and custom dashboards
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Progressive Web & Mobile Apps
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Cross-platform applications with native-like experiences, offline capabilities, and integrated AI features for iOS, Android, and web.
                </p>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">React Native & Flutter</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Single codebase for iOS and Android with native performance
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Progressive Web Apps</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Fast, installable web apps with offline support and push notifications
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">On-Device AI</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      TensorFlow Lite and Core ML for privacy-preserving, low-latency inference
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">Real-Time Sync</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      WebSocket connections for instant updates and collaborative features
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Tech Stack Expertise */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                Tech Stack Expertise
              </h2>
              <p className="text-xl text-gray-600">(not limited to)</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Frontend
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• React.js, Next.js, Vue.js</li>
                  <li>• HTML5, CSS3, Tailwind CSS</li>
                  <li>• TypeScript, JavaScript (ES6+)</li>
                  <li>• Redux, Zustand, Context API</li>
                  <li>• Material-UI, Ant Design, Chakra UI</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Backend
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Node.js, Express.js, Fastify</li>
                  <li>• Python, Django, FastAPI</li>
                  <li>• Java, Spring Boot</li>
                  <li>• Go for high-performance services</li>
                  <li>• GraphQL, REST APIs, gRPC</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Cloud & DevOps
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• AWS (EC2, Lambda, S3, RDS)</li>
                  <li>• Google Cloud Platform (GCP)</li>
                  <li>• Microsoft Azure</li>
                  <li>• Docker, Kubernetes, Helm</li>
                  <li>• Terraform, Ansible, CloudFormation</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Integration
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• REST/GraphQL APIs</li>
                  <li>• OAuth 2.0, JWT authentication</li>
                  <li>• Webhooks & event streaming</li>
                  <li>• Third-party SDKs & libraries</li>
                  <li>• Message queues (RabbitMQ, Kafka)</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Database
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• PostgreSQL, MySQL</li>
                  <li>• MongoDB, DynamoDB</li>
                  <li>• Redis for caching</li>
                  <li>• Elasticsearch for search</li>
                  <li>• Vector DBs (Pinecone, Weaviate)</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Data & Analytics
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Apache Airflow, Dagster</li>
                  <li>• Snowflake, BigQuery, Redshift</li>
                  <li>• Pandas, NumPy, scikit-learn</li>
                  <li>• Tableau, Looker, Power BI</li>
                  <li>• ETL pipelines & data warehousing</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Case Study */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                Case Study
              </h2>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 lg:p-12 rounded-lg text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                AI-enabled SaaS rollout
              </h3>
              <p className="text-lg lg:text-xl mb-8 opacity-90">
                Migrated legacy systems to cloud-native & AI architecture, added smart recommendations and automated 40% of manual queries.
              </p>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">4x</div>
                  <p className="opacity-90">Faster release cycles</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$1.5M</div>
                  <p className="opacity-90">Savings achieved</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">Higher</div>
                  <p className="opacity-90">User engagement</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.99%</div>
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
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                From concept to deployment, we handle every aspect of your application development with expertise and care.
              </p>
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-xl font-bold"
                asChild
              >
                <a href="/contact">Start Your Project</a>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
