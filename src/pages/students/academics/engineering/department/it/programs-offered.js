import React, { useState } from 'react';
import Header from '../../../../../../components/Header';
import FooterTwo from '../../../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../../../components/ScrollTop';
import point from '../../../../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SideManuDept from '../../../commonpages/sidebar-menu';


const ProgramsOffered = () => {
    const department = 'IT';
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
                                                            The B.Tech Information Technology program, spanning four years, provides a comprehensive curriculum encompassing hardware, software, system management, and data communication. It incorporates core subjects, electives, practicals, and industrial training, ensuring students acquire proficiency in efficient coding, software development, and database design. Equipped with these skills, graduates are prepared for diverse roles across IT, consulting, research, and government sectors, poised to make meaningful contributions in the ever-evolving landscape of technology.<br /><br />

                                                            Through major core courses such as linear algebra, calculus, data structures, software engineering, and artificial intelligence, students gain essential technical expertise. Additionally, specialized courses in areas like database management, machine learning, and computer networks allow students to delve deeper into specific domains. These courses not only enhance students' theoretical understanding but also provide hands-on experience and practical skills relevant to real-world applications in the field of information technology. With a balanced mix of foundational and specialized knowledge, students are equipped to tackle complex challenges and innovate within their chosen areas of expertise upon graduation.<br /><br />
                                                        </p>
                                                        <san className="offerednames">B.Tech - Information Technology.</san><br />
                                                        <san className="offerednames">B.Tech - Information Technology with Minor Specialization in </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Network Security</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Machine Intelligence</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Data Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Mobile Application Development</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Cyber Security<b>(Industry Integrated Program - L&T)</b> </span> </li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Agile Methodology with DevOps Programming. <b>(Industry Integrated Program - L&T)</b> </span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Cloud Infrastructure . <b>(Certification Program - CISCO, Red hat, Oracle, AWS, Google & Microsoft)</b> </span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Rapid Application Development. <b>(Certification Program - PEGA, Oracle, Microsoft & Salesforce)</b> </span></li>

                                                            </ul>
                                                        </div>
                                                        <san className="offerednames">B.Tech - Information Technology with </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Civil Engineering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Electrical and Electronics Engineering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Mechanical Engineering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Electronics and Communication Engineering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Petroleum Technology</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Mining Engineering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Agricultural Engineering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Entrepreneurship Development and Incubation</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </TabPanel>


                                                <TabPanel>
                                                    <div class="container">
                                                        <san className="hedingname_orange">M.Tech Program Offered</san><br />
                                                        <p className='contentsize'>
                                                            
                                                        </p>
                                                    </div>
                                                </TabPanel>

                                                <TabPanel>
                                                    <div class="container">
                                                        <san className="hedingname_orange">Ph.D Program Offered</san><br />
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

export default ProgramsOffered;