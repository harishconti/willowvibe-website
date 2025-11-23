import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import {
  Layout,
  Smartphone,
  Users,
  ShoppingBag,
  UserCircle,
  Server
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SaaS Development Services | Custom B2B Platforms",
  description: "Expert SaaS development services using React, Next.js, and Python. We build scalable, multi-tenant B2B platforms and mobile-first applications.",
};

export default function SaaSDevelopmentPage() {
  return (
    <ServicePageLayout
      serviceName="SaaS Development"
      heroDescription="Scalable, secure, and user-centric B2B platforms built for growth. Transform your idea into a market-leading product."
      heroImage="/images/service-icon.svg" // Placeholder
      overviewDescription={[
        "We specialize in building high-performance SaaS applications that scale. From MVP to enterprise-grade platforms, our engineering team delivers robust solutions tailored to your business needs.",
        "Our approach combines modern architecture with intuitive design, ensuring your users have a seamless experience while you maintain complete control over your data and infrastructure.",
        "Whether you need a multi-tenant architecture, complex API integrations, or a mobile-first experience, we have the expertise to deliver."
      ]}
      benefits={[
        "Scalable Multi-tenant Architecture",
        "Bank-grade Security & Compliance",
        "High-performance React/Next.js Frontend",
        "Automated CI/CD Pipelines"
      ]}
      useCases={[
        {
          title: "Multi-tenant B2B Platforms",
          description: "Secure, isolated environments for your enterprise customers.",
          icon: <Users className="h-6 w-6 text-teal-600" />
        },
        {
          title: "Mobile-first Applications",
          description: "Responsive designs that work perfectly on any device.",
          icon: <Smartphone className="h-6 w-6 text-teal-600" />
        },
        {
          title: "Real-time Collaboration",
          description: "Live updates, sockets, and interactive team features.",
          icon: <Layout className="h-6 w-6 text-teal-600" />
        },
        {
          title: "Marketplace Platforms",
          description: "Complex two-sided marketplaces with payment processing.",
          icon: <ShoppingBag className="h-6 w-6 text-teal-600" />
        },
        {
          title: "Customer Portals",
          description: "Self-service dashboards for user management and support.",
          icon: <UserCircle className="h-6 w-6 text-teal-600" />
        },
        {
          title: "API-driven Applications",
          description: "Headless architectures integrated with third-party services.",
          icon: <Server className="h-6 w-6 text-teal-600" />
        }
      ]}
      techStack={[
        {
          category: "Frontend",
          techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
          description: "Fast, accessible, and SEO-friendly user interfaces."
        },
        {
          category: "Backend",
          techs: ["Node.js", "Python", "FastAPI", "PostgreSQL"],
          description: "Robust APIs and data management."
        },
        {
          category: "Infrastructure",
          techs: ["Docker", "Kubernetes", "AWS/GCP", "GitHub Actions"],
          description: "Scalable cloud-native deployment."
        },
        {
          category: "Mobile",
          techs: ["React Native", "Expo"],
          description: "Cross-platform mobile apps."
        }
      ]}
      deliverables={[
        "Complete source code & documentation",
        "Database architecture & migrations",
        "API documentation (Swagger/OpenAPI)",
        "Deployment scripts & CI/CD pipeline",
        "30 days post-launch support",
        "Training materials for your team"
      ]}
      process={[
        {
          title: "Discovery",
          description: "Requirements gathering and technical roadmap.",
          duration: "1-2 Weeks"
        },
        {
          title: "Design & Architecture",
          description: "UI/UX design and database modeling.",
          duration: "2-3 Weeks"
        },
        {
          title: "Development",
          description: "Agile sprints with bi-weekly demos.",
          duration: "6-10 Weeks"
        },
        {
          title: "Testing & QA",
          description: "Security, performance, and UAT testing.",
          duration: "2 Weeks"
        },
        {
          title: "Launch",
          description: "Production deployment and handover.",
          duration: "1 Week"
        }
      ]}
      caseStudy={{
        title: "Clinic OS Lite",
        description: "A comprehensive SaaS platform for healthcare clinics to manage patients, appointments, and billing. Reduced administrative time by 40% and improved patient retention.",
        image: "/images/service-icon.svg", // Placeholder
        link: "/work"
      }}
      pricing={{
        starter: {
          price: "$15K - $30K",
          timeline: "8-12 Weeks",
          description: "Perfect for MVPs to validate your market."
        },
        professional: {
          price: "$30K - $75K",
          timeline: "3-4 Months",
          description: "Full-featured product for growth stage."
        },
        enterprise: {
          price: "$75K+",
          timeline: "6+ Months",
          description: "Complex systems with high scalability needs."
        },
        includes: [
          "Agile Development Process",
          "Weekly Progress Updates",
          "Full Source Code Ownership",
          "Quality Assurance Testing",
          "Deployment to Production",
          "Technical Documentation"
        ]
      }}
      faqs={[
        {
          question: "Do I own the code after the project?",
          answer: "Yes, absolutely. Upon final payment, you have 100% ownership of the source code, intellectual property, and all related assets."
        },
        {
          question: "How do you handle maintenance?",
          answer: "We offer a 30-day warranty period for bug fixes. After that, we have flexible retainer packages for ongoing maintenance, updates, and feature additions."
        },
        {
          question: "Can you integrate with existing systems?",
          answer: "Yes, we specialize in integrating with legacy systems, third-party APIs (Stripe, Salesforce, HubSpot, etc.), and other data sources."
        },
        {
          question: "What is your tech stack choice for SaaS?",
          answer: "We typically recommend the T3 stack (Typescript, Tailwind, tRPC) or Next.js with Python/FastAPI backend for maximum scalability and developer velocity."
        },
        {
          question: "How do you ensure security?",
          answer: "We implement industry best practices including JWT authentication, RBAC (Role-Based Access Control), data encryption at rest and in transit, and regular security audits."
        }
      ]}
    />
  );
}
