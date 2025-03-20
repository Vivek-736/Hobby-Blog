'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 md:px-16 py-12 flex flex-col items-center">
      <motion.h1
        initial="hidden"
        animate={isMounted ? 'visible' : 'hidden'}
        variants={fadeInUp}
        className="md:text-5xl text-4xl font-bold mb-10 text-center text-purple-600 dark:text-purple-400"
      >
        Welcome to My Blog 🚀
      </motion.h1>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-gray-300 dark:border-gray-700"
      >
        <div className="flex-1">
          <p className="text-lg font-bold leading-relaxed">
            Hey there! I&apos;m Vivek, a developer. I love using:
          </p>
          <ul className="list-disc list-inside mt-4 text-left space-y-2">
            <li><strong>Frontend:</strong> React, Next.js, Tailwind CSS, TypeScript</li>
            <li><strong>Backend:</strong> Node.js, Express.js, Prisma, MongoDB</li>
            <li><strong>Other Tools:</strong> Git, GitHub, Figma, Cloudinary, NextAuth</li>
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/h.jpg"
            alt="Vivek"
            width={450}
            height={450}
            className="rounded-xl border-2 border-cyan-400 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mt-16 w-full max-w-5xl"
      >
        <h2 className="text-3xl font-semibold text-center mb-10">
          Technologies I Use And Love Working With 😊
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {['React', 'Next.js', 'Tailwind CSS'].map((tech, index) => (
            <motion.div
              key={tech}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-purple-100 hover:scale-105 hover:transition dark:bg-purple-800 p-6 rounded-lg flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={`https://upload.wikimedia.org/wikipedia/commons/${
                  index === 0 ? 'a/a7/React-icon.svg' :
                  index === 1 ? '8/8e/Nextjs-logo.svg' :
                  'd/d5/Tailwind_CSS_Logo.svg'
                }`}
                width={60}
                height={60}
                alt={tech}
              />
              <h3 className="text-xl font-semibold mt-4">{tech}</h3>
              <p className="text-center text-gray-700 dark:text-gray-300 mt-2">
                {tech === 'React' ? 'Modern UI library for fast & dynamic web apps.' :
                 tech === 'Next.js' ? 'Powerful React framework with SSR & SSG.' :
                 'Utility-first CSS framework for rapid UI development.'}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mt-16 w-full max-w-5xl p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md text-center"
      >
        <h2 className="text-3xl font-semibold mb-6 text-purple-600 dark:text-purple-400">
          Our Startup Idea 💡
        </h2>
        <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
          Many college students struggle with disconnected club activities and scattered communication platforms 📢. Our idea aims to unify these interactions by building a <strong>network platform</strong> that helps students <strong>connect, collaborate</strong>, and <strong>stay informed</strong> about events 🎯.
        </p>
        <p className="mt-6 text-lg">
          Check out our <strong>MVP</strong> here: 
          <a href="https://college-pulse-production-8620.up.railway.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-1">
            College Pulse
          </a>
        </p>
      </motion.section>
    </div>
  );
}