import { Search, PenTool, Code, CheckSquare, Rocket, Headphones, Brain } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Development Process | WillowVibe Digital Solutions",
  description: "A structured, transparent methodology ensuring your software project is delivered on time and within budget. From discovery to deployment.",
  alternates: {
    canonical: "https://willowvibe.github.io/willowvibe-website/process",
  },
};

export default function Process() {
  const steps = [
    {
      phase: "Phase 1",
      title: "Discovery & Planning",
      duration: "1-2 weeks",
      icon: <Search className="h-8 w-8 text-teal-600" />,
      items: [
        "Kickoff meeting & requirements gathering",
        "Technical feasibility assessment (AI readiness)",
        "User stories & feature prioritization",
        "Project timeline & cost estimation"
      ],
      deliverables: "Requirements document, Project plan"
    },
    {
      phase: "Phase 2",
      title: "Design & Architecture",
      duration: "1-2 weeks",
      icon: <PenTool className="h-8 w-8 text-blue-600" />,
      items: [
        "System architecture design (including AI models)",
        "Database schema design",
        "API design & documentation",
        "Prompt engineering strategy (for LLM projects)"
      ],
      deliverables: "Architecture diagrams, API specs, Design mockups"
    },
    {
      phase: "AI Special",
      title: "For AI Projects, We Add:",
      duration: "Parallel",
      icon: <Brain className="h-8 w-8 text-pink-600" />,
      items: [
        "Proof of Concept (PoC) to validate feasibility",
        "Model evaluation and selection",
        "Training data preparation",
        "Prompt engineering & testing",
        "Cost optimization analysis"
      ],
      deliverables: "PoC Report, Model Benchmarks"
    },
    {
      phase: "Phase 3",
      title: "Development",
      duration: "6-16 weeks",
      icon: <Code className="h-8 w-8 text-indigo-600" />,
      items: [
        "Agile/Scrum methodology with 2-week sprints",
        "Regular code reviews",
        "Bi-weekly client demos",
        "Continuous integration"
      ],
      deliverables: "Working software every 2 weeks"
    },
    {
      phase: "Phase 4",
      title: "Testing & QA",
      duration: "2-3 weeks",
      icon: <CheckSquare className="h-8 w-8 text-purple-600" />,
      items: [
        "Unit & Integration testing",
        "End-to-end testing",
        "Security & Performance testing",
        "User acceptance testing (UAT)"
      ],
      deliverables: "Test reports, Bug fixes"
    },
    {
      phase: "Phase 5",
      title: "Deployment",
      duration: "1-2 weeks",
      icon: <Rocket className="h-8 w-8 text-orange-600" />,
      items: [
        "Production environment setup",
        "Database migration",
        "CI/CD pipeline configuration",
        "User training sessions"
      ],
      deliverables: "Live application, User documentation"
    },
    {
      phase: "Phase 6",
      title: "Support & Maintenance",
      duration: "Ongoing",
      icon: <Headphones className="h-8 w-8 text-green-600" />,
      items: [
        "Bug fixes & hotfixes",
        "Security updates",
        "Performance monitoring",
        "Feature enhancements"
      ],
      deliverables: "Monthly support reports"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-teal-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Methodology</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            A structured, transparent process ensuring your project is delivered on time and within budget.
          </p>
        </div>
      </div>

      {/* Process Timeline */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vertical Line (Hidden on mobile) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2 z-0"></div>

          <div className="space-y-12 md:space-y-24 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                {/* Content */}
                <div className="w-full md:w-5/12 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                     <span className="text-teal-600 font-bold text-sm uppercase tracking-wide">{step.phase}</span>
                     <span className="text-gray-400 text-xs font-medium bg-gray-100 px-2 py-1 rounded">{step.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600 text-sm">
                        <span className="mr-2 text-teal-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500"><strong>Deliverables:</strong> {step.deliverables}</p>
                  </div>
                </div>

                {/* Icon Marker */}
                <div className="w-full md:w-2/12 flex justify-center py-6 md:py-0">
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-teal-50 flex items-center justify-center shadow-sm relative z-10">
                        {step.icon}
                    </div>
                </div>

                {/* Empty space for alternate side */}
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
