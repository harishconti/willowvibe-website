import Image from "next/image";
import { Award, Users, Lightbulb, User } from "lucide-react";
import { Metadata } from "next";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import TeamMember from "@/components/TeamMember";
import { teamMembers } from "@/data/team";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | WillowVibe Digital Solutions",
  description: "Learn about WillowVibe's mission to democratize enterprise-grade software development and AI integration services for businesses in Bengaluru and beyond.",
  alternates: {
    canonical: "https://willowvibe.github.io/willowvibe-website/about",
  },
};

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WillowVibe Digital Solutions",
    "url": "https://willowvibe.github.io/willowvibe-website",
    "logo": "https://willowvibe.github.io/willowvibe-website/images/logo.png",
    "foundingDate": "2024",
    "founders": teamMembers.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.role,
      "image": `https://willowvibe.github.io/willowvibe-website${member.image}`,
      "sameAs": [member.linkedin]
    })),
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "contact@willowvibe.com"
    }
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
                Founded in 2024 by three technology experts, WillowVibe brings together over 15 years of combined experience in software engineering, cloud architecture, and industrial solutions. Based in Bengaluru, India, we bridge the gap between complex enterprise technology and practical business needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our mission is simple yet ambitious: to make robust, scalable technology accessible to businesses of all sizes. Whether you're a startup needing a rapid MVP or an established enterprise seeking digital transformation, we apply the same rigorous engineering standards to every project.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Recognizing the transformative power of Generative AI, we have integrated cutting-edge AI and LLM capabilities into our core offerings, allowing us to deliver intelligent, future-ready solutions that drive real growth.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
              <Image
                src="/images/hero-illustration.svg"
                alt="Office Team Illustration"
                fill
                className="object-cover opacity-50"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
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
              <p className="text-gray-600 text-sm">Decades of combined industry experience delivering high-quality code.</p>
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

      {/* Meet the Founders */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Team Behind WillowVibe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining 15+ years of expertise in software engineering, AI, data pipelines, and full-stack development.
            </p>
          </div>

          {/* Combined Expertise Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 bg-teal-50 rounded-2xl p-8 border border-teal-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-700 mb-1">15+</div>
              <div className="text-sm text-teal-900 font-medium">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-700 mb-1">100+</div>
              <div className="text-sm text-teal-900 font-medium">Projects Delivered</div>
            </div>
             <div className="text-center">
              <div className="text-3xl font-bold text-teal-700 mb-1">3</div>
              <div className="text-sm text-teal-900 font-medium">Technology Domains</div>
            </div>
             <div className="text-center">
              <div className="text-3xl font-bold text-teal-700 mb-1">Multi</div>
              <div className="text-sm text-teal-900 font-medium">Industry Expertise</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

       {/* Testimonials */}
       <Testimonials />

       {/* FAQ Section */}
       <FAQ />

       {/* CTA Section */}
       <CTASection
         title="Ready to Work with Us?"
         description="Leverage our combined expertise to build your next big project."
         primaryButtonText="Contact Us"
         primaryButtonLink="/contact"
       />

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
