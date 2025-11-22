import { Check, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Pricing & Packages | WillowVibe Digital Solutions",
  description: "Transparent pricing for custom SaaS development, AI integration, and data engineering services. Flexible models for fixed-price projects or monthly retainers.",
  alternates: {
    canonical: "https://willowvibe.github.io/willowvibe-website/pricing",
  },
};

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
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
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

          <div className="grid md:grid-cols-2 gap-8">
              {/* Add-On Services */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Add-On Services</h3>
                  <div className="space-y-6">
                      <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                          <div>
                              <h4 className="font-bold text-gray-900">Ongoing Maintenance</h4>
                              <p className="text-sm text-gray-500">Updates, security patches, monitoring</p>
                          </div>
                          <div className="text-right">
                              <p className="font-bold text-teal-600">₹20k - 50k</p>
                              <p className="text-xs text-gray-400">/month</p>
                          </div>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                          <div>
                              <h4 className="font-bold text-gray-900">Priority Support</h4>
                              <p className="text-sm text-gray-500">Faster response times, dedicated channel</p>
                          </div>
                          <div className="text-right">
                              <p className="font-bold text-teal-600">₹15k</p>
                              <p className="text-xs text-gray-400">/month</p>
                          </div>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                          <div>
                              <h4 className="font-bold text-gray-900">Server Hosting Management</h4>
                              <p className="text-sm text-gray-500">Infrastructure management</p>
                          </div>
                          <div className="text-right">
                              <p className="font-bold text-teal-600">₹10k - 30k</p>
                              <p className="text-xs text-gray-400">/month</p>
                          </div>
                      </div>
                       <div className="flex justify-between items-center">
                          <div>
                              <h4 className="font-bold text-gray-900">Additional Training</h4>
                              <p className="text-sm text-gray-500">On-site or virtual team training</p>
                          </div>
                          <div className="text-right">
                              <p className="font-bold text-teal-600">₹25k</p>
                              <p className="text-xs text-gray-400">/day</p>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Payment Terms */}
              <div className="bg-teal-50 rounded-2xl border border-teal-100 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Terms</h3>
                  <p className="text-gray-600 mb-8">
                      We believe in fair and transparent payment schedules linked to clear deliverables.
                  </p>

                  <div className="space-y-6 relative">
                      {/* Connecting Line */}
                      <div className="absolute left-[15px] top-3 bottom-3 w-0.5 bg-teal-200"></div>

                      <div className="relative flex items-start">
                          <div className="h-8 w-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm shrink-0 z-10">1</div>
                          <div className="ml-6">
                              <h4 className="font-bold text-gray-900">30% Upfront</h4>
                              <p className="text-sm text-gray-600">To kick off the project and reserve resources.</p>
                          </div>
                      </div>
                      <div className="relative flex items-start">
                          <div className="h-8 w-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm shrink-0 z-10">2</div>
                          <div className="ml-6">
                              <h4 className="font-bold text-gray-900">40% Mid-Project</h4>
                              <p className="text-sm text-gray-600">Upon completion of major milestones or alpha release.</p>
                          </div>
                      </div>
                      <div className="relative flex items-start">
                          <div className="h-8 w-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm shrink-0 z-10">3</div>
                          <div className="ml-6">
                              <h4 className="font-bold text-gray-900">30% On Delivery</h4>
                              <p className="text-sm text-gray-600">After final testing, approval, and deployment.</p>
                          </div>
                      </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-teal-200 text-sm text-teal-800 font-medium">
                      For Monthly Retainers: Invoiced at the beginning of each month.
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}
