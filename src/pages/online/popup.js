import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './popupcss.css';
import image1 from './images/popup_images/0.webp';
// import image2 from './images/popup_images/2.png';
// import image3 from './images/popup_images/3.png';
 
Modal.setAppElement('#root');
 const Popup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true); // Start open
 
  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
 
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [modalIsOpen]);
 
  const closeModal = () => {
    setModalIsOpen(false);
  };
 
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
 
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      contentLabel="Image Popup"
      className="custom-modal"
      overlayClassName="custom-overlay"
    >
      <button className="close-btn" onClick={closeModal}>X</button>
      <Slider {...sliderSettings}>
        <div><img src={image1} className="mobilepopup" alt="Popup 1" /></div>
        {/* <div><img src={image2} className="mobilepopup" alt="Popup 2" /></div>
        <div><img src={image3} className="mobilepopup" alt="Popup 3" /></div> */}
      </Slider>
    </Modal>
  );
};
 
export default Popup;