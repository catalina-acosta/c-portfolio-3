import React, { useState }  from 'react'
import '../styles/ImageSlider.css';


function ImageSlider(props) {
  const { slides } = props; // Destructure the slides prop from props object
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.lenght -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  };

  return (
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
      <div>{slides[currentIndex].title}</div>
    </div>
  )
}

export default ImageSlider
