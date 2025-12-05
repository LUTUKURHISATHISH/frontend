import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import ProChancellorImage from "./images/leadership/deepakreddy.webp";
import Banner from '../images/banners/leadership.webp';

const ProChancellor = () => {
    return (
        <>
            <Header
                parentMenu='leadership'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <div className="react-breadcrumbs">
                        <div className="breadcrumbs-wrap">
                            <img className="desktop" src={Banner} alt="Breadcrumbs" />
                            <img className="mobile" src={Banner} alt="Breadcrumbs" />
                            <div className="breadcrumbs-inner">
                                <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Pro-Chancellor</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">

                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12">
                                    <div class="container">
                                        <div class="row">
                                            <div className="col-lg-4">
                                                <div className="about__image wow animate__fadeInUp" data-wow-duration="0.3s">
                                                    <img src={ProChancellorImage} alt="About" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8" style={{ backgroundColor: 'rgb(248, 249, 250)', padding: '20px' }}>
                                                <div className="about__content about__content1">
                                                    <b style={{ fontSize: '18px', color: "#F05819" }}>Education is the key for unlocking a brighter tomorrow .
                                                    </b>
                                                    <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s" style={{ textAlign: 'justify' }}>
                                                    As Pro Chancellor, I'm thrilled to invite you to join our community dedicated to excellence and innovation in technical education. At Aditya, we prioritize interdisciplinary skills and leadership development, preparing our students to tackle global challenges. Our inclusive environment fosters holistic growth through diverse co-curricular activities, while our commitment to public service drives impactful research and societal change.</p>
                                                    <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s" style={{ textAlign: 'justify' }}>
                                                    Join us at Aditya University, where your potential meets limitless opportunities for success.
                                                    </p>
                                                    <b style={{ float: 'right' }}>
                                                        Best regards,<br />
                                                        Sri. N. Deepak Reddy.<br />
                                                        Pro-Chancellor,<br />
                                                        Aditya university.
                                                    </b>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ScrollToTop />
                </div>
            </div>
            <FooterTwo />
        </>
    );
}

export default ProChancellor;