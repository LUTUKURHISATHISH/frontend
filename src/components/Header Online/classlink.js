import React, { useState } from 'react';
import './css.css';
import { Link } from 'react-router-dom';

const Classlink = () => {
  
return (
    <div className="table_center">
      <span className="button-alumini2"><Link to="https://aec.edu.in/" target='_blank' style={{fontSize:'12px',color:'#ffff'}}> Online Class</Link></span> 
     </div>
  );
};

export default Classlink;