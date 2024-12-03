import React, { useRef } from 'react'
import prj1 from '../assets/images/image_2.jpg'
import prj2 from '../assets/images/image_3.jpg'
import prj3 from '../assets/images/image_4.jpg'
import prj4 from '../assets/images/image_5.jpg'
import { Acme, Goldline, Kanba, Utosia } from '../partners'
import MainTitle from './MainTitle'
import SectionHeader from './SectionHeader'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Project from './Project'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
    const projectSecRef = useRef(null)
    const projects = [
        {
            src: prj1,
            name: "Acme",
            partner: <Acme fill='#FFF' />
        },
        {
            src: prj2,
            name: "Kanba",
            partner: <Kanba fill='#FFF' />
        },
        {
            src: prj3,
            name: "Utosia",
            partner: <Utosia fill='#FFF' />
        },
        {
            src: prj4,
            name: 'Goldline',
            partner: <Goldline fill='#FFF' />
        },
    ]

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: projectSecRef.current,
                start: "top center",
                end: 'bottom top',
            }
        })
        tl.from('.subtitle', .35, {
            opacity: 0,
            y: 50
        }, '+=.5')
    }, [])

  return (
    <section ref={projectSecRef} className='projects container'>
        <SectionHeader section="Selected Work" number="01"/>
        <MainTitle heading="heading-XXLarge" headingText="Projects">
            <div className="subtitle">
                <p>Explore our recent projects</p>
                <p>showcasing creativity, innovation,</p>
                <p>and impactful design solutions.</p>
            </div>
        </MainTitle>
        <div className="project-examps">
            {projects.map(project => 
                <Project project={project} key={project.name}/>
            )}
        </div>
    </section>
  )
}
