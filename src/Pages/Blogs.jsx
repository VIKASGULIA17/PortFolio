import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    excerpt:
      "Learn the fundamentals of HTML, CSS, and JavaScript to kickstart your web development journey.",
    date: "Feb 24, 2025",
    imageUrl: "/placeholder.svg?height=200&width=400",
    tags: ["Beginners", "Web Dev"],
    slug: "/blog/getting-started",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    excerpt:
      "Explore advanced React patterns that will help you build more maintainable and scalable applications.",
    date: "Feb 20, 2025",
    imageUrl: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Advanced"],
    slug: "/blog/advanced-react",
  },
  {
    id: 3,
    title: "The Future of AI in Web Development",
    excerpt:
      "Discover how artificial intelligence is transforming the landscape of modern web development.",
    date: "Feb 15, 2025",
    imageUrl: "/placeholder.svg?height=200&width=400",
    tags: ["AI", "Future Tech"],
    slug: "/blog/ai-web-dev",
  },
  {
    id: 4,
    title: "Optimizing Website Performance",
    excerpt:
      "Learn essential techniques to improve your website's loading speed and overall performance.",
    date: "Feb 10, 2025",
    imageUrl: "/placeholder.svg?height=200&width=400",
    tags: ["Performance", "Optimization"],
    slug: "/blog/performance",
  },
  {
    id: 5,
    title: "Building Accessible Web Applications",
    excerpt:
      "Understand the importance of web accessibility and how to implement it in your projects.",
    date: "Feb 5, 2025",
    imageUrl: "/placeholder.svg?height=200&width=400",
    tags: ["Accessibility", "Best Practices"],
    slug: "/blog/accessibility",
  },
  {
    id: 6,
    title: "Introduction to TypeScript",
    excerpt:
      "Get started with TypeScript and learn how it can improve your JavaScript development experience.",
    date: "Jan 30, 2025",
    imageUrl: "/placeholder.svg?height=200&width=400",
    tags: ["TypeScript", "JavaScript"],
    slug: "/blog/typescript-intro",
  },
];

export default function BlogSection() {
  return (
    <div className="dark bg-[#121212] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5B5DDC] mb-4">
            Latest Articles
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our collection of articles, tutorials, and insights on web
            development, design, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(91,93,220,110.3)] hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                  className="object-cover h-full w-full"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#2A2A2A] text-[#5B5DDC]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-[#5B5DDC] mb-2 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{post.date}</span>

                  <Link
                    to={post.slug}
                    className="inline-flex items-center text-[#5B5DDC] font-medium hover:text-[#7173E8] transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-[#5B5DDC] focus:ring-offset-2 focus:ring-offset-[#1E1E1E] rounded-md"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#5B5DDC] hover:bg-[#4A4CB8] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5B5DDC]"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
