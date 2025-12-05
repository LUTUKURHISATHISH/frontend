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
    const department = 'mechanical';
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
                                        <br />
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
                                                            B. Tech Mechanical Engineering at Aditya University offers a comprehensive curriculum designed to equip students with the knowledge and skills necessary to excel in the field. Throughout the program, students delve into core subjects such as thermodynamics, fluid mechanics, materials science, manufacturing processes, automobile engineering, and machine design, gaining a solid foundation in the principles that underpin modern engineering practices. With state-of-the-art facilities and laboratories, students have ample opportunities for hands-on experience, applying theoretical concepts to real-world challenges. Our esteemed faculty, comprised of industry experts and seasoned academics, provides mentorship and guidance, nurturing the next generation of Mechanical Engineers poised to make impactful contributions to industries ranging from automotive to aerospace.<br /><br />

                                                            The Department also places a strong emphasis on holistic development, encouraging the development of critical thinking, collaboration, and creativity in addition to technical expertise. Students get vital real-world experience and exposure to cutting-edge technology through industry partnerships, internships, and research opportunities, setting them up for success in a global marketplace that is changing quickly. Additionally, the university provides students with the flexibility to pursue minor degree programs in complementary fields. Through these minors, students can customize their education to align with their interests and career objectives, equipping them with a comprehensive skill set that holds significant value in today's competitive job market. With a focus on interdisciplinary collaboration and a commitment to excellence, our Mechanical Engineering program at Aditya University empowers students to become leaders and innovators in shaping the future of engineering.<br /><br />
                                                        </p>
                                                        <san className="offerednames">B.Tech - Mechanical Engineering.</san><br />
                                                        <san className="offerednames">B.Tech - Mechanical Engineering with Minor Specialization in </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Automation & Robotics.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Thermal Engineering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Automotive Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Design and Manufacturing.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Advanced Specialization on Electric Vehicles (Mechanical).<b>(Industry Integrated Program - L&T)</b> </span> </li>
                                                            </ul>
                                                        </div>
                                                        <san className="offerednames">B.Tech - Mechanical Engineering with </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Civil Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Electrical and Electronics Engineering.</span></li>
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
                                                            The Department of Mechanical Engineering is well-known for its all-encompassing approach to energy systems and provides a postgraduate program (PG) in Thermal Engineering. Students study topics including solar energy, biodiesel, heat exchangers, and refrigeration under the direction of professors from prominent universities including IITs and NITs. Students obtain vital insights and abilities to tackle urgent energy concerns through practical research and assistance from seasoned experts.<br /><br />
                                                            Graduates are well-positioned to make important contributions to the discipline because they have access to cutting-edge facilities and chances for multidisciplinary collaboration. Equipped with an in-depth comprehension of both theoretical concepts and real-world applications, they are well-positioned to spearhead innovation and pave the path for a more sustainable future in the field of thermal engineering and beyond.

                                                        </p>
                                                    </div>
                                                </TabPanel>

                                                <TabPanel>
                                                    <div class="container">
                                                        <san className="hedingname_orange">Ph.D Program Offered</san><br />
                                                        <p className='contentsize'>
                                                            The Doctor of Philosophy (Ph.D.) program in the Department of Mechanical Engineering at Aditya University offers a cutting-edge research platform focused on diverse areas, including Solar Energy, Biodiesel, Heat Transfer, Hybrid Nanofluid, CFD, Nanotechnology, Additive Manufacturing, Advanced Micro Machining, Biomedical Applications, and Heat Exchangers. Under the guidance of esteemed faculty members and utilizing state-of-the-art facilities, students engage in rigorous scholarly exploration and experimentation. From harnessing solar power to developing sustainable fuel alternatives, and from pioneering advancements in nano-engineering to revolutionizing biomedical technologies, the program empowers students to push the boundaries of innovation. Through interdisciplinary collaboration and a commitment to excellence, graduates emerge as leaders poised to address global challenges and drive impactful change in their respective fields, shaping a brighter and more sustainable future for generations to come.
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