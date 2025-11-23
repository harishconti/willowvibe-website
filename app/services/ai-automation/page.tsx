import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import {
  Bot,
  Brain,
  MessageSquare,
  FileText,
  BarChart,
  Search
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI & Automation Services | Custom LLM & RAG Solutions",
  description: "Integrate AI into your business with custom LLM solutions, RAG systems, chatbots, and intelligent process automation.",
};

export default function AIAutomationPage() {
  return (
    <ServicePageLayout
      serviceName="AI & Intelligent Automation"
      heroDescription="Harness the power of Generative AI and LLMs to automate workflows, unlock data insights, and deliver personalized customer experiences."
      heroImage="/images/service-icon.svg" // Placeholder
      overviewDescription={[
        "Artificial Intelligence is no longer a buzzword; it's a competitive necessity. We help businesses integrate state-of-the-art AI models (like GPT-4, Claude, and Llama) into their operations.",
        "Our expertise lies in building Retrieval-Augmented Generation (RAG) systems that chat with your data, custom fine-tuned models for specific tasks, and autonomous agents that perform complex actions.",
        "From initial feasibility assessment to production deployment, we ensure your AI solution is accurate, cost-effective, and secure."
      ]}
      benefits={[
        "Custom RAG Systems for Private Data",
        "Workflow Automation with AI Agents",
        "Cost-optimized LLM Integration",
        "Secure & Private Model Deployment"
      ]}
      useCases={[
        {
          title: "Customer Support Chatbots",
          description: "24/7 intelligent support that understands context and intent.",
          icon: <MessageSquare className="h-6 w-6 text-teal-600" />
        },
        {
          title: "Document Analysis (OCR+AI)",
          description: "Extract structured data from invoices, contracts, and forms.",
          icon: <FileText className="h-6 w-6 text-teal-600" />
        },
        {
          title: "Knowledge Base Assistants",
          description: "Internal tools that let employees chat with company wikis and docs.",
          icon: <Search className="h-6 w-6 text-teal-600" />
        },
        {
          title: "Predictive Analytics",
          description: "Forecast trends and churn using machine learning models.",
          icon: <BarChart className="h-6 w-6 text-teal-600" />
        },
        {
          title: "Personalized Content Gen",
          description: "Auto-generate marketing copy, emails, and reports.",
          icon: <Bot className="h-6 w-6 text-teal-600" />
        },
        {
          title: "Decision Support Systems",
          description: "AI-driven insights to aid strategic decision making.",
          icon: <Brain className="h-6 w-6 text-teal-600" />
        }
      ]}
      techStack={[
        {
          category: "LLMs & APIs",
          techs: ["OpenAI", "Anthropic", "Mistral", "Llama 3"],
          description: "State-of-the-art foundation models."
        },
        {
          category: "Frameworks",
          techs: ["LangChain", "LlamaIndex", "AutoGen"],
          description: "Orchestration for AI agents."
        },
        {
          category: "Vector Databases",
          techs: ["Pinecone", "ChromaDB", "Weaviate", "Postgres (pgvector)"],
          description: "Long-term memory for AI."
        },
        {
          category: "Infrastructure",
          techs: ["Hugging Face", "RunPod", "AWS Bedrock"],
          description: "Model hosting and inference."
        }
      ]}
      deliverables={[
        "Custom AI/LLM Application source code",
        "Vector Database setup & embedding pipeline",
        "Prompt Engineering library & documentation",
        "Evaluation metrics & accuracy report",
        "Integration with existing tools (Slack, Email)",
        "Data privacy & security compliance report"
      ]}
      process={[
        {
          title: "Feasibility Analysis",
          description: "Assess data readiness and choose the right model.",
          duration: "1 Week"
        },
        {
          title: "Prototype / POC",
          description: "Build a quick proof of concept to validate value.",
          duration: "2-3 Weeks"
        },
        {
          title: "Development & Tuning",
          description: "Full implementation, prompt tuning, and RAG setup.",
          duration: "4-8 Weeks"
        },
        {
          title: "Evaluation & Testing",
          description: "Test for hallucinations, bias, and accuracy.",
          duration: "2 Weeks"
        },
        {
          title: "Deployment & Monitoring",
          description: "Live launch with usage and cost tracking.",
          duration: "1 Week"
        }
      ]}
      caseStudy={{
        title: "Legal Document Assistant",
        description: "Developed a RAG-based system for a law firm to instantly search and summarize thousands of case files. Reduced research time by 70% and improved case preparation accuracy.",
        image: "/images/service-icon.svg",
        link: "/work"
      }}
      pricing={{
        starter: {
          price: "$10K - $20K",
          timeline: "4-8 Weeks",
          description: "Proof of Concept or simple chatbot integration."
        },
        professional: {
          price: "$25K - $50K",
          timeline: "2-4 Months",
          description: "Custom RAG system or internal tool."
        },
        enterprise: {
          price: "$50K+",
          timeline: "4+ Months",
          description: "Complex agentic workflows & fine-tuning."
        },
        includes: [
          "Model Selection Advisory",
          "Data Privacy Assessment",
          "Vector DB Setup",
          "Prompt Engineering",
          "Integration Support",
          "Cost Optimization Strategy"
        ]
      }}
      faqs={[
        {
          question: "Is my data shared with OpenAI/Model providers?",
          answer: "We prioritize privacy. We configure APIs to ensure your data is NOT used for training their models. For highly sensitive data, we can deploy open-source models (like Llama 3) on your private infrastructure."
        },
        {
          question: "How accurate are the AI responses?",
          answer: "We use RAG (Retrieval-Augmented Generation) to ground the AI in your specific data, drastically reducing hallucinations. We also implement evaluation frameworks to measure accuracy."
        },
        {
          question: "What are the ongoing costs?",
          answer: "Apart from hosting, you will have API usage costs (e.g., OpenAI credits) or GPU costs if self-hosting. We estimate these during the discovery phase and optimize for efficiency."
        },
        {
          question: "Can you fine-tune a model for us?",
          answer: "Yes, we can fine-tune models like GPT-3.5 or Llama if you have a specific style or specialized domain language that standard models don't handle well."
        },
        {
          question: "Do you build AI agents?",
          answer: "Yes, we build autonomous agents that can use tools, browse the web, and perform multi-step tasks to automate complex workflows."
        }
      ]}
    />
  );
}
