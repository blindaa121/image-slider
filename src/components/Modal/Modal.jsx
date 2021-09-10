import React from 'react'
import './Modal.scss'
import { GrClose } from 'react-icons/gr'

const Modal = ({ content, setShowModal }) => {
  const { alt, image } = content
  return (
    <div className='modal-overlay'>
      <div className='modal-container'>
        <GrClose className='modal-container-close-btn' onClick={() => setShowModal(false)} />
        <div className='modal-top-section'>
          <h1 className='modal-top-header'>{alt}</h1>
        </div>
        <div className='modal-bottom-section'>
          <img className='modal-bottom-section-image' alt={alt} src={`slider-assets/${image}`} />
        </div>
      </div>
    </div>
  )
}

export default Modal
