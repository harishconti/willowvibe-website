import Image from "next/image";
import { Award, Users, Lightbulb, User } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-teal-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About WillowVibe</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Democratizing access to professional software development with enterprise-grade solutions.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                WillowVibe was founded by an experienced Python Data Engineer with a vision to bring enterprise-level software quality to businesses of all sizes. Based in Bengaluru, India, we bridge the gap between complex technology and practical business solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that robust, scalable technology shouldn't be the privilege of only large corporations. Whether you're a startup looking for an MVP or an established business needing digital transformation, we bring the same level of engineering rigor to every project.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
              {/* Placeholder for Office Image/Illustration */}
              <span className="text-gray-400 font-medium">Office / Team Illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Technical Excellence</h3>
              <p className="text-gray-600 text-sm">5+ years of industry experience delivering high-quality code.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Client-Centric</h3>
              <p className="text-gray-600 text-sm">Your success is our success. We build what you need.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Leveraging AI, cloud-native tech, and modern frameworks.</p>
            </div>
             <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600 text-sm">Clear communication, realistic timelines, no hidden costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet the Lead</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-gray-200 md:w-64 flex items-center justify-center">
                 {/* Placeholder for Founder Photo */}
                 <User className="h-32 w-32 text-gray-400" />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-teal-600 font-semibold">Founder & Lead Engineer</div>
                <h3 className="mt-1 text-2xl font-bold text-gray-900">Harish Conti</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  With over 5 years of experience in enterprise software development, Harish specializes in Python, FastAPI, React Native, and Cloud Infrastructure. His background includes working with MedImpact, where he honed his skills in healthcare technology, ETL pipelines, and Kubernetes deployments.
                </p>
                <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">Python</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">FastAPI</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">React Native</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">ETL</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">Kubernetes</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Company Details */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 text-sm">
          <p><strong>Legal Name:</strong> WillowVibe Digital Solutions Pvt Ltd</p>
          <p className="mt-2"><strong>Location:</strong> Bengaluru, Karnataka, India</p>
        </div>
      </section>
    </div>
  );
}
