import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  WifiOff,
  Smartphone,
  RefreshCw,
  Shield,
  Server,
  Database,
  Cpu,
  Box,
  Layers,
  Activity
} from "lucide-react";

export const metadata: Metadata = {
  title: "Clinic OS Lite Case Study | WillowVibe",
  description: "A comprehensive offline-first patient management solution built for multi-clinic healthcare providers.",
};

export default function ClinicOSCaseStudy() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-teal-50 border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-teal-600">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/work" className="hover:text-teal-600">Work</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="font-medium text-teal-800">Clinic OS Lite</span>
          </div>
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Clinic OS Lite: Modern Patient Management for Healthcare
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A comprehensive offline-first solution built for multi-clinic healthcare providers
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-3 mb-12">
              {["FastAPI", "React Native", "MongoDB", "WatermelonDB", "Kubernetes"].map((tech) => (
                <span key={tech} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium border border-teal-100">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="w-full aspect-[2/1] bg-gradient-to-br from-teal-50 to-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                   <span className="text-gray-400 text-sm block mb-2">Project Screenshot / Interface</span>
                   <div className="w-32 h-32 bg-teal-100 rounded-lg mx-auto flex items-center justify-center shadow-sm">
                      <Smartphone className="h-12 w-12 text-teal-600" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Challenge Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">The Challenge</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="prose prose-lg text-gray-600">
                <p className="text-lg leading-relaxed mb-6">
                  Traditional clinic management systems struggled with reliable operation in environments with unstable internet connectivity. This led to significant disruptions in daily operations.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1.5 mr-3 w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                    <span>Unreliable internet causing workflow disruptions and data loss</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 mr-3 w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                    <span>Poor mobile experience for doctors conducting rounds</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 mr-3 w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                    <span>No real-time patient data sync across multiple locations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 mr-3 w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                    <span>Complex integrations with existing legacy systems</span>
                  </li>
                </ul>
             </div>

             {/* Visual placeholder */}
             <div className="h-80 bg-white rounded-xl border border-gray-200 shadow-sm p-8 flex items-center justify-center relative">
                <div className="text-center">
                   <div className="bg-red-50 p-4 rounded-full inline-flex mb-4">
                      <Activity className="h-8 w-8 text-red-500" />
                   </div>
                   <p className="text-gray-500 font-medium">System Pain Points Visualization</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Our Solution</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {/* Feature 1 */}
             <div className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow bg-white">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                   <WifiOff className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Offline-First</h3>
                <p className="text-gray-600 text-sm">
                  Continued operation without internet using local database architecture.
                </p>
             </div>

             {/* Feature 2 */}
             <div className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow bg-white">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                   <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cross-Platform</h3>
                <p className="text-gray-600 text-sm">
                  Native experience on iOS and Android for seamless mobile usage.
                </p>
             </div>

             {/* Feature 3 */}
             <div className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow bg-white">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                   <RefreshCw className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Sync</h3>
                <p className="text-gray-600 text-sm">
                   Instant background synchronization when connectivity is restored.
                </p>
             </div>

             {/* Feature 4 */}
             <div className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow bg-white">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                   <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Cloud</h3>
                <p className="text-gray-600 text-sm">
                   Enterprise-grade security and compliant cloud infrastructure.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Technical Implementation */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-3xl font-bold mb-8">Technical Implementation</h2>
               <div className="space-y-6">
                  <div className="flex items-start">
                     <Server className="h-6 w-6 text-teal-400 mr-4 mt-1" />
                     <div>
                        <h4 className="font-bold text-lg mb-1">Backend</h4>
                        <p className="text-gray-400">FastAPI with async capabilities for high-performance API handling.</p>
                     </div>
                  </div>

                  <div className="flex items-start">
                     <Smartphone className="h-6 w-6 text-teal-400 mr-4 mt-1" />
                     <div>
                        <h4 className="font-bold text-lg mb-1">Frontend</h4>
                        <p className="text-gray-400">React Native ensuring a native look and feel on both iOS and Android.</p>
                     </div>
                  </div>

                  <div className="flex items-start">
                     <Database className="h-6 w-6 text-teal-400 mr-4 mt-1" />
                     <div>
                        <h4 className="font-bold text-lg mb-1">Database</h4>
                        <p className="text-gray-400">MongoDB combined with WatermelonDB for robust offline storage and sync.</p>
                     </div>
                  </div>

                  <div className="flex items-start">
                     <Cpu className="h-6 w-6 text-teal-400 mr-4 mt-1" />
                     <div>
                        <h4 className="font-bold text-lg mb-1">Infrastructure</h4>
                        <p className="text-gray-400">Kubernetes on GCP providing auto-scaling and high availability.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Architecture diagram placeholder */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 h-96 flex items-center justify-center relative">
               <div className="text-center">
                  <Layers className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 font-mono text-sm">Architecture Diagram Placeholder</p>
                  <div className="mt-4 flex gap-4 justify-center opacity-50">
                     <div className="w-16 h-16 border border-dashed border-gray-500 rounded"></div>
                     <div className="w-16 h-16 border border-dashed border-gray-500 rounded"></div>
                     <div className="w-16 h-16 border border-dashed border-gray-500 rounded"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Impact & Results</h2>
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Metric 1 */}
              <div className="p-8 bg-teal-50 rounded-2xl border border-teal-100 text-center">
                 <div className="text-4xl font-bold text-teal-600 mb-2">95%</div>
                 <div className="text-gray-600 font-medium">Reduction in Sync Errors</div>
              </div>

              {/* Metric 2 */}
              <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm text-center">
                 <div className="text-4xl font-bold text-teal-600 mb-2">3x</div>
                 <div className="text-gray-600 font-medium">Faster Patient Check-in</div>
              </div>

              {/* Metric 3 */}
              <div className="p-8 bg-teal-50 rounded-2xl border border-teal-100 text-center">
                 <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
                 <div className="text-gray-600 font-medium">Offline Capability</div>
              </div>

              {/* Metric 4 */}
              <div className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm text-center">
                 <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
                 <div className="text-gray-600 font-medium">Active Users</div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Coming Soon Feature */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden shadow-xl">
              {/* Decorative background elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>

              <div className="relative z-10">
                 <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                    Coming Soon - Q1 2026
                 </div>
                 <h3 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Medical Scribe Integration</h3>
                 <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Reducing documentation time by 60% using advanced LLM technology to automatically transcribe and structure consultation notes.
                 </p>
                 <div className="inline-flex items-center text-sm font-semibold bg-white text-purple-700 px-6 py-3 rounded-lg shadow-sm">
                    Beta Access Waitlist Open
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Build Your Healthcare Solution?</h2>
          <p className="text-xl text-gray-600 mb-10">
             Let's discuss how our technical expertise can transform your medical operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all shadow-md hover:shadow-lg">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
             </Link>
             <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-teal-700 bg-teal-50 rounded-lg hover:bg-teal-100 transition-all border border-teal-200">
                Download Full Case Study
                <Box className="ml-2 h-5 w-5" />
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
