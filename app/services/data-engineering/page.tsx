import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import {
  Database,
  Share2,
  BarChart2,
  Layers,
  RefreshCw,
  ShieldCheck
} from 'lucide-react';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: "Data Engineering Services | ETL Pipelines & Analytics",
  description: "Build robust data infrastructure with our data engineering services. ETL pipelines, data warehousing, and real-time analytics architecture.",
};

export default function DataEngineeringPage() {
  const serviceData = {
    name: 'Data Engineering',
    description: 'Build robust data infrastructure with our data engineering services. ETL pipelines, data warehousing, and real-time analytics architecture.',
    url: 'https://harishconti.github.io/willowvibe-website/services/data-engineering',
    priceRange: '$15000-$60000+',
  };

  const breadcrumbItems = [
    { name: 'Home', url: 'https://harishconti.github.io/willowvibe-website' },
    { name: 'Services', url: 'https://harishconti.github.io/willowvibe-website/services' },
    { name: 'Data Engineering', url: 'https://harishconti.github.io/willowvibe-website/services/data-engineering' },
  ];

  return (
    <>
    <StructuredData data={generateServiceSchema(serviceData)} />
    <StructuredData data={generateBreadcrumbSchema(breadcrumbItems)} />
    <ServicePageLayout
      serviceName="Data Engineering"
      heroDescription="Turn raw data into a strategic asset. We build the pipelines, warehouses, and infrastructure that power data-driven decisions."
      heroImage="/images/service-icon.svg"
      overviewDescription={[
        "Data is the fuel for modern business, but it's often messy, siloed, and inaccessible. We specialize in creating robust data ecosystems that collect, clean, and organize your information.",
        "Our data engineering team builds scalable ETL/ELT pipelines, modern data warehouses, and real-time streaming architectures. We ensure your data is reliable, secure, and ready for analytics or AI applications.",
        "Whether you're migrating legacy data or building a new analytics platform from scratch, we provide the technical foundation for your data strategy."
      ]}
      benefits={[
        "Automated ETL/ELT Pipelines",
        "Scalable Data Warehousing",
        "Real-time Data Processing",
        "Data Quality & Governance"
      ]}
      useCases={[
        {
          title: "Data Warehousing",
          description: "Centralized storage for all your business data (Snowflake, BigQuery).",
          icon: <Database className="h-6 w-6 text-teal-600" />
        },
        {
          title: "ETL/ELT Pipelines",
          description: "Automated workflows to move and transform data.",
          icon: <Share2 className="h-6 w-6 text-teal-600" />
        },
        {
          title: "Business Intelligence",
          description: "Dashboards and reporting infrastructure.",
          icon: <BarChart2 className="h-6 w-6 text-teal-600" />
        },
        {
          title: "Data Lake Architecture",
          description: "Storage for unstructured and semi-structured data.",
          icon: <Layers className="h-6 w-6 text-teal-600" />
        },
        {
          title: "Real-time Streaming",
          description: "Process data as it happens with Kafka or Kinesis.",
          icon: <RefreshCw className="h-6 w-6 text-teal-600" />
        },
        {
          title: "Data Governance",
          description: "Security, cataloging, and access control.",
          icon: <ShieldCheck className="h-6 w-6 text-teal-600" />
        }
      ]}
      techStack={[
        {
          category: "Processing",
          techs: ["Apache Spark", "Python", "dbt", "Pandas"],
          description: "Data transformation and modeling."
        },
        {
          category: "Orchestration",
          techs: ["Apache Airflow", "Prefect", "Dagster"],
          description: "Workflow scheduling and monitoring."
        },
        {
          category: "Warehousing",
          techs: ["Snowflake", "BigQuery", "Redshift", "PostgreSQL"],
          description: "Scalable storage solutions."
        },
        {
          category: "Streaming",
          techs: ["Kafka", "Kinesis", "Pub/Sub"],
          description: "Real-time data ingestion."
        }
      ]}
      deliverables={[
        "Documented Data Models & Schemas",
        "Automated ETL/ELT Pipeline Code",
        "Data Warehouse Configuration",
        "Dashboard & Reporting Setup",
        "Data Quality Tests & Monitoring",
        "Migration Scripts & Validation Reports"
      ]}
      process={[
        {
          title: "Data Audit",
          description: "Analyze current data sources and quality.",
          duration: "1-2 Weeks"
        },
        {
          title: "Architecture Design",
          description: "Plan the pipeline and storage strategy.",
          duration: "2 Weeks"
        },
        {
          title: "Pipeline Construction",
          description: "Build ingestion and transformation logic.",
          duration: "4-8 Weeks"
        },
        {
          title: "Validation & Testing",
          description: "Verify data accuracy and integrity.",
          duration: "2 Weeks"
        },
        {
          title: "Deployment & Training",
          description: "Handover to analytics team.",
          duration: "1 Week"
        }
      ]}
      caseStudy={{
        title: "E-commerce Analytics Platform",
        description: "Built a unified data warehouse for a retail brand, integrating data from Shopify, Facebook Ads, and Google Analytics. Enabled real-time inventory forecasting and ROAS calculation.",
        image: "/images/service-icon.svg",
        link: "/work"
      }}
      pricing={{
        starter: {
          price: "$15K - $25K",
          timeline: "6-10 Weeks",
          description: "Single source pipeline & basic reporting."
        },
        professional: {
          price: "$30K - $60K",
          timeline: "3-4 Months",
          description: "Multi-source data warehouse & dbt modeling."
        },
        enterprise: {
          price: "$60K+",
          timeline: "5+ Months",
          description: "Real-time streaming & complex governance."
        },
        includes: [
          "Data Source Integration",
          "Schema Design",
          "Automated Scheduling",
          "Error Handling & Alerting",
          "Documentation",
          "Knowledge Transfer"
        ]
      }}
      faqs={[
        {
          question: "What data sources can you connect to?",
          answer: "Virtually anything with an API or database connection. Common ones include Salesforce, HubSpot, Shopify, Stripe, PostgreSQL, MongoDB, and REST/GraphQL APIs."
        },
        {
          question: "Do you use ETL or ELT?",
          answer: "We generally prefer ELT (Extract, Load, Transform) using modern tools like dbt and Snowflake/BigQuery, as it offers greater flexibility and traceability, but we adapt to your constraints."
        },
        {
          question: "How do you handle data privacy (GDPR/CCPA)?",
          answer: "We design architectures with privacy by default, implementing column-level encryption, PII masking, and access controls to ensure compliance."
        },
        {
          question: "Can you fix our slow dashboards?",
          answer: "Yes. Often slow dashboards are due to poor data modeling. We can optimize your data warehouse schemas and queries to make reporting instant."
        },
        {
          question: "Do you support real-time data?",
          answer: "Yes, we build streaming pipelines using technologies like Kafka or AWS Kinesis for use cases that require sub-second latency."
        }
      ]}
    />
    </>
  );
}
