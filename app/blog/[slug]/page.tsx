import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlogPostSlugPage = async ({ params }: any) => {
  const filepath = `content/${params.slug}.md`;
  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { data: blog, content } = matter(fileContent);

  const processor = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify);

  const htmlContent = (await processor.process(content)).toString();

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
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="max-w-none prose md:prose-lg lg:prose-xl dark:text-white dark:prose-headings:text-indigo-300 dark:prose-a:text-indigo-50 dark:prose-li:text-indigo-50 dark:prose-strong:text-indigo-50 dark:prose-em:text-indigo-50 dark:prose-abbr:text-indigo-50 dark:prose-mark:text-indigo-50 dark:prose-del:text-indigo-50 dark:prose-sup:text-indigo-50 dark:prose-sub:text-indigo-50 dark:prose-text:text-indigo-50 dark:prose-link:text-indigo-50 dark:prose-list:text-indigo-50 dark:prose-list-item:text-indigo-50 dark:prose-ol:text-indigo-50 dark:prose-ul:text-indigo-50 dark:prose-paragraph:text-indigo-50 dark:prose-heading:text-indigo-50 dark:prose-blockquote:text-indigo-50 dark:prose-hr:text-indigo-50 dark:prose-img:text-indigo-50 dark:prose-table:text-indigo-50 dark:prose-th:text-indigo-50 dark:prose-td:text-indigo-50 dark:prose-pre:text-indigo-50 dark:prose-code:text-indigo-50 dark:prose-kbd:text-indigo-50 dark:prose-abbr:text-indigo-50 dark:prose-mark:text-indigo-50 dark:prose-del:text-indigo-50 dark:prose-sup:text-indigo-50 dark:prose-sub:text-indigo-50 dark:prose-text:text-indigo-50 dark:prose-link:text-indigo-50 dark:prose-list:text-indigo-50 dark:prose-list-item:text-indigo-"
        ></div>
      </div>
    </>
  );
};

export default BlogPostSlugPage;
