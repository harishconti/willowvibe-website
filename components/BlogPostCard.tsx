import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getOptimizedImage } from '@/lib/images';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  category?: string;
  coverImage?: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  excerpt,
  date,
  readTime,
  slug,
  category,
  coverImage
}) => {
  const optimizedImage = coverImage ? getOptimizedImage(coverImage) : null;

  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden h-full">
      {optimizedImage && (
        <div className="h-48 overflow-hidden bg-gray-200 relative">
          <Image
            src={optimizedImage.src}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
            placeholder={optimizedImage.blurDataURL ? "blur" : "empty"}
            blurDataURL={optimizedImage.blurDataURL}
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        {category && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-semibold tracking-wide uppercase">
              {category}
            </span>
          </div>
        )}

        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-teal-600 transition-colors">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>

        <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {date}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {readTime}
            </span>
          </div>

          <Link href={`/blog/${slug}`} className="text-teal-600 hover:text-teal-700 p-1">
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
