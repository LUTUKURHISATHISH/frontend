import React, { useState } from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import SideManu from './sidebar';
import Banner from './images/transport.webp';

// Dynamically import 20 images (1.webp to 20.webp)
const images = Array.from({ length: 2 }, (_, i) =>
  require(`./images/transport/${i + 1}.webp`)
);

const Transport = () => {
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
                    <h1 className="breadcrumbs-title">Transport</h1>
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
                        Aditya University offers a reliable and student-friendly transport system: A spacious fleet of 250 buses, each seating around 40 students, operates on scheduled routes across the district, ensuring timely commute to and from campus. The buses meet all government safety standards and are equipped with well-stocked first-aid kits for emergencies
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

export default Transport;
