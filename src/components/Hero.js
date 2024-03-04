import React from 'react'
import "../styles/Hero.css"

function Hero() {
  return (
    <div className='hero' id='home'>
      <div className="hero-left">
        <h1 className="hero-title">catalina acosta rivera</h1>
        <h2 className="hero-subtitle">web developer</h2>
      </div>
      <div className="hero-right">
        <button className='download-cv'>download cv</button>
      </div>
    </div>
  )
}

export default Hero
