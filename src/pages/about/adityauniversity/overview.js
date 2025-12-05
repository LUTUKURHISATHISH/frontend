import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import SideManu from './sidebar';
import Banner from '../images/banners/Infra Top.webp';
const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='university'
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
                                    {/* <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Overview</h1>
                                    </div> */}
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
                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">ADITYA UNIVERSITY - <span style={{ color: '#00428a' }}>Profile</span></san> </b><br />
                                        <p className='contentsize'>
                                            Aditya University is a State Private University formed under the Andhra Pradesh Private Universities Act, 2016. It has evolved from the well-established Aditya Engineering College in Surampalem, Kakinada District, Andhra Pradesh. Aditya University is committed to provide quality higher education with global standards.The institute offers 11 UG programs in Engineering (Agricultural Engineering, Civil Engineering, Computer science and Engineering, Artificial Intelligence and Machine Learning, Computer Science and Engineering (Data Science), Electronics and Communication Engineering, Electrical and Electronics Engineering, Information Technology, Mechanical Engineering, Mining Engineering and Petroleum Technology), 6 PG programs in Engineering (VLSI Design, Energy Science and Technology, Computer Science and Engineering, Power Electronics and Devices, Structural Engineering, CSE (AI & ML), Masters in Business Administration, Masters in Computer Applications, BBA, BBA - Digital Marketing, BBA - Business Analytics, B.Pharmacy, Pharma-D, M.Pharmacy - Pharmaceutics, M.Pharmacy - Pharmaceutical Analysis, B.Sc - Forensic Science, B.Sc - Cyber Security & Digital Forensics, M.Sc - Forensic Science, M.Sc - Cyber Security & Digital Forensics. Programs are well crafted to blend academic rigor with practical relevance, equipping students to effectively address both societal and industrial challenges. Experienced and learned teachers encourage intellectual curiosity, critical thinking, and cooperation among the diverse student community in an inclusive manner to realise their full potential and contribute to society. The memorandum of understanding with foreign universities usher a new era of international academic excellence, fostering a vibrant, globally engaged educational community at Aditya University leading to joint degree certifications and joint research programmes. Industry collaborations build a synergistic relationship for internship opportunities, project-based learning, and innovative research.
                                        </p>
                                        <br />
                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">History</san> </b><br />
                                        <p className='contentsize'>
                                            Aditya Engineering College (AEC) was established in the year 2001 by Aditya Academy.
                                             {/* AEC renowned for its vibrant community, hosts over 5,000 students from across India and 14 foreign nations. The institute offers 11 UG programs, 6 PG programs in Engineering, Masters in Business Administration, Masters in Computer Applications, BBA, BBA - Digital Marketing, BBA - Business Analytics, B.Pharmacy, Pharma-D, M.Pharmacy - Pharmaceutics, M.Pharmacy - Pharmaceutical Analysis, B.Sc - Forensic Science, B.Sc - Cyber Security & Digital Forensics, M.Sc - Forensic Science, M.Sc - Cyber Security & Digital Forensics. */}
                                             {/* <br /><br /> */}

                                            Rooted deeply in the vision of Dr. N. Sesha Reddy, the Aditya Academy, founded in 1984, with a vision and mission to create a platform for holistic growth and success to students. As a non-profit Educational Society, its commitment to quality education for rural students in Andhra Pradesh is a story of inspiration and perseverance. The Aditya educational group is with 60,000+ students in 60+ institutions with 6000+ staff across the coastal districts in Andhra Pradesh has become the standard bearer for quality education. In every stream, Aditya has become a springboard for success through its powered vision, constant innovation and professional excellence. The academy's reputation for exceptional teaching practices, state-of-the-art infrastructure, robust ICT integration, impressive placement drives, and higher education opportunities remains unmatched.
                                        </p>
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
// Having been an educational lighthouse for almost 40 years, it today boasts of a sprawling network of over 40 revered institutions. With an impeccable workforce of over 3,000 staff, it serves a diverse student community of over 40,000 sprawled over different campuses situated in various cities and towns of Andhra Pradesh.