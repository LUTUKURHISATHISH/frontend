import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';

import ScrollToTop from '../../../../components/ScrollTop';
import point from '../../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import Banner from '../images/banners/ala_events.webp';
const IQACEvents = () => {
    let tab1 = "Completed Events",
    tab2 = "Upcoming Event"
       
    const tabStyle = 'nav nav-tabs';
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <>
            <Header
                parentMenu='adityalearning'
                menuCategoryEnable='enable'
            />
            <div className="back__course__page_grid react-courses__single-page pb---16" >
                <div class="react-wrapper background_height">
                    <div class="react-wrapper-inner background_image">
                     <StudyBreadcrumb pageTitle="Events" />
                        {/* <div className="react-breadcrumbs">
                            <div className="breadcrumbs-wrap">
                                <img className="desktop" src={Banner} alt="Breadcrumbs" />
                                <img className="mobile" src={Banner} alt="Breadcrumbs" />
                                <div className="breadcrumbs-inner">
                                    <div className="container">
                                        <div className="breadcrumbs-text">
                                            <h1 className="breadcrumbs-title">Events</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="high_quality-section pt---60 pb---120">
                            <div class="container ">
                                <SideManu />
                                <div class="row m-0">
                                    <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                        <br />
                                        <Tabs selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
                                            <div className="course-single-tab">
                                                <TabList className={tabStyle} >
                                                    <Tab className='col-md-4'><button>{tab1}</button></Tab>
                                                    <Tab className='col-md-4'><button>{tab2}</button></Tab>
                                                   
                                                </TabList>

                                                <TabPanel>
                                                    <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Completed Events</san> </b><br />
                                                    <div class="degree-list-container">
                                                        <ul class="degree-list">
                                                            <li><span class="icon"><img className='pointimage' src={point} /></span><span>1. Sensitization program on “Outcome Based Education (OBE)” from 10th to 14th June 2024.</span></li>
                                                            <li><span class="icon"><img className='pointimage' src={point} /></span><span>2. Skill Enhancement Program (SEP) on MS-Office & basic communication skills for non -teaching staff from 18th to 24th June 2024.</span></li>
                                                            <li><span class="icon"><img className='pointimage' src={point} /></span><span>3. Faculty Development Program (FDP) on "Innovative Teaching Methodologies" from 22nd to 26th July 2024.</span></li>
                                                            <li><span class="icon"><img className='pointimage' src={point} /></span><span>4. Professional Development Programme on “ACADEMIC LEADERSHIP AND INSTITUTIONAL DEVELOPMENT” from 05.05.25 to 09.05.25.</span></li>
                                                        </ul>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Upcoming Event</san> </b><br />
                                                    <div class="degree-list-container">
                                                        {/* <ul class="degree-list">
                                                            <li><span class="icon"><img className='pointimage' src={point} /></span><span>
                                                            <Link to={Image1} target="blank"> 1. Online Certification Course on "Harnessing Big Data: Business Analytics with Oracle Database", scheduled from 10th March 2025 - 15th March 2025, Organized by Aditya Learning Academy in association with IEduVibhu.  </Link> </span></li>
                                                        </ul> */}
                                                        <ul class="degree-list">
                                                            <li><span class="icon"><img className='pointimage' src={point} /></span><span>1.A One Week Professional Development Programme on "Essentials of Professional Communication : Hands-On Training from 19-05-2025 to 24-05-2025.</span></li>
                                                         </ul>
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

export default IQACEvents;