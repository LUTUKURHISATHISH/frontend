import React, { useState } from 'react';
import Header from '../../../../../../components/Header';
import FooterTwo from '../../../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../../../components/ScrollTop';
import point from '../../../../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import SideManuDept from '../../../commonpages/sidebar-menu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ProgramsOffered = () => {
    const department = 'CSE';
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
                                                    <Tab className='col-md-4'><button>{tab2}</button></Tab>
                                                    <Tab className='col-md-4'><button>{tab3}</button></Tab>

                                                </TabList>

                                                <TabPanel>
                                                    <div class="container">
                                                        <san className="hedingname_orange">B.Tech Programs Offered</san><br />
                                                        <p className='contentsize'>
                                                            The program has been accredited by NBA under Tier- I in the year 2023. The curricula of B. Tech -Computer Science and Engineering, have been designed to cater to the ever changing needs and demands of IT industry. In order to give due importance to applied as well as theoretical aspects of computing, the curricula focus on holistic learning and empowering students to develop the engineering skills for problem solving using computing sciences. The programme ensures commitment towards education and research in the field of Computer Science and Engineering through industrial collaborations. The choice-based system of electives gives a variety of choices for the students to develop expertise in their area of interest.<br /><br />

                                                            Through major core courses like Data Structures, Software Engineering, operating Systems, Computer Organization, Computer Networks, Theory of Computation, Compiler Design, Artificial Intelligence and Machine Learning for professional study. Students can achieve advanced levels of technical expertise in one or more areas of concentration by selecting appropriate minor degree courses, honour degree courses, ability, skill enhancement and value-added courses. As an alternative, students might decide to broaden their interests by mixing courses from different departments.<br /><br />
                                                        </p>
                                                        <san className="offerednames">B.Tech - Computer Science and Engineering.</san><br />
                                                        <san className="offerednames">B.Tech - Computer Science and Engineering with Minor Specialization in </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Network Security</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Machine Intelligence</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Data Engineering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Mobile Application Development</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Cyber Security.<b>(Industry Integrated Program - L&T)</b> </span> </li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Agile Methodology with DevOps Programming <b>(Industry Integrated Program - L&T).</b> </span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Cloud Infrastructure <b>(Certification Programs - CISCO, Red hat, Oracle, AWS, Google & Microsoft).</b> </span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Rapid Application Development <b>(Certification Programs - PEGA, Oracle, Microsoft & Salesforce).</b> </span></li>

                                                            </ul>
                                                        </div>
                                                        <san className="offerednames">B.Tech - Computer Science and Engineering with </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Civil Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Electrical and Electronics Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Mechanical Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Electronics and Communication Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Data Science.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Artificial Intelligence and Machine Learning.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Petroleum Technology.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Mining Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Agricultural Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Entrepreneurship Development and Incubation.</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </TabPanel>


                                                <TabPanel>
                                                    <div class="container">
                                                        <san className="hedingname_orange">M.Tech Programs Offered</san><br />
                                                        <p className='contentsize'>
                                                            The Department of Computer Science & Engineering offers PG Programme M.Tech in Computer Science and Engineering started in the year 2008. This programme is established with an objective of producing prolific professionals to meet the growing needs in academic institutions. IT/IT enabled sectors and research institutions. The programme exposes students to a wide range of courses combined with specialized research which culminates in publications and dissertations. Further it provides the students the breadth and depth necessary for pursuing careers in academic and industries.
                                                        </p>
                                                        <san className="offerednames">Department has a thriving Research Groups in the areas of, </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Artificial Intelligence</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Machine Learning and Deep learning</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Natural Language Processing</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Image Processing</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Data Science</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Internet of Things</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Big Data Analytics</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Cyber Security and Blockchain</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </TabPanel>

                                                <TabPanel>
                                                    <div class="container">
                                                        <san className="hedingname_orange">Ph.D Programs Offered</san><br />
                                                        <p className='contentsize'>
                                                            The Ph.D programme in Computer Science and Engineering imparts the knowledge, skills and attitude to do world class research in the area of computer science. The Ph.D. programme in Computer Science & Engineering is centred on inculcating the students with attitude, skills, and knowledge to conduct world-class computer science & engineering research. Doctorate students are encouraged to publish their work in top-notch international journals and conferences. Students from various parts of the nation pursue a Ph.D. programme at the Department of Computer Engineering & Applications.<br /><br />

                                                            Our state-of-the art laboratories are equipped with laboratories Supported with high end configuration systems supporting all trendy and research-oriented courses like Artificial Intelligence, Machine Learning, Deep Learning, Data science, security etc.,<br /><br />

                                                            The faculty members of Computer Science and Engineering department have been actively engaged in research in the following areas.<br />
                                                        </p>
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Software Engineering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Artificial Intelligence</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Machine Learning and Deep learning</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Natural Language Processing</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Image Processing</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Data Science</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Internet of Things</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Big Data Analytics</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Network Security</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Bio Informatics</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Cyber Security and Blockchain</span></li>
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

export default ProgramsOffered;