import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimTitle({delay=0, duration = .35, children }) {
  const animBoxRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const animBox = animBoxRef.current;
    const title = titleRef.current;

    gsap.from(title, {
      duration,
      scrollTrigger: {
        trigger: animBox,
        start: 'top 80%',
        end: 'bottom top',
      },
      translateY: '100%',
      ease: 'power1.inOut',
      delay
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <div className='anim-box' ref={animBoxRef}>
      <div ref={titleRef}>
        {children}
      </div>
    </div>
  );
}
