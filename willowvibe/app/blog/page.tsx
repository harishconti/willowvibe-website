import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      slug: "fastapi-guide",
      title: "Building a FastAPI backend in 2024: Complete Guide",
      category: "Technical",
      date: "Oct 15, 2023",
      excerpt: "Learn how to set up a high-performance API with Python's modern framework, including Pydantic validation and async capabilities."
    },
    {
      slug: "react-native-vs-native",
      title: "React Native vs Native Development: Cost Analysis",
      category: "Business",
      date: "Oct 01, 2023",
      excerpt: "A detailed breakdown of development costs, maintenance, and performance trade-offs for startups and enterprises."
    },
    {
      slug: "kubernetes-small-business",
      title: "Kubernetes for Small Businesses: Is It Worth It?",
      category: "DevOps",
      date: "Sep 20, 2023",
      excerpt: "When should you switch from PaaS to Kubernetes? We explore the tipping points for complexity vs. scalability."
    },
    {
      slug: "offline-first-apps",
      title: "Building Offline-First Mobile Apps with WatermelonDB",
      category: "Mobile",
      date: "Sep 05, 2023",
      excerpt: "Ensuring a seamless user experience in poor network conditions using local-first architecture."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-teal-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Insights & Resources</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Technical tutorials, industry trends, and business advice from our engineering team.
          </p>
        </div>
      </div>

      {/* Blog List */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {posts.map((post, index) => (
              <div key={index} className="group">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                  <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded font-medium">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <Link href={`#`} className="block">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-3">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link href={`#`} className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center">
                  Read more &rarr;
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-center">
             <span className="text-gray-400 italic">More posts coming soon...</span>
          </div>
        </div>
      </section>
    </div>
  );
}
