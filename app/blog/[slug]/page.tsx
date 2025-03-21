import React from "react";

const BlogPostSlugPage = ({ params }) => {
  const blog = {
    author: "Author name",
    description: "Blog Description",
    date: "2025-10-01",
    content: "<p> Your <strong>HTML</strong> content here </p>",
  };

  return (
    <>
      <div className="max-w-5xl mx-auto">
        <h1>{blog.author}</h1>
        <p>{blog.description}</p>
        <p>{blog.date}</p>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} className="prose" ></div>
      </div>
    </>
  );
};

export default BlogPostSlugPage;
