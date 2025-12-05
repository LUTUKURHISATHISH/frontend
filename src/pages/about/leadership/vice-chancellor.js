import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import ProChancellorImage from "./images/leadership/vice_chancellor.webp"
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
                                        <h1 className="breadcrumbs-title">Vice-Chancellor</h1>
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
                                                   <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s" style={{ textAlign: 'justify' }}>
                                                    Aditya University, a future-focused University set in idyllic green surroundings, has always been in the forefront in providing skilled student workforce to the global industry. Very much conscious of its rural presence, it is now focused on developing technologies for rural India with a firm belief that grassroot innovations that benefit 1.4 billion people will actually have implications for 6 billion more of the world population. The technologies that we are currently focusing on are related to green energy solutions involving biogas, solar, electric and hydrogen, drone-based solutions for sustainable and precision farming, disaster prevention and mitigation, climate change and global warming, etc. with advances in AI and Machine Learning augmenting these for efficient and optimal outcomes.</p>
                                                    <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s" style={{ textAlign: 'justify' }}>
                                                    Aditya University welcomes National / International collaboration with Universities and Institutions in India and abroad through joint degree and research programs as well as industry for joint development of technologies. We also welcome scientists, engineers, researchers and rural entrepreneurs that share our vision to work with us.
                                                    </p>
                                                    <b style={{ float: 'right' }}>
                                                        Best regards,<br />
                                                        Prof. M.B.Srinivas.<br />
                                                        Vice-Chancellor,<br />
                                                        Aditya university
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