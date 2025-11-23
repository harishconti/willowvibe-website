"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, FileText, ArrowRight } from "lucide-react";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // Check localStorage
    const hasSeenPopup = localStorage.getItem("willowvibe_saas_guide_popup_seen");
    if (hasSeenPopup) {
        setHasDismissed(true);
        return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasDismissed && !isVisible) {
        setIsVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasDismissed, isVisible]);

  const handleDismiss = () => {
    setIsVisible(false);
    setHasDismissed(true);
    localStorage.setItem("willowvibe_saas_guide_popup_seen", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-300">
        <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
            aria-label="Close popup"
        >
            <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="flex flex-col md:flex-row">
            <div className="bg-teal-900 text-white p-8 md:w-2/5 flex flex-col justify-center items-center text-center">
                <FileText className="w-16 h-16 mb-4 text-teal-300" />
                <div className="text-sm font-semibold uppercase tracking-wider text-teal-300 mb-2">Free Guide</div>
                <h3 className="text-2xl font-bold leading-tight">Wait! Don't leave empty-handed.</h3>
            </div>

            <div className="p-8 md:w-3/5">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Building a SaaS Product?</h4>
                <p className="text-gray-600 mb-6 text-sm">
                    Get our 50-page guide on architecture, security, and scaling. Join 500+ founders who read it.
                </p>

                <Link
                    href="/resources/saas-guide"
                    onClick={handleDismiss}
                    className="flex w-full items-center justify-center px-6 py-3 text-sm font-bold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all shadow-md hover:shadow-lg group"
                >
                    Download Free Guide
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                    onClick={handleDismiss}
                    className="w-full mt-3 text-xs text-gray-400 hover:text-gray-600 text-center"
                >
                    No thanks, I don't need this guide
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
