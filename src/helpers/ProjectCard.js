import React from 'react'
import '../styles/ProjectCard.css'

function ProjectCard({img, name, description, techStack}) {
  return (
    <div className="project-container">
      <div className="project-left">
        <div className="graphic">
          <div className="dots-nav">
            <div className='dots'>
              <span className='dot'></span>
              <span className='dot'></span>
              <span className='dot'></span>
            </div>
          </div>
          <div className="project-img-container">
            <img src={img} alt="" className='project-img'/>
          </div>
        </div>
        <div className="project-title">{name}</div>
      </div>
      <div className="project-info">
        <p className="description">{description}</p>

      </div>
    </div>
  )
}

export default ProjectCard
