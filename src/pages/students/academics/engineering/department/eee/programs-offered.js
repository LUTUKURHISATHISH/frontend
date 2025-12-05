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
    const department = 'eee';
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
                                                            The UG programme Electrical and Electronics Engineering (EEE) lays emphasis on strong theoretical background on electrical engineering concepts in addition to providing avenues for divergent applications related to electrical energy, innovation in its generation, transmission, distribution, renewable resources, and efficient devices.<br /><br />

                                                            The curriculum of the programme is formulated in close collaboration with leading experts from industries to ensure effective bridging of the gap between industry and academia and in addition to improve the quality of life, support economic growth, and address societal problems. The curriculum facilitates minor streams including L&T and AI related courses. The course provides the students with the essential hands-on experience to tackle real-time industry related challenges.
                                                        </p>
                                                        <san className="offerednames">B.Tech - Electrical and Electronics Engineering.</san><br />
                                                        <san className="offerednames">B.Tech - Electrical and Electronics Engineering with Minor Specialization in </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Intelligent and Integrated Power Systems.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Power Electronics and Energy Systems.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Advanced Specialization on Electric Vehicles. (Electrical)<b>(Industry Integrated Program - L&T)</b> </span> </li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Design of Electrical System for Smart Buildings. <b>(Industry Integrated Program - L&T)</b> </span></li>

                                                            </ul>
                                                        </div>
                                                        <san className="offerednames">B.Tech - Electrical and Electronics Engineering with </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Civil Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Mechanical Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Electronics and Communication Engineering.</span></li>
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
                                                            The M.Tech program in Power Electronics and Drives created in harmony with industry requirements, provides extensive opportunity and platform for students to work in multidisciplinary research fields. The PG program includes courses in a wide range of subjects in power electronics and energy conversion technologies and emerging power switching devices, electrical machines and their control, required to build any power electronic equipment with necessary controllers.<br /><br />

                                                            The Program culminates with a project work in which the students are encouraged to work on specific areas involving design, simulation, analysis and testing of any power electronics system having research/industrial application values. Some of the facilities available with the department are advanced oscilloscopes, motor-generator set, Autotransformers, FPGA boards, IGBT modules, multilevel converters, etc.<br />
                                                        </p>
                                                    </div>
                                                </TabPanel>

                                                <TabPanel>
                                                    <div class="container">
                                                        <san className="hedingname_orange">Ph.D Program Offered</san><br />
                                                        <p className='contentsize'>
                                                            The EEE department is actively engaged in research areas ranging from practical implementation to theoretical investigations. Much of this research is funded by national funding agencies, both government and corporate. The research is published in leading international journals and conferences.<br /><br />

                                                            The laboratories and research facilities in the department are well maintained and regularly updated. Members of the faculty are actively involved in sponsored research and consultancy works. The R&D projects undertaken in the past were sponsored by the various agencies like the Department of Science &Technology (DST), SERB etc.<br />
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