import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "Mastering React",
    description: "Learn the best practices and hidden gems of React to build efficient applications.",
    slug: "mastering-react",
    author: "Vivek",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.BAwJnB3maWaRiZsXTXTmcwHaEK%26pid%3DApi&f=1&ipt=418bd4819f3a4f94b7bc651c85535908fa2bd7e7890eed56be3a14cc73b6ea5a&ipo=images",
  },
  {
    title: "Understanding Next.js",
    description: "Explore how server-side rendering in Next.js can enhance performance and SEO.",
    slug: "understanding-nextjs",
    author: "Ram",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PJ87QhnDB4G5r6GynPSEVwHaEO%26pid%3DApi&f=1&ipt=8905e3e566af491d26760e2f07379d94fc8639ccd9be76182bb0cafc5265a428&ipo=images",
  },
  {
    title: "A Guide to Tailwind CSS",
    description: "Get started with Tailwind CSS and design beautiful UI effortlessly.",
    slug: "guide-to-tailwind-css",
    author: "Charan",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._6ooq0R60ba3UT5c-QVemAHaDm%26pid%3DApi&f=1&ipt=1cf2df40057c81cab2d44ca91162ed8d7d8ec827ac4fb1bd13408b21e3df8c9f&ipo=images",
  },
];

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
