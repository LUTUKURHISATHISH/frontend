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
                                    <div class="container">
                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Programs Offered</san> </b><br />
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>B.Sc. Forensic Science. </span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>B.Sc. Cyber Security and Digital Forensics. </span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>M.Sc. Forensic Science.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>M.Sc. Cyber Security and Digital Forensics.</span></li>

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

export default Overview;