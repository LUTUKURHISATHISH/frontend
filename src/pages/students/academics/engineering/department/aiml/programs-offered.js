import React, { useState } from 'react';
import Header from '../../../../../../components/Header';
import FooterTwo from '../../../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../../../components/ScrollTop';
import point from '../../../../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SideManuDept from '../../../commonpages/sidebar-menu';


const AdvancedAppliation = () => {
    const department = 'AI&ML';
    let tab1 = "B.Tech",
        tab2 = "M.Tech",
        tab3 = "Ph.D"


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
                                       <div className="col-md-4 d-flex justify-content-end w-100">
                                          <SideManuDept department={department} />
                                        </div>
                                        <Tabs selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
                                            <div className="course-single-tab">
                                                <TabList className={tabStyle} >
                                                    <Tab className='col-md-4'><button>{tab1}</button></Tab>
                                                    {/* <Tab className='col-md-4'><button>{tab2}</button></Tab>
                                                    <Tab className='col-md-4'><button>{tab3}</button></Tab> */}
                                                </TabList>

                                                <TabPanel>
                                                    <div class="container">
                                                        <san className="hedingname_orange">B.Tech Programs Offered</san><br />
                                                        <p className='contentsize'>
                                                            B.Tech - AI&ML is a part of Industrial revolution, is committed to advancing the frontiers of AI&ML through rigorous research, high-quality education, and strong industry partnerships. By fostering a collaborative and innovative environment, the department aims to make significant contributions to technology and society, shaping the future of intelligent systems. We initiate with the foundational courses in Core Computer Science, Introduction to AI&ML and Programming in C. Later advances with Algorithms related to basic and complex Data Structures and AI, Java & Advanced Java with Spring Boot Framework with REST-API, Python with Libraries and Frameworks, BDA Frameworks. We also concentrate on specialized AI&ML subjects and algorithms in DWM, ML, DL, RL, SC, NLP, CV, AR/VR.<br/><br/>

                                                            We aim at Industry collaboration and conduct Workshops, Hackathons and Seminars. We sign MoU's with leading technology companies and startups to collaborate and bridge the gap between academic research and real-world applications. Through MoU's we aim for Internships and Co-ops to provide students with practical experience through industry placements, enhancing their learning and career prospects. Conduct regular events featuring leading experts in AI&ML to discuss the latest advancements and research findings. We make students to participate in AI&ML hackathons to encourage innovation and problem-solving among students to transform them as professionals.<br /><br />
                                                        </p>
                                                        <san className="offerednames">B.Tech - Artificial Intelligence & Machine Learning.</san><br />
                                                        <san className="offerednames">B.Tech - Artificial Intelligence & Machine Learning along with Minor Degree in </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Cognitive Analytics</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Data Science</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Mobile and Web Application Development</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Cyber Security <b>(Industry Integrated Program - L&T)</b></span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Agile Methodology with DevOps Programming.<b>(Industry Integrated Program - L&T)</b> </span> </li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Cloud Infrastructure. <b>(Certification Programs - CISCO, Red hat, Oracle, AWS, Google & Microsoft)</b> </span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Rapid Application Development. <b>(Certification Programs - PEGA, Oracle, Microsoft & Salesforce)</b> </span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Entrepreneurship Development & Incubation</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </TabPanel>


                                                <TabPanel>
                                                    <div class="container">
                                                        <san className="hedingname_orange">M.Tech Programs Offered</san><br />
                                                        <p className='contentsize'>
                                                            
                                                        </p>
                                                    </div>
                                                </TabPanel>

                                                <TabPanel>
                                                    <div class="container">
                                                        <san className="hedingname_orange">Ph.D Programs Offered</san><br />
                                                        <p className='contentsize'>
                                                            
                                                        </p>
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