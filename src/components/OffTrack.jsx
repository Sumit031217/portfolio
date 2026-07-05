import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OffTrack = () => {
  const sectionRef = useRef(null);

  // Hardware integration data
  const hardwareProjects = [
    {
      module: "MOD-01",
      title: "Mimas V2 UART Controller",
      spec: "Universal Asynchronous Receiver-Transmitter",
      tools: ["VHDL", "Xilinx ISE", "FPGA"],
      description: "Custom digital logic design mapped for high-speed serial communication, verified through rigorous simulation and LED output synthesis."
    },
    {
      module: "MOD-02",
      title: "Hexadecimal Display Mapper",
      spec: "DIP Switch to 7-Segment Render",
      tools: ["Digital Logic", "Breadboarding", "I/O Mapping"],
      description: "Hardware level character mapping assigning distinct 4-bit values to mechanical switches for direct LED numerical output."
    },
    {
      module: "MOD-03",
      title: "Hardware-Software Sync",
      spec: "Cross-Platform Diagnostics",
      tools: ["C++", "System Architecture", "Baud Rates"],
      description: "Bridging the gap between raw board logic and PC diagnostics, ensuring bit-perfect data transmission over serial channels."
    }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Fade in the blueprint dots
      gsap.fromTo(".bg-grid", 
        { opacity: 0 }, 
        { 
          opacity: 1, 
          duration: 2, 
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );

      // Stagger the hardware cards sliding in like physical modules clicking into place
      gsap.from(".hardware-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.2)"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 px-10 md:px-24 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Blueprint Dot Grid Background */}
      <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at center, #ccff00 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-sm font-mono text-[#ccff00] uppercase tracking-[0.3em] mb-2">
            // Off Track
          </h2>
          <h3 className="text-5xl md:text-7xl font-extrabold uppercase text-white drop-shadow-md">
            Hardware Lab
          </h3>
          <p className="text-gray-400 mt-6 max-w-2xl text-lg">
            Under the hood. Bringing digital logic into the physical realm via FPGA boards and pure silicon synthesis.
          </p>
        </div>

        {/* Hardware Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {hardwareProjects.map((project, index) => (
            <div 
              key={index} 
              className="hardware-card group relative bg-black border border-neutral-800 p-8 hover:border-[#ccff00] transition-colors duration-500 flex flex-col justify-between h-[450px]"
            >
              {/* Top Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neutral-700 group-hover:border-[#ccff00] transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neutral-700 group-hover:border-[#ccff00] transition-colors"></div>

              <div>
                <div className="flex justify-between items-center mb-8 border-b border-neutral-800 pb-4">
                  <span className="font-mono text-[#ccff00] text-sm tracking-widest">{project.module}</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-[#ccff00]"></div>
                  </div>
                </div>

                <h4 className="text-3xl font-bold uppercase mb-2 leading-tight">
                  {project.title}
                </h4>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">
                  SPEC: {project.spec}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tools tags */}
              <div className="flex flex-wrap gap-2 mt-8">
                {project.tools.map((tool, tIndex) => (
                  <span key={tIndex} className="px-3 py-1 bg-neutral-900 border border-neutral-700 text-xs font-mono text-gray-300 group-hover:border-neutral-500 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffTrack;