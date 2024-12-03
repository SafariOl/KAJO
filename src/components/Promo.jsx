import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export default function Promo() {
    const tl = gsap.timeline()
    const logo = useRef(null)
    useGSAP(() => {
        tl.to(logo.current, .5, {
            y: '-100%'
        }, '+=.5')
        .to('.promo', .75, {
            y: '-100%',
            ease: 'power2.out'
        }, '-=.1')
    }, [])

  return (
    <div className='promo'>
        <div className="anim-box">
            <h1 ref={logo} className='heading-XLarge'>©kajo</h1>
        </div>
    </div>
  )
}
