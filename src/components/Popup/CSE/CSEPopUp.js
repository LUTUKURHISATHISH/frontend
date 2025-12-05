// App.js
import React, { useState } from 'react';
import PopupWithPDF from './PopupWithPDF';
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
          
        <div className="applybuttion_internation" style={{ display: 'block' }}>
          <button type="button" className="applybuttion_internation_1" onClick={handleTextClick}>
          Curriculum
          </button>
        </div>
        </b>
      
      <PopupWithPDF isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default App;
