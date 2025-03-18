import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 md:px-16 py-12 flex flex-col items-center">
      <h1 className="md:text-5xl text-4xl font-bold mb-10 text-center text-purple-600 dark:text-purple-400">
        Welcome to My Blog 🚀
      </h1>

      <section className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-gray-300 dark:border-gray-700">
        <div className="flex-1">
          <p className="text-lg leading-relaxed">
            Hey there! I&apos;m Vivek, a passionate developer skilled
            in:
          </p>
          <ul className="list-disc list-inside mt-4 text-left space-y-2">
            <li>
              <strong>Frontend:</strong> React, Next.js, Tailwind CSS,
              TypeScript
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js, Prisma, MongoDB
            </li>
            <li>
              <strong>Other Tools:</strong> Git, GitHub, Figma, Cloudinary, NextAuth
            </li>
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/h.jpg"
            alt="Vivek"
            width={450}
            height={450}
            className="rounded-xl border-2 border-cyan-400 shadow-lg"
          />
        </div>
      </section>

      <section className="mt-16 w-full max-w-5xl">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Technologies I Use And Love Working With 💡
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-purple-100 dark:bg-purple-800 p-6 rounded-lg flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              width={60}
              height={60}
              alt="React"
            />
            <h3 className="text-xl font-semibold mt-4">React</h3>
            <p className="text-center text-gray-700 dark:text-gray-300 mt-2">
              Modern UI library for fast & dynamic web apps.
            </p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-800 p-6 rounded-lg flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
              width={60}
              height={60}
              alt="Next.js"
            />
            <h3 className="text-xl font-semibold mt-4">Next.js</h3>
            <p className="text-center text-gray-700 dark:text-gray-300 mt-2">
              Powerful React framework with SSR & SSG.
            </p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-800 p-6 rounded-lg flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              width={60}
              height={60}
              alt="Tailwind CSS"
            />
            <h3 className="text-xl font-semibold mt-4">Tailwind CSS</h3>
            <p className="text-center text-gray-700 dark:text-gray-300 mt-2">
              Utility-first CSS framework for rapid UI development.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
