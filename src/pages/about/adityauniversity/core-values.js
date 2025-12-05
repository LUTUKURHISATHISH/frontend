import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import Banner from '../images/banners/au_core_values.webp';
const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='university'
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
                                        <h1 className="breadcrumbs-title">Core Values</h1>
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
                                        {/* <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Core Values</san> </b><br /> */}
                                        <div class="degree-list-container">
                                            <b className='hedingname_orange'>Excellence</b>
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>We hold ourselves to the highest standards in all aspects of education, research, and community engagement.</span> </li>
                                            </ul>
                                        </div>
                                        <br/>
                                        <div class="degree-list-container">
                                            <b className='hedingname_orange'>Inclusivity and Diversity</b>
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>We value diversity and provide an inclusive environment where people from all background's perspectives, and experiences learn, cooperate, and grow. We believe a varied academic atmosphere enhances education for all.</span> </li>
                                            </ul>
                                        </div>
                                        <br/>
                                        <div class="degree-list-container">
                                            <b className='hedingname_orange'>Integrity and Ethical Conduct</b>
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Our academic community is built on integrity. We do ethical research, teaching, and interactions. All university staff and students are valued for their honesty, transparency, and accountability, which helps to foster a trustworthy and accountable environment.</span> </li>
                                            </ul>
                                        </div>
                                        <br/>
                                        <div class="degree-list-container">
                                            <b className='hedingname_orange'>Global Outlook</b>
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>We advocate for global knowledge, intercultural understanding, and social responsibility. Our graduates have the ability to solve problems from a global perspective.</span> </li>
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