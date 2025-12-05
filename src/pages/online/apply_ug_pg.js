import React, { useEffect, useState } from "react";
import Adminssion from './images/adminssion.webp';
const Apply = () => {
  const [showImage, setShowImage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowImage(currentScrollPos <= 100); // Hide image if scrolled beyond 40px
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 ">
          {showImage && (
            <div className="admission_ug_pg admission_ug_pg" style={{ display: "block" }}>
              <a href="https://apply.adityauniversity.in/"> <img src={Adminssion} className="ug_pg" alt="image" /></a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apply;



