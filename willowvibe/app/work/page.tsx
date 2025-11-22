import { ArrowRight, Check, Server, Smartphone, Database } from "lucide-react";
import Link from "next/link";

export default function Work() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-teal-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Work</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Real-world solutions delivering tangible business results.
          </p>
        </div>
      </div>

      {/* Featured Project: Clinic OS Lite */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
             <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">Featured Case Study</span>
             <h2 className="text-4xl font-bold text-gray-900 mt-2">Clinic OS Lite</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="prose prose-lg text-gray-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                <p className="mb-6">
                  Healthcare providers in remote or semi-urban areas often struggle with internet connectivity, making cloud-only patient management systems unreliable. They needed a modern, affordable solution that could work offline and sync when online.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h3>
                <p className="mb-6">
                  We built a full-stack patient management system using a "Local-First" architecture. The application prioritizes local data storage for instant interactions and synchronizes with the cloud in the background.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-teal-500 mr-2 mt-0.5" />
                    <span>Offline-first capability using WatermelonDB</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-teal-500 mr-2 mt-0.5" />
                    <span>Cross-platform support (iOS, Android, Web) via React Native</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-teal-500 mr-2 mt-0.5" />
                    <span>Secure, scalable backend with FastAPI & MongoDB</span>
                  </li>
                </ul>

                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h3>
                 <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                        <Server className="h-5 w-5 text-gray-600 mr-2" />
                        <span className="font-medium">FastAPI</span>
                    </div>
                    <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                        <Smartphone className="h-5 w-5 text-gray-600 mr-2" />
                        <span className="font-medium">React Native</span>
                    </div>
                    <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                        <Database className="h-5 w-5 text-gray-600 mr-2" />
                        <span className="font-medium">MongoDB</span>
                    </div>
                 </div>
              </div>
            </div>

            <div className="space-y-8">
                {/* Screenshots / Visuals */}
                <div className="bg-gray-50 rounded-2xl border border-gray-200 p-4 shadow-sm">
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                        {/* Fake Browser Header */}
                        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            <div className="ml-4 bg-white rounded text-xs text-gray-400 px-2 py-0.5 flex-1 text-center">clinic-os.app/dashboard</div>
                        </div>
                        {/* Fake Dashboard Content */}
                        <div className="p-4 space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-24 bg-blue-50 rounded p-3">
                                    <div className="h-4 w-12 bg-blue-200 rounded mb-2"></div>
                                    <div className="h-8 w-16 bg-blue-100 rounded"></div>
                                </div>
                                <div className="h-24 bg-teal-50 rounded p-3">
                                    <div className="h-4 w-12 bg-teal-200 rounded mb-2"></div>
                                    <div className="h-8 w-16 bg-teal-100 rounded"></div>
                                </div>
                                <div className="h-24 bg-purple-50 rounded p-3">
                                    <div className="h-4 w-12 bg-purple-200 rounded mb-2"></div>
                                    <div className="h-8 w-16 bg-purple-100 rounded"></div>
                                </div>
                            </div>
                             <div className="h-40 bg-gray-50 rounded border border-gray-100 p-3">
                                 <div className="flex space-x-4 mb-3 border-b border-gray-200 pb-2">
                                     <div className="h-4 w-16 bg-gray-200 rounded"></div>
                                     <div className="h-4 w-16 bg-gray-200 rounded"></div>
                                 </div>
                                 <div className="space-y-2">
                                     <div className="h-8 w-full bg-white rounded border border-gray-100"></div>
                                     <div className="h-8 w-full bg-white rounded border border-gray-100"></div>
                                     <div className="h-8 w-full bg-white rounded border border-gray-100"></div>
                                 </div>
                             </div>
                        </div>
                    </div>
                    <p className="text-center text-xs text-gray-500 mt-2">Dashboard View</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-4 shadow-sm flex flex-col items-center">
                         <div className="w-24 bg-white border border-gray-300 rounded-[1.5rem] p-1 shadow-sm">
                             <div className="bg-gray-50 rounded-[1.2rem] h-40 overflow-hidden relative">
                                 {/* Mobile Screen Mockup */}
                                 <div className="bg-teal-600 h-8 w-full"></div>
                                 <div className="p-2 space-y-2">
                                     <div className="h-8 bg-white rounded shadow-sm"></div>
                                     <div className="h-8 bg-white rounded shadow-sm"></div>
                                     <div className="h-8 bg-white rounded shadow-sm"></div>
                                 </div>
                                  <div className="absolute bottom-1 right-1 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-[8px] text-white">+</div>
                             </div>
                         </div>
                         <p className="text-xs text-gray-500 mt-2">Mobile Interface</p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-4 shadow-sm flex flex-col items-center justify-center">
                         <div className="relative">
                             <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm w-32">
                                 <div className="flex items-center space-x-2 mb-2">
                                     <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                     <div className="text-[10px] text-gray-500">Synced</div>
                                 </div>
                                 <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                                     <div className="h-full bg-green-500 w-full"></div>
                                 </div>
                             </div>
                             <div className="absolute -top-2 -right-2 bg-yellow-100 text-yellow-800 text-[10px] px-1.5 py-0.5 rounded border border-yellow-200">
                                 Offline Mode
                             </div>
                         </div>
                         <p className="text-xs text-gray-500 mt-4 text-center">Offline Sync</p>
                    </div>
                </div>

                 <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                    <h4 className="font-bold text-teal-900 mb-2">Results</h4>
                    <p className="text-teal-800">
                        Deployment successful in 3 clinics, reducing patient check-in time by 40% and eliminating data loss due to connectivity issues.
                    </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-blue-900 mb-2">Planned AI Enhancements (Q2 2025)</h4>
                    <ul className="space-y-2 text-sm text-blue-800">
                        <li>• <strong>AI Medical Scribe:</strong> Real-time clinical note generation using OpenAI Whisper & GPT-4</li>
                        <li>• <strong>Intelligent Search:</strong> Semantic patient history search</li>
                        <li>• <strong>Drug Interaction Warnings:</strong> AI-powered safety checks</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects / AI Samples */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">More Projects & Experiments</h2>
           <div className="grid md:grid-cols-3 gap-8">
               {/* Project 1 */}
               <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                   <div className="h-40 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                       <span className="text-gray-400 font-medium">RAG Chatbot Demo</span>
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Support AI Bot</h3>
                   <p className="text-gray-600 text-sm mb-4">
                       A demonstration of Retrieval-Augmented Generation (RAG) using Pinecone and OpenAI to answer technical queries from documentation.
                   </p>
                   <span className="text-xs font-semibold bg-teal-100 text-teal-800 px-2 py-1 rounded">Internal Tool</span>
               </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Have a Similar Project in Mind?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you need a complex enterprise system or a specialized mobile app, we have the expertise to deliver.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all">
            Discuss Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
