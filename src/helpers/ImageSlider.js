import React, { useState } from 'react';
import '../styles/ImageSlider.css';

function ImageSlider(props) {
  const { slides } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showProjectInfo, setShowProjectInfo] = useState(false);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setShowOverlay(false); // Reset overlay visibility
    setShowProjectInfo(false); // Reset project info visibility
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setShowOverlay(false); // Reset overlay visibility
    setShowProjectInfo(false); // Reset project info visibility
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    setShowOverlay(false); // Reset overlay visibility
    setShowProjectInfo(false); // Reset project info visibility
  }

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
    setShowProjectInfo(!showProjectInfo);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div className='left-arrow' onClick={goToPrevious}>
          ❰
        </div>
        <div className='right-arrow' onClick={goToNext}>
          ❱
        </div>
        <div className="slide-container">
          <div className="slide">
            <div className="project-left">
              <div className="graphic">
                <div className="top-container">
                  <div className='graphic-points'>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                  </div>
                </div>
                <div className="project-img-container" onClick={toggleOverlay}>
                  {showOverlay && <div className="overlay"></div>}
                  {(window.innerWidth <= 768 && showOverlay) || window.innerWidth > 768 ? (
                    <div className='project-info'>
                      <div className='project-title'><h1>{slides[currentIndex].title}</h1></div>
                      <div className="description"><p>{slides[currentIndex].description}</p></div>
                      <div className="tech-stack"><p>{slides[currentIndex].techStack}</p></div>
                      <div className="label"><p>{slides[currentIndex].label}</p></div>
                      <div className="project-links">
                        {slides[currentIndex].git && (
                          <a href={slides[currentIndex].git} target='_blank' rel='noopener noreferrer'>
                            <p>git</p>
                          </a>
                        )}
                        {slides[currentIndex].link && (
                          <a href={slides[currentIndex].link} target='_blank' rel='noopener noreferrer'>
                            <p>visit</p>
                          </a>
                        )}
                      </div>
                    </div>
                  ) : null}
                  <img src={slides[currentIndex].image} alt="" className='project-img'/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-dots">
          {slides.map((slide, slideIndex) => (
            <div className={`nav-dot ${slideIndex === currentIndex ? 'current' : ''}`} key={slideIndex} onClick={() => goToSlide(slideIndex)}>●</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
