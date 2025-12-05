import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import StudyBreadcrumb from '../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import Tconnect from './images/T-Connect_logo.svg';
import Driveready from './images/DriveReady_Logo.svg';
import SkillupCooder from './images/Skillup Cooder_Logo.svg';
import BecomeCoder from './images/Become Coder_Logo.svg';
import IgniteCoder from './images/Ignite Cooder_logo.svg';
import Incampus from './images/Incampus_Logo.svg';
import Grow from './images/Grow_logo.svg';
import Owlcoder from './images/owl Coder_Logo.svg';
import ProjectSpace from './images/Project Space_logo.svg';
import Banner from '../images/banners/opportunities.webp';

const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='opportunities'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <div className="react-breadcrumbs">
                        <div className="breadcrumbs-wrap">
                            <img className="desktop" src={Banner} alt="Breadcrumbs" />
                            <img className="mobile" src={Banner} alt="Breadcrumbs" />
                            <div className="breadcrumbs-inner">
                                <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Trainings</h1>
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
                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Trainings</san> </b><br />
                                        <p className='contentsize'>
                                            Enhance your skills with our diverse training programs. We offer certification courses and hands-on sessions that cover both technical and soft skills, preparing you to meet the demands of today’s dynamic job market.
                                            <br /><br />
                                            Our comprehensive training programs are designed to equip students with the skills and knowledge required to excel in various competitive recruitment tests such as Campus Recruitment Training (CRT), Co-Cubes, AMCAT and eLitmus. These programs include intensive modules on quantitative aptitude, logical reasoning, verbal ability and domain-specific technical skills. Through a blend of theoretical instruction and practical exercises, students are prepared to face the challenges of these tests confidently. Our curriculum is regularly updated to reflect the latest trends and patterns in these assessments, ensuring that our students have a competitive edge. Additionally, we provide mock tests and personalized feedback to help students identify and improve their weak areas, enhancing their overall performance in actual recruitment processes.
                                            <br /><br />
                                            we offer a wide range of industry recognized global certifications. Our training programs are curated keeping various certification in mind and are led by our team of certified trainers. Our programs are designed to here to help you get certified in the most efficient and educative way possible. We offer some of the most popular certifications from vendors like Cisco, Red hat, Amazon, Microsoft, Oracle and Palo alto.
                                        </p>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <center><img src={Tconnect}></img> </center>
                                                <p className='contentsize'>The program is exclusively organized to the FRESHMEN to delve into the cutting - edge technologies like AWS cloud computing, coding, AI, AR, VR, Robotics and many more. They learn about their significance and opportunities and allow them to choose their career path.</p>
                                            </div>

                                            <div className='col-md-6'>
                                                <center><img src={Driveready}></img> </center>
                                                <p className='contentsize'>The program is exclusively organized to the FRESHMEN to delve into the cutting - edge technologies like AWS cloud computing, coding, AI, AR, VR, Robotics and many more. They learn about their significance and opportunities and allow them to choose their career path.</p>
                                            </div>

                                            <div className='col-md-6'>
                                                <center><img src={SkillupCooder}></img> </center>
                                                <p className='contentsize'>Skill up coder is designed to bridge the gap between basic and advanced programming skills. They learn to write more complex syntax, tackle real-world problem-solving challenges which help the trainees gain better knowledge.</p>
                                            </div>

                                            <div className='col-md-6'>
                                                <center><img src={IgniteCoder}></img> </center>
                                                <p className='contentsize'>
                                                Ignite coder is a program tailored to assist freshmen in grasping the foundational concepts of programming and becoming familiar with the programming languages such as C, JAVA, PYTHON, Web Technologies and fundamentals of Data Structures.</p>
                                            </div>
                                            <div className='col-md-6'>
                                                <center><img src={BecomeCoder}></img> </center>
                                                <p className='contentsize'>
                                                The program is exclusively tailored to the trainees who have mastered basic syntax and can progress to advanced logic training and can work effectively on intermediate level of DATA STRUCTURES and ALGORITHMS.</p>
                                            </div>


                                            <div className='col-md-6'>
                                                <center><img src={Owlcoder}></img> </center>
                                                <p className='contentsize'>The Owl Coder program is intricately designed to conform to industry expectations and standards. It focuses on refining advanced logical skills, delivering thorough training in project-specific tools, promoting active involvement in open hackathons, and providing avenues to contribute to real-world AI projects. Developed by an industry expert and instructed by a competitive coder, this program offers a comprehensive approach to skill development and practical experience in the field for 60 days.</p>
                                            </div>

                                            <div className='col-md-6'>
                                                <center><img src={ProjectSpace}></img> </center>
                                                <p className='contentsize'>Project space is a feature rich environment designed to encourage individuals to develop and showcase real time problems and further find effective solutions using the technology they have learnt. This helps every individual moving closing to their dream job.</p>
                                            </div>

                                            <div className='col-md-6'>
                                                <center><img src={Incampus}></img> </center>
                                                <p className='contentsize'>Intern with us on campus, learn from senior team member, gain mentorship skills and a stipend. They also earn the certificate and offer them full time roles based on the performance.</p>
                                            </div>
                                            <div className='col-md-6'>
                                                <center><img src={Grow}></img> </center>
                                                <p className='contentsize'>
                                                GROW is a focused initiative designed to support and empower women pursuing careers in programming. It ensures that women have equal access to opportunities and can thrive in this dynamic and innovative industry.</p>
                                            </div>
                                        </div>

                                      <br /><br />
                                      <center>  <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Technologies Offered</san> </b></center>
                                      <br /><br />
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div class="degree-list-container">
                                                    <ul class="degree-list">
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Generative AI</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Pega</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>VLSI (Very Large Scale Integration)</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Multi-cloud computing</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Embedded Systems</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>AWS Cloud DevOps</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Azure Cloud DevOps</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Google Cloud DevOps</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Full Stack Development</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>React Native</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>AWS Cloud Developing</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div class="degree-list-container">
                                                    <ul class="degree-list">
                                                       <li><span class="icon"><img className='pointimage' src={point} /></span><span>Google Flutter</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Cybersecurity</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Salesforce Administrator</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Cisco Networking</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Gaming with AR</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>UI/UX</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Robotic Process Automation</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Oracle APEX</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Redhat Linux System Administration</span></li>
                                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Internet Of Things (IoT)</span></li>
                                                    </ul>
                                                </div>
                                            </div>
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