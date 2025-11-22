import Link from "next/link";
import { ArrowLeft, Calendar, Tag, User, Clock } from "lucide-react";
import { getPostData, getAllPostSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { Metadata } from "next";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((item) => item.params);
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostData(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | WillowVibe',
    };
  }

  return {
    title: `${post.title} | WillowVibe Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    }
  };
}

// Custom extraction to build Table of Contents
function getTableOfContents(content: string) {
  const headings = [];
  const lines = content.split('\n');
  const codeBlockRegex = /^```/;
  let inCodeBlock = false;

  for (const line of lines) {
    if (codeBlockRegex.test(line)) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      // Simple slugify
      const slug = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

      headings.push({ level, text, slug });
    }
  }
  return headings;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);

  if (!post) {
    notFound();
  }

  const toc = getTableOfContents(post.content);

  const options = {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        [rehypePrettyCode, { theme: 'one-dark-pro' }],
      ],
    },
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    description: post.excerpt,
    keywords: post.tags.join(', '),
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

        {/* Header */}
      <div className="bg-teal-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 text-teal-200 mb-4 text-sm">
             {post.tags && post.tags.length > 0 && (
                 <span className="flex items-center"><Tag className="h-4 w-4 mr-1" /> {post.tags[0]}</span>
             )}
             <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {post.date}</span>
             {post.readTime && (
                <span className="flex items-center"><Clock className="h-4 w-4 mr-1" /> {post.readTime}</span>
             )}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center text-teal-100">
             <User className="h-5 w-5 mr-2" />
             <span>By {post.author}</span>
          </div>
        </div>
      </div>

      <article className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">

             {/* Sidebar (Desktop) - Table of Contents */}
             <aside className="hidden lg:block lg:col-span-3 lg:col-start-10 lg:row-start-1 relative">
                <div className="sticky top-24">
                  <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Table of Contents</h4>
                  <nav className="space-y-2 border-l border-gray-200 pl-4">
                    {toc.map((heading, index) => (
                      <a
                        key={index}
                        href={`#${heading.slug}`}
                        className={`block text-sm transition-colors hover:text-teal-600 ${
                          heading.level === 2 ? 'text-gray-700 font-medium' : 'text-gray-500 pl-4'
                        }`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
             </aside>

             {/* Main Content */}
             <div className="lg:col-span-8 lg:col-start-2">
                 <Link href="/blog" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8 font-medium">
                     <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
                 </Link>

                 <div className="prose prose-lg prose-teal max-w-none text-gray-600">
                     {/* @ts-expect-error Server Component */}
                     <MDXRemote source={post.content} options={options} />
                 </div>

                 <div className="mt-16 pt-8 border-t border-gray-100">
                     <h3 className="text-xl font-bold text-gray-900 mb-4">Need help implementing this?</h3>
                     <p className="text-gray-600 mb-6">
                         We specialize in building custom solutions like the one described above. Let's discuss your project.
                     </p>
                     <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors">
                        Contact Us
                     </Link>
                 </div>
             </div>

          </div>
      </article>
    </div>
  );
}
