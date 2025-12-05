import React, { useState } from 'react';
import Header from '../../../../../components/Header';
import FooterTwo from '../../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../../components/ScrollTop';
import point from '../../../../../assets/images/icons/image.png';
import SideManu from './sidebar';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AdvancedAppliation = () => {
    let tab1 = "MBA"


    const tabStyle = 'nav nav-tabs';
    const [selectedIndex, setSelectedIndex] = useState(0);
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
                                        <br />
                                        <Tabs selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
                                            <div className="course-single-tab">
                                                {/* <TabList className={tabStyle} style={{ backgroundColor: "#fff" }}>
                                                    <Tab className='col-md-4'><button>{tab1}</button></Tab>
                                                </TabList> */}

                                                <TabPanel>
                                                    <div class="container">
                                                        <p className='contentsize'>
                                                            The Department of Management Studies offers a 2-year comprehensive MBA program designed to produce industry-ready professionals with in-depth knowledge and essential skills for successful careers in business, academia, and research.<br /><br />

                                                            We prioritize the overall development of our students, fostering a dynamic learning environment that integrates a case study approach and hands-on, practical learning experiences. The curriculum combines core courses with specialized study, enabling students to showcase their expertise through projects, internships, and publications.
                                                        </p>
                                                        <san className="hedingname_orange"> Department is offering following Specializations </san> <br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Finance</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Marketing</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Human Resource Management</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Business Analytics</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Logistics & Supply Chain</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Information Systems Management</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Digital Marketing</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                            </div>
                                        </Tabs>
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