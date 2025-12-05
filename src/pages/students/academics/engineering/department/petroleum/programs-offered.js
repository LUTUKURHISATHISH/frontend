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
    const department = 'petroleum';
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
                                                    {/* <Tab className='col-md-4'><button>{tab2}</button></Tab> */}
                                                    <Tab className='col-md-4'><button>{tab3}</button></Tab>

                                                </TabList>

                                                <TabPanel>
                                                    <div class="container">
                                                        <san className="hedingname_orange">B.Tech Programs Offered</san><br />
                                                        <p className='contentsize'>
                                                            The UG Programme Petroleum Technology provides a comprehensive education that combines theoretical knowledge with practical application, preparing students to thrive in the dynamic energy sector while being environmentally conscious and ethically grounded. Our curriculum focuses on essential areas within petroleum technology such as Engineering and Petroleum Geology, Drilling Engineering, Production Engineering, Reservoir Engineering, Petroleum Economics and Safety Management. These knowledge areas prepare the students to enhance the quality of life, foster economic growth, and tackle societal challenges. By integrating technology, education, and policy, we can create a positive impact that resonates globally. The Department has strong partnerships with leading oil and gas companies to ensure the students gain internships, practical exposure and insights from industry experts.<br /><br />
                                                        </p>
                                                        <san className="offerednames">B.Tech - Petroleum Technology.</san><br />
                                                        <san className="offerednames">B.Tech - Petroleum Technology with Minor Specialization in </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Pipeline and Petroleum Transport Engineering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Fire and Safety in Petroleum Industries</span></li>
                                                            </ul>
                                                        </div>
                                                        <san className="offerednames">B.Tech - Petroleum Technology with </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Civil Engineering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Electrical and Electronics Engineering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Mechanical Technology</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Electronics and Communication Engineering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Computer Science and Engineering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Data Science</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Artificial Intelligence and Machine Learning</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Mining Engineering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Agricultural Engineering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Entrepreneurship Development and Incubation	</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </TabPanel>

{/* 
                                                <TabPanel>
                                                    <div class="container">
                                                        <san className="hedingname_orange">M.Tech Programs Offered</san><br />
                                                        <p className='contentsize'>

                                                        </p>
                                                    </div>
                                                </TabPanel> */}

                                                <TabPanel>
                                                    <div class="container">
                                                        <san className="hedingname_orange">Ph.D Program Offered</san><br />
                                                        <p className='contentsize'>
                                                        Our PhD program in Petroleum Technology is designed to equip students with the advanced knowledge and skills necessary to address the complex challenges facing the global petroleum industry. We strive to make a positive contribution to the petroleum industry and society. Our dedicated faculty members engage in impactful studies, often funded by national agencies both governmental and corporate. The outcomes of our research find their way into leading international journals and conferences, contributing to the global knowledge pool. Our state-of-the-art laboratories and research facilities receive regular updates, ensuring a vibrant environment for innovation. Additionally, our faculty actively participates in sponsored research and consultancy projects. We remain committed to advancing knowledge, fostering collaboration, and driving positive change in the petroleum industry. By combining academic excellence with practical relevance, the Department of Petroleum Technology is shaping the future of the petroleum industry. Join our Ph.D. program and pioneer the future of petroleum engineering and elevate your career in energy innovation.
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