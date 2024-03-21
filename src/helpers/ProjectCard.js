import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard({ img, name, description, techStack, index }) {
  const isEven = index % 2 === 0;
  const alignClass = isEven ? 'align-left' : 'align-right';

  return (
    <div className={`project-container ${alignClass}`}>
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
      </div>
      <div className="overlay"></div>
      <div className="project-info">
        <div className="project-title">{name}</div>
        <div className="project-description">{description}</div>
        <div className="project-tech-stack">{techStack}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
