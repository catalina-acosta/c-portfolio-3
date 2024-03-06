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
          <p>I am originally from Bogotá, Colombia, but I have been living in Europe for the past eight years. After spending three years in Barcelona, I moved to Berlin. I studied Fashion Design in Bogotá and earned my Masters in Fashion Management in Barcelona. Since then, I have worked in the Fashion industry as an Account Manager and, most recently, as a Product Manager in Berlin.</p>
          <p>During the Covid pandemic, I found myself with more free time than expected, which sparked my interest in web development and programming. To my surprise, I discovered that not only could I program (something I had thought was not an option for me for years), but it was also fun and creative.</p>
          <p>In the autumn of 2022, I took the leap and enrolled in a 9-week intensive web development bootcamp at Le Wagon in Berlin. Since then, I have been convinced that I want to continue working as a developer and apply all my skills to it.</p>
          <p>In addition to web development, I enjoy practicing yoga 🧘, baking 🧁, and dancing 🪩.</p>
        </div>
      </div>
    </div>
  )
}

export default About
