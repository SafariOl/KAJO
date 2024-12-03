import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function HidingContainer({ children }) {
  const containerRef = useRef(null);
  const blackboxRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(blackboxRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'bottom center',
          end: 'bottom top',
          scrub: true,
          markers: true
        },
        scale: 0.98,
        duration: 1,
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div style={{ background: '#000' }} ref={containerRef}>
      <div style={{ background: '#fff' }} ref={blackboxRef}>
        {children}
      </div>
    </div>
  );
}
