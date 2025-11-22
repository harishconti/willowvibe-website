import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Server, Database, Cloud, Code, Smartphone, Layout, Brain, Zap } from "lucide-react";
import { Metadata } from "next";
import TrustedBy from "@/components/TrustedBy";

export const metadata: Metadata = {
  title: "WillowVibe Digital Solutions | Custom SaaS Development & AI Integration",
  description: "Professional IT services company in Bengaluru specializing in custom SaaS development, AI/LLM integration, data engineering, and cloud infrastructure.",
  alternates: {
    canonical: "https://willowvibe.github.io/willowvibe-website/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-teal-50 py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                Transforming Ideas Into <span className="text-teal-600">Scalable Digital Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Full-stack development, <strong>AI integration</strong>, data engineering, and cloud infrastructure for modern businesses. We build enterprise-grade software that grows with you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-teal-700 bg-white border border-teal-200 rounded-lg hover:bg-teal-50 transition-all shadow-sm"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
               <div className="relative w-full max-w-lg h-[300px] md:h-[400px]">
                 <Image
                    src="/images/hero-illustration.svg"
                    alt="WillowVibe Digital Solutions Hero"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    priority
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <TrustedBy />

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technical solutions tailored to your business needs, from initial concept to deployment and scaling.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <Layout className="h-7 w-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom SaaS Development</h3>
              <p className="text-gray-600 mb-6">
                Build scalable web and mobile applications with modern frameworks like React, Next.js, and React Native.
              </p>
              <Link href="/services" className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 2 (AI - NEW) */}
             <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <Brain className="h-7 w-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI & Intelligent Automation</h3>
              <p className="text-gray-600 mb-6">
                Leverage LLMs and AI to automate workflows, enhance decision-making, and build intelligent chatbots.
              </p>
              <Link href="/ai-solutions" className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Database className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Engineering</h3>
              <p className="text-gray-600 mb-6">
                Robust ETL pipelines, data automation, and Apache Airflow orchestration to turn data into insights.
              </p>
              <Link href="/services" className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Cloud className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud & DevOps</h3>
              <p className="text-gray-600 mb-6">
                Kubernetes deployment, CI/CD automation, and secure infrastructure management on GCP and AWS.
              </p>
              <Link href="/services" className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Partner with WillowVibe?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We don't just write code; we build solutions that solve real business problems. Our expertise spans the entire development lifecycle.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Healthcare Expertise</h4>
                    <p className="text-gray-600">Deep understanding of healthcare workflows and compliance requirements.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Full-Stack Capabilities</h4>
                    <p className="text-gray-600">End-to-end ownership from database design to frontend user experience.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Modern Tech Stack</h4>
                    <p className="text-gray-600">Built with future-proof technologies like Python, React Native, and Kubernetes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                 <Image
                    src="/images/tech-stack-logos.svg"
                    alt="WillowVibe Tech Stack"
                    width={400}
                    height={300}
                    className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-3 py-1 bg-teal-800 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
                Case Study
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Clinic OS Lite</h2>
              <p className="text-teal-100 text-lg mb-8">
                A comprehensive patient management system built for modern healthcare providers. Featuring offline capabilities, real-time sync, and a cross-platform interface.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-teal-800 rounded text-sm">FastAPI</span>
                <span className="px-3 py-1 bg-teal-800 rounded text-sm">React Native</span>
                <span className="px-3 py-1 bg-teal-800 rounded text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-teal-800 rounded text-sm">WatermelonDB</span>
              </div>
              <p className="text-teal-200 text-sm mb-8">
                  <strong>Coming Soon:</strong> AI-Powered Medical Scribe for Clinic OS Lite - reducing documentation time by 60%
              </p>
              <Link href="/work" className="inline-flex items-center text-white font-semibold hover:text-teal-200">
                View Case Study <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="order-1 md:order-2 bg-teal-800 rounded-xl h-80 flex items-center justify-center relative overflow-hidden">
              <Image
                src="/images/clinic-os-lite.svg"
                alt="Clinic OS Lite Screenshot"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               A transparent, agile process designed to deliver high-quality results on time and within budget.
             </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 text-center">
             {[
               { step: "01", title: "Discovery", desc: "Understanding needs" },
               { step: "02", title: "Design", desc: "Architecture & UI" },
               { step: "03", title: "Develop", desc: "Agile Coding" },
               { step: "04", title: "Deploy", desc: "Launch & CI/CD" },
               { step: "05", title: "Support", desc: "Ongoing Optimization" }
             ].map((item, index) => (
               <div key={index} className="p-4">
                 <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 border border-teal-100">
                   {item.step}
                 </div>
                 <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                 <p className="text-sm text-gray-500">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Build Your Next Digital Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you transform your business with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl"
              >
                Schedule a Free Consultation
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
