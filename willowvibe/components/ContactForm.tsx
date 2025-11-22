'use client';

import { Mail, MapPin, Phone, Clock, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Basic Validation
    if (!data.email || !data.message || !data.name) {
        setError("Please fill in all required fields.");
        setIsLoading(false);
        return;
    }

    // Web3Forms Submission (using a public access key or generic placeholder)
    const accessKey = "YOUR_ACCESS_KEY_HERE";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey,
                ...data,
            }),
        });

        const result = await response.json();

        if (result.success) {
            setIsSuccess(true);
            // Reset form
            (event.target as HTMLFormElement).reset();
        } else {
            setError(result.message || "Something went wrong. Please try again.");
        }
    } catch (err) {
        setError("Failed to send message. Please try again later.");
    } finally {
        setIsLoading(false);
    }
  }

  return (
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              {isSuccess ? (
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 text-center">
                      <div className="flex justify-center mb-4">
                          <CheckCircle className="h-12 w-12 text-teal-600" />
                      </div>
                      <h3 className="text-lg font-bold text-teal-900 mb-2">Message Sent!</h3>
                      <p className="text-teal-700 mb-6">Thank you for contacting us. We will get back to you shortly.</p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="text-teal-600 font-medium hover:text-teal-800 underline"
                      >
                          Send another message
                      </button>
                  </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative flex items-center">
                            <AlertCircle className="h-5 w-5 mr-2" />
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}

                    <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
                    <div className="mt-1">
                        <input required type="text" name="name" id="name" autoComplete="name" className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md border" />
                    </div>
                    </div>

                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                            <div className="mt-1">
                            <input required id="email" name="email" type="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md border" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone <span className="text-red-500">*</span></label>
                            <div className="mt-1">
                            <input required id="phone" name="phone" type="tel" autoComplete="tel" className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md border" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company / Organization</label>
                        <div className="mt-1">
                            <input type="text" name="company" id="company" className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md border" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Interested In</label>
                            <div className="mt-1">
                                <select id="service" name="service" className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md border">
                                <option>AI Integration / LLM Solutions</option>
                                <option>AI Proof of Concept</option>
                                <option>RAG System Development</option>
                                <option>AI Consultation</option>
                                <option>Custom SaaS Development</option>
                                <option>Backend & API Development</option>
                                <option>Data Engineering</option>
                                <option>Cloud & DevOps</option>
                                <option>Healthcare Solutions</option>
                                <option>Other</option>
                                </select>
                            </div>
                        </div>
                         <div>
                            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">Project Timeline</label>
                            <div className="mt-1">
                                <select id="timeline" name="timeline" className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md border">
                                <option>Immediate (Start ASAP)</option>
                                <option>1-3 Months</option>
                                <option>3-6 Months</option>
                                <option>Planning Phase (6+ Months)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget Range</label>
                    <div className="mt-1">
                        <select id="budget" name="budget" className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md border">
                        <option>Under ₹3,00,000</option>
                        <option>₹3,00,000 - ₹10,00,000</option>
                        <option>₹10,00,000 - ₹25,00,000</option>
                        <option>₹25,00,000+</option>
                        <option>Not sure yet</option>
                        </select>
                    </div>
                    </div>

                    <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
                    <div className="mt-1">
                        <textarea required id="message" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md border"></textarea>
                    </div>
                    </div>

                    <div>
                    <button disabled={isLoading} type="submit" className="w-full inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                        {isLoading ? (
                            <>
                                <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                                Sending...
                            </>
                        ) : "Send Message"}
                    </button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                        <p className="text-gray-600 text-sm mb-4">Looking for a quick chat about AI?</p>
                        <a href="#" className="inline-flex items-center justify-center px-6 py-2 border border-teal-600 text-base font-medium rounded-md text-teal-600 bg-white hover:bg-teal-50 transition-colors w-full">
                            Schedule Free AI Consultation
                        </a>
                    </div>
                </form>
              )}
            </div>
  );
}
