'use client';

import Link from "next/link";
import { useState, useMemo } from "react";
import type { BlogPost } from "@/lib/blog";
import { Search } from "lucide-react";

interface BlogListProps {
  initialPosts: BlogPost[];
}

export default function BlogList({ initialPosts }: BlogListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    initialPosts.forEach(post => {
      post.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [initialPosts]);

  // Filter posts based on search term and selected tag
  const filteredPosts = useMemo(() => {
    return initialPosts.filter(post => {
      const matchesSearch = (
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesTag = selectedTag ? post.tags?.includes(selectedTag) : true;
      return matchesSearch && matchesTag;
    });
  }, [initialPosts, searchTerm, selectedTag]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search and Filter Controls */}
      <div className="mb-12 space-y-6">
        <div className="relative max-w-md mx-auto md:mx-0">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        {/* Tags Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedTag === null
                ? "bg-teal-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid gap-12">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.slug} className="group border-b border-gray-100 pb-12 last:border-0">
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
                {post.tags?.map(tag => (
                  <span key={tag} className="bg-teal-50 text-teal-700 px-2 py-1 rounded font-medium">
                    {tag}
                  </span>
                ))}
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{post.date}</span>
              </div>
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-3">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <Link href={`/blog/${post.slug}`} className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center">
                Read more &rarr;
              </Link>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-gray-500">
            No posts found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}
