import Link from "next/link";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";

// This would typically come from a CMS or database
const getPost = (slug: string) => {
    const posts: Record<string, any> = {
        "chatgpt-api-integration": {
            title: "Getting Started with ChatGPT API Integration: Complete Guide",
            category: "AI & LLM",
            date: "May 15, 2024",
            author: "Harish Conti",
            content: (
                <>
                    <p className="mb-6">Integrating OpenAI's GPT-4 API into your applications can revolutionize how users interact with your software. In this guide, we'll walk through setting up a robust Python client using FastAPI.</p>
                    <h3 className="text-2xl font-bold mb-4">Prerequisites</h3>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Python 3.10+</li>
                        <li>OpenAI API Key</li>
                        <li>FastAPI installed</li>
                    </ul>
                    <h3 className="text-2xl font-bold mb-4">Step 1: Setting up the Environment</h3>
                    <p className="mb-6">First, create a virtual environment and install the necessary dependencies...</p>
                    <div className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
                        <code>pip install openai fastapi uvicorn python-dotenv</code>
                    </div>
                    <p className="mb-6">
                        (This is a placeholder for the full technical tutorial content. In a real implementation, this would contain code snippets, diagrams, and detailed explanations.)
                    </p>
                </>
            )
        },
        "rag-vs-finetuning": {
             title: "RAG vs Fine-tuning: Which is Right for Your Business?",
             category: "AI Strategy",
             date: "Apr 28, 2024",
             author: "Harish Conti",
             content: (
                 <>
                     <p className="mb-6">One of the most common questions we get from clients exploring Generative AI is: "Should we fine-tune a model or use RAG?" The answer depends on your specific use case.</p>
                     <h3 className="text-2xl font-bold mb-4">What is RAG?</h3>
                     <p className="mb-6">Retrieval-Augmented Generation (RAG) retrieves relevant data from your external knowledge base and feeds it to the LLM as context. It's best for:</p>
                     <ul className="list-disc pl-6 mb-6 space-y-2">
                         <li>Accessing up-to-date information</li>
                         <li>Reducing hallucinations</li>
                         <li>Citing sources</li>
                         <li>Cost-effectiveness</li>
                     </ul>
                     <h3 className="text-2xl font-bold mb-4">What is Fine-tuning?</h3>
                     <p className="mb-6">Fine-tuning involves retraining the model on a specific dataset to change its behavior or style. It's best for:</p>
                     <ul className="list-disc pl-6 mb-6 space-y-2">
                         <li>Teaching the model a new language or format</li>
                         <li>Improving performance on a very specific task</li>
                         <li>Reducing latency (by using smaller models)</li>
                     </ul>
                 </>
             )
        }
    };

    return posts[slug] || {
        title: "Post Not Found",
        category: "Error",
        date: "",
        author: "",
        content: <p>The blog post you are looking for does not exist.</p>
    };
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  return (
    <div className="bg-white min-h-screen">
        {/* Header */}
      <div className="bg-teal-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 text-teal-200 mb-4 text-sm">
             <span className="flex items-center"><Tag className="h-4 w-4 mr-1" /> {post.category}</span>
             <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {post.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center text-teal-100">
             <User className="h-5 w-5 mr-2" />
             <span>By {post.author || "Harish Conti"}</span>
          </div>
        </div>
      </div>

      <article className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
             <Link href="/blog" className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8 font-medium">
                 <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
             </Link>

             <div className="prose prose-lg prose-teal max-w-none text-gray-600">
                 {post.content}
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
