import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Banner from '../images/banners/ala_events.webp';
const AdvancedAppliation = () => {
    let tab1 = "Completed Events",
        tab2 = "Ongoing Event",
        tab3 = "Upcoming Event"
    const tabStyle = 'nav nav-tabs';
    const [selectedIndex, setSelectedIndex] = useState(2);
    return (
        <>
            <Header
                parentMenu='adityalearning'
                menuCategoryEnable='enable'
            />
            <div className="back__course__page_grid react-courses__single-page pb---16" >
                <div class="react-wrapper background_height">
                    <div class="react-wrapper-inner background_image">
                        <div className="react-breadcrumbs">
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
                        </div>
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
                                                    <Tab className='col-md-4'><button>{tab3}</button></Tab>
                                                </TabList>

                                                <TabPanel>
                                                    <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Completed Events</san> </b><br />
                                                    <div class="degree-list-container">
                                                        <ul class="degree-list">
                                                            <li><span class="icon">1. </span><span>A Five Day Sensitization program on “Outcome Based Education (OBE)” is scheduled from 10th to 14th June 2024, organized by IQAC in association with ALA.</span></li>
                                                            <li><span class="icon">2. </span><span>A Five Day FDP on “Joy of Computing using Python” is scheduled from 2nd to 6th July 2024, organized by the Department of AIML in association with ALA.</span></li>
                                                            <li><span class="icon">3. </span><span>A Five Day FDP on “Data Analytics Using Microsoft Power BI” is scheduled from 8th to 12th July 2024, organized by the Department of IT in association with ALA.</span></li>
                                                            <li><span class="icon">4. </span><span>An online Certification course on "Machine Learning and GenAI" is scheduled from 05th to 16th August 2024, organized by IEduVibhu in association with ALA.</span></li>
                                                            <li><span class="icon">5. </span><span>A Five Day FDP on “Innovative Teaching Methodologies” is scheduled from 22nd to 26th July 2024, organized by IQAC in association with ALA.</span></li>
                                                            <li><span class="icon">6. </span><span>Online Certification Course on "Data Visualization with Power BI & Tableau", 23/09/2024 - 04/10/2024 by Aditya Learning Academy.</span>
                                                            </li>
                                                            <li><span class="icon">7. </span><span>An Online Lecture Series on "Emerging Trends of Research in Electrical Engineering" from 6th to 16th November 2024, Organized by Aditya Learning Academy(ALA).</span></li>
                                                            <li><span class="icon">8. </span><span>ATAL FDP on “AI & ML Empowerment in Energy Storage and Advanced Robotics” from 9th to 14th December 2024, Organized by Department of Mechanical Engineering.</span></li>
                                                            <li><span class="icon">9. </span><span>An Online Certification Course On "AI Tools" from 23/12/2024 to 28/12/2024, Organized by Aditya Learning Academy(ALA).</span></li>
                                                            <li><span class="icon">10. </span><span>An Online Lecture Series on "Research Scope in Emerging Areas of Civil Engineering" from 21/01/2025 to 31/01/2025, Organized by Aditya Learning Academy(ALA).</span></li>
                                                            <li><span class="icon">11. </span><span>An Online Certification Course On "Digital Hardware Engineering with FPGA" from 19/02/2025 to 25/02/2025 Organized by Aditya Learning Academy(ALA) in association with the Department of ECE.</span></li>
                                                            <li><span class="icon">12. </span><span>Online Certification Course on "Harnessing Big Data: Business Analytics with Oracle Database", scheduled from 10th March 2025 - 15th March 2025, Organized by Aditya Learning Academy in association with IEduVibhu.</span></li>
                                                            <li><span class="icon">13. </span><span>An Online Certification Course on "Design for 3D Printing", scheduled from 17/03/2025 to 22/03/2025 Organized by Aditya Learning Academy in association with the Dept. of Mechanical Engineering.</span></li>
                                                            <li><span class="icon">14. </span><span>An Online Certification Course on "Fundamentals of Quantum Computing ", scheduled from 23/07/ 2025 - 29/07/2025, Organized by Aditya Learning Academy in association with the Dept. of CSE.</span></li>
                                                            <li><span class="icon">15. </span><span>Online Certification Course on "AI Tools for Education & Research ", scheduled from 18/08/2025 to 22/08/2025, Organized by ALA in association with the Dept. of AI&ML </span></li>

                                                        </ul>
                                                    </div>
                                                </TabPanel>


                                                <TabPanel>
                                                    <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Ongoing Event</san> </b><br />
                                                    <div class="degree-list-container">
                                                        {/* <ul class="degree-list">
                                                            
                                                        </ul> */}
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Upcoming Event</san> </b><br />
                                                    <div class="degree-list-container">
                                                        <ul class="degree-list">
                                                            <li><span class="icon">1. </span> <span>
                                                           <Link to='https://adityauniversity.in/adtppu/flash_news/brochure.pdf' target="blank"> Online Certification Course on "Harnessing the Sun: Advanced Photovoltaic Engineering with Semiconductor Materials ", scheduled from 08/09/2025 to13/09/2025  </Link> </span></li>
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

export default AdvancedAppliation;