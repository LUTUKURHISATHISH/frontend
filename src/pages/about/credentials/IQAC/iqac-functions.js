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
                    <StudyBreadcrumb pageTitle="Functions" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <SideManu />
                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <br />
                                    <div class="container">
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Develop quality benchmarks for all activities</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Propagate information of quality parameters</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Organize seminars/guest lectures/workshops on quality-related themes</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Documentation of activities/events</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Act as a nodal agency for quality-related activities</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Prepare and submit AQAR to NAAC annually</span></li>
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