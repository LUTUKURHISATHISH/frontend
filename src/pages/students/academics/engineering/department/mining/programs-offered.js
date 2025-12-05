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
    const department = 'Mining';
    let tab1 = "B.Tech",
        // tab2 = "M.Tech",
        tab3 = "Ph.D"


    const tabStyle = 'nav nav-tabs';
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <>
            <Header
                parentMenu='patents'
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
                                            <SideManuDept department = {department}/>
                                        </div> 
                                         <br/>
                                        <Tabs selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
                                            <div className="course-single-tab">
                                                <TabList className={tabStyle} >
                                                    <Tab className='col-md-6'><button>{tab1}</button></Tab>
                                                    {/* <Tab className='col-md-4'><button>{tab2}</button></Tab> */}
                                                    <Tab className='col-md-6'><button>{tab3}</button></Tab>

                                                </TabList>

                                                <TabPanel>
                                                    <div class="container">
                                                        <p className='contentsize'>
                                                            Mining Engineering is a multidisciplinary field that integrates principles from geology, geotechnical, mechanical, environmental, safety, mineral, and metallurgy engineering, as well as applications from electrical, electronics, and software engineering. This comprehensive program equips students with an in-depth understanding of the mining industry, focusing on core disciplines such as geological mapping, rock mechanics, mining equipment design, sustainable practices, risk management, and mineral extraction. Additionally, it involves interdisciplinary applications like electrical systems and software knowledge for analytics, data science, mine planning and optimization.<br /><br />

                                                            Graduates of this program have diverse career opportunities in government organizations like the Indian Bureau of Mines (IBM), Mineral Exploration Corporation Limited (MECL), and the Directorate General of Mines Safety (DGMS), as well as in public sector enterprises such as Coal India Limited (CIL), National Thermal Power Corporation (NTPC), and Steel Authority of India Limited (SAIL). Private sector opportunities include companies like Tata Steel and Vedanta Resources. For those interested in higher education, options include Master of Technology (M.Tech), Master of Science (MS) from universities abroad, Master of Business Administration (MBA), Doctor of Philosophy (Ph.D) in Mining Engineering, and various graduate certificate programs.
                                                        </p>
                                                        <san className="offerednames">B.Tech - Mining Engineering.</san><br />
                                                        <san className="offerednames">B.Tech - Mining Engineering with Minor Specialization in </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Environment and Safety in Mining</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor Stream in Innovative Mining</span></li>
                                                            </ul>
                                                        </div>
                                                        <san className="offerednames">B.Tech -  Mining Engineering with </san><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Civil Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Electrical and Electronics Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Mechanical Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in  Electronics and Communication Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Computer Science and Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Data Science.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Artificial Intelligence and Machine Learning.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Petroleum Technology.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Agricultural Engineering.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Minor degree in Entrepreneurship Development and Incubation.</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <div class="container">
                                                        <san className="hedingname_orange">Ph.D Program Offered</san><br />
                                                        <p className='contentsize'>
                                                            Our PhD program in Mining Engineering is designed to equip students with the advanced knowledge and skills necessary to address the complex challenges facing the global mining industry. This rigorous program focuses on cutting-edge research and innovation in various aspects of mining engineering, including, Mine Design and Planning, Rock Mechanics and Geotechnical Engineering, Mine Ventilation and Environmental Engineering, Mineral Processing, Mining Automation and Digitalization, Sustainable and Green Mining.<br/><br/>

                                                            Our faculty members are deeply involved in pioneering research initiatives within the field of mining engineering. This commitment provides our students with invaluable opportunities to work on cutting-edge projects, fostering their academic growth and professional development. Graduates of our PhD program are well-prepared for pursuing careers in academic/ research positions at institutions, contributing to policy development and regulation of the mining industry. Join our PhD program and become a leader in the future of mining engineering.
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