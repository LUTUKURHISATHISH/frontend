import React, { useState } from 'react';
import './css.css';
const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="table_center">
      <div className={`drop-down ${isActive ? 'drop-down--active' : ''}`}>
        <div id="dropDown" className="drop-down__button" onClick={toggleDropdown}>
          <span className="drop-down__name">Login <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "12px", opacity: "0.5" }} viewBox="0 0 448 512"><path fill="#ffffff" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></span>
        </div>
        <div className="drop-down__menu-box">
          <ul className="drop-down__menu">
            <a href='https://info.aec.edu.in/aus/Default.aspx?ReturnUrl=%2faus' target='_blank'><li className="drop-down__item"> Campus Connect 🎓 </li></a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;