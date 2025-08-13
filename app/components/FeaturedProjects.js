'use client';

import Image from 'next/image';
import Link from 'next/link';

const defaultProjects = [
  {
    title: 'Creative AI Branding',
    category: 'Design & Motion',
    description: 'Modern branding design enhanced with AI, from concept to motion graphics.',
    tech: ['Figma', 'Jitter', 'Canva'],
    image: '/project_featured/project1.jpg',
  },
  {
    title: 'Front-End Web Application',
    category: 'Web Design & Web Programming',
    description: 'A scalable and responsive full-stack web application built with Next.js and TailwindCSS.',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    image: '/images/portfolio.jpg',
  },
  {
    title: 'Statistical Data Analysis Project',
    category: 'Stats & Data',
    description: 'A comprehensive data analysis and visualization project using statistical software to derive insights.',
    tech: ['R', 'SPSS'],
    image: '/images/saas-landing.jpg',
  },
];

export default function FeaturedProjects({ projects = defaultProjects }) {
  return (
    <section className="py-16 bg-gray-900">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-extrabold text-white mb-4">Featured Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">A selection of my recent work — design and code combined.</p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <article key={idx} className="bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300" aria-labelledby={`project-${idx}-title`}>
              {/* Image */}
              {project.image && (
                <div className="relative w-full h-48">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 id={`project-${idx}-title`} className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-cyan-400 font-medium mt-1">{project.category}</p>
                <p className="text-gray-300 mt-4">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech?.map((t, i) => (
                    <span key={i} className="text-xs font-medium bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 flex justify-center gap-4">
          <Link href="/gallery" rel="noopener noreferrer" className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-500 transition" aria-label="Check my Github">
            See My Gallery
          </Link>
          <Link href="/project" target="_blank" rel="noopener noreferrer" className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-500 transition" aria-label="Check my Github">
            See My Project
          </Link>
        </div>
      </div>
    </section>
  );
}
