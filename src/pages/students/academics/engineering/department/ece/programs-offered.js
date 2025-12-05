import React, { useState } from 'react';
import Header from '../../../../../../components/Header';
import FooterTwo from '../../../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../../../components/ScrollTop';
import point from '../../../../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import SideManuDept from '../../../commonpages/sidebar-menu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AdvancedAppliation = () => {
    const department = 'ECE';
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
                                                            The Department of Electronics and Communication Engineering (ECE) was established with the inception of the college in the year 2001 with an intake of 60 students and now it has been expanded to an intake of 240 students. The department has dedicated faculty and well-equipped laboratories like Electronic Devices and Circuits lab, Microwave Engineering and Optical Communication Lab, Digital Signal Processing lab, Project lab, etc, to provide a platform for practical aspects of learning.<br /><br />

                                                            The Department of ECE has an IETE student forum, under which the department organizes professional activities including guest lectures, workshops, and seminars, technical festivals SPARK under the umbrella of VEDA to enrich the knowledge of students. For better placements, we have a strong technical team (Technical hub) to train our students in coding practices and problem-solving skills.<br /><br />

                                                            The Department of ECE has an IETE student forum, under which the department organizes professional activities including guest lectures, workshops, and seminars, technical festivals SPARK under the umbrella of VEDA to enrich the knowledge of students. For better placements, we have a strong technical team (Technical hub) to train our students in coding practices and problem-solving skills.<br /><br />
                                                        </p>
                                                        <san className="offerednames">B.Tech - Electronics and Communication Engineering.</san><br />
                                                        <san className="offerednames">B.Tech - Electronics and Communication Engineering with Minor Specialization in </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in VLSI.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Embedded Systems</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Signal Processing and Communication Technology.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Space Technology</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Technology for Digital Resilience.<b>(Industry Integrated Program - L&T)</b> </span> </li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Smart Infrastructure (Electronics). <b>(Industry Integrated Program - L&T)</b> </span></li>

                                                            </ul>
                                                        </div>
                                                        <san className="offerednames">B.Tech - Electronics and Communication Engineering with </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Civil Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Electrical and Electronics Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Mechanical Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Computer Science and Engineering.</span></li>
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
                                                        <san className="hedingname_orange">M.Tech Program Offered</san><br />
                                                        <p className='contentsize'>
                                                            Department of Electronics and Communication Engineering offers a 2-year M. Tech. program in VLSI at equipping students with the relevant career competencies and abilities required to actively contribute to the growth of the industrial sector with an intake of 12 students. The program is strategically designed to expose students to the contemporary trends in the global systems as well as to teach the students the fundamentals of VLSI and Chip design. The faculty is equipped with expert faculties from renowned Institutions, along with expert industrial resource persons who provide the students with the most comprehensive learning experience. The program goes on to develop and nurture the interpersonal skills of the students, as a way of enhancing and promoting their employability and creating more placement opportunities.
                                                        </p>
                                                    </div>
                                                </TabPanel>

                                                <TabPanel>
                                                    <div class="container">
                                                        <san className="hedingname_orange">Ph.D Program Offered</san><br />
                                                        <p className='contentsize'>
                                                            The Ph.D. degree is awarded to acknowledge exceptional academic accomplishments exhibited via independent study and the practical application of knowledge to address technological, scientific, and social issues. Creative and productive inquiry is the basic requirement underlying research work. Skilled faculties who hold doctorates in VLSI, IoT, Embedded Systems, Wireless Communication, Signal Processing, Image Processing, and Speech Processing from prestigious institutions such as IITs, NITs, or others. The academic program leading to the degree involves fulfilling course credit requirements, residential requirements and a thesis giving a critical account of the research carried out, in any of the areas such as VLSI, Communication system, RF Engineering, Image processing, Signal Processing, and many more.
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