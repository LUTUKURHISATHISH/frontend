import React, { useState } from 'react';
import './css.css';
// import Imglogo from './images/online.png'; 

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="table_center">
      <div className={`drop-down ${isActive ? 'drop-down--active' : ''}`}>
        <div id="dropDown" className="drop-down__button" onClick={toggleDropdown}>
          <span className="drop-down__name">Login <svg xmlns="http://www.w3.org/2000/svg" style={{height: "12px",opacity: "0.5"}} viewBox="0 0 448 512"><path fill="#ffffff" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></span> 
        </div>
      <div className="drop-down__menu-box">
          <ul className="drop-down__menu">
            {/* <a href='/online-class' target='_blank'><li className="drop-down__item"> Online Class <img src={Imglogo} alt="Online Class" style={{height:'20px'}}/> </li></a> */}
            <a href='https://info.aec.edu.in/aus'><li className="drop-down__item"> Campus Connect 🎓 </li></a>
            {/* <a href='https://info.aec.edu.in/aec/olpayment.aspx'><li className="drop-down__item">Online Payment 🏦</li></a> */}
         </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;