import React from 'react';
import Header from '../../../../../../components/Header';
import FooterTwo from '../../../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../../../components/ScrollTop';
// import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import SideManuDept from '../../../commonpages/sidebar-menu';

const Freshman_overview = () => {
    const department = 'freshman';

    return (
        <>
            <Header
                parentMenu='academics'
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
                                    <div className="col-md-4 d-flex justify-content-end w-100">
                                        <SideManuDept department={department} />
                                    </div>
                                  
                                    <div class="container">
                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Overview</san> </b><br />
                                        <p className='contentsize'>
                                            The Freshman Engineering Department is often a core component of many engineering schools and universities. Its primary function is to support first-year engineering students as they transition into college life and the rigorous academic environment of engineering programs. The department typically offers a variety of services and resources tailored to help students build a strong foundation for their subsequent years of study. The department offers a variety of curricular activities to its students that are intended to improve their overall educational experience. These extracurricular activities give students real-world, practical experience that is vital for their academic and professional development, in addition to supplementing standard classroom learning. The department offers a variety of curricular activities to its students that are intended to improve their overall educational experience. These extracurricular activities give students real-world, practical experience that is vital for their academic and professional development, in addition to supplementing standard classroom learning.
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

export default Freshman_overview;