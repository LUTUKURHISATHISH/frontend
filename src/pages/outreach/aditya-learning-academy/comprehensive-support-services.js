import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import Banner from '../images/banners/ala_comprehensive.webp';

const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='adityalearning'
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
                                        <h1 className="breadcrumbs-title">Comprehensive Support Services</h1>
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
                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Comprehensive Support Services</san> </b><br />
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Online Course Design and Development: Providing expertise in creating online courses, including content development, digital pedagogy, and effective use of multimedia tools to enhance learner engagement and achievement.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Outcome-Based Education (OBE) Manual Creation: Developing and distributing manuals and guidelines on outcome-based education to ensure that all courses align with specific competencies and outcomes that students are expected to achieve.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Collaborative Online Courses with Foreign Universities: Facilitating partnerships with universities abroad to co-develop and co-deliver courses, enhancing global perspectives and diverse educational offerings.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Industry Collaboration: Working with industry partners to design courses that meet current market needs, integrating real-world applications and expert guest lectures from the field.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Corporate Training Programs: Offering tailor-made training sessions for industry professionals and other colleges, conducted by university faculty, focusing on specialized topics relevant to ongoing professional development and industry trends.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Pedagogical Training: Offering workshops, seminars, and courses on modern teaching methods, including active learning, flipped classrooms, and online teaching strategies.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Curriculum Development Support: Assisting faculty in designing and revising courses and curricula to improve alignment with learning outcomes, incorporating new subject matter and interdisciplinary approaches.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Technology Integration: Helping faculty integrate technology into their teaching, including learning management systems (LMS), multimedia tools, and virtual reality (VR) environments to enrich the learning experience.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Assessment and Evaluation: Providing resources and expertise on effective assessment strategies and tools to measure student learning and course effectiveness.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Research on Teaching and Learning: Encouraging and supporting scholarly research on pedagogy, including the scholarship of teaching and learning (SoTL), to foster evidence-based teaching practices.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Mentoring and Coaching: Establishing a mentoring program where experienced faculty members guide newer instructors, offering advice on teaching, career development, and work-life balance.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Instructional Design Assistance: Offering support for course design and redesign, helping faculty create engaging and effective learning experiences for students.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Teaching Resources and Materials: Maintaining a library of teaching resources, such as articles, textbooks, case studies, and online modules that faculty can access to enhance their teaching.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Faculty Development Workshops and Retreats: Organizing regular events focused on professional development, such as teaching retreats and workshops on topics like classroom management, student engagement, and inclusive teaching.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Peer Observation and Feedback: Facilitating a structured program for peer observation where faculty can attend each other’s classes and provide constructive feedback on teaching methods and classroom engagement.</span></li>
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