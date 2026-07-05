import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
// 1. Import the image directly so Vite handles the GitHub Pages path
import profileImg from './profile.jpg';

const Hero = () => {
  const comp = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      
      t1.from("#loader", {
        yPercent: "-100",
        duration: 1.5,
        ease: "expo.inOut"
      })
      .from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
      })
      .from("#hero-image", {
        opacity: 0,
        x: "+=50",
        duration: 1,
        ease: "power2.out"
      }, "-=0.5")
      .to("#loader", {
        opacity: 0,
        display: "none",
        duration: 0.5
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="relative h-screen bg-[#111] text-white overflow-hidden flex items-center">
      {/* Boot Sequence Overlay */}
      <div id="loader" className="absolute inset-0 z-50 flex items-center justify-center bg-black">
        <h1 className="text-4xl font-mono text-[#ccff00]">Initializing_Sumit_Chhajed...</h1>
      </div>

      {/* Main Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-full">
        
        {/* Left Side: Typography */}
        <div className="flex flex-col items-start justify-center h-full px-10 md:px-24 z-10 w-full md:w-3/5">
          <p className="text-[#ccff00] font-mono uppercase tracking-[0.3em] mb-4">
            // Software Engineering Intern @ TASL
          </p>
          
          <h1 id="title-1" className="text-7xl md:text-9xl font-extrabold uppercase leading-none">
            Sumit
          </h1>
          <h1 id="title-2" className="text-7xl md:text-9xl font-extrabold uppercase leading-none text-[#ccff00]">
            Chhajed
          </h1>
          <h1 id="title-3" className="text-4xl md:text-6xl font-bold uppercase leading-none mt-4 text-gray-400">
            Electronics & Telecom
          </h1>
          
          <div className="mt-8 w-full max-w-lg">
            <p className="text-lg text-gray-300 border-l-2 border-[#ccff00] pl-4">
              Building scalable defense security platforms, 32-bit cryptography engines, and IoT microgrid solutions.
            </p>
          </div>
        </div>

        {/* Right Side: Profile Photo */}
        <div className="absolute right-0 bottom-0 md:relative w-full md:w-2/5 h-full opacity-30 md:opacity-100 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700">
          {/* 2. Use the imported variable inside the src attribute */}
          <img 
            id="hero-image"
            src={profileImg} 
            alt="Sumit Chhajed" 
            className="object-cover h-full w-full object-center"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 20%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;