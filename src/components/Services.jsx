import React from 'react'
import MainTitle from './MainTitle'
import SectionHeader from './SectionHeader'
import { services } from '../services'
import ServiceBlock from './ServiceBlock'

export default function Services() {
  return (
    <section className='services container'>
        <SectionHeader section="What we do" number="02"/>
        <MainTitle heading="heading-XXLarge" headingText="Services">
            <div className="subtitle">
                <p className='heading-alt-Small'>Discover our tailored services</p>
                <p className='heading-alt-Small'>designed to elevate your brand,</p>
                <p className='heading-alt-Small'>enhance user experience.</p>
            </div>
        </MainTitle>
        <div className="services-content">
            {services.map((service, i) => 
                <ServiceBlock key={i} 
                    src={service.src} 
                    type_service={service.service_type} 
                    title={service.title} 
                    subtitle={service.subtitle} 
                    services={service.services}
                    isLeftText={i===1 ? true: false}
                />
            )}
        </div>
    </section>
  )
}
