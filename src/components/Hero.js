import React from 'react'
import "../styles/Hero.css"

function Hero() {
  return (
    <div className='hero' id='home'>
      <div className="hero-left">
        <h1 className="hero-title">catalina acosta rivera</h1>
        <svg height="10vh" width="70vw" xmlns="http://www.w3.org/2000/svg">
          <text x="5" y="50" fill="none" stroke="#57535b" font-size="45" font-family="Lato">web developer
          <animate
            attributeName="x"
            begin="0s"
            dur="10s"
            from="0"
            to="100%"
            repeatCount="indefinite" />
          </text>
        </svg>
      </div>
      <div className="hero-right">
        <button className='download-cv'>download cv</button>
      </div>
    </div>
  )
}

export default Hero
