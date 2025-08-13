'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function About() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [fabOpen, setFabOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (pathname !== '/about') return null; // Kalau halaman bukan /about, tidak render apapun (atau bisa render lain)

  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto p-4">
        {/* Sidebar desktop */}
        {!isMobile && (
          <aside className="lg:col-span-1 lg:sticky lg:top-16 self-start bg-yellow-100 p-4 rounded-lg shadow-lg lg:h-[600px] h-auto">
            <h2 className="font-bold text-lg mb-4">Navigation</h2>
            <nav className="space-y-2">
              <Link
                href="#section1"
                className="block p-2 bg-yellow-200 rounded hover:bg-yellow-300 transition"
              >
                Section 1
              </Link>
              <Link
                href="#section2"
                className="block p-2 bg-yellow-200 rounded hover:bg-yellow-300 transition"
              >
                Section 2
              </Link>
              <Link
                href="#section3"
                className="block p-2 bg-yellow-200 rounded hover:bg-yellow-300 transition"
              >
                Section 3
              </Link>
            </nav>
          </aside>
        )}

        {/* Content */}
        <main className="lg:col-span-3 space-y-8">
          <section
            id="section1"
            className="bg-white p-6 rounded-lg shadow-lg min-h-[400px] sm:min-h-[600px] lg:min-h-[800px]"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-700">
              Section 1
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
              habitant morbi tristique senectus.
            </p>
            <div className="h-[200px] sm:h-[400px] lg:h-[600px] bg-blue-100 rounded"></div>
          </section>

          <section
            id="section2"
            className="bg-white p-6 rounded-lg shadow-lg min-h-[400px] sm:min-h-[600px] lg:min-h-[800px]"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-green-700">
              Section 2
            </h2>
            <p className="mb-4">
              Aliquam erat volutpat. Cras non metus sit amet ligula faucibus
              feugiat. Integer dapibus velit ut sapien.
            </p>
            <div className="h-[200px] sm:h-[400px] lg:h-[600px] bg-green-100 rounded"></div>
          </section>

          <section
            id="section3"
            className="bg-white p-6 rounded-lg shadow-lg min-h-[400px] sm:min-h-[600px] lg:min-h-[800px]"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-red-700">
              Section 3
            </h2>
            <p className="mb-4">
              Proin in suscipit risus, sed porta lorem. Integer vel sapien in leo
              consequat viverra sed nec felis.
            </p>
            <div className="h-[200px] sm:h-[400px] lg:h-[600px] bg-red-100 rounded"></div>
          </section>
        </main>
      </div>

      {/* FAB menu untuk mobile */}
      {isMobile && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setFabOpen(!fabOpen)}
            className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700"
          >
            ☰
          </button>

          {fabOpen && (
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="/"
                className="bg-white border rounded-full p-3 shadow hover:bg-gray-200 text-center"
              >
                🏠
              </a>
              <a
                href="/skills"
                className="bg-white border rounded-full p-3 shadow hover:bg-gray-200 text-center"
              >
                💻
              </a>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
