import React from "react";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import path from "path";
import { promises as fs } from "fs";

interface BlogPostSlugPageProps {
  params: Promise<{ slug: string }>;
}

const BlogPostSlugPage = async ({ params }: BlogPostSlugPageProps) => {
  const resolvedParams = await params; // Await params before use

  if (!resolvedParams?.slug) {
    notFound();
    return;
  }

  const filepath = path.join(process.cwd(), "content", `${resolvedParams.slug}.md`);

  try {
    await fs.access(filepath);
  } catch (error) {
    console.log(error);
    notFound();
    return;
  }

  const fileContent = await fs.readFile(filepath, "utf-8");
  const { data: blog, content } = matter(fileContent);

  const processor = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000,
        }),
      ],
    })
    .use(rehypeDocument, { title: blog.title || "Blog Post" })
    .use(rehypeFormat)
    .use(rehypeStringify);

  const htmlContent = (await processor.process(content)).toString();

  return (
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
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="max-w-none prose dark:prose-invert"
      ></div>
    </div>
  );
};

export default BlogPostSlugPage;
