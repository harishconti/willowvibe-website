import Link from "next/link";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import { getPostData, getAllPostSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((item) => item.params);
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
        {/* Header */}
      <div className="bg-teal-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 text-teal-200 mb-4 text-sm">
             {post.tags && post.tags.length > 0 && (
                 <span className="flex items-center"><Tag className="h-4 w-4 mr-1" /> {post.tags[0]}</span>
             )}
             <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {post.date}</span>
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
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
             <Link href="/blog" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8 font-medium">
                 <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
             </Link>

             <div className="prose prose-lg prose-teal max-w-none text-gray-600">
                 <ReactMarkdown>{post.content}</ReactMarkdown>
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
      </article>
    </div>
  );
}
