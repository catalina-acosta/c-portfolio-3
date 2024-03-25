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
        <a href="/CV_Catalina Acosta Rivera.pdf" download="CV_Catalina Acosta Rivera.pdf" className='download-cv' onClick={handleDownloadClick}>
          download cv
        </a>
      </div>
      <div className="hero-right">
</div>
      {isDownloaded }
    </div>
  )
}

export default Hero
