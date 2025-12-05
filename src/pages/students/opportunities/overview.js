import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import Banner from '../images/banners/opportunities.webp';

const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='opportunities'
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
                                        <h1 className="breadcrumbs-title">Career development centre</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <SideManu />
                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <br />
                                    <div class="container">
                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Overview</san> </b><br />
                                        <p className='contentsize'>
                                            Welcome to the Career Development Centre, your gateway to a successful future. At our centre, we are committed to empowering you with the tools and opportunities needed to excel in your chosen career path. Whether you are seeking Placements, Training programs, Higher education guidance, Internships or support for Entrepreneurial ventures, we are here to assist you at every step. Our dedicated team provides personalized services to ensure you achieve your professional aspirations and thrive in a dynamic job market. Explore our resources and discover how we can help you navigate your career journey with confidence and success.
                                        </p>
                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Objectives of CDC</san> </b><br />
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>To Facilitate Career Planning and Exploration.</span> </li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>To Increase Job Placement and Internship Opportunities.</span> </li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>To Support Higher Education and Lifelong Learning.   </span> </li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>To Promote Entrepreneurship and Innovation.   </span> </li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>To Promote Global Career Opportunities.  </span> </li>
                                            </ul>
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

export default diploma_programs;