import React, { useState } from 'react';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../components/ScrollTop';
import point from '../../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import { Link } from 'react-router-dom';


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
                                                       
                                                        <san className="hedingname_orange">Programs Offered </san> <br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> BBA</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> BBA (Digital Marketing)</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> BBA (Business Analytics)</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> MBA (Major & Minor electives)</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>  <Link to="https://adityauniversity.in/adtppu/uploads/executive_education.pdf" target="_blank">Executive MBA Program</Link> </span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Ph.D</span></li>
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