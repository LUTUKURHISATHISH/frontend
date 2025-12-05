import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import Banner from '../images/banners/ala_about.webp';
const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='adityalearning'
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
                                        <h1 className="breadcrumbs-title">Objectives</h1>
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
                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Objectives</san> </b><br />
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Enhance Teaching and Learning</span> </li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span></span> Support Curriculum Development </li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span></span> Foster Collaborative Partnerships</li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span></span> Expand Digital Education</li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span></span> Encourage Research and Scholarship</li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span></span> Deliver Targeted Professional Development</li>
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