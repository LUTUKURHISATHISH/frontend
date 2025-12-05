import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './popupcss.css';
import Video from './images/popup_video/video.mp4';

Modal.setAppElement('#root');

const Popup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

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

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      contentLabel="Video Popup"
      className="custom-modal"
      overlayClassName="custom-overlay"
    >
      <button className="close-btn" onClick={closeModal} aria-label="Close Popup">X</button>
      <video className="mobilepopup" controls autoPlay muted>
        <source src={Video} type="video/mp4" />
      </video>
    </Modal>
  );
};

export default Popup;
