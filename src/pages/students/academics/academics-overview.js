import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import StudyBreadcrumb from '../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
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
                                            At Aditya University, we offer a dynamic educational experience. Our curriculum is meticulously aligned with the NEP 2020 framework, ensuring that we meet contemporary educational standards and expectations. We prioritize personalized learning through our innovative Choice-Based Credit System, which allows students to tailor their academic experience according to their interests and career goals.<br /><br />
                                            Our collaborations with esteemed foreign universities offer joint degree certification programs and semester abroad programs, fostering a global perspective. Students can pursue Honors and Minor Degrees, enhancing their academic credentials and broadening their knowledge base <br/><br />

                                            In addition to traditional courses, we provide a range of skill-oriented courses, value-added courses, and certification programs, to equip students with the practical skills necessary for real-world challenges.<br/><br />

                                            We are dedicated to empower students to chart their own academic journey, encouraging them to excel in their chosen disciplines while developing a versatile skill set that will serve them well in their future careers.<br/><br />
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