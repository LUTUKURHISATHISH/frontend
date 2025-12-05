import React from 'react';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../components/ScrollTop';
import point from '../../../../assets/images/icons/image.png';
import SideManu from './sidebar';
const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='iqac'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="Strategies" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <SideManu />
                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <br />
                                    <div class="container">
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Ensure quality enhancement and sustenance</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Ensure progressive performance of academic, administrative and financial tasks</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Integrate modern methods in pedagogy</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Ensure effective support services</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Ensure transparent evaluation system</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Encourage research activities</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Establish connectivity with premier institutes and industry in India and abroad</span></li>
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