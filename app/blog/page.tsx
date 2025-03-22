import React from "react";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";

const dirContent = fs.readdirSync("content", "utf-8")
const blogs = dirContent.map(file => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 md:px-16 py-12">
      <h1
        className="text-4xl md:text-5xl font-bold text-center text-purple-600 dark:text-purple-400 mb-10"
      >
        Blog Posts 📝
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={600}
              height={400}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-400 mb-2">{blog.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{blog.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Happy Perusing!!</span>
              <span>By {blog.author}</span>
            </div>
            <Link
              href={`/blog/${blog.slug}`}
              className="mt-4 inline-block text-blue-500 dark:text-blue-400 hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
