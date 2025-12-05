import React, { useState } from 'react';
import Header from '../../../../../../components/Header';
import FooterTwo from '../../../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../../../components/ScrollTop';
import point from '../../../../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import SideManuDept from '../../../commonpages/sidebar-menu';


const AdvancedAppliation = () => {
    const department = 'mca';
    
    return (
        <>
            <Header
                parentMenu='academics'
                menuCategoryEnable='enable'
            />
            <div className="back__course__page_grid react-courses__single-page pb---16" >
                <div class="react-wrapper background_height">
                    <div class="react-wrapper-inner background_image">
                        <StudyBreadcrumb pageTitle="Programs Offered" />
                        <div className="high_quality-section pt---60 pb---120">
                            <div class="container ">
                                <SideManu />
                                <div class="row m-0">
                                    <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                        <div className="col-md-4 d-flex justify-content-end w-100">
                                            <SideManuDept department={department} />
                                        </div>

                                        <div class="container">
                                            
                                            <p className='contentsize'>
                                                The Department of Computer Applications offers a II-Year comprehensive MCA Program designed to produce industry-ready professionals with in-depth knowledge and essential skills for successful careers in Software Company, Academia, and Research.
                                                We prioritize the overall development of our students, fostering a dynamic learning environment that integrates a case study approach and hands-on, practical learning experiences. The curriculum combines core courses with specialized study, enabling students to showcase their expertise through Projects, Internships, and Publications.
                                            </p>
                                            <san className="hedingname_orange">Department is offering following Electives </san><br />
                                            <div class="degree-list-container">
                                                <ul class="degree-list">
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Machine Intelligence.</span></li>
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Data Engineering.</span></li>
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Network Securit.</span></li>
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Full Stack Development.</span></li>
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Cloud Computing.</span></li>
                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Software Testing & Quality Assurance.</span></li>

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
            </div>
            <FooterTwo />
        </>
    );
}

export default AdvancedAppliation;