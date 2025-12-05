import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar_programs';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import Banner from './images/pg.webp';
const PGPrograms = () => {
    let tab1 = "M.Tech",
        tab2 = "MBA",
        tab3 = "MCA",
        tab4 = "M.Sc",
        tab5 = "Pharmacy"

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
                        <div className="react-breadcrumbs">
                            <div className="breadcrumbs-wrap">
                                <img className="desktop" src={Banner} alt="Breadcrumbs" />
                                <img className="mobile" src={Banner} alt="Breadcrumbs" />
                                <div className="breadcrumbs-inner">
                                    <div className="container">
                                        <div className="breadcrumbs-text">
                                            <h1 className="breadcrumbs-title">PG Programs</h1>
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
                                                        <Tab className='col-md-4'><button>{tab1}</button></Tab>
                                                        <Tab className='col-md-4'><button>{tab2}</button></Tab>
                                                        <Tab className='col-md-4'><button>{tab3}</button></Tab>
                                                        <Tab className='col-md-4'><button>{tab4}</button></Tab>
                                                        <Tab className='col-md-4'><button>{tab5}</button></Tab>

                                                    </TabList>

                                                    <div>
                                                        <TabPanel>

                                                            <div class="about__content">
                                                                <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}> Programs Offered :</b>
                                                                <br />
                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> M.Tech - VLSI Design </span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> M.Tech - Energy Science & Technology</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> M.Tech - Computer Science & Engineering </span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> M.Tech - Power Electronics and Drives </span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> M.Tech - Structural Engineering </span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> M.Tech - CSE (AI & ML) </span></li>
                                                                    </ul>
                                                                </div>
                                                                <b><san className="hedingname_blue">Eligibility Criteria for</san> <san className="hedingname_orange">M.Tech Admission :</san> </b><br /><br />

                                                                <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}>Nationality:</b>
                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> Resident or Non-Resident Indians (NRI) can apply for the selection process. </span></li>
                                                                    </ul>
                                                                </div>

                                                                <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}>Eligibility to Apply:</b>

                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> A minimum aggregate score of 60% or equivalent grade point in Standard Class X, XII, and applicable/relevant UG programme. </span></li>
                                                                    </ul>
                                                                </div>
                                                                <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center", display: 'none' }}>Program Wise Qualifying Examination Requirements :</b>

                                                                <br />

                                                                <div class="table-responsive" style={{ display: 'none' }}>
                                                                    <table class="table table-striped">
                                                                        <thead>
                                                                            <tr class="tableizer-firstrow">
                                                                                <th style={{ textAlign: 'center', background: '#6f90c3', color: 'white' }}>S.No.</th>
                                                                                <th style={{ textAlign: 'center', background: '#6f90c3', color: 'white' }}>M.Tech Programme</th>
                                                                                <th style={{ textAlign: 'center', background: '#6f90c3', color: 'white' }}>Eligibility</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td style={{ textAlign: 'center' }}>1</td>
                                                                                <td>Structural Engineering</td>
                                                                                <td>B.Tech (Civil Engineering) or Equivalent *</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{ textAlign: 'center' }}>2</td>
                                                                                <td>Power Electronics and Drives</td>
                                                                                <td>B.Tech (EEE) or Equivalent *</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{ textAlign: 'center' }}>3</td>
                                                                                <td>Thermal Engineering </td>
                                                                                <td>B.Tech (Mechanical Engineering) or Equivalent *</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{ textAlign: 'center' }}>4</td>
                                                                                <td>VLSI Design </td>
                                                                                <td>B.Tech (ECE/EEE/E&I) or Equivalent *</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{ textAlign: 'center' }}>5</td>
                                                                                <td>CSE </td>
                                                                                <td>Any UG degree in B.Tech/BE, MCA, M.Sc or Equivalent *</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                {/* <p className='name'><b style={{ color: 'rgb(211 20 63)' }}>Note</b> : * Sole discretion of the Admission Committee.</p> */}
                                                                <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}>Admission Guidelines:</b>
                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> The M.Tech programmes offered on the website are merely illustrative. Aditya University has the authority to include or remove programs and modify the list based on the feasibility of providing them.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> Admission to Aditya University will be determined on the candidate's performance in the ASAT-PG entrance examination/interview conducted by the university or the GATE Exam/PGCET conducted in AP & Telangana. Receiving an invitation for the entrance test/interview and enrollment does not automatically imply meeting the requirements for eligibility.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> The Aditya University determines the eligibility criteria for candidates based on factors such as the minimum percentage of marks or CGPA attained in the qualifying examination, as well as the minimum percentage in the 10th and 12th standards. These criteria may be subject to change as determined by the university.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> If a candidate who has been provisionally admitted to a programme fails to submit the required documents (such as Marks Statements, Transfer Certificate, Conduct Certificate, etc.) in their original form before the university's specified enrollment date, their admission offer is deemed to be cancelled.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> The decision of the admission committee will be final and binding.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> Scholarships available as per the institute norms.</span></li>
                                                                    </ul>
                                                                </div>
                                                                <br />
                                                                <div className="campus_sec1 row" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                    <div className="col-lg-4">
                                                                        <div className="text-center">
                                                                            <Link to="/fees" className="more-about" style={{ width: "100%" }}> Fees <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <br />
                                                            </div>
                                                            <br />
                                                        </TabPanel>
                                                        <TabPanel>
                                                            <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}> Programs Offered :</b> <br />
                                                            <span className='name'><img src={point} className='pointimage' /> Master of Business Administration</span> <br />
                                                            {/* <span className='name'><img src={point} style={{ height: "25px" }} /> MBA Integrated</span> <br /> */}
                                                            <br />
                                                            <div class="about__content">

                                                                <b><san className="hedingname_blue">Eligibility Criteria for</san> <san className="hedingname_orange">MBA Admission :</san> </b><br /><br />
                                                                <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}>Nationality :</b>
                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Resident or Non-Resident Indians (NRI) can apply for the selection process</span></li>
                                                                    </ul>
                                                                </div>
                                                                <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}> Eligibility to Apply :</b>
                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>A minimum aggregate score of 60% or equivalent grade point in Class X, XII, and applicable/relevant UG programme.</span></li>
                                                                    </ul>
                                                                </div>
                                                                <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}>Admission Guidelines :</b>
                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> The MBA programme offered on the website is merely illustrative. Aditya University has the authority to include or remove programs and modify the list based on the feasibility of providing them.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> Admission to Aditya University will be determined on the candidate's performance in the ASAT-PG entrance examination/interview conducted by the university or AP ICET conducted in AP. Receiving an invitation for the entrance test/interview and enrollment does not automatically imply meeting the requirements for eligibility.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> The Aditya University determines the eligibility criteria for candidates based on factors such as the rank attained in the qualifying examination, as well as the minimum percentage in the 10th, 12th standards and graduation. These criteria may be subject to change as determined by the university</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> If a candidate who has been provisionally admitted to a programme fails to submit the required documents (such as Marks Statements, Transfer Certificate, Conduct Certificate, etc.) in their original form before the university's specified enrollment date, their admission offer is deemed to be cancelled</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> The decision of the admission committee will be final and binding.</span></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </TabPanel>
                                                        <TabPanel>



                                                            <div class="about__content">
                                                                <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}> Programs Offered :</b> <br />
                                                                <span className='name'><img src={point} className='pointimage' /> Master of Computer Applications</span> <br /> <br />
                                                                <b><san className="hedingname_blue">Eligibility Criteria for</san> <san className="hedingname_orange">MCA Admission :</san> </b><br /><br />

                                                                <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}>Nationality :</b>
                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> Resident or Non-Resident Indians (NRI) can apply for the selection process.</span></li>
                                                                    </ul>
                                                                </div>
                                                                <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}> Eligibility to Apply :</b>
                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> Candidate must have 3 or 4 years Bachelor's degree from a recognised institution with Mathematics as the mandatory subject at 10+2 level (Intermediate).</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> A minimum aggregate score of 60% or equivalent grade point in Graduation is necessary.</span></li>
                                                                    </ul>
                                                                </div>
                                                                <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}>Admission Guidelines :</b>
                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> Admission to Aditya University will be determined on the candidate's performance in the ASAT-PG entrance examination/interview conducted by the university or the APICET conducted in AP. Receiving an invitation for the entrance test/interview and enrollment does not automatically imply meeting the requirements for eligibility.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> The Aditya University determines the eligibility criteria for candidates based on factors such as the minimum percentage of marks or CGPA attained in the qualifying examination, as well as the minimum percentage in the Graduation. These criteria may be subject to change as determined by the university.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> If a candidate who has been provisionally admitted to a programme fails to submit the required documents (such as Marks Statements, Transfer Certificate, Conduct Certificate, etc.) in their original form before the university's specified enrollment date, their admission offer is deemed to be cancelled.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> The decision of the admission committee will be final and binding.</span></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </TabPanel>
                                                        <TabPanel>
                                                            <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}> Programs Offered :</b> <br />
                                                            <div class="degree-list-container">
                                                                <ul class="degree-list">
                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>  M.Sc - Forensic Science </span></li>
                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>  M.Sc - Cyber Security & Digital Forensics </span></li>
                                                                </ul>
                                                            </div>
                                                            <br />
                                                            <div class="about__content">

                                                                <b><san className="hedingname_blue">Eligibility Criteria for</san> <san className="hedingname_orange">M. Sc  Admission :</san> </b><br /><br />
                                                                <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}>Nationality :</b>
                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Resident or Non-Resident Indians (NRI) can apply for the selection process</span></li>
                                                                    </ul>
                                                                </div>
                                                                <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}> Eligibility to Apply :</b>
                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>A minimum aggregate score of 60% or equivalent grade point in Class X, XII, and applicable/relevant UG programme.</span></li>
                                                                    </ul>
                                                                </div>
                                                                <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}>Admission Guidelines :</b>
                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> The M. Sc programmes offered on the website are merely illustrative. Aditya University has the authority to include or remove programs and modify the list based on the feasibility of providing them.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> Admission to Aditya University will be determined on the candidate's performance in the ASAT-PG entrance examination/interview conducted by the university. Receiving an invitation for the entrance test/interview and enrollment does not automatically imply meeting the requirements for eligibility</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> The Aditya University determines the eligibility criteria for candidates based on factors such as the minimum percentage of marks or CGPA attained in the qualifying examination, as well as the minimum percentage in the 10th and 12th standards. These criteria may be subject to change as determined by the university</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> If a candidate who has been provisionally admitted to a programme fails to submit the required documents (such as Marks Statements, Transfer Certificate, Conduct Certificate, etc.) in their original form before the university's specified enrollment date, their admission offer is deemed to be cancelled.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> The decision of the admission committee will be final and binding.</span></li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                        </TabPanel>
                                                        <TabPanel>
                                                            <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}> Programs Offered :</b> <br />
                                                            <div class="degree-list-container">
                                                                <ul class="degree-list">
                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>  M.Pharmacy - Pharmaceutics </span></li>
                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>  M.Pharmacy - Pharmaceutical Analysis </span></li>
                                                                </ul>
                                                            </div>
                                                             <br />
                                                            <div class="about__content">

                                                                <b><san className="hedingname_blue">Eligibility Criteria for</san> <san className="hedingname_orange">Pharmacy  Admission :</san> </b><br /><br />
                                                                <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}>Nationality :</b>
                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Resident or Non-Resident Indians (NRI) can apply for the selection process</span></li>
                                                                    </ul>
                                                                </div>
                                                                <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}> Eligibility to Apply :</b>
                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>A minimum aggregate score of 60% or equivalent grade point in Class X, XII, and applicable/relevant UG programme.</span></li>
                                                                    </ul>
                                                                </div>
                                                                <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}>Admission Guidelines :</b>
                                                                <div class="degree-list-container">
                                                                    <ul class="degree-list">
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> The pharmacy programmes offered on the website are merely illustrative. Aditya University has the authority to include or remove programs and modify the list based on the feasibility of providing them</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> Admission to Aditya University will be determined on the candidate's performance in the ASAT-PG entrance examination/interview conducted by the university. Receiving an invitation for the entrance test/interview and enrollment does not automatically imply meeting the requirements for eligibility.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> The Aditya University determines the eligibility criteria for candidates based on factors such as the minimum percentage of marks or CGPA attained in the qualifying examination, as well as the minimum percentage in the 10th and 12th standards. These criteria may be subject to change as determined by the university.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> If a candidate who has been provisionally admitted to a programme fails to submit the required documents (such as Marks Statements, Transfer Certificate, Conduct Certificate, etc.) in their original form before the university's specified enrollment date, their admission offer is deemed to be cancelled.</span></li>
                                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> The decision of the admission committee will be final and binding.</span></li>
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

export default PGPrograms;