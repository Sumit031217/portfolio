import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  const projects = [
    {
      id: "01",
      title: "SPIDER Defense System",
      type: "Full-Stack / TASL Intern",
      tech: "Scalable APIs, Database Optimization",
      description: "Developing a security and surveillance platform for defense infrastructure, enabling real-time threat detection and asset monitoring."
    },
    {
      id: "02",
      title: "DeepHider Engine",
      type: "Steganography & Crypto",
      tech: "32-bit Slicing, Kivy, Flutter, SHA-256",
      description: "Engineered a custom lossless image embedding algorithm with a secure XOR stream cipher, deployed via a cross-platform GUI."
    },
    {
      id: "03",
      title: "Smart Microgrid",
      type: "Energy & IoT Analytics",
      tech: "Sensors, Mobile Dashboard",
      description: "Built an intelligent management solution for renewable microgrids, providing real-time telemetry on power generation and usage."
    },
    {
      id: "04",
      title: "IoT Smart Helmet",
      type: "Hardware & Safety Systems",
      tech: "Raspberry Pi 4, ESP32, Firebase, Twilio",
      description: "Designed a rider safety helmet with alcohol, drowsiness, and fall detection, featuring GPS tracking and real-time emergency alerts."
    }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const scrollWidth = scrollRef.current.scrollWidth;
      const amountToScroll = scrollWidth - window.innerWidth;

      const tween = gsap.to(scrollRef.current, { x: -amountToScroll, ease: "none" });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${amountToScroll}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen bg-[#111] text-white overflow-hidden">
      <div className="absolute top-10 left-10 md:left-24 z-10 pointer-events-none">
        <h2 className="text-sm font-mono text-[#ccff00] uppercase tracking-[0.3em] mb-2">// Hall of Fame</h2>
        <h3 className="text-5xl md:text-7xl font-extrabold uppercase">Engineering Projects</h3>
      </div>

      <div ref={scrollRef} className="flex h-full items-center w-max px-10 md:px-24 pt-24">
        {projects.map((project, index) => (
          <div key={project.id} className="w-[85vw] md:w-[60vw] lg:w-[40vw] h-[60vh] shrink-0 mx-4 md:mx-8 relative group cursor-pointer">
            <div className="absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-xl transition-all duration-500 group-hover:border-[#ccff00] group-hover:bg-neutral-800/50"></div>
            
            <div className="relative h-full flex flex-col justify-between p-8 md:p-12 z-10">
              <div className="flex justify-between items-start">
                <span className="text-6xl md:text-8xl font-black text-neutral-800 transition-colors duration-500 group-hover:text-[#ccff00]">{project.id}</span>
                <span className="text-sm tracking-widest uppercase text-gray-400">{project.type}</span>
              </div>
              
              <div>
                <h4 className="text-3xl md:text-4xl font-bold uppercase mb-4 leading-tight">{project.title}</h4>
                <p className="text-[#ccff00] font-mono text-sm mb-6">Stack: {project.tech}</p>
                <p className="text-lg text-gray-300">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="w-[10vw] shrink-0"></div>
      </div>
    </section>
  );
};

export default Projects;