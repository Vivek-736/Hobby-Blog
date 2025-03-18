import React from 'react';

const AboutPage = () => {
    return (
        <div className="min-h-[80vh] bg-white justify-center dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 md:px-16 py-12 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4">About Me 👋</h1>
            <p className="text-lg max-w-2xl text-center leading-relaxed">
                Hey there! I&apos;m <span className="font-semibold">Vivek</span>, a passionate full-stack developer who loves building 
                amazing web experiences. I love to work with React, Next.js, and modern web technologies. When I&apos;m not coding, 
                you&apos;ll find me exploring new ideas, solving problems, or sipping coffee while brainstorming my next big project. ☕
            </p>
            <div className="mt-6 flex space-x-4">
                <a 
                    href="https://github.com/Vivek-736" target='_blank'
                    className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-700 dark:hover:bg-gray-600 transition"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};

export default AboutPage;
