import React from 'react';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../components/ScrollTop';
// import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar';
const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='academics'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <SideManu />
                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <br />
                                    <div class="container">
                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Overview</san> </b><br />
                                        <p className='contentsize'>
                                            Welcome to the School of Engineering at Aditya, a premier institution committed to excellence in engineering education and research. Our school offers a comprehensive range of undergraduate, postgraduate, and doctoral programs designed to cultivate the next generation of engineers and innovators.<br/><br/>

                                            Our Bachelor of Technology (B.Tech) programs provide a solid foundation in engineering principles, coupled with hands-on experience and opportunities for specialization in cutting-edge fields. Through our curriculum curated by industry experts, we aim to develop proficient engineers equipped with the knowledge and skills to address complex technical challenges and contribute effectively to the industry.<br/><br/>

                                            For those seeking advanced knowledge and research opportunities, our Master of Technology (M.Tech) programs offer in-depth study and specialized training in various engineering disciplines. These programs are designed to enhance professional expertise and foster innovation, preparing graduates for leadership roles in academia, industry, and research institutions.<br/><br/>

                                            Our Doctoral (Ph.D) programs are at the forefront of engineering research, encouraging scholars to pursue fundamental research that advances the boundaries of engineering knowledge. With access to state-of-the-art facilities and mentorship from distinguished faculty, our doctoral candidates are well-positioned to make significant contributions to their fields.<br/><br/>

                                            At the School of Engineering, we are dedicated to fostering a dynamic and inclusive learning environment that emphasizes collaboration, innovation, and practical application. Our partnerships with leading international universities and industry leaders provide our students with a global perspective and valuable professional networks.<br/><br/>

                                            We invite you to explore the diverse programs and opportunities available at the School of Engineering, where we are committed to empowering our students to achieve their academic and professional aspirations. Join us in shaping the future of engineering and making a meaningful impact on society.<br/><br/>
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