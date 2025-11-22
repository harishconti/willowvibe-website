import { Metadata } from "next";
import { getSortedPostsData } from "@/lib/blog";
import BlogList from "@/components/BlogList";

export const metadata: Metadata = {
  title: "Tech Blog | Insights on AI, SaaS & Cloud Engineering | WillowVibe",
  description: "Explore our technical tutorials, industry trends, and business advice on AI integration, custom SaaS development, and cloud infrastructure.",
  alternates: {
    canonical: "https://willowvibe.github.io/willowvibe-website/blog",
  },
};

export default function Blog() {
  const posts = getSortedPostsData();

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-teal-900 py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Insights & Resources</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Technical tutorials, industry trends, and business advice from our engineering team.
          </p>
        </div>
      </div>

      {/* Blog List Component */}
      <section className="pb-20">
        <BlogList initialPosts={posts} />
      </section>
    </div>
  );
}
