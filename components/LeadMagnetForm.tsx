"use client";

import { useState } from "react";
import { Check, Loader2, Download, AlertCircle } from "lucide-react";
import { analytics } from "@/lib/analytics";

export default function LeadMagnetForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    updates: true,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Simulation of API call to Email Service (ConvertKit, Mailchimp, etc.)
      // In a real environment with backend configured, we would call the API:
      // const response = await fetch('/willowvibe-website/api/subscribe', {
      //    method: 'POST',
      //    headers: { 'Content-Type': 'application/json' },
      //    body: JSON.stringify(formData)
      // });
      // if (!response.ok) throw new Error('Subscription failed');

      // For static export demo purposes, we simulate the delay:
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      setStatus("success");
      analytics.downloadGuide('SaaS Guide');

      // Trigger download
      const link = document.createElement('a');
      // Using the specific basePath as configured in next.config.js
      link.href = '/willowvibe-website/resources/saas-development-guide-2025.pdf';
      link.download = 'WillowVibe-SaaS-Guide-2025.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-teal-50 border border-teal-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Check your inbox!</h3>
        <p className="text-gray-600 mb-6">
          We've sent the guide to <strong>{formData.email}</strong>. The download should have started automatically.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-teal-600 font-semibold hover:text-teal-700 underline"
        >
          Download again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Get Your Free Copy</h3>
        <p className="text-gray-600 mt-2">Join 500+ founders building scalable SaaS.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
            placeholder="Acme Inc."
          />
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="updates"
              name="updates"
              type="checkbox"
              checked={formData.updates}
              onChange={handleChange}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="updates" className="text-gray-600">
              Send me updates on SaaS development best practices
            </label>
          </div>
        </div>

        {status === "error" && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg flex items-center text-sm">
                <AlertCircle className="h-4 w-4 mr-2" />
                {errorMessage}
            </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
              Processing...
            </>
          ) : (
            <>
              <Download className="-ml-1 mr-2 h-5 w-5" />
              Download Free Guide
            </>
          )}
        </button>

        <p className="text-xs text-center text-gray-500 mt-4">
          We respect your privacy. No spam, ever. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
