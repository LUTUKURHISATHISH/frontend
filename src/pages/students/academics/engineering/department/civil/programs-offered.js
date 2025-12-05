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
    const department = 'civil';
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
                                                            B. Tech - Civil Engineering, the Undergraduate program of Civil Engineering provides the information and abilities needed for future generations of civil engineers to address urgent environmental issues. This involved incorporating classes on sustainable practices, like using energy-efficient designs and green building materials to reduce a building's environmental effects. Additionally, to make sure that building projects had as little of an environmental impact as possible, sustainable waste management was being stressed. The Civil Engineering curriculum was perhaps most significant in realizing the urgent necessity for the creation of climate-resilient infrastructure. Through the integration of climate change resilience measures, civil engineers have the potential to contribute to the construction of a more sustainable future for everybody.<br /><br />

                                                            Through major core courses like solid mechanics, fluid mechanics, soil mechanics, environmental engineering, water resources management, structural analysis & design, transportation engineering, mathematics, and the core courses of the civil engineering program guarantee a solid scientific and analytical foundation for professional study. Students can achieve advanced levels of technical expertise in one or more areas of concentration by selecting appropriate minor degree courses, honour degree courses, ability, skill enhancement and value-added courses. As an alternative, students might decide to broaden their interests by mixing courses from different departments.
                                                        </p>
                                                        <san className="offerednames">B.Tech - Civil Engineering.</san><br />
                                                        <san className="offerednames">B.Tech - Civil Engineering with Minor Specialization in </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Structural Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Environmental Geotechnics.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Transportation Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Integrated Design for Industrial Facilities.<b>(Industry Integrated Program - L&T)</b> </span> </li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Advanced Practices in Construction. <b>(Industry Integrated Program - L&T)</b> </span></li>

                                                            </ul>
                                                        </div>
                                                        <san className="offerednames">B.Tech - Civil Engineering with </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Electrical and Electronics Engineering.</span></li>
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
                                                            The Department of Civil Engineering offers a postgraduate program (PG) in Structural Engineering (M. Tech – Structural Engineering), that provides a rich blend of academic rigor, practical application, and personal development. Nestled within a vibrant academic community, our Structural Engineering program was designed to ignite research curiosity, foster critical thinking, and equip students with the skills needed to thrive in the Structural Engineering field.<br /><br />

                                                            NABL-accredited laboratories with a scope for 50 tests offer a wide range of experiments for structural engineering applications. Well-established R&D Lab equipped with high-performance computers for numerical simulations. Experienced faculty members having structural engineering specialization and completed their Ph.D. from IITs and NITs. MOUs with reputed industries and institutions (L&T EduTech, UltraTech Cements Limited., Manihamsa Power Projects Ltd., APSSDC, Sreshta Engineers etc.) Opportunity to get placed in various core companies with the highest package.
                                                        </p>
                                                    </div>
                                                </TabPanel>

                                                <TabPanel>
                                                    <div class="container">
                                                        <san className="hedingname_orange">Ph.D Program Offered</san><br />
                                                        <p className='contentsize'>
                                                            The Doctor of Philosophy (Ph.D.) program is intricately designed to provide research scholars with an enriching opportunity to deepen their understanding and expertise in their chosen areas of interest. This comprehensive program encompasses specialized courses and a research thesis, both of which play pivotal roles in shaping the academic journey of the participants. The research team are specialized in diverse research areas, including Structural Engineering, Water Resource Engineering, Geotechnical Engineering, and Offshore Marine Structures. Our state-of-the-art laboratories are equipped with advanced heavy machinery and testing equipment, such as Universal Testing Machines (UTM), Compression Testing Machines (CTM), Non-Destructive Testing (NDT) Equipment, Tri-axial Shear Testing Machines, Kaplan Turbines, Francis Turbines, and Pelton Wheel Testing Rigs.
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