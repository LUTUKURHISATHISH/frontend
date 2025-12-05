import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import AboutAditya1 from "./images/aboutaditya.webp";
import AboutAditya2 from "./images/Cotton.webp";
import Sideicon from "./images/side_icon.png";

const AdmissionsBanner = () => {
  const images = [AboutAditya1, AboutAditya2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="container aboutmt">
      <div className="row align-items-center">
        <img src={Sideicon} className="Sideiconimage" alt="Side Icon" />

        <div className="col-md-6 text-md-start text-center">
          <h2 className="fw-bold adityfullname">Welcome to Aditya University</h2>
          <p className="aboutcontent">
            Embark on a transformative journey towards academic excellence and personal growth. 
            Aditya University opens the doors to a world of possibilities, where education transcends
            boundaries and empowers you to shape your future. At Aditya University, education is more
            than a degree—it's a pathway to unlocking your full potential and making a meaningful impact.
          </p>
          <p className="aboutcontent">
            The campus, set in a vibrant environment, attracts students from more than 20 countries,
            creating a diverse and enriching academic experience. This multicultural atmosphere fosters
            collaboration and innovation, preparing students for a global workforce.
          </p>
        </div>

        <div className="col-md-6 about_image">
          <img
            src={images[currentImageIndex]}
            alt="Aditya University Campus"
            className="aboutimage"
          />
        </div>
      </div>
    </div>
  );
};

export default AdmissionsBanner;
