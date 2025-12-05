import React, { useState } from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import './events.css';
import SideManu from './sidebar';
import Banner from '../images/banners/alumni.webp';


import img1 from './images/events/1.webp';
import img2 from './images/events/2.webp';
import img3 from './images/events/3.webp';
import img4 from './images/events/4.webp';
import img5 from './images/events/5.webp';
import img6 from './images/events/6.webp';
import img7 from './images/events/7.webp';
import img8 from './images/events/8.webp';
import img9 from './images/events/9.webp';

const Events = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (src) => {
        setPopupImage(src);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

    return (
        <>
            <Header parentMenu='outreach' menuCategoryEnable='enable' />
            <div className="react-wrapper background_height">
                <div className="react-wrapper-inner background_image">
                     <div className="react-breadcrumbs">
                        <div className="breadcrumbs-wrap">
                            <img className="desktop" src={Banner} alt="Breadcrumbs" />
                            <img className="mobile" src={Banner} alt="Breadcrumbs" />
                            {/* <div className="breadcrumbs-inner">
                                <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Alumni</h1>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    
                    <div className="high_quality-section pt---60 pb---120">
                        <div className="container">
                            <div className="row m-0">
                                         <SideManu />
                                <div className="col-md-12 col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <div className="container">
                                        <div className="row">
                                            <p className='contentsize'> The recent Aditya University Alumni Meet 2025, held in Dallas, Texas on May 31, 2025, marked a significant milestone in strengthening the university's global alumni network. Branded as "Resonance 2025," this event brought together Adityans from across the United States, celebrating their shared heritage and achievements.The event reinforced the bond between the institution and its graduates, encouraging future collaborations.</p>
                                            {images.map((src, index) => (
                                                <div key={index} className="col-md-3 col-sm-6 col-12 mb-3">
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

export default Events;
