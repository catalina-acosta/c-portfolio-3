import React from 'react';
import '../styles/Projects.css';
import { ProjectList } from '../helpers/ProjectList'
import ImageSlider from '../helpers/ImageSlider'

function Projects() {
  const slides = ProjectList.map(project => ({
    image: project.img,
    title: project.name,
  }));

  return (
    <div className="projects" id='projects'>
      <div className='project-container'>
        <ImageSlider slides={slides}/>
      </div>

    </div>
  );
}

export default Projects;
