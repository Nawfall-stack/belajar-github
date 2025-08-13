'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Tech() {
  // Tambahkan kategori ke tiap tech
  const techList = [
    { name: 'Html', icon: '/icons/html.svg', category: 'programming' },
    { name: 'Css', icon: '/icons/css.svg', category: 'programming' },
    { name: 'Bootstrap', icon: '/icons/bootstrap.svg', category: 'programming' },
    { name: 'React', icon: '/icons/react.svg', category: 'programming' },
    { name: 'Git', icon: '/icons/git.svg', category: 'programming' },
    { name: 'Cli', icon: '/icons/cli.svg', category: 'programming' },
    { name: 'Npm', icon: '/icons/npm.svg', category: 'programming' },
    { name: 'Pnpm', icon: '/icons/pnpm.svg', category: 'programming' },
    { name: 'Typescript', icon: '/icons/typescript.svg', category: 'programming' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', category: 'programming' },
    { name: 'JavaScript', icon: '/icons/javascript.svg', category: 'programming' },
    { name: 'Next.js', icon: '/icons/nextjs.svg', category: 'programming' },
    { name: 'Vite', icon: '/icons/vite.svg', category: 'programming' },
    { name: 'Framer Motion', icon: '/icons/framer-motion.svg', category: 'programming' },
    { name: 'Vercel', icon: '/icons/vercel.svg', category: 'programming' },
    { name: 'Ibis Paint X', icon: '/icons/ibis-paint-x.svg', category: 'design' },
    { name: 'Figma', icon: '/icons/figma.svg', category: 'design' },
    { name: 'Canva', icon: '/icons/canva.svg', category: 'design' },
    { name: 'Corel Draw', icon: '/icons/corel.svg', category: 'design' },
    { name: 'Spline', icon: '/icons/spline.png', category: 'design' },
    { name: 'Pixellab', icon: '/icons/pixellab.svg', category: 'design' },
    { name: 'Jitter', icon: '/icons/jitter.svg', category: 'design' },
  ];

  const [activeTab, setActiveTab] = useState('all'); // all, programming, design

  // Filter tech berdasarkan tab aktif
  const filteredTech = activeTab === 'all' ? techList : techList.filter((tech) => tech.category === activeTab);

  return (
    <section className="w-full max-w-6xl px-4 md:px-8 mx-auto py-12">
      <h1 className=" font-bold mb-6 text-center text-gray-800 sm:text-4xl xl:text-5xl">Tech Stack</h1>

      {/* Tabs */}
      <div className="flex justify-center mb-10 space-x-6">
        {['all', 'programming', 'design'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-semibold
              ${activeTab === tab ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-900 hover:text-white'}
              transition-colors duration-300`}
          >
            {tab === 'all' ? 'All' : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredTech.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/20 backdrop-blur-md border border-white/30 
                       shadow-lg rounded-2xl p-5 hover:scale-105 hover:shadow-2xl 
                       hover:border-indigo-400 transition-all duration-300"
          >
            <Image src={tech.icon} alt={tech.name} width={56} height={56} className="drop-shadow-md" />
            <p className="mt-3 font-medium text-gray-700">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
