import React, {useState} from 'react'
import "../styles/Hero.css"
import SubtitleHero from '../helpers/SubtitleHero'


function Hero() {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloaded(true);
  };

  return (
    <div className='hero' id='home'>
      <div className="hero-left">
        <h1 className="hero-title">catalina acosta rivera</h1>
        <SubtitleHero/>
        {/*<div className="text-container">
          <p>Hello there 🌈! I am a full-stack developer seeking new professional opportunities in full-stack, back-end, or front-end development. I am naturally curious, detail-oriented, and passionate about finding creative solutions to problems, streamlining processes, and developing products that meet market needs. Collaborating with others is important to me as I enjoy learning from fresh perspectives.</p>
          <p>Lately, I've been focusing on enhancing my front-end skills, including practicing JavaScript, learning React, and exploring debugging tools like Chat GPT 🤓, which has proven to be a valuable resource.</p>
        </div>*/}
      </div>
      <div className="hero-right">
      <a href="/CV_Catalina Acosta Rivera.pdf" download="CV_Catalina Acosta Rivera.pdf">
          <button className='download-cv' onClick={handleDownloadClick}>download cv</button>
        </a>
      </div>
      {isDownloaded }
    </div>
  )
}

export default Hero
