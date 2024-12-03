import React, { useRef, useLayoutEffect } from 'react';
import NavBar from './NavBar';
import partner_1 from '../assets/partners/acme.svg';
import partner_2 from '../assets/partners/kanba.svg';
import partner_3 from '../assets/partners/goldline.svg';
import partner_4 from '../assets/partners/asgardia.svg';
import partner_5 from '../assets/partners/utosia.svg';
import partner_6 from '../assets/partners/circle.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimTitle from './AnimTitle';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const partners = [partner_1, partner_2, partner_3, partner_4, partner_5, partner_6];
  const section2ScrollRef = useRef(null);
  const heroImgWrapperRef = useRef(null);
  const heroImgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(heroImgRef.current, {
        scrollTrigger: {
          trigger: heroImgWrapperRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
        duration: 1,
      });

      gsap.from(section2ScrollRef.current.querySelectorAll('.gambetta'), {
        scrollTrigger: {
          trigger: section2ScrollRef.current,
          start: 'top bottom',
          end: 'bottom top',
        },
        y: '100%',
        opacity: 0,
        duration: 1,
      });

      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert(); 
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero_img-wrapper" ref={heroImgWrapperRef}>
        <div className="hero-img" ref={heroImgRef}>
          <img
            src="https://cdn.prod.website-files.com/6704f0a83f4efadc40b0bde6/6706520a607216d450a352f6_home-hero.webp"
            alt="hero-img"
          />
        </div>
      </div>
      <div>
        <div className="hero-part">
          <NavBar />
          <div className="flexbox-space-between">
            <div className="title heading-Medium">
              <h1>©kajo</h1>
              <AnimTitle delay={1.3}>
                <h1>Studio</h1>
              </AnimTitle>
            </div>
            <div>
              <p className="gambetta">(Based in Prague)</p>
              <p style={{ fontSize: '3em', fontWeight: 600, lineHeight: '130%' }}>
                Crafting impactful brands and websites that drive growth and success.
              </p>
            </div>
          </div>
        </div>
        <div ref={section2ScrollRef} className="hero-part two">
          <section>
            <p className="gambetta">(About Us)</p>
            <div className="title">
              <AnimTitle>
                <h2 className="heading-H2">Creative</h2>
              </AnimTitle>
              <AnimTitle>
                <h2 className="heading-H2">Brands,</h2>
              </AnimTitle>
              <AnimTitle>
                <h2 className="heading-H2">Powerful</h2>
              </AnimTitle>
              <AnimTitle>
                <h2 className="heading-H2">Websites</h2>
              </AnimTitle>
            </div>
            <p className="text-color-Muted" style={{ lineHeight: '170%' }}>
              We are passionate about creating meaningful brands and dynamic websites that stand out in today’s competitive market. Our team combines strategic thinking with creative design to craft custom solutions that align with your business goals. From developing a unique brand identity to designing intuitive, responsive websites, we focus on delivering experiences that engage and convert.
              <br /><br />
              With every project, we ensure that your brand’s story is told in a way that resonates with your audience, builds trust, and drives growth. Let us help you transform your brand and take your digital presence to the next level.
            </p>
          </section>
          <section className="partners">
            <p className="gambetta">(Our Partner)</p>
            <ul>
              {partners.map((partner, i) => (
                <li key={i}><img src={partner} alt="" /></li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
