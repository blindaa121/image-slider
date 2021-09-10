import { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import Modal from '../Modal/Modal'
import './ImageSlider.scss'

const ImageSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const numberOfSlides = slides.length

  const nextSlide = () => {
    setCurrentSlide(currentSlide === numberOfSlides - 1 ? 0 : currentSlide + 1 )
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? numberOfSlides - 1 : currentSlide - 1)
  }

  const renderModal = (slide) => {
    setModalContent(slide)
    setShowModal(true)
  }

  const sliderImages = (
    slides.map((slide, idx) => {
      const { alt, image } = slide

      return (
        <div className={currentSlide === idx ? 'slide active' : 'slide'} key={idx} onClick={() => renderModal(slide)}>
          {currentSlide === idx && <img className='slider-image' alt={alt} src={`slider-assets/${image}`} />}
        </div>
      )
    })
  )

  return (
    <div className='slider-container'>
      <FaArrowAltCircleLeft className='slider-container-left-arrow slider-arrow' onClick={nextSlide} />
      {showModal && <Modal content={modalContent} setShowModal={setShowModal} />}
      {sliderImages}
      <FaArrowAltCircleRight className='slider-container-right-arrow slider-arrow' onClick={prevSlide} />
    </div>
  )
}

export default ImageSlider
