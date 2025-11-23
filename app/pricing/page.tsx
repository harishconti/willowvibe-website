import { Metadata } from "next";
import PricingPageClient from "@/components/PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing & Packages | WillowVibe Digital Solutions",
  description: "Transparent pricing for custom SaaS development, AI integration, and data engineering services. Flexible models for fixed-price projects or monthly retainers.",
  alternates: {
    canonical: "https://willowvibe.github.io/willowvibe-website/pricing",
  },
};

export default function Pricing() {
  return <PricingPageClient />;
}
