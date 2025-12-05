import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
// import StudyBreadcrumb from '../../../components/Breadcrumb/programsoffered';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar_programs';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Brochure from "../../../components/Popup/Brochure/brochure";
import Banner from './images/ug.webp';

import Cse_google_cloud from './files/cse_google_cloud.pdf';
import Aiml_microsoft from './files/aiml_microsoft.pdf';
import Cse_sap from './files/cse_sap.pdf';
import Ds_google_cloud from './files/ds_google_cloud.pdf';
import Aiml_google_cloud from './files/aiml_google_cloud.pdf';

const UGProgarm = () => {
    let tab1 = "B.Tech",
        tab2 = "B.Sc",
        tab3 = "BBA",
        tab4 = "Pharmacy"

    const tabStyle = 'nav nav-tabs';
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <>
            <Header
                parentMenu='offered'
                menuCategoryEnable='enable'
            />
            <div className="back__course__page_grid react-courses__single-page pb---16 ">
                <div class="react-wrapper background_height">
                    <div class="react-wrapper-inner background_image">
                        {/* <StudyBreadcrumb pageTitle="UG Programs" /> */}
                        <div className="react-breadcrumbs">
                            <div className="breadcrumbs-wrap">
                                <img className="desktop" src={Banner} alt="Breadcrumbs" />
                                <img className="mobile" src={Banner} alt="Breadcrumbs" />
                                <div className="breadcrumbs-inner">
                                    <div className="container">
                                        <div className="breadcrumbs-text">
                                            <h1 className="breadcrumbs-title">UG Programs</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="high_quality-section pt---60 pb---120">
                            <div class="container ">
                                <SideManu />
                                <div class="row m-0">
                                    <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                        <br />
                                        <div class="container">
                                            <Tabs selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
                                                <div className="course-single-tab">
                                                    <TabList className={tabStyle}>
                                                        <Tab className='col-md-3'><button>{tab1}</button></Tab>
                                                        <Tab className='col-md-3'><button>{tab2}</button></Tab>
                                                        <Tab className='col-md-3'><button>{tab3}</button></Tab>
                                                        <Tab className='col-md-3'><button>{tab4}</button></Tab>
                                                    </TabList>

                                                    <div>
                                                        <TabPanel>
                                                            <div class="container">
                                                                <div className='row'>
                                                                    <div className='col-md-6'>
                                                                        <div class="about__content">
                                                                            <b className="hedingname_orange">B.Tech Programs Offered </b> <br />
                                                                            <div class="degree-list-container">
                                                                                <ul class="degree-list">
                                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><Link to="/agricultural-engineering" target='_blank'><span> B.Tech. - Agricultural Engineering </span></Link></li>
                                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><Link to="/civil-engineering" target='_blank'><span> B.Tech. - Civil Engineering </span></Link></li>
                                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><Link to="/cse" target='_blank'><span> B.Tech. - Computer Science and Engineering (CSE) </span></Link></li>
                                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><Link to="/aiml" target='_blank'><span> B.Tech. - Artificial Intelligence & Machine Learning (AI & ML)</span></Link></li>
                                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><Link to="/cse" target='_blank'><span> B.Tech. - Computer Science and Engineering - Data Science (CSE (DS)) </span></Link></li>
                                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><Link to="/ece" target='_blank'><span> B.Tech. - Electronics and Communication Engineering </span></Link></li>
                                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><Link to="/eee" target='_blank'><span> B.Tech. - Electrical and Electronics Engineering </span></Link></li>
                                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><Link to="/information-technology" target='_blank'><span> B.Tech. - Information Technology </span></Link></li>
                                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><Link to="/mechanical" target='_blank'><span> B.Tech. - Mechanical Engineering </span></Link></li>
                                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><Link to="/mining" target='_blank'><span> B.Tech. - Mining Engineering </span></Link></li>
                                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><Link to="/petroleum-technology" target='_blank'><span> B.Tech. - Petroleum Technology </span></Link></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-6'>
                                                                        <div class="about__content">
                                                                            <b className="hedingname_orange">Industry Embedded B.Tech Programs Offered</b> <br />
                                                                            <div class="degree-list-container">
                                                                                <ul class="degree-list">
                                                                                    <Link to={Cse_sap} target='_blank'><li><span class="icon"><img className='pointimage' src={point} /></span><span>  B. Tech CSE in Collaboration with SAP.</span></li></Link>
                                                                                    <Link to={Cse_google_cloud} target='_blank'><li><span class="icon"><img className='pointimage' src={point} /></span><span>  B. Tech CSE in Collaboration with Google - Cloud.</span></li></Link>
                                                                                    <Link to={Aiml_microsoft} target='_blank'><li><span class="icon"><img className='pointimage' src={point} /></span><span>  B. Tech AIML in Collaboration with Microsoft.</span></li></Link>
                                                                                    <Link to={Aiml_google_cloud} target='_blank'><li><span class="icon"><img className='pointimage' src={point} /></span><span>  B. Tech AIML in Collaboration with Google - Cloud.</span></li></Link>
                                                                                    <Link to={Ds_google_cloud} target='_blank'><li><span class="icon"><img className='pointimage' src={point} /></span><span>  B. Tech CSE(DS) in Collaboration with Google - Cloud.</span></li></Link>

                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    <div class="degree-list-container" style={{ display: "none" }}>
                                                                        <ul class="degree-list">
                                                                            <li><span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Agricultural Engineering
                                                                                </span>
                                                                            </li>
                                                                            <li><span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Civil Engineering  <span className='animated-text'> NBA Tier- I Accredited</span>
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Civil Engineering -  <span className='heading_side'> In Partnership with L & T </span>
                                                                                </span>
                                                                            </li>
                                                                            <li><span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Computer Science and Engineering -  <span className='animated-text'> NBA Tier- I Accredited</span>
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Computer Science and Engineering -  <span className='heading_side'> In Partnership with CISCO, Red Hat, Oracle, AWS, Google & Microsoft</span>
                                                                                </span>
                                                                            </li>
                                                                            <li><span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Artificial Intelligence & Machine Learning
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Artificial Intelligence & Machine Learning -  <span className='heading_side'> In Partnership with CISCO, Red Hat, Oracle, AWS, Google & Microsoft</span>
                                                                                </span>
                                                                            </li>
                                                                            <li><span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - (Computer Science and Engineering) - Data Science
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - (Computer Science and Engineering) - Data Science -  <span className='heading_side'> In Partnership with CISCO, Red Hat, Oracle, AWS, Google & Microsoft</span>
                                                                                </span>
                                                                            </li>
                                                                            <li><span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Electronics and Communication Engineering <span className='animated-text'> NBA Tier- I Accredited</span>
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Electronics and Communication Engineering  -  <span className='heading_side'> In Partnership with CISCO, Red Hat, Oracle, AWS, Google & Microsoft</span>
                                                                                </span>
                                                                            </li>
                                                                            <li><span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Electrical and Electronics Engineering  <span className='animated-text'> NBA Tier- I Accredited</span>
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Electrical and Electronics Engineering  -  <span className='heading_side'> In Partnership with CISCO, Red Hat, Oracle, AWS, Google & Microsoft</span>
                                                                                </span>
                                                                            </li>
                                                                            <li><span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Information Technology <span className='animated-text'> NBA Tier- I Accredited</span>
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Information Technology  -  <span className='heading_side'> In Partnership with CISCO, Red Hat, Oracle, AWS, Google & Microsoft</span>
                                                                                </span>
                                                                            </li>
                                                                            <li><span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Mechanical Engineering <span className='animated-text'> NBA Tier- I Accredited</span>
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Mechanical Engineering  -  <span className='heading_side'> In Partnership with CISCO, Red Hat, Oracle, AWS, Google & Microsoft</span>
                                                                                </span>
                                                                            </li>
                                                                            <li><span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Mining Engineering
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Mining Engineering  -  <span className='heading_side'> In Partnership with CISCO, Red Hat, Oracle, AWS, Google & Microsoft</span>
                                                                                </span>
                                                                            </li>
                                                                            <li><span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Petroleum Technology
                                                                                </span>
                                                                            </li>
                                                                            <li>
                                                                                <span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    B.Tech. - Petroleum Technology  -  <span className='heading_side'> In Partnership with L & T, CISCO, Red Hat, Oracle, AWS, Google & Microsoft </span>
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>



                                                                    <b className="hedingname_orange">Eligibility Criteria for B.Tech Admission</b><br />
                                                                    <p className='name'>
                                                                        <div class="degree-list-container">
                                                                            <ul class="degree-list">
                                                                                <li><span class="icon"><img className='pointimage' src={point} /></span>
                                                                                    <span>
                                                                                        Applicants must be at least 16 years old by December 31st of the admission year, with no upper age limit.
                                                                                    </span>
                                                                                </li>
                                                                                <li><span class="icon"><img className='pointimage' src={point} /></span>
                                                                                    <span>
                                                                                        Candidates have to be successful in ASAT (Aditya Scholastic Aptitude Test)/ JEE-Main/ State-Level Engineering Entrance Exams across India including EAPCET and Merit in Sports Activities.
                                                                                    </span>
                                                                                </li>
                                                                                <li><span class="icon"><img className='pointimage' src={point} /></span>
                                                                                    <span>
                                                                                        Candidates seeking UG Engineering admission must have completed or be appearing in 2024 for one of the specified qualifying examinations. Additionally, a minimum of 60% or equivalent CGPA is required for provisional candidature.
                                                                                    </span>
                                                                                </li>
                                                                                <li><span class="icon"><img className='pointimage' src={point} /></span>
                                                                                    <span>
                                                                                        Final examination of 10+2 system by State Boards, CBSE, or CISCE with core subjects as given below.
                                                                                    </span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </p>
                                                                    <p className='name' style={{ padding: "14px", marginTop: "-29px" }}>
                                                                        <div class="degree-list-container">
                                                                            <ul class="degree-list">
                                                                                <li><span class="icon"><img className='pointimage' /></span>
                                                                                    <span>
                                                                                        Students with Physics, Mathematics & Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/Technical Vocational Subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship are eligible for B.Tech Program in Electrical & Electronics Engineering, Electronics & Communications Engineering, Computer Science & Engineering, Information Technology, Artificial Intelligence & Machine Learning, Data Science.
                                                                                    </span>
                                                                                </li>
                                                                                <li><span class="icon"><img className='pointimage' /></span>
                                                                                    <span>
                                                                                        Students with Physics, Chemistry and Mathematics (PCM) are eligible for B.Tech Programs in Civil Engineering, Mechanical Engineering, Petroleum Technology & Mining Engineering
                                                                                    </span>
                                                                                </li>
                                                                                <li><span class="icon"><img className='pointimage' /></span>
                                                                                    <span>
                                                                                        Applicants who completed Class 12 (or equivalent) exams outside India or from a non-specified board must provide an AIU certificate confirming equivalence to Class 12, with grades/CGPA converted to percentage.
                                                                                    </span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </p>
                                                                    <div class="degree-list-container">
                                                                        <ul class="degree-list">
                                                                            <li><span class="icon"><img className='pointimage' src={point} /></span>
                                                                                <span>
                                                                                    Applicants who completed Class 12 (or equivalent) exams outside India or from a non-specified board must provide an AIU certificate confirming equivalence to Class 12, with grades/CGPA converted to percentage.
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <br />
                                                                    <b className="hedingname_orange">Programs Offered with Foreign Universities Collaboration</b><br />
                                                                    <span class="contentsize"> B. Tech Programs in collaboration with RWTH Aachen University, Germany <b><br />(QS Ranking:99 , THE Ranking :90)</b></span><br />

                                                                    <span class="contentsize">Students can opt for this Joint Degree Certification where stipulated credits are to be earned from Aditya University and RWTH Aachen University, Germany. </span><br />
                                                                    <span class="contentsize"> The fee structure will be as per the respective university guidelines during the students' course of study.</span><br /><br />

                                                                    <div className="campus_sec1 row">
                                                                        <div className="col-lg-3">
                                                                            <div className="text-center">
                                                                                <Brochure />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3">
                                                                            <div className="text-center">
                                                                                <Link to="https://apply.adityauniversity.in/" style={{ width: "100%" }} className="more-about" target="blank"> Apply Now</Link>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3">
                                                                            <div className="text-center">
                                                                                <Link to="/fees" className="more-about" style={{ width: "100%" }}> Fees </Link>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3">
                                                                            <div className="text-center">
                                                                                <Link to="/scholarship" className="more-about" style={{ width: "100%" }}> Scholarships</Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> */}
                                                                 </div>
                                                            </div>
                                                            <br />
                                                        </TabPanel>
                                                        <TabPanel>
                                                            <b className="hedingname_orange"> Programs Offered :</b> <br />
                                                            <div class="degree-list-container">
                                                                <ul class="degree-list">
                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>  B.Sc - Forensic Science </span></li>
                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>  B.Sc - Cyber Security and Digital Forensics </span></li>
                                                                </ul>
                                                            </div>
                                                            <br />
                                                            <div class="about__content">
                                                                <b><san className="hedingname_blue">Eligibility Criteria for</san> <san className="hedingname_orange">B.Sc  Admission :</san> </b><br /><br />
                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Applicants must be at least 16 years old by December 31st of the admission year, with no upper age limit.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Candidates have to be successful in ASAT (Aditya Scholastic Aptitude Test) / Merit in Sports Activities.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Candidates seeking B. Sc admission must have completed or be appearing in 2025 for one of the specified qualifying examinations. Additionally, a minimum of 60% or equivalent CGPA is required for provisional candidature.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Applicants must have passed the final examination of 10+2 system by State Boards, CBSE, or ISC with core subjects as given below.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Students with Physics, Mathematics / Biology & Chemistry are eligible for B. Sc Program in Forensic Science.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Students with Physics, Mathematics / Biology, Chemistry & Computer Science are eligible for B. Sc Program in Cyber Security & Digital Forensics.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Applicants who completed Class 12 (or equivalent) exams outside India or from a non-specified board must provide a certificate confirming equivalence to Class 12, with grades/CGPA converted to percentage.</span></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </TabPanel>
                                                        <TabPanel>
                                                            <b className="hedingname_orange"> Programs Offered :</b> <br />
                                                            <div class="degree-list-container">
                                                                <ul class="degree-list">
                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>  BBA </span></li>
                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span> BBA - Digital Marketing </span></li>
                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span> BBA - Business Analytics </span></li>
                                                                </ul>
                                                            </div>
                                                            <br />
                                                            <div class="about__content">
                                                                <b><san className="hedingname_blue">Eligibility Criteria for</san> <san className="hedingname_orange">BBA  Admission :</san> </b><br /><br />
                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>	Applicants must be at least 16 years old by December 31st of the admission year, with no upper age limit.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>	Candidates have to be successful in ASAT (Aditya Scholastic Aptitude Test) / Merit in Sports Activities.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>	Candidates seeking BBA admission must have completed or be appearing in 2025 for one of the specified qualifying examinations. Additionally, a minimum of 60% or equivalent CGPA is required for provisional candidature.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>	Applicants must have passed the final examination of 10+2 system by State Boards, CBSE, or ISC with core subjects as given below.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>	Students with Physics, Mathematics & Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/Technical Vocational Subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship are eligible.</span></li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                        </TabPanel>
                                                        <TabPanel>
                                                            <b className="hedingname_orange"> Programs Offered :</b> <br />
                                                            <div class="degree-list-container">
                                                                <ul class="degree-list">
                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>  Bachelor of Pharmacy (B.Pharm) </span></li>
                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span> Pharma - D </span></li>
                                                                </ul>
                                                            </div>

                                                            <br />
                                                            <div class="about__content">
                                                                <b><san className="hedingname_blue">Eligibility Criteria for</san> <san className="hedingname_orange">Pharmacy  Admission :</san> </b><br /><br />
                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>	Applicants must be at least 16 years old by December 31st of the admission year, with no upper age limit.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>	Candidates have to be successful in ASAT (Aditya Scholastic Aptitude Test) / Merit in Sports Activities.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>	Candidates seeking B. Pharmacy / Pharma. D admission must have completed or be appearing in 2025 for one of the specified qualifying examinations. Additionally, a minimum of 60% or equivalent CGPA is required for provisional candidature.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>	Applicants must have passed the final examination of 10+2 system by State Boards, CBSE, or ISC with core subjects as given below.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>	Students with Physics, Mathematics & Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/Technical Vocational Subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship are eligible.</span></li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                        </TabPanel>
                                                    </div>
                                                </div>
                                            </Tabs>
                                        </div>
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

export default UGProgarm;