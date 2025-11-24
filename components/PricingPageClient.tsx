'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Check, HelpCircle, ArrowRight, X } from 'lucide-react';
import FAQ from './FAQ';
import { analytics } from '@/lib/analytics';
import TrackedLink from '@/components/TrackedLink';

export default function PricingPageClient() {
  const [pricingMode, setPricingMode] = useState<'project' | 'retainer'>('project');

  useEffect(() => {
    analytics.viewPricing();
  }, []);

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="bg-teal-900 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Transparent Pricing for Every Stage</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-10">
            From MVPs to enterprise solutions, we have a package that fits your needs
          </p>

          {/* Toggle */}
          <div className="inline-flex bg-teal-800 p-1 rounded-lg relative z-10">
            <button
              onClick={() => setPricingMode('project')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                pricingMode === 'project'
                  ? 'bg-white text-teal-900 shadow'
                  : 'text-teal-100 hover:text-white'
              }`}
            >
              Project-Based
            </button>
            <button
              onClick={() => setPricingMode('retainer')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                pricingMode === 'retainer'
                  ? 'bg-white text-teal-900 shadow'
                  : 'text-teal-100 hover:text-white'
              }`}
            >
              Monthly Retainer
            </button>
          </div>
        </div>
      </section>

      {/* PRICING CARDS SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Project-Based Content */}
          {pricingMode === 'project' && (
            <div className="grid md:grid-cols-3 gap-8 animate-fadeIn">
              {/* TIER 1: Starter */}
              <div className="border border-gray-200 rounded-2xl p-8 hover:border-teal-300 transition-all hover:shadow-lg bg-white flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-sm text-gray-500 mb-4 h-10">MVPs & Small Projects</p>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-gray-900">$15k - $30k</p>
                  <p className="text-gray-500 mt-1">8-12 weeks timeline</p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    "Up to 5 core features",
                    "Responsive web or mobile app",
                    "Basic database design",
                    "API integration (up to 3)",
                    "Cloud deployment setup",
                    "30 days post-launch support",
                    "Source code & documentation"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <TrackedLink
                  href="/contact"
                  eventAction="scheduleConsultation"
                  eventData="pricing-page-starter"
                  className="block w-full py-3 text-center border-2 border-teal-600 text-teal-600 font-bold rounded-lg hover:bg-teal-50 transition-colors"
                >
                  Start Your MVP
                </TrackedLink>
              </div>

              {/* TIER 2: Professional */}
              <div className="border-2 border-teal-500 rounded-2xl p-8 relative bg-white shadow-xl transform scale-105 z-10 flex flex-col">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <p className="text-sm text-gray-500 mb-4 h-10">Full Products & Scale-Ups</p>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-gray-900">$30k - $75k</p>
                  <p className="text-gray-500 mt-1">3-4 months timeline</p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    "Up to 15 core features",
                    "Web + mobile applications",
                    "Advanced database architecture",
                    "Third-party integrations (unlimited)",
                    "User authentication & authorization",
                    "Admin dashboard",
                    "CI/CD pipeline setup",
                    "60 days post-launch support",
                    "Team training sessions",
                    "Performance optimization"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <TrackedLink
                  href="/contact"
                  eventAction="scheduleConsultation"
                  eventData="pricing-page-professional"
                  className="block w-full py-3 text-center bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Get Custom Quote
                </TrackedLink>
              </div>

              {/* TIER 3: Enterprise */}
              <div className="border border-gray-200 rounded-2xl p-8 hover:border-teal-300 transition-all hover:shadow-lg bg-white flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-sm text-gray-500 mb-4 h-10">Complex Systems & Large Organizations</p>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-gray-900">$75k+</p>
                  <p className="text-gray-500 mt-1">4-6 months+ timeline</p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    "Unlimited features",
                    "Multi-platform applications",
                    "Microservices architecture",
                    "Advanced AI/ML integration",
                    "Custom data pipelines",
                    "Kubernetes orchestration",
                    "Security audit & compliance",
                    "90 days post-launch support",
                    "Dedicated project manager",
                    "SLA guarantees"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <TrackedLink
                  href="/contact"
                  eventAction="scheduleConsultation"
                  eventData="pricing-page-enterprise"
                  className="block w-full py-3 text-center border-2 border-teal-600 text-teal-600 font-bold rounded-lg hover:bg-teal-50 transition-colors"
                >
                  Schedule Enterprise Call
                </TrackedLink>
              </div>
            </div>
          )}

          {/* Retainer Content */}
          {pricingMode === 'retainer' && (
            <div className="grid md:grid-cols-3 gap-8 animate-fadeIn">
               {/* Growth */}
               <div className="border border-gray-200 rounded-2xl p-8 hover:border-teal-300 transition-all bg-white flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth</h3>
                <p className="text-sm text-gray-500 mb-4">Ongoing feature dev</p>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-gray-900">$5,000<span className="text-lg font-normal text-gray-500">/mo</span></p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    "40 hours / month",
                    "Ongoing feature development",
                    "Bug fixes & maintenance",
                    "Monthly strategy call",
                    "Code reviews"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <TrackedLink
                  href="/contact"
                  eventAction="scheduleConsultation"
                  eventData="pricing-page-retainer-growth"
                  className="block w-full py-3 text-center border-2 border-teal-600 text-teal-600 font-bold rounded-lg hover:bg-teal-50 transition-colors"
                >
                  Start Subscription
                </TrackedLink>
              </div>

              {/* Scale */}
              <div className="border-2 border-teal-500 rounded-2xl p-8 relative bg-white shadow-xl transform scale-105 z-10 flex flex-col">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Best Value
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Scale</h3>
                <p className="text-sm text-gray-500 mb-4">Dedicated developer resource</p>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-gray-900">$10,000<span className="text-lg font-normal text-gray-500">/mo</span></p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    "80 hours / month",
                    "Dedicated developer",
                    "Priority support",
                    "Weekly sync meetings",
                    "Direct Slack access",
                    "Architecture advisory"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <TrackedLink
                  href="/contact"
                  eventAction="scheduleConsultation"
                  eventData="pricing-page-retainer-scale"
                  className="block w-full py-3 text-center bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Hire Dedicated Dev
                </TrackedLink>
              </div>

              {/* Enterprise Retainer */}
              <div className="border border-gray-200 rounded-2xl p-8 hover:border-teal-300 transition-all bg-white flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-sm text-gray-500 mb-4">Full team extension</p>
                <div className="mb-6">
                  <p className="text-4xl font-bold text-gray-900">Custom</p>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    "Dedicated full-stack team",
                    "Project Manager included",
                    "Custom SLA guarantees",
                    "24/7 support available",
                    "On-premise options",
                    "Quarterly roadmap planning"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <TrackedLink
                  href="/contact"
                  eventAction="scheduleConsultation"
                  eventData="pricing-page-retainer-enterprise"
                  className="block w-full py-3 text-center border-2 border-teal-600 text-teal-600 font-bold rounded-lg hover:bg-teal-50 transition-colors"
                >
                  Contact Sales
                </TrackedLink>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Detailed Comparison</h2>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-200">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-6 px-6 text-left font-bold text-gray-900 w-1/4">Features</th>
                  <th className="py-6 px-6 text-center font-bold text-gray-900 w-1/4">Starter</th>
                  <th className="py-6 px-6 text-center font-bold text-teal-600 w-1/4">Professional</th>
                  <th className="py-6 px-6 text-center font-bold text-gray-900 w-1/4">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                   { name: "Features", s: "Up to 5", p: "Up to 15", e: "Unlimited" },
                   { name: "Web Application", s: true, p: true, e: true },
                   { name: "Mobile Application", s: false, p: true, e: true },
                   { name: "Database Design", s: "Basic", p: "Advanced", e: "Custom/Sharded" },
                   { name: "API Integrations", s: "Up to 3", p: "Unlimited", e: "Unlimited" },
                   { name: "User Auth", s: "Standard", p: "Advanced + 2FA", e: "SSO / Enterprise" },
                   { name: "Admin Dashboard", s: false, p: true, e: true },
                   { name: "CI/CD Pipeline", s: true, p: true, e: true },
                   { name: "Support Duration", s: "30 Days", p: "60 Days", e: "90 Days+" },
                   { name: "Training", s: false, p: true, e: true },
                   { name: "Source Code", s: true, p: true, e: true },
                   { name: "Security Audit", s: false, p: false, e: true },
                   { name: "Perf. Optimization", s: false, p: true, e: true },
                ].map((row, idx) => (
                   <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-medium text-gray-900">{row.name}</td>
                      <td className="py-4 px-6 text-center text-gray-600">
                        {typeof row.s === 'boolean' ? (
                          row.s ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-gray-300 mx-auto" />
                        ) : row.s}
                      </td>
                      <td className="py-4 px-6 text-center text-gray-600 bg-teal-50/30 font-medium">
                        {typeof row.p === 'boolean' ? (
                          row.p ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-gray-300 mx-auto" />
                        ) : row.p}
                      </td>
                      <td className="py-4 px-6 text-center text-gray-600">
                        {typeof row.e === 'boolean' ? (
                          row.e ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-5 w-5 text-gray-300 mx-auto" />
                        ) : row.e}
                      </td>
                   </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ADD-ONS SECTION */}
      <section className="py-20 bg-white">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Enhance Your Project</h2>
            <div className="grid md:grid-cols-2 gap-6">
               {[
                 { name: "Additional Language Translation", price: "$2,500" },
                 { name: "Advanced Analytics Dashboard", price: "$5,000" },
                 { name: "Payment Gateway Integration", price: "$3,000" },
                 { name: "SMS/Email Automation System", price: "$2,000" },
                 { name: "Custom Reporting System", price: "$4,000" },
                 { name: "Extra 3rd Party API Integration", price: "$1,500 ea" },
               ].map((addon, idx) => (
                 <div key={idx} className="flex justify-between items-center p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="font-medium text-gray-900 text-lg">{addon.name}</span>
                    <span className="font-bold text-teal-600 text-lg">{addon.price}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ALL PACKAGES INCLUDE */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold mb-12 text-center">All Packages Include</h2>
           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                "Agile Development Process",
                "Weekly Progress Updates",
                "Full Source Code Ownership",
                "Quality Assurance Testing",
                "Deployment to Production",
                "Technical Documentation",
                "Responsive Design",
                "Security Best Practices"
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                   <div className="bg-teal-700 p-3 rounded-full mb-4">
                      <Check className="h-6 w-6 text-white" />
                   </div>
                   <p className="font-medium">{item}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQ items={[
        {
          question: "Do you offer payment plans?",
          answer: "Yes, typically we split payments into milestones: 30% upfront, 40% mid-project, and 30% upon delivery."
        },
        {
          question: "What if my project needs more time?",
          answer: "For fixed-price projects, if the scope hasn't changed, we absorb the cost of any delays on our end. If you add features, we'll estimate the additional time and cost."
        },
        {
          question: "Can I change my package mid-project?",
          answer: "Yes, upgrades are always possible. We'll adjust the deliverables and pricing accordingly."
        },
        {
          question: "What&apos;s not included in these prices?",
          answer: "Third-party costs (like AWS hosting, OpenAI API credits, paid plugins) are not included and are billed directly to you."
        },
        {
          question: "Do you offer discounts for startups?",
          answer: "We love working with startups! While we don&apos;t have a standard discount, we often can structure the payment plan to help with cash flow or adjust the scope for a tighter MVP."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers (ACH/Wire) and major credit cards (subject to a processing fee)."
        },
        {
          question: "Is there a cancellation fee?",
          answer: "For retainers, we require a 30-day notice. For fixed projects, you pay for work completed up to the cancellation date."
        },
        {
          question: "Do you outsource your work?",
          answer: "No, we have a dedicated in-house team of engineers and designers to ensure quality and security."
        }
      ]} />

      {/* BOTTOM CTA */}
      <section className="py-20 bg-gray-50 text-center">
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Not sure which package fits?</h2>
            <p className="text-xl text-gray-600 mb-8">Schedule a free consultation and we&apos;ll help you choose the best path for your business.</p>
            <TrackedLink
               href="/contact"
               eventAction="scheduleConsultation"
               eventData="pricing-page-bottom-cta"
               className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all"
             >
               Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </TrackedLink>
         </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
