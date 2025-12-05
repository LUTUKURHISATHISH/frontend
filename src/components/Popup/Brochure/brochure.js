// App.js
import React, { useState } from 'react';
import PopupWithPDF from './PopupWithPDF';
import { Link } from 'react-router-dom';
import './App.css';
const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleTextClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="App">

      <b
        onClick={handleTextClick}
        style={{
          cursor: 'pointer',
          textDecoration: 'none',
          color: '#d3143f',
          fontSize: '19px',

        }}
      >

        {/* <div className="applybuttion_internation" style={{ display: 'block' }}>
          <button type="button" className="applybuttion_internation_1" onClick={handleTextClick}>
          Brochure
          </button>
        </div> */}
        

       <button type="button"  className="more-about"  style={{ width: "100%", background:"#fff"}}  onClick={handleTextClick}>  Brochure <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
      </b>

      <PopupWithPDF isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default App;
