import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OnTrack = () => {
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: "Software & Infrastructure",
      metrics: [
        { name: "C/C++ & Python", value: 95 },
        { name: "WebSockets & APIs", value: 85 },
        { name: "Docker & AWS", value: 80 },
        { name: "Git / GitHub", value: 90 },
      ]
    },
    {
      title: "Data & ML Pipelines",
      metrics: [
        { name: "SQL Optimization", value: 90 },
        { name: "Pandas & NumPy", value: 85 },
        { name: "OpenCV & MediaPipe", value: 80 },
        { name: "Scikit-learn", value: 75 },
      ]
    },
    {
      title: "Hardware & Systems",
      metrics: [
        { name: "VHDL & Xilinx ISE", value: 85 },
        { name: "STM32 & ESP32", value: 90 },
        { name: "Raspberry Pi 4", value: 85 },
        { name: "Mimas V2 FPGA", value: 80 },
      ]
    }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".skill-header", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        y: 50, opacity: 0, stagger: 0.2, duration: 0.8, ease: "power3.out"
      });

      gsap.utils.toArray('.metric-bar').forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        gsap.to(bar, {
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
          width: `${targetWidth}%`, duration: 1.5, ease: "expo.out", delay: 0.3
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-10 md:px-24 bg-black text-white">
      <div className="mb-20 skill-header">
        <h2 className="text-sm font-mono text-[#ccff00] uppercase tracking-[0.3em] mb-2">// On Track</h2>
        <h3 className="text-5xl md:text-7xl font-extrabold uppercase">Core Telemetry</h3>
        <p className="text-gray-400 mt-6 max-w-2xl text-lg">
          Live performance metrics spanning 8.20 CGPA academics, full-stack software integration, and advanced hardware engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-header">
            <h4 className="text-2xl font-bold uppercase mb-8 pb-4 border-b border-neutral-800">{category.title}</h4>
            <div className="space-y-6">
              {category.metrics.map((metric, mIndex) => (
                <div key={mIndex}>
                  <div className="flex justify-between font-mono text-sm mb-2 text-gray-300">
                    <span className="uppercase">{metric.name}</span>
                    <span className="text-[#ccff00]">SYS_OK</span>
                  </div>
                  <div className="w-full h-1 bg-neutral-900 overflow-hidden relative">
                    <div 
                      className="metric-bar absolute top-0 left-0 h-full bg-[#ccff00] shadow-[0_0_10px_#ccff00]"
                      data-width={metric.value} style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OnTrack;