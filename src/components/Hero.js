import React, {useState} from 'react'
import "../styles/Hero.css"
import SubtitleHero from '../helpers/SubtitleHero'
import Confetti from 'react-confetti';

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
      </div>
      <div className="hero-right">
      <a href="/CV_Catalina Acosta Rivera.pdf" download="CV_Catalina Acosta Rivera.pdf">
          <button className='download-cv' onClick={handleDownloadClick}>download cv</button>
        </a>
      </div>
      {isDownloaded && <Confetti />}
    </div>
  )
}

export default Hero
