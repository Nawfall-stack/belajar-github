'use client';

import React from 'react';
import { PaintBrushIcon, ChartBarIcon, CodeBracketIcon, BuildingLibraryIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && <div className="absolute top-4 text-center text-sm block sm:hidden">This effect is not optimized for mobile. Check on desktop.</div>}

      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />

        {displayOverlayContent && overlayContent && <motion.div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]">{overlayContent}</motion.div>}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}

export default function AboutmeSection() {
  const features = [
    {
      name: 'Design & Creativity',
      description: 'Creating UI/UX designs, graphic works, and product illustrations that combine aesthetics with functionality.',
      icon: PaintBrushIcon,
    },
    {
      name: 'Data Analysis',
      description: 'Applying statistical methods to solve problems and make data-driven decisions.',
      icon: ChartBarIcon,
    },
    {
      name: 'Programming',
      description: 'Developing interactive web applications using React and other modern technologies.',
      icon: CodeBracketIcon,
    },
    {
      name: 'Boarding School Experience',
      description: 'Carrying the values of discipline, leadership, and mentoring gained from years in a boarding school environment.',
      icon: BuildingLibraryIcon,
    },
  ];

  return (
    <div className="overflow-hidden bg-gray-900 py-18 sm:py-16 snap-center" id='aboutmesection'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8 ml-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-cyan-300">About me</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Muhammad Naufal Irfansyah</p>
              <p className="mt-6 text-lg/8 text-gray-300"> A boarding school graduate currently pursuing a degree in statistics. 
                Passionate about design, 3D art, UI/UX, video editing, and programming. 
                Combines data analysis with creativity to produce innovative and functional solutions.</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-cyan-300" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="flex justify-center items-center grayscale-70 ">
            <TiltedCard
              imageSrc="/my-photo.jpg"
              ClassName=" "
              altText="my-photo"
              containerHeight="500px"
              containerWidth="375px"
              imageHeight="500px"
              imageWidth="375px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={<p className="tilted-card-demo-text text-white bg-gray-900 grayscale-0 rounded-2xl px-6 mt-6 ml-6">nawfall</p>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
