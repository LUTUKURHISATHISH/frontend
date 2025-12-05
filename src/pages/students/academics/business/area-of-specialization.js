import React, { useState } from 'react';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../components/ScrollTop';
import point from '../../../../assets/images/icons/image.png';
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
                                                       
                                                        <san className="hedingname_orange">Area of specialization </san> <br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Marketing</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Finance & accounts</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Human resources</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Digital transformation & operations</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> General management</span></li>
                                                            </ul>
                                                        </div>
                                                        <br/>
                                                        <san className="hedingname_orange">MBA ELECTIVES </san> <br />
                                                        <b>Major electives</b>
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Finance</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Marketing</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Digital Marketing</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Human Resource Management</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Business Analytics</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Logistics and Supply Chain</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Digital Transformation and Innovation</span></li>
                                                            </ul>
                                                        </div>
                                                        <br/>
                                                        
                                                        <b>Minor electives</b>
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Fintech & Digital Finance</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Product Strategy & Innovation Management</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Business Sustainability & Leadership</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> International Business & Cross-Cultural Management</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Entrepreneurship & Start-up Managemen</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <br/>
                                                    <san className="hedingname_orange" style={{ fontSize: "15px",backgroundColor:'#f15d49',color:'white',borderRadius:'5px' }} >Note:</san> <san> Student may opt for one major elective and one minor elective</san><br />

                                                    
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