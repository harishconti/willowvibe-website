import Image from "next/image";
import { CheckCircle, BookOpen, Layers, Shield, Zap, FileText } from "lucide-react";
import LeadMagnetForm from "@/components/LeadMagnetForm";
import TrustedBy from "@/components/TrustedBy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free SaaS Development Guide 2025 | WillowVibe",
  description: "Download the complete 50-page guide to building scalable SaaS products. Covers tech stack, multi-tenancy, security, and more.",
};

export default function SaaSGuidePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-sm font-semibold mb-6 border border-teal-500/30">
                <FileText className="w-4 h-4 mr-2" />
                Free Resource for Founders & CTOs
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                The Complete <span className="text-teal-400">SaaS Development Guide</span> 2025
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Everything you need to know about building scalable, secure, and profitable SaaS products—from architecture to go-to-market.
              </p>

              <div className="space-y-4 mb-8">
                {[
                    "50+ pages of expert insights",
                    "10+ architecture diagrams",
                    "Security & compliance checklists",
                    "Tech stack decision frameworks"
                ].map((item, i) => (
                    <div key={i} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-200">{item}</span>
                    </div>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:pl-10" id="download-form">
                <LeadMagnetForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <div className="bg-gray-50 border-b border-gray-200">
        <TrustedBy />
      </div>

      {/* What's Inside */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What You&apos;ll Learn Inside</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;ve condensed years of SaaS development experience into this comprehensive guide. No fluff, just actionable technical and business advice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Architecture & Stack</h3>
                <p className="text-gray-600">
                    How to choose the right tech stack, database design for multi-tenancy, and frontend architecture that scales.
                </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Security & Auth</h3>
                <p className="text-gray-600">
                    Best practices for authentication, role-based access control (RBAC), and securing scalable APIs.
                </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Growth & Operations</h3>
                <p className="text-gray-600">
                    DevOps pipelines, CI/CD, monitoring, pricing strategies, and a complete Go-to-Market checklist.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative">
                    {/* Placeholder for PDF Preview Image - In a real scenario, this would be an image of the PDF */}
                    <div className="aspect-[3/4] bg-white shadow-2xl rounded-lg border border-gray-200 p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-extrabold text-teal-900 mb-2">SaaS Dev Guide 2025</h3>
                                <div className="h-1 w-20 bg-teal-500 mb-8"></div>
                                <div className="space-y-4">
                                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                                    <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                                    <div className="h-4 bg-gray-100 rounded w-4/6"></div>
                                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                                    <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                                </div>
                                <div className="mt-12 grid grid-cols-2 gap-4">
                                    <div className="h-24 bg-teal-50 rounded border border-teal-100"></div>
                                    <div className="h-24 bg-teal-50 rounded border border-teal-100"></div>
                                </div>
                            </div>
                            <div className="flex justify-between items-end border-t pt-4">
                                <span className="text-xs text-gray-400">WillowVibe Digital Solutions</span>
                                <span className="text-xs text-gray-400">Page 1 of 50</span>
                            </div>
                        </div>
                    </div>
                     {/* Decorative elements behind */}
                    <div className="absolute -inset-4 bg-teal-200 rounded-lg -z-10 transform -rotate-2 opacity-50"></div>
                </div>

                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Sneak Peek: Table of Contents</h2>
                    <ul className="space-y-4">
                        {[
                            "Chapter 1: SaaS Fundamentals & Business Models",
                            "Chapter 2: Choosing Your Tech Stack",
                            "Chapter 3: Database Design for Multi-Tenancy",
                            "Chapter 4: Authentication & Security Best Practices",
                            "Chapter 5: Building Scalable APIs",
                            "Chapter 6: Frontend Architecture",
                            "Chapter 7: DevOps & CI/CD",
                            "Chapter 8: Monitoring & Analytics",
                            "Chapter 9: Pricing Strategies",
                            "Chapter 10: Go-to-Market Checklist"
                        ].map((chapter, i) => (
                            <li key={i} className="flex items-start">
                                <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 text-xs font-bold mr-3 mt-0.5">
                                    {i + 1}
                                </span>
                                <span className="text-gray-700 font-medium">{chapter}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
                        <div className="flex items-start">
                             <BookOpen className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                             <div>
                                 <h4 className="font-semibold text-blue-900">Why this guide?</h4>
                                 <p className="text-blue-800 text-sm mt-1">
                                     Most tutorials stop at &quot;Hello World&quot;. This guide covers the hard parts: tenancy isolation, scaling databases, and enterprise-grade security.
                                 </p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-teal-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Stop Guessing, Start Building</h2>
            <p className="text-teal-100 text-lg mb-8">
                Download the guide today and save weeks of research and trial-and-error.
            </p>
            <a
                href="#download-form"
                className="inline-block px-8 py-4 bg-white text-teal-900 font-bold rounded-lg hover:bg-teal-50 transition-colors shadow-lg"
            >
                Get the Free Guide
            </a>
        </div>
      </section>
    </div>
  );
}
