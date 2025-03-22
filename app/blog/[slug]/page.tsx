import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlogPostSlugPage = ({ params }: any) => {
  const filepath = `content/${params.slug}.md`;
  if(!fs.existsSync(filepath)) {
    notFound();
    return;
  }
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { data: blog, content } = matter(fileContent);

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-cyan-800 dark:text-cyan-200 mb-8 text-center">
          {blog.title}
        </h1>

        <div className="flex flex-col items-center gap-y-4 mb-8">
          <p className="text-lg text-gray-700 dark:text-white font-semibold">
            By {blog.author}
          </p>
          <p className="text-lg border-l-4 pl-4 text-gray-600 dark:text-gray-200">
            {blog.description}
          </p>
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="max-w-none"
        ></div>
      </div>
    </>
  );
};

export default BlogPostSlugPage;
