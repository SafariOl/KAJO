import React, { useLayoutEffect, useState } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Promo from './components/Promo'

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useLayoutEffect(() => {
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <div className='wrapper'> 
      <Promo /> 
      <Hero />
      <Projects />
      <Services />
      <Testimonials />
      <Footer />        
    </div>
  )
}
