import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import {
  Cloud,
  Server,
  GitMerge,
  Shield,
  Activity,
  Container
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cloud & DevOps Services | AWS, GCP & Kubernetes",
  description: "Modernize your infrastructure with our Cloud & DevOps services. We specialize in Kubernetes, Docker, CI/CD automation, and cloud migration.",
};

export default function CloudDevOpsPage() {
  return (
    <ServicePageLayout
      serviceName="Cloud Infrastructure & DevOps"
      heroDescription="Build a resilient, scalable, and automated foundation for your software. We streamline deployment and optimize cloud costs."
      heroImage="/images/service-icon.svg"
      overviewDescription={[
        "In the modern digital landscape, your infrastructure is as critical as your code. We help businesses move away from fragile, manual deployments to robust, automated cloud environments.",
        "Our DevOps engineers specialize in containerization (Docker/Kubernetes), Infrastructure as Code (Terraform), and automated CI/CD pipelines. We ensure your applications are always up, secure, and can scale effortlessly with demand.",
        "Whether you are migrating to the cloud or optimizing an existing setup, we implement best practices that accelerate your release velocity and reduce downtime."
      ]}
      benefits={[
        "Zero-downtime Deployments",
        "Auto-scaling Infrastructure",
        "Cost Optimization & Monitoring",
        "Enhanced Security Posture"
      ]}
      useCases={[
        {
          title: "Cloud Migration",
          description: "Move on-premise workloads to AWS, GCP, or Azure.",
          icon: <Cloud className="h-6 w-6 text-teal-600" />
        },
        {
          title: "Kubernetes Management",
          description: "Production-grade K8s cluster setup and maintenance.",
          icon: <Container className="h-6 w-6 text-teal-600" />
        },
        {
          title: "CI/CD Automation",
          description: "Automated testing and deployment pipelines.",
          icon: <GitMerge className="h-6 w-6 text-teal-600" />
        },
        {
          title: "Security & Compliance",
          description: "Cloud security audits and DevSecOps implementation.",
          icon: <Shield className="h-6 w-6 text-teal-600" />
        },
        {
          title: "Performance Monitoring",
          description: "Observability setup with Prometheus/Grafana.",
          icon: <Activity className="h-6 w-6 text-teal-600" />
        },
        {
          title: "Serverless Architecture",
          description: "Cost-effective event-driven backends.",
          icon: <Server className="h-6 w-6 text-teal-600" />
        }
      ]}
      techStack={[
        {
          category: "Cloud Providers",
          techs: ["AWS", "Google Cloud", "Azure", "DigitalOcean"],
          description: "Platform expertise."
        },
        {
          category: "Infrastructure as Code",
          techs: ["Terraform", "Pulumi", "CloudFormation", "Ansible"],
          description: "Reproducible environments."
        },
        {
          category: "Containers",
          techs: ["Docker", "Kubernetes", "Helm", "Istio"],
          description: "Orchestration and service mesh."
        },
        {
          category: "CI/CD",
          techs: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD"],
          description: "Automation pipelines."
        }
      ]}
      deliverables={[
        "Infrastructure as Code (IaC) repository",
        "Fully configured CI/CD pipelines",
        "Documentation & Disaster Recovery Plan",
        "Security Audit Report",
        "Monitoring & Alerting Dashboards",
        "Cost Optimization Report"
      ]}
      process={[
        {
          title: "Assessment",
          description: "Review current infrastructure and bottlenecks.",
          duration: "1 Week"
        },
        {
          title: "Strategy Design",
          description: "Architect the cloud solution and roadmap.",
          duration: "1-2 Weeks"
        },
        {
          title: "Implementation",
          description: "Build infrastructure and pipelines.",
          duration: "3-6 Weeks"
        },
        {
          title: "Migration",
          description: "Move applications and data to new env.",
          duration: "2-4 Weeks"
        },
        {
          title: "Handoff",
          description: "Training and documentation delivery.",
          duration: "1 Week"
        }
      ]}
      caseStudy={{
        title: "Fintech Scale-up Migration",
        description: "Migrated a legacy monolith to microservices on Kubernetes (EKS) for a fintech client. Achieved 99.99% uptime and reduced deployment time from 2 hours to 15 minutes.",
        image: "/images/service-icon.svg",
        link: "/work"
      }}
      pricing={{
        starter: {
          price: "$10K - $20K",
          timeline: "4-6 Weeks",
          description: "CI/CD setup or simple cloud migration."
        },
        professional: {
          price: "$20K - $45K",
          timeline: "2-3 Months",
          description: "Kubernetes setup & full automation."
        },
        enterprise: {
          price: "$50K+",
          timeline: "4+ Months",
          description: "Multi-region, high-availability architecture."
        },
        includes: [
          "Architecture Diagrams",
          "Security Hardening",
          "Backup Configuration",
          "Auto-scaling Setup",
          "Log Aggregation",
          "Post-launch Support"
        ]
      }}
      faqs={[
        {
          question: "Which cloud provider do you recommend?",
          answer: "It depends on your needs. We often recommend AWS for breadth of services, GCP for data/AI workloads, and DigitalOcean for cost-effective simple hosting."
        },
        {
          question: "What is Infrastructure as Code (IaC)?",
          answer: "IaC allows us to provision and manage your infrastructure through code (like Terraform) rather than manual clicks. This ensures consistency, version control, and rapid disaster recovery."
        },
        {
          question: "Can you help reduce our cloud bill?",
          answer: "Yes, cost optimization is a key part of our service. We analyze idle resources, rightsizing instances, and implementing spot instances or savings plans."
        },
        {
          question: "Do you provide 24/7 support?",
          answer: "We provide post-launch support and have retainer packages for ongoing maintenance. For 24/7 on-call coverage, we can discuss enterprise SLA options."
        },
        {
          question: "How long does a migration take?",
          answer: "Simple migrations can take 2-4 weeks, while complex refactoring of legacy apps into microservices can take several months."
        }
      ]}
    />
  );
}
