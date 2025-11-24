import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Server, Database, Cloud, Code, Smartphone, Layout, Brain, Zap } from "lucide-react";
import { getOptimizedImage } from "@/lib/images";
import { Metadata } from "next";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import TrackedLink from "@/components/TrackedLink";
import StructuredData from '@/components/StructuredData';
import { generateOrganizationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: "WillowVibe Digital Solutions | Custom SaaS Development & AI Integration",
  description: "Professional IT services company in Bengaluru specializing in custom SaaS development, AI/LLM integration, data engineering, and cloud infrastructure.",
  alternates: {
    canonical: "https://willowvibe.github.io/willowvibe-website/",
  },
};

export default function Home() {
  return (

    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <StructuredData data={generateOrganizationSchema()} />

      <ExitIntentPopup />

      {/* Promotional Banner */}
      <div className="bg-teal-900 dark:bg-teal-950 text-teal-100 px-4 py-3 text-sm text-center font-medium relative z-50">
        <span className="inline-block mr-2">🚀 New: The Complete SaaS Development Guide 2025 is out!</span>
        <Link href="/resources/saas-guide" className="underline hover:text-white font-bold">
          Download Free PDF &rarr;
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
                Transforming Ideas Into <span className="text-teal-600 dark:text-teal-400">Scalable Digital Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Full-stack development, <strong>AI integration</strong>, data engineering, and cloud infrastructure for modern businesses. We build enterprise-grade software that grows with you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <TrackedLink
                  href="/contact"
                  eventAction="scheduleConsultation"
                  eventData="hero"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl dark:bg-teal-500 dark:hover:bg-teal-600"
                >
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </TrackedLink>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-teal-700 bg-white border border-teal-200 rounded-lg hover:bg-teal-50 transition-all shadow-sm dark:bg-gray-800 dark:text-teal-400 dark:border-teal-700 dark:hover:bg-gray-700"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
               <div className="relative w-full max-w-lg h-[300px] md:h-[400px]">
                 {(() => {
                   const optimizedHero = getOptimizedImage("/images/hero-illustration.svg");
                   return (
                     <Image
                        src={optimizedHero.src}
                        alt="WillowVibe Digital Solutions Hero"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                        priority
                        placeholder={optimizedHero.blurDataURL ? "blur" : "empty"}
                        blurDataURL={optimizedHero.blurDataURL}
                     />
                   );
                 })()}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <TrustedBy />

      {/* Services Overview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive technical solutions tailored to your business needs, from initial concept to deployment and scaling.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-600">
              <div className="w-14 h-14 bg-teal-100 dark:bg-teal-900/50 rounded-xl flex items-center justify-center mb-6">
                <Layout className="h-7 w-7 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Custom SaaS Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Build scalable web and mobile applications with modern frameworks like React, Next.js, and React Native.
              </p>
              <TrackedLink
                href="/services"
                eventAction="serviceClick"
                eventData="Custom SaaS Development"
                className="text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </TrackedLink>
            </div>

            {/* Service 2 (AI - NEW) */}
             <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-600">
              <div className="w-14 h-14 bg-teal-100 dark:bg-teal-900/50 rounded-xl flex items-center justify-center mb-6">
                <Brain className="h-7 w-7 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI & Intelligent Automation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Leverage LLMs and AI to automate workflows, enhance decision-making, and build intelligent chatbots.
              </p>
              <TrackedLink
                href="/ai-solutions"
                eventAction="serviceClick"
                eventData="AI & Intelligent Automation"
                className="text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </TrackedLink>
            </div>

            {/* Service 3 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-600">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                <Database className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Data Engineering</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Robust ETL pipelines, data automation, and Apache Airflow orchestration to turn data into insights.
              </p>
              <TrackedLink
                href="/services"
                eventAction="serviceClick"
                eventData="Data Engineering"
                className="text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </TrackedLink>
            </div>

            {/* Service 4 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-600">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                <Cloud className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Cloud & DevOps</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Kubernetes deployment, CI/CD automation, and secure infrastructure management on GCP and AWS.
              </p>
              <TrackedLink
                href="/services"
                eventAction="serviceClick"
                eventData="Cloud & DevOps"
                className="text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300 inline-flex items-center"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Partner with WillowVibe?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We don&apos;t just write code; we build solutions that solve real business problems. Our expertise spans the entire development lifecycle.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Healthcare Expertise</h4>
                    <p className="text-gray-600 dark:text-gray-300">Deep understanding of healthcare workflows and compliance requirements.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Full-Stack Capabilities</h4>
                    <p className="text-gray-600 dark:text-gray-300">End-to-end ownership from database design to frontend user experience.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Modern Tech Stack</h4>
                    <p className="text-gray-600 dark:text-gray-300">Built with future-proof technologies like Python, React Native, and Kubernetes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                 {(() => {
                   const optimizedTech = getOptimizedImage("/images/tech-stack-logos.svg");
                   return (
                     <Image
                        src={optimizedTech.src}
                        alt="WillowVibe Tech Stack"
                        width={400}
                        height={300}
                        className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                        placeholder={optimizedTech.blurDataURL ? "blur" : "empty"}
                        blurDataURL={optimizedTech.blurDataURL}
                     />
                   );
                 })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Case Study Highlight */}
      <section className="py-20 bg-teal-900 dark:bg-teal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-3 py-1 bg-teal-800 dark:bg-teal-900 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
                Case Study
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Clinic OS Lite</h2>
              <p className="text-teal-100 dark:text-teal-200 text-lg mb-8">
                A comprehensive patient management system built for modern healthcare providers. Featuring offline capabilities, real-time sync, and a cross-platform interface.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-teal-800 dark:bg-teal-900 rounded text-sm">FastAPI</span>
                <span className="px-3 py-1 bg-teal-800 dark:bg-teal-900 rounded text-sm">React Native</span>
                <span className="px-3 py-1 bg-teal-800 dark:bg-teal-900 rounded text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-teal-800 dark:bg-teal-900 rounded text-sm">WatermelonDB</span>
              </div>
              <p className="text-teal-200 text-sm mb-8">
                  <strong>Coming Soon:</strong> AI-Powered Medical Scribe for Clinic OS Lite - reducing documentation time by 60%
              </p>
              <Link href="/work" className="inline-flex items-center text-white font-semibold hover:text-teal-200">
                View Case Study <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="order-1 md:order-2 bg-teal-800 dark:bg-teal-900 rounded-xl h-80 flex items-center justify-center relative overflow-hidden">
              {(() => {
                 const optimizedClinic = getOptimizedImage("/images/clinic-os-lite.svg");
                 return (
                   <Image
                    src={optimizedClinic.src}
                    alt="Clinic OS Lite Screenshot"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-4"
                    loading="lazy"
                    placeholder={optimizedClinic.blurDataURL ? "blur" : "empty"}
                    blurDataURL={optimizedClinic.blurDataURL}
                  />
                 );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">How We Work</h2>
             <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
                 <div className="w-12 h-12 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 border border-teal-100 dark:border-teal-800">
                   {item.step}
                 </div>
                 <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                 <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Build Your Next Digital Solution?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you transform your business with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <TrackedLink
                href="/contact"
                eventAction="scheduleConsultation"
                eventData="home-bottom"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl"
              >
                Schedule a Free Consultation
              </TrackedLink>
          </div>
        </div>
      </section>
    </div>
  );
}
