import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import ProChancellorImage from "./images/leadership/ramasree.webp"
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
                                        <h1 className="breadcrumbs-title">Pro Vice-Chancellor (Academics)</h1>
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
                                            <div className="col-lg-12" style={{ backgroundColor: 'rgb(248, 249, 250)', padding: '20px' }}>
                                                <center>
                                                    <div className="about__image wow animate__fadeInUp" data-wow-duration="0.3s">
                                                        <img src={ProChancellorImage} alt="About" style={{width:"40%"}} />
                                                    </div>
                                                </center>
                                                <div className="about__content about__content1">
                                                    <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s" style={{ textAlign: 'justify' }}>
                                                        At Aditya University, academic excellence lies at the heart of our mission. As the Pro Vice-Chancellor (Academics), I am proud to lead a dynamic and progressive academic environment that integrates innovation, inclusivity and quality in education. Our programs are designed to inspire intellectual curiosity, foster critical thinking, and nurture the holistic development of our students. By emphasizing cutting-edge curriculum, experiential learning, and industry-driven skills, we ensure that our graduates are equipped to excel in an ever-evolving global landscape. We take pride in fostering interdisciplinary collaboration and building bridges between academia, industry and society. Through state-of-the-art facilities and a dedicated team of faculty, we enable students to turn challenges into opportunities, blending traditional knowledge with emerging technologies such as AI, robotics and green solutions Aditya University is committed to shaping the leaders of tomorrow, emphasizing academic rigor alongside ethical and social responsibility.</p>
                                                    <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s" style={{ textAlign: 'justify' }}>
                                                        Our goal is not just to educate but to empower students to become agents of meaningful change in their communities and beyond.
                                                    </p>
                                                    <b style={{ float: 'right' }}>
                                                        Best regards,<br />
                                                        Dr. S. Rama Sree.<br />
                                                        Pro Vice-Chancellor (Academics),<br />
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