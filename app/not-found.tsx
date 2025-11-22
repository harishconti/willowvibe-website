import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | WillowVibe",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-9xl font-extrabold text-teal-100 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Page Not Found</h2>
      <p className="text-xl text-gray-600 mb-10 max-w-md mx-auto">
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg w-full mb-10">
        <Link href="/" className="p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-md transition-all text-left group">
          <h3 className="font-bold text-gray-900 group-hover:text-teal-600">Home Page</h3>
          <p className="text-sm text-gray-500 mt-1">Return to the main landing page</p>
        </Link>
        <Link href="/blog" className="p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-md transition-all text-left group">
          <h3 className="font-bold text-gray-900 group-hover:text-teal-600">Our Blog</h3>
          <p className="text-sm text-gray-500 mt-1">Read our latest insights & guides</p>
        </Link>
        <Link href="/services" className="p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-md transition-all text-left group">
          <h3 className="font-bold text-gray-900 group-hover:text-teal-600">Services</h3>
          <p className="text-sm text-gray-500 mt-1">Explore our technical solutions</p>
        </Link>
        <Link href="/contact" className="p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:shadow-md transition-all text-left group">
          <h3 className="font-bold text-gray-900 group-hover:text-teal-600">Contact Us</h3>
          <p className="text-sm text-gray-500 mt-1">Get in touch with our team</p>
        </Link>
      </div>

      <Link
        href="/"
        className="px-8 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
