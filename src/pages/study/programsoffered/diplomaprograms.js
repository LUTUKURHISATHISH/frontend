import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar_programs';
import Banner from './images/diploma.webp';

const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='offered'
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
                                        <h1 className="breadcrumbs-title">Diploma Programs</h1>
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
                                    <div class="about__content">
                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}> <san className="hedingname_blue">Diploma</san> <san className="hedingname_orange">Programs Offered :</san> </b><br />
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>  Diploma in Civil Engineering</span> </li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Diploma in Computer Science and Engineering</span> </li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Diploma in Communication & Computer Networking    </span> </li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Diploma in Electronics and Communication Engineering</span> </li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Diploma in Electrical and Electronics Engineering</span> </li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>  Diploma in Mechanical Engineering</span> </li>
                                            </ul>
                                        </div>
                                        <br />
                                        <b class="about__title wow animate__fadeInUp headingcolor" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_blue">Eligibility Criteria for </san> <san className="hedingname_orange">Diploma Admission </san></b><br />
                                            <p className='contentsize'>Candidates should have passed S.S.C. Examination conducted by State Board of Secondary Education, Andhra Pradesh/ Telangana or any other examination recognized as equivalent thereto by the Board of Secondary Education, A.P/TS, such as Central Board of Secondary Education (CBSE), Indian Council for Secondary Education (ICSE), National Institute of Open School (NIOS), A.P. Open School Society (APOSS), X class examination conducted by various State Boards of Secondary Education in India with Mathematics as one of the subjects.</p>
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