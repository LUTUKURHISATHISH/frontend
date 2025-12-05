import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
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
                                        <h1 className="breadcrumbs-title">Entrepreneurship & Incubation</h1>
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
                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Entrepreneurship & Incubation</san> </b><br />
                                        <p className='contentsize'>
                                        The Career Development Centre champions the spirit of innovation and entrepreneurship through dedicated support and resources. We provide aspiring entrepreneurs with comprehensive guidance on business planning, development and execution. Our incubation programs offer access to cutting-edge facilities, mentorship from industry experts and networking opportunities with potential investors and partners. By fostering a culture of creativity and resilience, we empower students to transform innovative ideas into viable business ventures. Whether you're looking to start a tech startup, social enterprise or any innovative project. our centre is equipped to support your journey from concept to successful enterprise, ensuring you have the tools and confidence needed to thrive in the entrepreneurial landscape.
                                        </p>
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