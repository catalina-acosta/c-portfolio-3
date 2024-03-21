import React from 'react';
import '../styles/Projects.css';
import { ProjectList } from '../helpers/ProjectList'
import ImageSlider from '../helpers/ImageSlider'

function Projects() {
  const slides = ProjectList.map(project => ({
    image: project.img,
    title: project.name,
  }));

  console.log(slides);

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto"
  }
  return (
    <div className="projects" id='projects'>
      <h1>Image Slider</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides}/>
      </div>

    </div>
  );
}

export default Projects;
