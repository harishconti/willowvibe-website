import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight, CheckCircle } from 'lucide-react';
import TechStackBadge from './TechStackBadge';
import ProcessStep from './ProcessStep';
import FAQ from './FAQ';
import CTASection from './CTASection';

export interface ServicePageProps {
  serviceName: string;
  heroDescription: string;
  heroImage: string;
  overviewDescription: string[]; // Array of paragraphs
  benefits: string[];
  useCases: {
    title: string;
    description?: string;
    icon: React.ReactNode;
  }[];
  techStack: {
    category: string;
    techs: string[];
    description?: string;
  }[];
  deliverables: string[];
  process: {
    title: string;
    description: string;
    duration: string;
  }[];
  caseStudy: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
  pricing: {
    starter: { price: string; timeline: string; description: string };
    professional: { price: string; timeline: string; description: string };
    enterprise: { price: string; timeline: string; description: string };
    includes: string[];
  };
  faqs: { question: string; answer: string }[];
}

export default function ServicePageLayout({
  serviceName,
  heroDescription,
  heroImage,
  overviewDescription,
  benefits,
  useCases,
  techStack,
  deliverables,
  process,
  caseStudy,
  pricing,
  faqs,
}: ServicePageProps) {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-teal-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
            <Image src={heroImage} alt="Background" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{serviceName}</h1>
              <p className="text-xl text-teal-100 mb-8">{heroDescription}</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-teal-900 bg-white rounded-lg hover:bg-teal-50 transition-all"
              >
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="hidden md:block relative h-64 lg:h-96 w-full">
                <Image src={heroImage} alt={serviceName} fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <div className="text-lg text-gray-600 space-y-4">
              {overviewDescription.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start p-6 bg-gray-50 rounded-xl border border-gray-100">
                <CheckCircle className="h-6 w-6 text-teal-600 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-800 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Perfect For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-teal-200 transition-colors">
                <div className="h-12 w-12 bg-teal-50 rounded-lg flex items-center justify-center mb-6">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                {useCase.description && (
                  <p className="text-gray-600">{useCase.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technologies We Use</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {techStack.map((stack, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{stack.category}</h3>
                {stack.description && <p className="text-gray-500 mb-6 text-sm">{stack.description}</p>}
                <div className="flex flex-wrap gap-3">
                  {stack.techs.map((tech, tIdx) => (
                    <TechStackBadge key={tIdx} name={tech} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES SECTION */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What You Get</h2>
              <p className="text-teal-100 mb-8 text-lg">
                We deliver more than just code. You receive a complete, production-ready solution with all necessary documentation and support.
              </p>
              <Link href="/contact" className="text-white font-semibold underline underline-offset-4 hover:text-teal-200">
                Discuss your requirements &rarr;
              </Link>
            </div>
            <div className="bg-teal-800 rounded-2xl p-8 border border-teal-700">
              <ul className="space-y-4">
                {deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="bg-teal-500 rounded-full p-1 mr-4">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">How We Work</h2>
          <div className="grid md:grid-cols-5 gap-4 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gray-100 -z-10 transform translate-y-1/2"></div>

            {process.map((step, idx) => (
              <div key={idx} className="relative bg-white">
                 <ProcessStep
                    stepNumber={idx + 1}
                    title={step.title}
                    description={`${step.duration} - ${step.description}`}
                 />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="grid md:grid-cols-2">
                    <div className="p-12 flex flex-col justify-center">
                        <div className="uppercase tracking-wide text-sm text-teal-600 font-semibold mb-2">See It In Action</div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">{caseStudy.title}</h2>
                        <p className="text-gray-600 mb-8 text-lg">{caseStudy.description}</p>
                        <div>
                            <Link href={caseStudy.link} className="text-teal-600 font-bold hover:text-teal-700 flex items-center">
                                Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="bg-gray-200 relative min-h-[300px]">
                         <Image src={caseStudy.image} alt={caseStudy.title} fill className="object-cover" />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Investment</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
             Transparent pricing packages designed for every stage of growth.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
             {/* Starter */}
             <div className="border border-gray-200 rounded-xl p-8 hover:border-teal-300 transition-colors">
                 <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
                 <p className="text-3xl font-bold text-teal-600 mb-4">{pricing.starter.price}</p>
                 <p className="text-sm text-gray-500 font-medium mb-6 uppercase tracking-wider">{pricing.starter.timeline}</p>
                 <p className="text-gray-600 mb-6">{pricing.starter.description}</p>
                 <Link href="/contact" className="block w-full py-3 text-center border border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors">
                    Start MVP
                 </Link>
             </div>

             {/* Professional */}
             <div className="border-2 border-teal-500 rounded-xl p-8 relative bg-teal-50/30">
                 <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">
                    Popular
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-2">Professional</h3>
                 <p className="text-3xl font-bold text-teal-600 mb-4">{pricing.professional.price}</p>
                 <p className="text-sm text-gray-500 font-medium mb-6 uppercase tracking-wider">{pricing.professional.timeline}</p>
                 <p className="text-gray-600 mb-6">{pricing.professional.description}</p>
                 <Link href="/contact" className="block w-full py-3 text-center bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
                    Get Custom Quote
                 </Link>
             </div>

             {/* Enterprise */}
             <div className="border border-gray-200 rounded-xl p-8 hover:border-teal-300 transition-colors">
                 <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
                 <p className="text-3xl font-bold text-teal-600 mb-4">{pricing.enterprise.price}</p>
                 <p className="text-sm text-gray-500 font-medium mb-6 uppercase tracking-wider">{pricing.enterprise.timeline}</p>
                 <p className="text-gray-600 mb-6">{pricing.enterprise.description}</p>
                 <Link href="/contact" className="block w-full py-3 text-center border border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors">
                    Contact Sales
                 </Link>
             </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
              <h4 className="font-bold text-gray-900 mb-6 text-center">All Projects Include</h4>
              <div className="grid md:grid-cols-3 gap-4">
                  {pricing.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center">
                          <Check className="h-5 w-5 text-teal-600 mr-2" />
                          <span className="text-gray-700">{item}</span>
                      </div>
                  ))}
              </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQ items={faqs} />

      {/* CTA SECTION */}
      <CTASection
        title="Ready to Get Started?"
        description="Schedule a consultation to discuss your project requirements and get a detailed roadmap."
        primaryButtonText="Schedule Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="See Pricing"
        secondaryButtonLink="/pricing"
      />
    </div>
  );
}
