import React from 'react'
import AnimTitle from './AnimTitle'

export default function ServiceBlock({isLeftText = false, src, title, subtitle, type_service, services}) {
  return (
    <div className={`service-block-container ${isLeftText ? 'left' : null}`}>
        <div className="service-img">
            <img src={src} alt="service-img" />
        </div>
        <div className="service-block flexbox-space-between">
            <div className="service-title">
                {title.map((title_row, i) =>
                    <AnimTitle>
                        <h3 key={i} className="heading-Small">{title_row}</h3>
                    </AnimTitle>
                )}
                <p className="heading-alt-H3" style={{fontWeight: 600}}>{subtitle}</p>
            </div>
            <div className="service-content">
                <p className="gambetta" style={{fontSize: '2.5em', marginBottom: '2em'}}>{type_service}</p>
                <ul className="services-list">
                    {services.map((service, i) =>
                        <li key={i}><p className='heading-alt-H4' style={{fontWeight: 600}}>{service}</p></li>
                    )}
                </ul>
            </div>
        </div>
    </div>
  )
}
