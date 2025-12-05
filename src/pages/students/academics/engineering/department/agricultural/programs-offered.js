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
    const department = 'agricultural';

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
                                                            Established at Aditya University in 2014, the department of agricultural engineering is dedicated to nurturing future pioneers and leaders in the agricultural technology sector. Our undergraduate B.Tech program, with an intake capacity of 60 students, provides a comprehensive education combining theoretical knowledge and practical experience. This ensures our graduates are well-prepared to address real-world agricultural challenges.<br />

                                                            Our curriculum emphasizes sustainable practices, including energy-efficient farming techniques, precision agriculture, and the development of eco-friendly agricultural technologies. We focus on minimizing the environmental impact of farming through sustainable water management, soil conservation, and the integration of renewable energy sources. Additionally, we cover agricultural processing, post-harvesting, value addition, dairy and food engineering, and agricultural structures.<br />

                                                            The program promotes the use of advanced farm implements and machinery to enhance mechanization. Adopting a multidisciplinary approach, we incorporate IoT, sensors, drone technology, and image processing for pest and disease detection. This holistic approach equips our students with the knowledge and skills necessary to tackle pressing agricultural and environmental challenges, fostering a new generation of innovative and environmentally responsible agricultural engineers.<br />

                                                            A key component of the Agricultural Engineering curriculum is the focus on climate resilient farming. By incorporating measures to adapt and mitigate the effects of climate change, agricultural engineers can contribute significantly to building a more sustainable and secure food future for all. Students learn to develop innovative solutions that enhance agricultural productivity while preserving natural resources and protecting the environment.<br />
                                                        </p>

                                                        <san className="hedingname_orange">Core Curriculum</san><br />
                                                        <p className="offerednames">
                                                            The Agricultural Engineering program ensures a solid scientific and analytical foundation through major core courses, including:<br />
                                                            <b>Farm Machinery and Power Engineering:</b>Principles and applications of farm machinery and power units.<br />
                                                            <b>Soil and Water Engineering:</b> Techniques for efficient water use and soil conservation.<br />
                                                            <b>Agricultural Process Engineering:</b> Postharvest technology and food processing methods.<br />
                                                            <b>Irrigation and Drainage Engineering:</b> Designing and managing irrigation and drainage systems. <br />
                                                            <b>Renewable Energy in Agriculture:</b> Utilization of renewable energy sources in farming.<br />
                                                            <b>Environmental Engineering:</b> Addressing environmental issues in agricultural practices.<br />
                                                            <b>Precision Agriculture:</b> Use of advanced technologies for precise farming practices.<br />
                                                            <b>Mathematics and Statistics:</b> Providing the mathematical foundation for engineering problem-solving.<br />
                                                        </p>

                                                        <san className="hedingname_orange">Highlight</san><br />
                                                        <p className="offerednames">
                                                            <b>ICAR UG Curriculum Compliance:</b> The program follows the Indian Council of Agricultural Research (ICAR) Undergraduate Curriculum, ensuring that the education provided meets national standards for agricultural education and prepares students for a variety of professional opportunities.
                                                            Students can achieve advanced technical expertise in one or more areas of concentration by selecting appropriate ability and skill enhancement courses, and value-added courses. Alternatively, students have the flexibility to broaden their academic experience by taking elective courses from other departments, fostering a multidisciplinary approach to their education.
                                                        </p>


                                                        <san className="hedingname_orange">Practical Experience</san><br />
                                                        <p className="offerednames">
                                                            The program places a strong emphasis on practical, hands-on experience through:<br />
                                                            <b>Laboratory Work:</b> State-of-the-art laboratories for testing and research in soil, water, machinery, and food processing. <br />
                                                            <b>Field Work:</b> Real-world applications and field projects to practice and refine technical skills.<br />
                                                            <b>Internships:</b> Opportunities to work with leading agricultural companies, research institutions, and government agencies.<br />
                                                        </p>

                                                        <san className="hedingname_orange">Career Opportunities </san><br />
                                                        <p className="offerednames"> Graduates of the Agricultural Engineering program are well prepared for diverse career paths, including:</p>
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Agricultural machinery design and manufacturing</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Irrigation and water resource management</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Sustainable farming consultancy</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Agricultural research and development</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Food processing industries</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Renewable energy projects in agriculture</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Banking Sector (AFO)</span></li>
                                                            </ul>
                                                        </div>

                                                        <san className="offerednames">B.Tech - Agricultural Engineering.</san><br />
                                                        <san className="offerednames">B.Tech - Agricultural Engineering with minor degree in </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Automation & Robotics.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Entrepreneurship Development & Incubation.</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </TabPanel>


                                                {/* <TabPanel>
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
                                                            The Ph.D. programme in Agricultural Engineering at Aditya University is designed to cultivate world-class researchers equipped with the knowledge, skills, and attitude to advance the field of agricultural engineering. This rigorous programme encourages Ph.D. students to publish their findings in leading international journals and conferences, showcasing innovative solutions to real-world agricultural challenges. Candidates from across the country join this programme, contributing to a diverse and vibrant research environment within the Department of Agricultural Engineering.<br /><br />

                                                            Our department boasts state-of-the-art laboratories, equipped with advanced instrumentation and systems that support research in various specialized domains such as Precision Agriculture, Remote Sensing, IoT-based Smart Farming, Renewable Energy, and Post-Harvest Technology.<br /><br />

                                                            Faculty members in the Agricultural Engineering department are actively engaged in pioneering research in fields that include:
                                                        </p>
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Precision Agriculture</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Soil and Water Conservation Engineering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Renewable Energy Sources in Agriculture</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Remote Sensing and GIS Applications</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>IoT and Automation in Agriculture</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Agricultural Waste Management</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Farm Machinery and Power Engineering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Post-Harvest and Food Processing Technology</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Climate Change Impact and Adaptation in Agriculture</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Smart Irrigation Systems</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Sustainable Agricultural Practices</span></li>
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