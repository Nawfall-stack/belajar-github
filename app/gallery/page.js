'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import PhotoSlider from '../components/PhotoSlider';

export default function Gallery() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [fabOpen, setFabOpen] = useState(false);

  // Index awal item FAB yang tampil, mulai dari 0
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (pathname !== '/gallery') return null;

  // List link untuk FAB menu
  const fabLinks = [
    { href: '#Logo', label: 'Logo' },
    { href: '#Poster', label: 'Poster' },
    { href: '#Font', label: 'Font' },
    { href: '#Youtube-thumbnail', label: 'Youtube Thumbnail' },
    { href: '#Logo-Motion', label: 'Logo Motion' },
    { href: '#section6', label: 'Section 6' },
    { href: '#section7', label: 'Section 7' },
    { href: '#section8', label: 'Section 8' },
    { href: '#section9', label: 'Section 9' },
  ];

  const logoThumbnail = [
    { src: '/gallery_assets/logo/logo1.jpg', alt: 'Logo Thumbnail' },
    { src: '/gallery_assets/logo/logo2.jpg', alt: 'Logo Thumbnail' },
    { src: '/gallery_assets/logo/logo3.jpg', alt: 'Logo Thumbnail' },
    { src: '/gallery_assets/logo/logo4.jpg', alt: 'Logo Thumbnail' },
    { src: '/gallery_assets/logo/logo5.jpg', alt: 'Logo Thumbnail' },
    { src: '/comingsoon/1_1.jpg', alt: 'Logo Thumbnail' },
  ];

  const posterThumbnail = [
    { src: '/gallery_assets/poster/poster kpop 1.jpg', alt: 'Poster Thumbnail' },
    { src: '/gallery_assets/poster/poster kpop 2.jpg', alt: 'Poster Thumbnail' },
    { src: '/comingsoon/3_4.jpg', alt: 'Poster Thumbnail' },
  ];
  
  const fontThumbnail = [
    { src: '/gallery_assets/font/foristype preview.jpg', alt: 'fontThumbnail' },
    { src: '/gallery_assets/font/typeora preview.jpg', alt: 'fontThumbnail' },
    { src: '/gallery_assets/font/vertex preview.jpg', alt: 'fontThumbnail' },
    { src: '/comingsoon/16_9.jpg', alt: 'fontThumbnail' },
  ];

  const youtubeThumbnail = [
    { src: '/gallery_assets/youtube_thumbnail/youtube_thumbnail1.webp', alt: 'youtube Thumbnail' },
    { src: '/gallery_assets/youtube_thumbnail/youtube_thumbnail2.webp', alt: 'youtube Thumbnail' },
    { src: '/comingsoon/16_9.jpg', alt: 'youtube Thumbnail' },
  ];
 
   const logoMotionThumbnail = [
    { src: '/gallery_assets/logo_motion/logo_motion1.gif', alt: 'Logo Thumbnail' },
    { src: '/comingsoon/1_1.jpg', alt: 'Logo Thumbnail' },
  ];

  // Banyak item yang ditampilkan sekaligus
  const visibleCount = 3;

  // Hitung apakah tombol navigasi atas/bawah perlu ditampilkan
  const canGoUp = startIndex > 0;
  const canGoDown = startIndex + visibleCount < fabLinks.length;

  // Ambil slice item yang akan ditampilkan
  const visibleLinks = fabLinks.slice(startIndex, startIndex + visibleCount);

  // Fungsi navigasi
  const goUp = () => {
    if (canGoUp) setStartIndex(startIndex - visibleCount);
  };
  const goDown = () => {
    if (canGoDown) setStartIndex(startIndex + visibleCount);
  };

  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto p-4">
        {!isMobile && (
          <aside className="scroll-container lg:col-span-1 lg:sticky lg:top-20 self-start bg-white p-4 rounded-lg shadow-2xl lg:h-[600px] h-auto overflow-y-auto">
            <h2 className="font-bold text-lg mb-4">Navigation</h2>
            <nav className="space-y-2">
              <Link href="#Logo" className="block p-2 bg-white rounded hover:bg-gray-900 hover:text-white transition">
                Logo
              </Link>
              <Link href="#Poster" className="block p-2 bg-white rounded hover:bg-gray-900 hover:text-white transition">
                Poster
              </Link>
              <Link href="#Font" className="block p-2 bg-white rounded hover:bg-gray-900 hover:text-white transition">
                Font
              </Link>
              <Link href="#Youtube-thumbnail" className="block p-2 bg-white rounded hover:bg-gray-900 hover:text-white transition">
                Youtube Thumbnail
              </Link>
              <Link href="#Logo-Motion" className="block p-2 bg-white rounded hover:bg-gray-900 hover:text-white transition">
                Logo Motion
              </Link>
              <div className="block py-20 bg-white ">
              </div>
            </nav>
          </aside>
        )}

        <main className="lg:col-span-3 space-y-8">
          {/* Your sections */}
          <section id="Logo" className="bg-white p-6 rounded-lg shadow-2xl scroll-mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-700">Logo</h2>
            <p className="mb-6 text-gray-700">collection of logos with professional design and balanced proportions.</p>

            <PhotoSlider photos={logoThumbnail} aspectRatio="1/1" />
          </section>
          <section id="Poster" className="bg-white p-6 rounded-lg shadow-2xl scroll-mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-700">Poster</h2>
            <p className="mb-6 text-gray-700">collection of logos with professional design and balanced proportions.</p>

            <PhotoSlider photos={posterThumbnail} aspectRatio="3/4" />
          </section>
          <section id="Font" className="bg-white p-6 rounded-lg shadow-2xl scroll-mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-700">Font</h2>
            <p className="mb-6 text-gray-700">collection of logos with professional design and balanced proportions.</p>

            <PhotoSlider photos={fontThumbnail} aspectRatio="16/9" />
          </section>
          <section id="Youtube-thumbnail" className="bg-white p-6 rounded-lg shadow-2xl scroll-mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-700">Youtube Thumbnail</h2>
            <p className="mb-6 text-gray-700">collection of logos with professional design and balanced proportions.</p>

            <PhotoSlider photos={youtubeThumbnail} aspectRatio="16/9" />
          </section>
          <section id="Logo-Motion" className="bg-white p-6 rounded-lg shadow-2xl scroll-mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-700">Logo Motion</h2>
            <p className="mb-6 text-gray-700">collection of logos with professional design and balanced proportions.</p>

            <PhotoSlider photos={logoMotionThumbnail} aspectRatio="1/1" />
          </section>
         
        </main>
      </div>

      {/* FAB menu mobile */}
      {isMobile && (
        <div className="flex flex-col items-end fixed bottom-6 right-6 z-50">
          <button onClick={() => setFabOpen(!fabOpen)} className="flex justify-center items-center bg-blue-600 w-10 h-10 text-white rounded-full p-4 shadow-2xl hover:bg-blue-700" aria-label={fabOpen ? 'Close menu' : 'Open menu'}>
            ☰
          </button>

          {fabOpen && (
            <div className="flex flex-col gap-2 mt-2 w-32">
              {/* Tombol navigasi atas */}
              <button
                onClick={goUp}
                disabled={!canGoUp}
                className={`rounded-full p-2 shadow text-center text-2xl ${canGoUp ? ' bg-white text-gray-700 hover:bg-gray-400 cursor-pointer' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                aria-label="Scroll up"
              >
                ↑
              </button>

              {/* Daftar link yang terlihat */}
              {visibleLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setFabOpen(false)} // <-- Tutup menu saat klik
                  className="bg-white border rounded-full p-3 shadow hover:bg-gray-400 text-center truncate"
                >
                  {label}
                </a>
              ))}

              {/* Tombol navigasi bawah */}
              <button
                onClick={goDown}
                disabled={!canGoDown}
                className={`rounded-full p-2 shadow text-center text-2xl ${canGoDown ? 'bg-white text-gray-700 hover:bg-gray-400 cursor-pointer' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                aria-label="Scroll down"
              >
                ↓
              </button>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
