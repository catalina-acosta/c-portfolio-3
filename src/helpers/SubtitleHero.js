import React from 'react'

function SubtitleHero() {
  return (
    <svg height="10vh" width="100vw" xmlns="http://www.w3.org/2000/svg">
      <text x="-5" y="50" fill="none" stroke="#57535b" font-size="45" font-family="Lato">frontend developer
        <animate
          attributeName="x"
          begin="0s"
          dur="10s"
          from="0"
          to="100%"
          repeatCount="indefinite" />
      </text>
    </svg>
  )
}

export default SubtitleHero
