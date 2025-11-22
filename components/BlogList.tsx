'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import type { BlogPost } from "@/lib/blog";
import { Search, Calendar, Clock, User } from "lucide-react";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search and Filter Controls */}
      <div className="mb-12 space-y-6 max-w-4xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow"
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>

        {/* Tags Filter */}
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedTag === null
                ? "bg-teal-600 text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            All Topics
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? "bg-teal-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden h-full">
              {/* Featured Image Placeholder - In a real app, we would have an image field */}
              <div className="h-48 bg-gradient-to-br from-teal-50 to-gray-100 relative flex items-center justify-center overflow-hidden">
                  {/* We use a pattern or illustration here since we don't have real images for every post yet */}
                  <div className="absolute inset-0 opacity-10 pattern-grid-lg text-teal-900"></div>
                  <div className="z-10 text-teal-800/20">
                      <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                          <path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                  </div>
                  {post.category && (
                     <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-700 shadow-sm">
                        {post.category}
                     </span>
                  )}
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4">
                   <span className="flex items-center"><Calendar className="h-3.5 w-3.5 mr-1" /> {post.date}</span>
                   {post.readTime && (
                      <span className="flex items-center"><Clock className="h-3.5 w-3.5 mr-1" /> {post.readTime}</span>
                   )}
                </div>

                <Link href={`/blog/${post.slug}`} className="block group mb-3">
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-500 font-medium">
                        <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mr-2">
                            <User className="h-3 w-3" />
                        </div>
                        {post.author}
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-teal-600 font-semibold text-sm hover:text-teal-700 inline-flex items-center">
                        Read Article &rarr;
                    </Link>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-2 text-center py-20">
            <div className="inline-block p-4 rounded-full bg-gray-50 mb-4">
                <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">No articles found</h3>
            <p className="text-gray-500 mt-1">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
