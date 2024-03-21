import React, { useState }  from 'react'


function ImageSlider(props) {
  const { slides } = props; // Destructure the slides prop from props object
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative"
  };

  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundImage: `url(${slides[currentIndex].image})`,
  };
  return (
    <div style={sliderStyles}>
      <div style={slideStyles}></div>
    </div>
  )
}

export default ImageSlider
