'use client';

import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

export default function PhotoSlider({ photos = [], aspectRatio = '16/9' }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Format photo untuk lightbox: { src, width?, height? }
  const slides = photos.map((p) => ({ src: p.src }));

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="relative">
      {/* Navigasi kiri */}
      <button ref={prevRef} aria-label="Previous" className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 rounded-full bg-gray-200 hover:bg-gray-300 shadow-md transition-colors duration-300 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Navigasi kanan */}
      <button ref={nextRef} aria-label="Next" className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 rounded-full bg-gray-200 hover:bg-gray-300 shadow-md transition-colors duration-300 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={setSwiperInstance}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {photos.map((photo, i) => (
          <SwiperSlide key={i}>
            <div style={{ aspectRatio: aspectRatio }} className="w-full overflow-hidden rounded-2xl  cursor-pointer relative group">
              <img
                src={photo.src}
                alt={photo.alt || `Photo ${i + 1}`}
                className="object-cover w-full h-full"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                onContextMenu={(e) => e.preventDefault()}
              />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-gray-900 border border-white bg-opacity-70 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none select-none transition-opacity">
                click to zoom
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox open={open} close={() => setOpen(false)} slides={slides} index={index} plugins={[Thumbnails]} carousel={{ finite: true }} />
    </div>
  );
}
