import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
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
                                        <h1 className="breadcrumbs-title">About</h1>
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
                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Aditya Learning Academy (Centre for Teaching & Learning), Aditya University</san> </b><br />
                                        <p className='contentsize'>A Centre for Teaching & Learning at Aditya University under the name “ADITYA LEARNING ACADEMY (ALA)”, is established to enhance Teaching & Learning, support curriculum development, foster Collaborative partnerships, expand Digital educations, and perform several other functions that facilitate Aditya University to be a leader in educational innovation and faculty development</p>
                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Vision</san> </b><br />
                                        <p className='contentsize'>To be a leader in educational innovation and faculty development, fostering an environment where teaching excellence and learner success converge through collaboration, technology, and research</p>
                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Mission</san> </b><br />
                                        <p className='contentsize'>The Centre for Teaching and Learning at Aditya University is dedicated to improving the quality and effectiveness of teaching across disciplines. We assist professors via thorough professional development, promote new teaching approaches, and foster collaborations with global universities and industry leaders to prepare students for tomorrow's issues.</p>
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