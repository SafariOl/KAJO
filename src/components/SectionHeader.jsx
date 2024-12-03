import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export default function SectionHeader({section, number}) {
  const headerRef = useRef(null)
  
  useLayoutEffect(() => {
    const element = headerRef.current;

    gsap.from(element, {
      duration: 0.35,
      scrollTrigger: {
        trigger: element,
        start: 'top 70%',
        end: 'bottom top',
      },
      opacity: 0,
      y: 30,
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <div className='gambetta-header' ref={headerRef}>
        <p className="gambetta">({section})</p>
        <p className="gambetta">({number})</p>
    </div>
  )
}
