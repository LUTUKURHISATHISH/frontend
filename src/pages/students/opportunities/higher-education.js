import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import Banner from '../images/banners/opportunities.webp';
import SideManu from './sidebar';
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
                                        <h1 className="breadcrumbs-title">Higher Education</h1>
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
                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Higher Education</san> </b><br />
                                        <p className='contentsize'>
                                        Higher education is a critical step for those looking to deepen their expertise, pursue specialized fields and enhance their career prospects. Our Career Development Centre is dedicated to guiding students through every aspect of this journey, from selecting the right programs to navigating the application process. We provide comprehensive resources and personalized counselling to help students identify the best-fit institutions and courses that align with their academic interests and professional aspirations. Additionally, our partnerships with top universities and colleges worldwide offer students access to exclusive information sessions, scholarship opportunities and application workshops. By supporting our students in their pursuit of higher education, we aim to empower them to achieve academic excellence and secure a competitive edge in their chosen careers.
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