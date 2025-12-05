import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import SideManu from './sidebar_programs';
import Image1 from './images/1.webp';
import Image2 from './images/2.webp';
import Image3 from './images/3.webp';
import Image4 from './images/4.webp';
import Image5 from './images/5.webp';
import Image6 from './images/6.webp';
import { Link } from 'react-router-dom';
import Banner from './images/corporate.webp';

const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='offered'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    {/* <StudyBreadcrumb pageTitle="Corporate PG Diploma Programs" /> */}
                    <div className="react-breadcrumbs">
                        <div className="breadcrumbs-wrap">
                            <img className="desktop" src={Banner} alt="Breadcrumbs" />
                            <img className="mobile" src={Banner} alt="Breadcrumbs" />
                            <div className="breadcrumbs-inner">
                                <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Corporate PG Diploma Programs</h1>
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
                                        <div className="col-md-12 row">
                                            <div className="col-md-3 ">
                                                <img src={Image1}></img>
                                            </div>
                                            <div className="col-md-6">
                                                <img src={Image2} style={{ padding: "2px" }}></img>
                                            </div>
                                            <div className="col-md-3">
                                                <img style={{ background: "white" }} src={Image3}></img>
                                            </div>
                                        </div>
                                        <br />

                                        <div class="about__content">

                                            <p className='contentsize'>The EdutechNest, a joint venture between Munjal Group and Indian Centre for Research and Manufacturing Excellence Pvt. Ltd.
                                                (ICME) providing Exclusive Industry Based “One Year Post Graduate Diploma Courses” for Industry Professionals & Engineering
                                                Students Approved by Aditya University Accredited by NBA and NAAC with A++ with Job Assistance to our students.
                                                <br />After ICME
                                                “Industry assessment of skill Gaps” and non availability of three key areas professionals, EduTechNest has started below PG
                                                courses to assist Students and Professionals with required set of skills.</p>
                                           {/* <center> <div className="campus_sec1">
                                                <div className="col-md-6">
                                                    <div className="text-center">
                                                        <Link to="../uploads/programs_offered/Operation Excellence Brochure.pdf" className="more-about" target="blank" style={{ width: "100%" }}> One Year Online Post Graduate Diploma in Operational Excellence.  </Link>
                                                    </div>
                                                </div>
                                            </div><br></br>
                                            <div className="campus_sec1">
                                                <div className="col-lg-6">
                                                    <div className="text-center">
                                                        <Link to="../uploads/programs_offered/Preventive and Predictive Maintenance.pdf" className="more-about" target="blank" style={{ width: "100%" }}>One Year Online Post Graduate Diploma in Preventive and Predictive Maintenance.  </Link>
                                                    </div>
                                                </div>
                                            </div><br></br>
                                            <div className="campus_sec1">
                                                <div className="col-lg-6">
                                                    <div className="text-center">
                                                        <Link to="../uploads/programs_offered/quality_management.pdf" className="more-about" target="blank" style={{ width: "100%" }}> One Year Online Post Graduate Diploma in Quality Management Systems and Problem Solving</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            </center> */}
                                            <br />

                                            <p className='contentsize'>EdutechNest focuses on empowering individuals through comprehensive PG Diploma Courses.
                                                Leveraging Munjal Group expertise in sustainable technology and Indian Centre for Research
                                                and Manufacturing Excellence Pvt. Ltd. (ICME) proficiency in Lean Consulting, Technical
                                                Education Universities and Manufacturing Industry. The company aims to bridge skill gaps
                                                and foster career growth with a commitment to innovation and sustainability, they strive to shape
                                                a workforce capable of meeting evolving industry demands. </p>


                                            <p className='contentsize'>EdutechNest with Aditya University are committed to nurturing a skilled workforce that not only meets current
                                                industry demands but also anticipates and adapts to future challenges. By combining Munjal Group commitment
                                                to sustainability with Indian Centre for Research and Manufacturing Excellence Pvt. Ltd. (ICME) industrial
                                                excellence, we strive to create a lasting impact on individuals and industries alike.
                                                <br />
                                                For further inquiries and to embark on your journey towards excellence, reach out to us via.
                                                <br /><br />
                                                <p className='name'><img src={Image4} style={{ height: "25px" }} /> <b style={{ color: "#D2093C" }} >:</b> <span >Head@edutechnest.com</span> <br /> <b style={{ color: "#D2093C" }}><img src={Image5} style={{ height: "25px" }} /> :</b> +91 62805 24259. </p>
                                                You can also explore our offerings and learn more about our initiatives by visiting following website : <br /><Link
                                                    to="https://www.edutechnest.com"
                                                    className="name"
                                                    target="_blank"
                                                    style={{ color: "blue", textDecoration: "none", fontSize: "20" }}
                                                    onMouseEnter={(e) => (e.target.style.color = "#D2093C")}
                                                    onMouseLeave={(e) => (e.target.style.color = "#00306e")}
                                                >
                                                    https://www.edutechnest.com
                                                </Link></p>

                                            <p className='name'> Begin your transformative educational experience today by scanning the QR Code below.</p>
                                            <img style={{ width: "150px", marginBottom: "30px" }} src={Image6}></img>
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