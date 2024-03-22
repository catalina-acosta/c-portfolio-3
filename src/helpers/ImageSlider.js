import React, { useState } from 'react';
import '../styles/ImageSlider.css';

function ImageSlider(props) {
  const { slides } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
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
        <div className={`slide-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="slide">
            <div className="project-left">
              <div className="graphic">
                <div className="dots-nav">
                  <div className='dots'>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                  </div>
                </div>
                <div className="project-img-container">
                  <img src={slides[currentIndex].image} alt="" className='project-img'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isHovered && (
        <div className='project-info'>
          <div className='project-title'><h1>{slides[currentIndex].title}</h1></div>
            <div className="description"><p>{slides[currentIndex].description}</p></div>
            <div className="tech-stack"><p>{slides[currentIndex].techStack}</p></div>
            <div className="label"><p>{slides[currentIndex].label}</p></div>
          </div>
        )}
    </div>
  );
}

export default ImageSlider;
