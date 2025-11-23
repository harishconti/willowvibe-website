import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white border-t dark:border-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-bold text-teal-400">
              WillowVibe
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Transforming ideas into scalable digital solutions. Professional IT services for modern businesses.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-teal-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Work
                </Link>
              </li>
               <li>
                <Link href="/process" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-solutions" className="text-teal-300 hover:text-teal-400 transition-colors font-medium">
                  AI Solutions & LLM Integration
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Custom SaaS Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Backend & API
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Data Engineering
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
              <li className="pt-4">
                <Link href="/resources/saas-guide" className="text-teal-300 hover:text-teal-400 transition-colors font-medium flex items-center">
                   <span className="bg-teal-900/50 px-2 py-0.5 rounded text-xs mr-2 border border-teal-800">Free</span> SaaS Dev Guide 2025
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  WillowVibe Digital Solutions Pvt Ltd<br />
                  Bengaluru, Karnataka, India
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-400 mr-2" />
                <a href="mailto:contact@willowvibe.com" className="text-gray-400 hover:text-white">
                  contact@willowvibe.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-400 mr-2" />
                <span className="text-gray-400">+91 [Your Number]</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} WillowVibe Digital Solutions Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
