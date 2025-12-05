import React, { useState } from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import SideManu from './sidebar';
import Banner from './images/barrier.webp';

// Dynamically import 5 images (1.webp to 5.webp)
const images = Array.from({ length: 5 }, (_, i) =>
  require(`./images/environment/${i + 1}.webp`)
);

const Environment = () => {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (src) => {
    setPopupImage(src);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <>
      <Header parentMenu="facilities" menuCategoryEnable="enable" />
      <div className="react-wrapper background_height">
        <div className="react-wrapper-inner background_image">
          <div className="react-breadcrumbs">
            <div className="breadcrumbs-wrap">
              <img className="desktop" src={Banner} alt="Breadcrumbs" />
              <img className="mobile" src={Banner} alt="Breadcrumbs" />
              <div className="breadcrumbs-inner">
                <div className="container">
                  <div className="breadcrumbs-text">
                    <h1 className="breadcrumbs-title">Barrier free Environment</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="high_quality-section pt---60 pb---120">
            <div className="container">
              <SideManu />
              <div className="row m-0">
                <div className="col-md-12 col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                  <br />
                  <div className="container">
                    <div className="about__content">
                      <p className="contentsize">
                        Aditya University ensures an inclusive, barrier free environment with accessible ramps, elevators, tactile signage, and dedicated washrooms designed for students with disabilities. The campus adheres to national accessibility standards, fostering ease of movement and independence for all learners.
                      </p>
                    </div>
                    <br />
                    <div className="row">
                      {images.map((src, index) => (
                        <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
                          <img
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            className={`img-fluid rounded shadow image-animate delay-${(index % 4) + 1}`}
                            onClick={() => openPopup(src)}
                            style={{ cursor: 'pointer' }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ScrollToTop />
        </div>
      </div>

      {popupImage && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closePopup}>
              &times;
            </span>
            <img src={popupImage} alt="Popup" className="popup-image" />
          </div>
        </div>
      )}

      <FooterTwo />
    </>
  );
};

export default Environment;
