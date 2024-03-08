import React from 'react'
import "../styles/Projects.css"
import ProjectCard from '../helpers/ProjectCard'
import { ProjectList } from '../helpers/ProjectList'

function Projects() {
  return (
    <div className="projects" id='projects'>
        <h1>{/* eslint-disable-next-line */}</h1>
        <div className='project-list'>
          {ProjectList.map((project, idx) => {
            return <ProjectCard id={idx} name={project.name} img={project.img} description={project.description} techStack={project.techStack}/>;
          })}
        </div>
    </div>
  )
}

export default Projects
