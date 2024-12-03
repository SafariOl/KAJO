import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const CustomCursor = ({ selector }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, .3, {
            scale: 1,
            opacity: 1
        })
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, .1, {
            scale: 0,
            opacity: 0
        })
      }
    };

    const targetElements = document.querySelectorAll(selector);
    document.addEventListener('mousemove', handleMouseMove);
    targetElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      targetElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [selector]);

  return (
    <div ref={cursorRef} className="custom-cursor">
        <div className="custom-cursor__box">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 256 256">
                <path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path>
            </svg>
        </div>
    </div>
  )
};

export default CustomCursor;