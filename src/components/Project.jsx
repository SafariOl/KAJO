import React from 'react'
import CustomCursor from './CustomCursor'

export default function Project({project}) {

  return (
    <div>
        <CustomCursor selector=".prj_img" />
        <div className="prj_img">
            <img src={project.src} alt="project-img" />
            <div className="prj_partner">
                {project.partner}
            </div>
        </div>
        <div className="prj_info">
            <h3 className="heading-alt-H3">{project.name}</h3>  
            <p className="gambetta" style={{fontSize: '2.5em'}}>(2024)</p>
        </div>
    </div>
  )
}
