import { Server, Smartphone, Database, Cloud, Code, Brain } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Stack | Python, React, AI & Cloud | WillowVibe",
  description: "Explore the modern technology stack we use at WillowVibe, including Python, FastAPI, React Native, Kubernetes, and cutting-edge AI frameworks like LangChain.",
  alternates: {
    canonical: "https://willowvibe.github.io/willowvibe-website/technology",
  },
};

export default function Technology() {
  const techCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6 text-pink-600" />,
      items: [
        { name: "LLMs", desc: "OpenAI GPT-4, Anthropic Claude, Gemini" },
        { name: "AI Frameworks", desc: "LangChain, LlamaIndex, Haystack" },
        { name: "Vector Databases", desc: "Pinecone, Weaviate, ChromaDB" },
        { name: "ML Infrastructure", desc: "MLflow, Hugging Face" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6 text-teal-600" />,
      items: [
        { name: "Python & FastAPI", desc: "Modern, high-performance API framework" },
        { name: "Node.js", desc: "For specific use cases requiring JS ecosystem" },
        { name: "PostgreSQL", desc: "Primary relational database" },
        { name: "MongoDB", desc: "Flexible document store" }
      ]
    },
    {
      title: "Frontend & Mobile",
      icon: <Smartphone className="h-6 w-6 text-blue-600" />,
      items: [
        { name: "React Native", desc: "Cross-platform mobile (iOS, Android)" },
        { name: "React.js", desc: "Modern web applications" },
        { name: "Expo", desc: "Rapid mobile development" },
        { name: "WatermelonDB", desc: "Offline-first mobile database" }
      ]
    },
    {
      title: "Data Engineering",
      icon: <Database className="h-6 w-6 text-purple-600" />,
      items: [
        { name: "Apache Airflow", desc: "Workflow orchestration" },
        { name: "Pandas", desc: "Data processing and transformation" },
        { name: "ETL Tools", desc: "Custom Python scripts" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="h-6 w-6 text-orange-600" />,
      items: [
        { name: "Kubernetes", desc: "Container orchestration" },
        { name: "Docker", desc: "Containerization" },
        { name: "Google Cloud Platform", desc: "Primary cloud provider" },
        { name: "GitHub Actions", desc: "CI/CD automation" }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-teal-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Tech Stack</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            We choose the best tools for the job, prioritizing performance, scalability, and developer experience.
          </p>
        </div>
      </div>

      {/* Tech Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {techCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white rounded-lg shadow-sm mr-4">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <Code className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Stack */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why This Stack?</h2>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable</h3>
                <p className="text-gray-600">
                    Our architecture handles growth from startup MVP to enterprise-scale traffic without needing a rewrite.
                </p>
             </div>
             <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cost-Effective</h3>
                <p className="text-gray-600">
                    We leverage open-source tools and optimized resource usage to keep your infrastructure costs low.
                </p>
             </div>
             <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Modern & Proven</h3>
                <p className="text-gray-600">
                    We use technologies trusted by industry leaders like Netflix, Uber, and Instagram.
                </p>
             </div>
             <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Ready</h3>
                <p className="text-gray-600">
                   Pre-integrated with leading LLM APIs and ML frameworks for rapid intelligent feature deployment.
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
