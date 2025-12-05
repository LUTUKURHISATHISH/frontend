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
                    <StudyBreadcrumb pageTitle="Objectives" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <SideManu />
                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <br />
                                    <div class="container">
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Develop and maintain consistent system</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Improve academic performance</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Improve administrative performance</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Create quality conscious internally</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Work to remove deficiencies</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Utilize full potential to improve quality</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Channelize efforts towards excellence</span></li>
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