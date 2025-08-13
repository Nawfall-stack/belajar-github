"use client";

import HeroSection from "./components/HeroSection"
import AboutmeSection from "./components/AboutmeSection";
import Tech from "./components/Tech";
import Testimonial from "./components/Testimonial"
import ContactSection from "./components/ContactSection";
import FeaturedProjects from "./components/FeaturedProjects";




export default function Home() {
  return (
    <>
      <HeroSection/>
      <AboutmeSection/>
      <Tech/>
      <FeaturedProjects/>
      <Testimonial/>
      <ContactSection/>
    </>
  );
}


