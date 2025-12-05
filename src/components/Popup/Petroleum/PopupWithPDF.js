import React from 'react';
// import './PopupWithPDF.css';

const PopupWithPDF = ({ isOpen, onClose }) => {
  const pdfUrl = 'https://aec.edu.in/AU/Petroleum';

  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>Close</button>
        <iframe
          title="PDF Viewer"
          src={pdfUrl}
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default PopupWithPDF;
