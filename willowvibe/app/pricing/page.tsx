import { Check, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-teal-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Transparent Pricing</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Clear, flexible models suited to your project stage and requirements.
          </p>
        </div>
      </div>

      {/* Pricing Models */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Fixed Price */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
              <div className="p-8 bg-gray-50 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">Fixed-Price Projects</h3>
                <p className="text-gray-500 mt-2 text-sm">Best for well-defined scopes & MVPs</p>
              </div>
              <div className="p-8 flex-grow">
                 <div className="mb-6">
                    <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">Starting From</p>
                    <p className="text-4xl font-bold text-gray-900">₹3L<span className="text-lg font-normal text-gray-500"> /project</span></p>
                 </div>
                 <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                       <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                       <span className="text-gray-600">Defined timeline & budget</span>
                    </li>
                    <li className="flex items-start">
                       <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                       <span className="text-gray-600">Milestone-based payments</span>
                    </li>
                    <li className="flex items-start">
                       <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                       <span className="text-gray-600">Perfect for MVPs & Migrations</span>
                    </li>
                 </ul>
                 <Link href="/contact" className="block w-full py-3 px-6 text-center rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors">
                    Get a Quote
                 </Link>
              </div>
            </div>

            {/* Time & Materials */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-teal-500 overflow-hidden flex flex-col relative">
              <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">
                 Most Popular
              </div>
              <div className="p-8 bg-gray-50 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">Monthly Retainer</h3>
                <p className="text-gray-500 mt-2 text-sm">Best for long-term, evolving projects</p>
              </div>
              <div className="p-8 flex-grow">
                 <div className="mb-6">
                    <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">Starting From</p>
                    <p className="text-4xl font-bold text-gray-900">₹1.5L<span className="text-lg font-normal text-gray-500"> /month</span></p>
                 </div>
                 <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                       <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                       <span className="text-gray-600">80-120 hours/month</span>
                    </li>
                    <li className="flex items-start">
                       <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                       <span className="text-gray-600">Flexible scope</span>
                    </li>
                    <li className="flex items-start">
                       <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                       <span className="text-gray-600">Priority support</span>
                    </li>
                 </ul>
                 <Link href="/contact" className="block w-full py-3 px-6 text-center rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors">
                    Start Subscription
                 </Link>
              </div>
            </div>

            {/* Consultation */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
              <div className="p-8 bg-gray-50 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">Consultation</h3>
                <p className="text-gray-500 mt-2 text-sm">Code reviews, audits & architecture</p>
              </div>
              <div className="p-8 flex-grow">
                 <div className="mb-6">
                    <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">Hourly Rate</p>
                    <p className="text-4xl font-bold text-gray-900">₹3,000<span className="text-lg font-normal text-gray-500"> /hour</span></p>
                 </div>
                 <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                       <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                       <span className="text-gray-600">Expert technical advice</span>
                    </li>
                    <li className="flex items-start">
                       <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                       <span className="text-gray-600">Architecture review</span>
                    </li>
                    <li className="flex items-start">
                       <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                       <span className="text-gray-600">Min. 10 hours</span>
                    </li>
                 </ul>
                 <Link href="/contact" className="block w-full py-3 px-6 text-center rounded-lg bg-white border border-teal-600 text-teal-600 font-semibold hover:bg-teal-50 transition-colors">
                    Book Expert
                 </Link>
              </div>
            </div>
          </div>

          {/* AI Pricing Section */}
          <div className="mb-20">
             <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Solution Packages</h3>
             <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-gray-200 rounded-xl p-6">
                   <h4 className="font-bold text-xl mb-2">AI Proof of Concept</h4>
                   <p className="text-3xl font-bold text-teal-600 mb-4">₹1.5L - 3L</p>
                   <p className="text-sm text-gray-500 mb-4">2-4 weeks duration</p>
                   <ul className="space-y-2 text-sm text-gray-600 mb-6">
                      <li>• Validate AI feasibility</li>
                      <li>• Working prototype</li>
                      <li>• Performance metrics</li>
                   </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-6 bg-teal-50 border-teal-200">
                   <h4 className="font-bold text-xl mb-2">AI Integration</h4>
                   <p className="text-3xl font-bold text-teal-600 mb-4">₹4L - 8L</p>
                   <p className="text-sm text-gray-500 mb-4">2-3 months duration</p>
                   <ul className="space-y-2 text-sm text-gray-600 mb-6">
                      <li>• Add AI to existing app</li>
                      <li>• LLM API Integration</li>
                      <li>• Production-ready features</li>
                   </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-6">
                   <h4 className="font-bold text-xl mb-2">Custom AI App</h4>
                   <p className="text-3xl font-bold text-teal-600 mb-4">₹6L - 15L</p>
                   <p className="text-sm text-gray-500 mb-4">3-6 months duration</p>
                   <ul className="space-y-2 text-sm text-gray-600 mb-6">
                      <li>• Full RAG or ML Pipeline</li>
                      <li>• End-to-end solution</li>
                      <li>• Custom architecture</li>
                   </ul>
                </div>
             </div>
             <div className="mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-lg text-sm text-yellow-800 flex items-start">
                <HelpCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <p><strong>Note on AI Costs:</strong> AI projects may incur ongoing API costs (OpenAI, Claude, etc.) typically ₹5,000-50,000/month depending on usage. We optimize for cost efficiency and provide transparent usage tracking.</p>
             </div>
          </div>

          {/* What's Included */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
             <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Included in All Projects</h3>
             <div className="grid md:grid-cols-3 gap-6">
                {[
                    "Project Management", "Git Version Control", "Automated Testing",
                    "API Documentation", "Deployment Assistance", "30-Day Support",
                    "Source Code Ownership", "Weekly Updates", "Secure Architecture",
                    "AI Model Justification", "Cost Optimization"
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-teal-600 mr-3" />
                        <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
