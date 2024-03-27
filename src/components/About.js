import React from 'react'
import "../styles/About.css"
import aboutImg from '../assets/img/about-pic.jpg'

function About() {
  return (
    <div className="about" id='about'>
      <div className="about-container">
        <div className="about-left">
          <h1 className='title-small-d'>about.</h1>
          <div className="img-title">this is me</div>
          <div className="img-container">
            <img src={aboutImg} alt="Catalina" />
          </div>
        </div>
        <div className="about-text">
          <h1>about.</h1>
          <p>Hello 👋 I'm Catalina,</p>
          <p>
            <span>frontend developer</span> passionate about crafting elegant solutions to complex problems. With a background in fashion design and product management, I recently made the exciting transition into coding following completion of a bootcamp at Le Wagon in Berlin. After gathering experience in freelance work, I am now eager to embark on fresh professional endeavors. Don't hesitate to get in touch using the form below!</p>
        </div>
      </div>
    </div>
  )
}

export default About
