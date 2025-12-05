import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import ChancellorImage from "./images/leadership/chancellor.webp"
import Banner from '../images/banners/leadership.webp';



const Chancellor = () => {
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
                                        <h1 className="breadcrumbs-title">Chancellor</h1>
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
                                                    <img src={ChancellorImage} alt="About" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8" style={{ backgroundColor: 'rgb(248, 249, 250)', padding: '20px' }}>
                                                <div className="about__content about__content1">
                                                   <b style={{ fontSize: '18px', color: "#F05819" }}>Dreams alone won't bring success; it takes sweat, determination, and action.
                                                    </b>
                                                    <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s" style={{ textAlign: 'justify' }}>
                                                        Motivated by a vision of national development through education, I founded Aditya University to provide top-tier education while nurturing future leaders. Inspired by Charles Darwin's principle of adaptability, we've overcome challenges to create an environment where students thrive. At Aditya University, we pride ourselves on offering practical, industry-focused education that attracts the brightest minds. Our alumni's success in top companies worldwide is a testament to the dedication of our faculty, who instill in each student values of dedication, sincerity, and loyalty. Today Aditya University stands as a testament to our commitment to nurturing efficient, confident, and globally minded professionals. With initiatives like the Global Business Incubation Centre and Technical Skill Development Institute, we equip our students to lead with innovation and foresight.</p>
                                                    <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s" style={{ textAlign: 'justify' }}>
                                                        Our dream and commitment lie in shaping every student's journey at Aditya University into a resounding success story.
                                                    </p>
                                                    <b style={{ float: 'right' }}>
                                                        Best regards,<br />
                                                        Dr. N. Sesha Reddy.<br />
                                                        Chancellor,<br />
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

export default Chancellor;