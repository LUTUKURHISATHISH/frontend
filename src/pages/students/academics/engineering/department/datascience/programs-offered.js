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
    const department = 'ds';

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
                                                            The Department offers B.Tech CSE(Data Science) program with a current intake of 180 students. This program aims at building engineering graduates to be skilled Data Scientists. Leveraging the continuously expanding landscape of business data, the Department ensures that students develop a solid foundation in theory and gain practical, project-based experience with various data science tools and technologies. Additionally, the Department is deeply committed to providing comprehensive knowledge in mathematics, business systems, and engineering sciences. In today's data-driven technological world, the Department ensures students are well-versed in theoretical principles, hands-on project work, and domain expertise across mathematics, business systems, and engineering sciences.<br /><br />

                                                            The four-year undergraduate curriculum includes a detailed delivery of Major (Core), Multidisciplinary, Ability Enhancement Courses, Skill Enhancement Courses, Value Added Courses and Audit/Mandatory Courses. In addition to these courses, students are offered minor degrees in 21 different streams. Overall, the B.Tech CSE(Data Science)program provides a comprehensive and practical approach to Data Science education, with a focus on data analytics, machine learning, data visualization, and data mining, a cutting-edge curriculum, industry partnerships, hands-on learning, research opportunities, and internship opportunities.<br /><br />
                                                        </p>
                                                        <san className="offerednames">B.Tech - Computer Science and Engineering (Data Science).</san><br />
                                                        <san className="offerednames">B.Tech - Computer Science and Engineering (Data Science) with minor degree in </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Cognitive Analytics.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Mobile and Web Application Development.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Cyber Security <b>(Industry Integrated Program - L&T).</b> </span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Agile Methodology with DevOps Programming<b>(Industry Integrated Program - L&T).</b> </span> </li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Cloud Infrastructure <b>(Industry Partners - CISCO, Red hat, Oracle, AWS, Google & Microsoft).</b></span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Rapid Application Development <b>(Industry Partners - PEGA, Oracle, Microsoft & Salesforce).</b></span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Entrepreneurship Development & Incubation.</span></li>
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

export default AdvancedAppliation;