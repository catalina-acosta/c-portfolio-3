import React from 'react';
import '../styles/Projects.css';
import { ProjectList } from '../helpers/ProjectList'
import ImageSlider from '../helpers/ImageSlider'

function Projects() {
  const slides = ProjectList.map(project => ({
    image: project.img,
    title: project.name,
    description: project.description,
    techStack: project.techStack,
    label: project.label
  }));

  return (
    <div className="projects" id='projects'>
      <h1 className="projects-title">projects.</h1>
      <div className='project-container'>
        <ImageSlider slides={slides}/>
      </div>
    </div>
  );
}

export default Projects;
