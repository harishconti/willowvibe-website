import Link from "next/link";
import {
  Bot,
  FileText,
  Cpu,
  Database,
  Search,
  ArrowRight,
  CheckCircle,
  BarChart,
  Brain,
  Zap,
  ShieldCheck,
  MessageSquare
} from "lucide-react";

export default function AISolutions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-teal-900 py-20 lg:py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 bg-teal-800 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 border border-teal-600">
              5+ Years Python Expertise | AI/ML Specialist
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Intelligent Automation & <span className="text-teal-400">AI-Powered Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Leverage cutting-edge AI and LLMs to automate workflows, enhance decision-making, and deliver personalized user experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-teal-900 bg-white rounded-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                Explore AI Use Cases
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal-600 border border-teal-500 rounded-lg hover:bg-teal-700 transition-all shadow-sm"
              >
                Schedule AI Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Overview */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI Services Overview</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From intelligent chatbots to predictive analytics, we build custom AI solutions that drive real business value.
            </p>
          </div>

          <div className="space-y-12">
            {/* Service 1: AI-Powered Application Development */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="h-8 w-8 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Application Development</h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      We build intelligent applications that understand language, process documents, and generate content to automate your business operations.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center"><Cpu className="h-4 w-4 mr-2 text-teal-500"/> What We Build</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                          <li className="flex items-start"><span className="mr-2 text-teal-500">•</span>Conversational AI Interfaces & Chatbots</li>
                          <li className="flex items-start"><span className="mr-2 text-teal-500">•</span>Document Intelligence & Data Extraction</li>
                          <li className="flex items-start"><span className="mr-2 text-teal-500">•</span>Content Generation Tools</li>
                          <li className="flex items-start"><span className="mr-2 text-teal-500">•</span>Smart Search & Recommendations</li>
                          <li className="flex items-start"><span className="mr-2 text-teal-500">•</span>AI-Enhanced Analytics</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center"><Zap className="h-4 w-4 mr-2 text-teal-500"/> Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {["OpenAI GPT-4", "Claude", "LangChain", "LlamaIndex", "Pinecone", "FastAPI"].map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-6 text-sm font-medium text-gray-500">
                          <span>Typical Timeline: 2-4 months</span>
                          <span>Starting From: ₹4,00,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2: Retrieval-Augmented Generation (RAG) Systems */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Search className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Retrieval-Augmented Generation (RAG) Systems</h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      Connect LLMs to your private data sources to create intelligent Q&A systems that answer questions based on your company's knowledge base.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-blue-500"/> Key Benefits</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                          <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>Reduce customer support workload by 60-80%</li>
                          <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>Instant access to internal knowledge</li>
                          <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>Data privacy (data stays in your infrastructure)</li>
                          <li className="flex items-start"><span className="mr-2 text-blue-500">•</span>Source citation and verification</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center"><Database className="h-4 w-4 mr-2 text-blue-500"/> Perfect For</h4>
                        <ul className="space-y-2 text-gray-600 text-sm mb-4">
                          <li>Internal knowledge management systems</li>
                          <li>Customer support automation</li>
                          <li>Technical documentation search</li>
                          <li>Compliance and policy Q&A</li>
                        </ul>
                         <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-6 text-sm font-medium text-gray-500">
                          <span>Typical Timeline: 1-3 months</span>
                          <span>Starting From: ₹3,00,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3: Data Engineering + AI Pipeline Integration */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Engineering + AI Pipeline Integration</h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      End-to-end AI data pipelines that collect, process, and feed data into machine learning models, combining data engineering expertise with AI implementation.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center"><Cpu className="h-4 w-4 mr-2 text-indigo-500"/> Capabilities</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                          <li className="flex items-start"><span className="mr-2 text-indigo-500">•</span>Data Collection (Scraping, API Integrations)</li>
                          <li className="flex items-start"><span className="mr-2 text-indigo-500">•</span>Processing & Feature Engineering</li>
                          <li className="flex items-start"><span className="mr-2 text-indigo-500">•</span>Model Training & Deployment Pipelines</li>
                          <li className="flex items-start"><span className="mr-2 text-indigo-500">•</span>Performance Monitoring & Drift Detection</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center"><Zap className="h-4 w-4 mr-2 text-indigo-500"/> Tech Stack</h4>
                         <div className="flex flex-wrap gap-2">
                          {["Python", "Apache Airflow", "MLflow", "FastAPI", "Docker", "Kubernetes"].map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                         <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-6 text-sm font-medium text-gray-500">
                          <span>Typical Timeline: 3-6 months</span>
                          <span>Starting From: ₹5,00,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4: AI Integration & Consultation */}
             <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Integration & Consultation</h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      Strategic guidance to help you identify high-ROI AI opportunities, validate ideas with PoCs, and educate your team on best practices.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-orange-500"/> What We Provide</h4>
                        <ul className="space-y-2 text-gray-600 text-sm">
                          <li className="flex items-start"><span className="mr-2 text-orange-500">•</span>AI Readiness Assessment</li>
                          <li className="flex items-start"><span className="mr-2 text-orange-500">•</span>Use Case Identification & Strategy</li>
                          <li className="flex items-start"><span className="mr-2 text-orange-500">•</span>Proof of Concept Development (2-4 weeks)</li>
                          <li className="flex items-start"><span className="mr-2 text-orange-500">•</span>Vendor Selection & Team Training</li>
                        </ul>
                      </div>
                      <div>
                         <h4 className="font-semibold text-gray-900 mb-3 flex items-center"><Cpu className="h-4 w-4 mr-2 text-orange-500"/> Deliverables</h4>
                         <ul className="space-y-2 text-gray-600 text-sm mb-4">
                           <li>AI Strategy Document</li>
                           <li>Technical Architecture Recommendations</li>
                           <li>Cost-Benefit Analysis & Roadmap</li>
                         </ul>
                         <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-6 text-sm font-medium text-gray-500">
                          <span>Rate: ₹4,000/hour</span>
                          <span>Assessment: ₹1.5L - ₹3L</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tech Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Technology Stack We Work With</h2>
                <p className="text-gray-600">We leverage the best-in-class tools and frameworks to build robust AI solutions.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { title: "LLMs", items: ["OpenAI GPT-4", "Claude 3", "Gemini Pro", "Llama 3"] },
                    { title: "Frameworks", items: ["LangChain", "LlamaIndex", "Haystack", "Hugging Face"] },
                    { title: "Vector DBs", items: ["Pinecone", "Weaviate", "ChromaDB", "Qdrant"] },
                    { title: "Infrastructure", items: ["MLflow", "Docker", "Kubernetes", "Weights & Biases"] }
                ].map((cat, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <h3 className="font-bold text-lg text-gray-900 mb-4 border-b border-gray-200 pb-2">{cat.title}</h3>
                        <ul className="space-y-2">
                            {cat.items.map((item, j) => (
                                <li key={j} className="text-gray-600 text-sm flex items-center">
                                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Implementation Approach</h2>
                <p className="text-teal-100 max-w-2xl mx-auto">A phased strategy to minimize risk and maximize ROI.</p>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
                {[
                    { phase: "01", title: "Discovery", time: "1-2 weeks", desc: "Assess data & identify use cases" },
                    { phase: "02", title: "Proof of Concept", time: "2-4 weeks", desc: "Build MVP & validate value" },
                    { phase: "03", title: "Development", time: "6-12 weeks", desc: "Full implementation & security" },
                    { phase: "04", title: "Deployment", time: "2-3 weeks", desc: "Production launch & training" },
                    { phase: "05", title: "Optimization", time: "Ongoing", desc: "Improvement & retraining" }
                ].map((step, i) => (
                    <div key={i} className="bg-teal-800 p-6 rounded-xl border border-teal-700 hover:bg-teal-750 transition-colors">
                        <div className="text-teal-300 font-bold text-xl mb-2">{step.phase}</div>
                        <h3 className="font-bold text-white mb-1">{step.title}</h3>
                        <div className="text-xs text-teal-200 font-semibold uppercase tracking-wider mb-3">{step.time}</div>
                        <p className="text-sm text-teal-100 leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Success Stories</h2>
                <p className="text-gray-600">Real-world applications of our AI expertise.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold mb-4">Future Enhancement</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Clinic OS Lite + AI Medical Scribe</h3>
                    <p className="text-gray-600 mb-6">
                        Using Whisper API and GPT-4 to generate structured clinical notes from real-time voice conversations, reducing documentation time by 60%.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {["Whisper API", "GPT-4", "LangChain", "FastAPI"].map(t => <span key={t} className="bg-white px-2 py-1 text-xs font-medium text-gray-500 rounded border border-gray-200">{t}</span>)}
                    </div>
                </div>
                 <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">Demo Showcase</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">RAG-Based Technical Support Bot</h3>
                    <p className="text-gray-600 mb-6">
                        Ingested 500+ documentation pages into a vector database to create a Slack bot that answers technical queries with 90% accuracy and source citations.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {["Pinecone", "GPT-4", "Slack API", "FastAPI"].map(t => <span key={t} className="bg-white px-2 py-1 text-xs font-medium text-gray-500 rounded border border-gray-200">{t}</span>)}
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* AI Ethics */}
       <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
                <div className="text-center mb-10">
                    <ShieldCheck className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Responsible AI</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
                    {[
                        { title: "Data Privacy", desc: "Your data is never used to train public models without consent." },
                        { title: "Transparency", desc: "We are clear about AI usage, capabilities, and limitations." },
                        { title: "Human Oversight", desc: "Critical decisions always have human review mechanisms." }
                    ].map((item, i) => (
                        <div key={i} className="p-4">
                            <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
             </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
                {[
                    { q: "Do I need large amounts of data for AI?", a: "Not necessarily. LLMs come pre-trained. For RAG systems, even 50-100 documents can be valuable." },
                    { q: "Will my data be used to train public models?", a: "No. We use API-based models with data isolation. Your data stays private and is never used for training without explicit consent." },
                    { q: "How accurate is AI?", a: "It depends on the use case. RAG systems can achieve 85-95% accuracy. We always implement confidence scoring and human-in-the-loop workflows." },
                    { q: "Is AI expensive to run?", a: "Costs vary. We optimize for cost efficiency, and API costs are pass-through. A typical chatbot might cost ₹5,000-30,000/month in usage fees." }
                ].map((faq, i) => (
                    <div key={i} className="border-b border-gray-100 pb-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                        <p className="text-gray-600">{faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Explore AI for Your Business?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Schedule a free 30-minute consultation to discuss your use case and assess feasibility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-teal-900 bg-white rounded-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                Schedule Free AI Consultation
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-teal-500 rounded-lg hover:bg-teal-800 transition-all"
              >
                View AI Services
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
