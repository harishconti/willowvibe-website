import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WillowVibe Digital Solutions | Custom SaaS Development & AI Integration",
    template: "%s | WillowVibe Digital Solutions"
  },
  description: "Professional IT services company in Bengaluru specializing in custom SaaS development, AI/LLM integration, data engineering, and cloud infrastructure.",
  keywords: ["AI integration services India", "custom SaaS development", "data engineering Bengaluru", "SaaS development", "cloud infrastructure", "IT services Bengaluru"],
  openGraph: {
    title: "WillowVibe Digital Solutions",
    description: "Professional IT services company in Bengaluru specializing in custom SaaS development, AI/LLM integration, data engineering, and cloud infrastructure.",
    url: "https://willowvibe.github.io/willowvibe-website",
    siteName: "WillowVibe Digital Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WillowVibe Digital Solutions",
    description: "Professional IT services company in Bengaluru specializing in custom SaaS development, AI/LLM integration, data engineering, and cloud infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${openSans.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
