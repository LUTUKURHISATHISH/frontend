import React from 'react';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../components/ScrollTop';
import point from '../../../../assets/images/icons/image.png';
import SideManu from './sidebar';
const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='iqac'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="Overview" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <SideManu />
                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <br />
                                    <b>About</b>
                                    <p className='contentsize'>The Internal Quality Assurance Cell (IQAC) was established at Aditya University in 2011 . It has been constituted in accordance with the guidelines of the National Assessment and Accreditation Council (NAAC). The IQAC plays a pivotal role in ensuring the effective implementation of quality enhancement initiatives through regular reviews and periodic meetings. It is committed to fostering excellence in all academic and administrative activities of the university.</p>

                                    <b>Objectives</b>
                                    <p className='contentsize'>The Internal Quality Assurance Cell (IQAC) at Aditya University is dedicated to developing and maintaining a consistent quality system aimed at continuous improvement. It strives to enhance academic and administrative performance, foster an internal culture of quality consciousness, and eliminate existing deficiencies. By channelizing efforts and utilizing the full potential of the institution, the IQAC works proactively towards achieving excellence in all spheres of the university's functioning.</p>

                                    <b>Vision</b>
                                    <p className='contentsize'>To ensure quality culture in the institution through quality initiatives taken with internal and external support.</p>

                                    <b>Quality Policy</b>
                                    <p className='contentsize'>To establish a system of quality enhancement that continuously evaluates and improves the standards of teaching-learning, research, and extension activities. Through ongoing assessment and refinement of all academic and administrative processes, the University aims to foster a culture of excellence, innovation, and continuous improvement across all spheres of its functioning.</p>

                                    <b>Strategies</b>
                                    <div class="container">
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Ensure progressive performance of academic, administrative and financial tasks</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Integrate modern methods in pedagogy</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Ensure effective support services</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Ensure transparent evaluation system</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Encourage research activities</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Establish connectivity with premier institutes and industry in India and abroad</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <b>Functions</b>
                                    <div class="container">
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Develop quality benchmarks for all activities</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Propagate information of quality parameters</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Organize seminars/guest lectures/workshops on quality-related themes</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Documentation of activities/events</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Act as a nodal agency for quality-related activities</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Prepare and submit AQAR to NAAC annually</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <b>Benefits</b>
                                    <div class="container">
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                            <li><span class="icon"><img className='pointimage' src={point} /></span><span>Ensure clarity and focus in institutional functioning towards quality enhancement. Ensure internalization of the quality cultural.</span></li>
                                            <li><span class="icon"><img className='pointimage' src={point} /></span><span>Ensure enhancement and coordination among various activities of the institution and institutionalize all good practices</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ScrollToTop />
                </div>
            </div>
            <FooterTwo />
        </>
    );
}

export default diploma_programs;