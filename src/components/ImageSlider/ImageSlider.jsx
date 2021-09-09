import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './ImageSlider.css'

const ImageSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const numberOfSlides = slides.length

  const nextSlide = () => {
    setCurrentSlide(currentSlide === numberOfSlides - 1 ? 0 : currentSlide + 1 )
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? numberOfSlides - 1 : currentSlide - 1)
  }

  const sliderImages = (
    <>
      {slides.map((slide, idx) => (
        <div className={currentSlide === idx ? 'slide active' : 'slide'} key={idx}>
          {currentSlide === idx && <img className='slider-image' alt={slide.alt} src={`slider-assets/${slide.image}`} />}
        </div>
      ))}
    </>
  )

  return (
    <div className='slider-container'>
      <FaArrowAltCircleLeft className='slider-container-left-arrow slider-arrow' onClick={nextSlide} />
      {sliderImages}
      <FaArrowAltCircleRight className='slider-container-right-arrow slider-arrow' onClick={prevSlide} />
    </div>
  )
}

export default ImageSlider
