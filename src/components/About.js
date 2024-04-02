import React, { useEffect, useState } from 'react';
import "../styles/About.css";
import aboutImg from '../assets/img/about-pic.jpg';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (!aboutSection) return;

      const { top, bottom } = aboutSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight && bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`about ${isVisible ? 'visible' : ''}`} id='about'>
      <div className="about-container">
        <div className="about-left">
          <h1 className='title-small-d'>about.</h1>
          <div className={`img-title ${isVisible ? 'animate-img' : ''}`}>this is me</div>
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
  );
}

export default About;
