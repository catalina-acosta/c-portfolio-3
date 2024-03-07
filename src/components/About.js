import React from 'react'
import "../styles/About.css"
import aboutImg from '../assets/img/about-pic.jpg'

function About() {
  return (
    <div className="about" id='about'>
      <div className="about-container">
        <div className="about-left">
          <div className="img-title">this is me</div>
          <div className="img-container">
            <img src={aboutImg} alt="Catalina" />
          </div>
        </div>
        <div className="about-text">
          <h1>about.</h1>
          <p>Originally from Bogotá, Colombia, I have spent the last eight years living in Europe, with stints in Barcelona and currently Berlin. My academic background includes a degree in Fashion Design from Bogotá and a Masters in Fashion Management from Barcelona. Professionally, I've navigated the Fashion industry, transitioning from Account Manager roles to Product Management in Berlin. However, the Covid pandemic afforded me unexpected free time, igniting a passion for web development and programming. Enrolling in a 9-week intensive web development bootcamp at Le Wagon in Berlin in 2022 was transformative, solidifying my desire to pursue a career in development. Alongside coding, I find joy in practicing yoga, baking, and dancing.</p>
        </div>
      </div>
    </div>
  )
}

export default About
