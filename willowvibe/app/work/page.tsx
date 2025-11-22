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
                <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center shadow-inner">
                    <span className="text-gray-400 font-medium">Dashboard Screenshot</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 rounded-2xl h-48 flex items-center justify-center shadow-inner">
                        <span className="text-gray-400 font-medium text-sm">Mobile View</span>
                    </div>
                    <div className="bg-gray-100 rounded-2xl h-48 flex items-center justify-center shadow-inner">
                        <span className="text-gray-400 font-medium text-sm">Offline Sync Demo</span>
                    </div>
                </div>

                 <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                    <h4 className="font-bold text-teal-900 mb-2">Results</h4>
                    <p className="text-teal-800">
                        Deployment successful in 3 clinics, reducing patient check-in time by 40% and eliminating data loss due to connectivity issues.
                    </p>
                </div>
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
