import React, { useState } from 'react';
import Header from '../../components/Header';
import FooterTwo from '../../components/Footer/index';
import ScrollToTop from '../../components/ScrollTop';
import './gallery.css';

const Gallery = () => {
    const imageCount = 15;
    const images = Array.from({ length: imageCount }, (_, i) => `/images/gallery/${i + 1}.webp`);

    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (src) => {
        setPopupImage(src);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <>
            <Header parentMenu='/' menuCategoryEnable='enable' />
            <div className="react-wrapper background_height">
                <div className="react-wrapper-inner background_image">
                    <div className="high_quality-section pt---60 pb---120">
                        <div className="container">
                            <div className="row m-0">
                                <div className="col-md-12 col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <div className="container">
                                        <div className="row">
                                            {images.map((src, index) => (
                                                <div key={index} className="col-md-4 col-sm-6 col-12 mb-3">
                                                    <img
                                                        src={src}
                                                        alt={`Gallery Image ${index + 1}`}
                                                        className={`img-fluid rounded shadow image-animate delay-${index % 4 + 1}`}
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
                        <span className="close-btn" onClick={closePopup}>&times;</span>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                    </div>
                </div>
            )}

            <FooterTwo />
        </>
    );
};

export default Gallery;