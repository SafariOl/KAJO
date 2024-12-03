import React from 'react'
import {footerLinks} from '../footer'

export default function Footer() {
  return (
    <footer className='container'>
        <h2 className='heading-XLarge'>KAjO©</h2>
        <div className='footer-content'>
            <ul className='footer-links'>
                {footerLinks.map((linkSection, i) => 
                    <li key={i}>
                        <p className="text-color-InverseMuted text-Meta" style={{marginBottom: '2em'}}>({linkSection.title})</p>
                        <ul>{linkSection.links.map(link => 
                            <li key={link.href}><a href={link.href} className='component-Nav'>{link.link}</a></li>
                        )}</ul>
                    </li>
                )}
            </ul>
            <div className="creator-block">
                <p className="component-Button">By SafariOl</p>
                <button 
                    onClick={() => window.scrollTo(0, 0)} 
                    className='component-Button-Text'>
                        Back To Top
                </button>
            </div>
        </div>
    </footer>
  )
}
