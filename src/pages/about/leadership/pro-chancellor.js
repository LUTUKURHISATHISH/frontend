import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import ProChancellorImage from "./images/leadership/sathishreddy.webp"
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
                                                    <b style={{ fontSize: '18px', color: "#F05819" }}>In the tapestry of education, each thread of experience weaves a unique story of Growth and excellence .
                                                    </b>
                                                    <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s" style={{ textAlign: 'justify' }}>
                                                        Welcome to Aditya University,<br/>
                                                        Step into a world where education transcends boundaries and transforms lives.<br/>
                                                        Our university isn't just a place of learning; it's an immersive experience, a voyage of discovery, and a thriving community all rolled into one. Here, academic brilliance seamlessly intertwines with a myriad of opportunities and experiences, crafting a unique essence that defines us.</p>
                                                    <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s" style={{ textAlign: 'justify' }}>
                                                        At Aditya University, we embrace a holistic approach to education that extends far beyond traditional classrooms. Our students are empowered to explore, innovate, and excel in every facet of their journey Yet, what truly distinguishes us is our unwavering commitment to nurturing individuals who are not just academically adept, but also socially conscious and emotionally resilient. Our vibrant campus culture celebrates diversity and fosters collaboration, ensuring that each student feels valued and supported every step of the way. As we embark on this relentless pursuit of academic excellence, we extend a warm invitation to you to experience the distinctive flavor of Aditya University. Join us and become part of a dynamic community dedicated to turning dreams into tangible achievements.
                                                    </p>
                                                    <b style={{ float: 'right' }}>
                                                        Best regards,<br />
                                                        Dr. N. Satish Reddy.<br />
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