"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Practical User Impersonation",
    excerpt:
      "Learn how to implement secure, compliant user impersonation in apps with best practices.",
    date: "October 20, 2025",
    category: "Engineering",
    image: "/assets/blog/blog1.webp",
  },
  {
    id: 2,
    title: "AI-Driven Product Design",
    excerpt:
      "Discover how AI is revolutionizing product design and development across industries.",
    date: "November 5, 2025",
    category: "Innovation",
    image: "/assets/blog/blog2.webp",
  },
  {
    id: 3,
    title: "Scaling Fintech Apps",
    excerpt:
      "Strategies to scale your fintech app to millions of users without downtime.",
    date: "November 12, 2025",
    category: "Fintech",
    image: "/assets/blog/blog3.webp",
  },
  {
    id: 4,
    title: "Next-Gen AI Infrastructure",
    excerpt:
      "Best practices for designing AI infrastructure to handle large-scale data.",
    date: "December 1, 2025",
    category: "AI & Data",
    image: "/assets/blog/blog4.webp",
  },
];

const BlogPage = () => {
  return (
    <section className="py-24  text-white">
      {/* Page Hero */}
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-extrabold text-center text-[#46BCEC]">
          Our <span className="text-foreground"> Blog </span>
        </h2>
        <p className="text-center text-[#B0B0B0] mt-4 max-w-2xl mx-auto">
          {" "}
          Read the latest insights, tech trends, and company updates from Orix
          Tech.
        </p>
      </div>

      {/* Featured Blog */}
      <div className="container mx-auto px-6 mb-20">
        <div className="relative group overflow-hidden rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500">
          <Image
            src={blogs[0].image}
            alt={blogs[0].title}
            width={1200}
            height={600}
            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
            <p className="text-sm text-gray-400 mb-2">{blogs[0].category}</p>
            <h2 className="text-3xl font-bold text-white mb-2">
              {blogs[0].title}
            </h2>
            <p className="text-gray-300">{blogs[0].excerpt}</p>
            <Link
              // href={`/blog/${blogs[0].id}`}
              href="/"
              className="mt-4 inline-block text-[#46BCEC] font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.slice(1).map((blog) => (
          <div
            key={blog.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
              <p className="text-sm text-gray-400">{blog.category}</p>
              <h3 className="text-xl font-bold text-white">{blog.title}</h3>
              <p className="text-gray-300 mt-1 text-sm">{blog.excerpt}</p>
              <Link
                // href={`/blog/${blog.id}`}
                href="/"
                className="mt-2 inline-block text-[#46BCEC] font-semibold hover:underline text-sm"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-16">
        <button className="px-8 py-4 bg-gradient-to-tr from-[#46BCEC] to-[#3B82F6] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
          Load More Articles
        </button>
      </div>
    </section>
  );
};

export default BlogPage;
