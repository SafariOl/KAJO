import React from 'react'
import MainTitle from './MainTitle'
import SectionHeader from './SectionHeader'
import { testimonials } from '../testimonials'

export default function Testimonials() {
  return (
    <div className='container'>
        <SectionHeader section="Testimonials" number="03"/>
        <MainTitle heading="heading-XLarge" headingText={["What our", "clients Say"]}>
            <div className="subtitle">
                <p className="heading-alt-Small">Hear our clients about their success</p>
                <p className="heading-alt-Small">stories and experiences with us.</p>
            </div>
        </MainTitle>
        <div className="testimonials__cards">
            {testimonials.map(testimonial => 
                <div className='testimonial__card' key={testimonial.author}>
                    <svg width="48" height="30" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 30V13.764L5.73034 0H17.5843L13.8764 13.2584H21.0112V30H0ZM26.3483 30V13.764L32.0787 0H43.9326L40.2247 13.2584H47.3596V30H26.3483Z" fill="#0E1011"/>
                    </svg>
                    <div className='testimonial__info'>
                        <div>
                            <div className="title">
                                <h3 className="heading-alt-H3">{testimonial.title}</h3>
                            </div>
                            <p className="text-Muted">{testimonial.comment}</p>
                        </div>
                        <div className="user">
                            <div className="logo"></div>
                            <div className="user__info">
                                <h5 className="heading-alt-H5">{testimonial.author}</h5>
                                <p className="gambetta">({testimonial.company})</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}
