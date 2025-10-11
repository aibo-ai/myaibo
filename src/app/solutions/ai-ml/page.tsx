import type { Metadata } from "next";
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
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                Transform Your Business with AI and Machine Learning
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
                Unlock automation, deep insights, and growth with enterprise-grade AI & ML solutions—built, deployed, and optimized by experts who understand your industry's challenges.
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-xl font-bold"
                  asChild
                >
                  <a href="/contact">Book a Strategy Session</a>
                </Button>
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
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Cost-Effective Automation
                </h3>
                <p className="text-gray-600">
                  Reduce overhead with AI-powered process automation for support, operations, marketing, & more.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Smarter Decisions
                </h3>
                <p className="text-gray-600">
                  Predictive models provide actionable insights for demand planning, risk analysis, and personalized offers.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Enhanced User Experience
                </h3>
                <p className="text-gray-600">
                  Intelligent chatbots, recommendation engines, and NLP elevate digital engagement and retention.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#7c3bed" }}>
                  Competitive Edge
                </h3>
                <p className="text-gray-600">
                  Custom machine learning lets you act faster, adapt instantly, and scale without manual limits.
                </p>
              </div>
            </div>
            
            {/* Proof/Statistics Box */}
            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg border">
                <p className="text-lg font-semibold text-gray-800 text-center">
                  <span className="text-purple-600 font-bold">25+ projects</span> delivered across financial, retail, and SaaS
                </p>
                <p className="text-gray-600 text-center">Partnered with leading AI platforms</p>
              </div>
            </div>
          </Container>
        </section>

        {/* What We Deliver */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                What We Deliver
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                    Custom AI Solutions
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">AI-powered workflows</h4>
                      <p className="text-gray-600 text-sm">
                        Transform time-sensitive, repetitive tasks into streamlined automated processes that boost productivity and reduce operational costs
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Chatbots & virtual assistants</h4>
                      <p className="text-gray-600 text-sm">
                        Multilingual conversational AI with enterprise-level support, natural language understanding, and seamless customer engagement
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Recommendation engines</h4>
                      <p className="text-gray-600 text-sm">
                        Advanced personalization systems for upselling, cross-selling, and targeted content delivery that increase conversion rates
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Computer vision solutions</h4>
                      <p className="text-gray-600 text-sm">
                        Image recognition, object detection, and visual quality control systems for manufacturing and retail applications
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Predictive analytics</h4>
                      <p className="text-gray-600 text-sm">
                        Forecasting models for demand prediction, customer churn, maintenance scheduling, and business intelligence
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                    ML Model Development
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Data preparation & feature engineering</h4>
                      <p className="text-gray-600 text-sm">
                        Comprehensive data cleaning, transformation, and feature extraction to build high-quality training datasets
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Supervised & unsupervised training</h4>
                      <p className="text-gray-600 text-sm">
                        Classification, regression, clustering, and anomaly detection models tailored to your specific use cases
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Scalable model deployment</h4>
                      <p className="text-gray-600 text-sm">
                        Production-ready deployment on AWS, Azure, and GCP with auto-scaling, load balancing, and high availability
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Performance monitoring & retraining</h4>
                      <p className="text-gray-600 text-sm">
                        Continuous model evaluation, drift detection, and automated retraining pipelines for sustained accuracy
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Model optimization & compression</h4>
                      <p className="text-gray-600 text-sm">
                        Quantization, pruning, and distillation techniques to reduce inference costs and improve response times
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                    AI Platform Integration
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">CRM & ERP integration</h4>
                      <p className="text-gray-600 text-sm">
                        Connect AI capabilities with Salesforce, HubSpot, SAP, and other enterprise systems for unified workflows
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Marketing platform connectivity</h4>
                      <p className="text-gray-600 text-sm">
                        Integrate with email marketing, social media management, and advertising platforms for AI-driven campaigns
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Third-party API orchestration</h4>
                      <p className="text-gray-600 text-sm">
                        Seamlessly connect multiple AI services, payment gateways, and data sources through robust API architecture
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Legacy system modernization</h4>
                      <p className="text-gray-600 text-sm">
                        Add AI capabilities to existing applications without complete system overhauls using microservices architecture
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Real-time data synchronization</h4>
                      <p className="text-gray-600 text-sm">
                        Bi-directional data flow between AI systems and business applications for up-to-date insights and actions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: "#7c3bed" }}>
                    Consulting & Strategy
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Use case discovery & prioritization</h4>
                      <p className="text-gray-600 text-sm">
                        Identify high-impact AI opportunities aligned with your business objectives and technical capabilities
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">ROI calculation & feasibility analysis</h4>
                      <p className="text-gray-600 text-sm">
                        Data-driven business cases with cost-benefit analysis, implementation timelines, and expected returns
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">AI roadmap creation</h4>
                      <p className="text-gray-600 text-sm">
                        Strategic implementation plans with phased rollouts, resource allocation, and success metrics
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Technology stack assessment</h4>
                      <p className="text-gray-600 text-sm">
                        Evaluate your current infrastructure and recommend optimal tools, platforms, and architectures for AI adoption
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Team enablement & training</h4>
                      <p className="text-gray-600 text-sm">
                        Upskill your workforce with hands-on training, best practices, and knowledge transfer for AI solution maintenance
                      </p>
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
                  <li>• <strong>OpenAI, Ollama</strong> - Advanced language models and AI APIs</li>
                  <li>• <strong>Google Vertex AI</strong> - Unified ML platform for model training and deployment</li>
                  <li>• <strong>Amazon SageMaker</strong> - End-to-end ML development and deployment</li>
                  <li>• <strong>Azure Cognitive Services</strong> - Pre-built AI models and custom solutions</li>
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
                  <li>• <strong>TensorFlow, PyTorch</strong> - Deep learning and neural network development</li>
                  <li>• <strong>Scikit-learn, Keras</strong> - Classical ML algorithms and rapid prototyping</li>
                  <li>• <strong>XGBoost, LightGBM</strong> - Gradient boosting for structured data</li>
                  <li>• <strong>Hugging Face Transformers</strong> - State-of-the-art NLP models</li>
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
                  <li>• <strong>Docker, Kubernetes</strong> - Containerization and orchestration</li>
                  <li>• <strong>MLflow, Jenkins</strong> - Model tracking and CI/CD automation</li>
                  <li>• <strong>Terraform</strong> - Infrastructure as code for cloud resources</li>
                  <li>• <strong>Prometheus, Grafana</strong> - Monitoring and performance tracking</li>
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
                  <li>• <strong>Python</strong> - Primary language for ML/AI development and data science</li>
                  <li>• <strong>Go</strong> - High-performance microservices and backend systems</li>
                  <li>• <strong>Java</strong> - Enterprise applications and large-scale systems</li>
                  <li>• <strong>JavaScript/TypeScript</strong> - Full-stack web applications and APIs</li>
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
                  <li>• <strong>Apache Airflow</strong> - Workflow orchestration and task scheduling</li>
                  <li>• <strong>AWS Glue</strong> - Serverless ETL and data catalog services</li>
                  <li>• <strong>GCP Dataflow</strong> - Stream and batch data processing</li>
                  <li>• <strong>Databricks</strong> - Unified analytics platform for big data</li>
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
                  <li>• <strong>Vector Databases</strong> - Pinecone, Weaviate, Qdrant for semantic search</li>
                  <li>• <strong>Model Serving</strong> - TensorFlow Serving, TorchServe, NVIDIA Triton</li>
                  <li>• <strong>Feature Stores</strong> - Feast, Tecton for ML feature management</li>
                  <li>• <strong>Experiment Tracking</strong> - Weights & Biases, Neptune.ai</li>
                  <li>• <strong>Data Labeling</strong> - Label Studio, Scale AI for training data</li>
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
