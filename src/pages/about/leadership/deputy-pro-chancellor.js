import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import ProChancellorImage from "./images/leadership/SreenivasaReddy.webp"
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
                                        <h1 className="breadcrumbs-title">Deputy-Pro-Chancellor</h1>
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
                                                    At Aditya University, our commitment to nurturing leaders and advancing knowledge is guided by our Vision of excellence in education, innovation in research, and dedicated service to society. We provide an environment that merges academic rigor with a culture of support, equipping our students for the challenges of a dynamic world.</p>
                                                    <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s" style={{ textAlign: 'justify' }}>
                                                    We emphasize interdisciplinary learning and practical exposure, preparing our students not only for academic success but for responsible global citizenship. By fostering a culture of innovation and sustainability, we contribute to impactful societal advancements. At Aditya University, we envision a future where education is a powerful driver of holistic growth and positive change. I invite you to join us in this journey of transformation and excellence, where every step is a stride toward realizing a shared vision of progress for our community, our nation, and our world.
                                                    </p>
                                                    <b style={{ float: 'right' }}>
                                                        Best regards,<br />
                                                        Dr. M. Sreenivasa Reddy.<br />
                                                        Deputy Pro-Chancellor,<br />
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