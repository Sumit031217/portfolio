import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // GSAP quickTo is heavily optimized for mapping values tied to mouse movement
    const xToCursor = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3" });
    const yToCursor = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3" });
    
    // The follower has a longer duration, creating the drag/trailing effect
    const xToFollower = gsap.quickTo(followerRef.current, "x", { duration: 0.5, ease: "power3" });
    const yToFollower = gsap.quickTo(followerRef.current, "y", { duration: 0.5, ease: "power3" });

    const moveCursor = (e) => {
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* The core dot */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-3 h-3 bg-[#ccff00] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#ccff00]"
      ></div>
      
      {/* The trailing ring */}
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-[#ccff00] rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-60"
      ></div>
    </>
  );
};

export default Cursor;