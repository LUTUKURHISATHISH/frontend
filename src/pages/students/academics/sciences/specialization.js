import React from 'react';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../components/ScrollTop';
import point from '../../../../assets/images/icons/image.png';
import SideManu from './sidebar';
const Overview = () => {
    return (
        <>
            <Header
                parentMenu='academics'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <SideManu />
                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <br />
                                    <div class="container row">
                                        <div class="col-md-6">
                                            <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Undergraduate (UG) </san> </b><br /><br />
                                            <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">1. B.Sc. Forensic Science </san> </b><br />
                                            <b>Major :</b> Forensic Science  <br />
                                            <b>Minor :</b>
                                            <div class="degree-list-container">
                                                <ul class="degree-list">
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Chemistry </span></li>
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Physics  </span></li>
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Mathematics </span></li>
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Botany </span></li>
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Zoology </span></li>
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Cyber Forensics </span></li>
                                                </ul>
                                            </div>
                                            <br />
                                            <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">2. B.Sc. Cyber Security and Digital Forensics  </san> </b><br />
                                            <b>Major :</b> Cyber Security and Digital Forensics  <br />
                                            <b>Minor :</b>
                                            <div class="degree-list-container">
                                                <ul class="degree-list">
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Computer Science </span></li>
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Physics   </span></li>
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Mathematics </span></li>
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Forensic Science   </span></li>
                                                </ul>
                                            </div>
                                        </div>



                                        <div class="col-md-6">
                                            <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Postgraduate  (PG) </san> </b><br /><br />
                                            <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">1. M.Sc. Forensic Science </san> </b><br />
                                            <b>(Specialization will be offered in the Semester - III) </b> <br />
                                            <div class="degree-list-container">
                                                <ul class="degree-list">
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Forensic Biology & DNA Fingerprinting </span></li>
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Forensic Chemistry & Toxicology  </span></li>
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Questioned Document & Fingerprint Science  </span></li>
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Forensic Physics & Ballistics  </span></li>
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Digital Forensics </span></li>
                                                </ul>
                                            </div>
                                            <br />
                                            <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">2. M.Sc. Cyber Security and Digital Forensics   </san> </b><br />
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

export default Overview;