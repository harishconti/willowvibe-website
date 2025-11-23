import { Layout, Database, Cloud, HeartPulse, Code, Brain } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import TrackedLink from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Our Services | Custom SaaS, AI & Data Engineering | WillowVibe",
  description: "Explore our comprehensive IT services including Custom SaaS Development, AI & Intelligent Automation, Data Engineering, and Cloud Infrastructure management.",
  alternates: {
    canonical: "https://willowvibe.github.io/willowvibe-website/services",
  },
};

const services = [
  {
    id: "ai-automation",
    title: "AI & Intelligent Automation",
    description: "Leverage cutting-edge AI and LLMs to automate workflows, enhance decision-making, and deliver personalized experiences.",
    icon: <Brain className="h-8 w-8 text-teal-600" />,
    link: "/services/ai-automation",
    details: [
      "Conversational AI Interfaces & Chatbots",
      "RAG Systems (Retrieval-Augmented Generation)",
      "Document Intelligence & Extraction",
      "AI-Enhanced Analytics"
    ],
    timeline: "2-4 months",
    price: "From ₹4,00,000"
  },
  {
    id: "saas",
    title: "Custom SaaS Application Development",
    description: "Build scalable web and mobile applications tailored to your unique business needs.",
    icon: <Layout className="h-8 w-8 text-teal-600" />,
    link: "/services/saas-development",
    details: [
      "Web applications (React.js, FastAPI backends)",
      "Mobile apps (React Native - iOS, Android, Web)",
      "Progressive Web Apps (PWA)",
      "AI Enhancement: Chatbots, Smart Search, Content Gen"
    ],
    timeline: "3-6 months",
    price: "From ₹5,00,000"
  },
  {
    id: "backend",
    title: "Backend & API Development",
    description: "Robust, secure, and high-performance backend systems to power your digital products.",
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    link: "/contact",
    details: [
      "RESTful API development with FastAPI",
      "AI/ML Model Serving APIs",
      "Vector Database Backends",
      "Real-time features (WebSockets)"
    ],
    timeline: "1-3 months",
    price: "From ₹2,00,000"
  },
  {
    id: "data",
    title: "Data Engineering & ETL Pipelines",
    description: "Transform raw data into actionable insights with automated pipelines and efficient storage.",
    icon: <Database className="h-8 w-8 text-blue-600" />,
    link: "/services/data-engineering",
    details: [
      "ETL pipeline design & implementation",
      "Apache Airflow orchestration",
      "Feature engineering for ML models",
      "Real-time prediction services"
    ],
    timeline: "2-4 months",
    price: "From ₹3,00,000"
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure & DevOps",
    description: "Scalable, secure, and automated infrastructure to ensure your applications are always running.",
    icon: <Cloud className="h-8 w-8 text-orange-600" />,
    link: "/services/cloud-devops",
    details: [
      "Kubernetes cluster setup & management",
      "Docker containerization",
      "CI/CD pipeline implementation",
      "Cloud deployment (GCP, AWS)"
    ],
    timeline: "1-2 months",
    price: "From ₹1,50,000"
  },
  {
    id: "health",
    title: "Healthcare Technology Solutions",
    description: "Specialized software for clinics and healthcare providers, ensuring compliance and efficiency.",
    icon: <HeartPulse className="h-8 w-8 text-red-600" />,
    link: "/contact",
    details: [
      "Patient management systems",
      "Clinic software (like Clinic OS Lite)",
      "Telemedicine platforms",
      "HIPAA/Data security compliance"
    ],
    timeline: "Custom",
    price: "Custom Quote"
  }
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-teal-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Comprehensive technical expertise to drive your business forward.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`flex flex-col md:flex-row gap-12 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center mb-6 shadow-sm">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What We Deliver:</h4>
                    <ul className="space-y-2 mb-6">
                        {service.details.map((item, i) => (
                             <li key={i} className="flex items-start text-gray-600">
                                <span className="mr-2 text-teal-500">•</span>
                                {item}
                             </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 border-t border-gray-200 pt-4">
                        <span>⏱ {service.timeline}</span>
                        <span>💰 {service.price}</span>
                    </div>
                </div>

                <TrackedLink
                  href={service.link}
                  eventAction="serviceClick"
                  eventData={service.title}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
                >
                  Get Started
                </TrackedLink>
              </div>
              <div className="flex-1 bg-gray-100 rounded-2xl h-80 w-full flex items-center justify-center relative overflow-hidden">
                 <Image
                    src="/images/service-icon.svg"
                    alt={service.title}
                    fill
                    className="object-cover opacity-50"
                 />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-teal-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Not sure what you need?</h2>
              <p className="text-gray-600 mb-8">We can help assess your requirements and recommend the best solution for your budget and goals.</p>
              <TrackedLink
                href="/contact"
                eventAction="scheduleConsultation"
                eventData="services-bottom-cta"
                className="text-teal-700 font-semibold hover:text-teal-800 border-b-2 border-teal-700 hover:border-teal-800 pb-1"
              >
                  Book a Free Consultation Strategy Call
              </TrackedLink>
          </div>
      </section>
    </div>
  );
}
