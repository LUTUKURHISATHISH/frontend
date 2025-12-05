import React from 'react';
import Header from '../../../../../components/Header';
import FooterTwo from '../../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../../components/ScrollTop';
// import point from '../../../../../assets/images/icons/image.png';
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
                    <StudyBreadcrumb pageTitle="Overview" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <SideManu />
                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <br />
                                    <div class="container">
                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Overview</san> </b><br />
                                        <p className='contentsize'>
                                            The Department of Management Studies at Aditya University is dedicated to fostering innovative thinking by challenging traditional business and management practices. Our curriculum emphasizes a holistic learning experience through a dynamic blend of methodologies, including a case study approach, the LPA (Learn, Practice, Apply) methodology, and activity-based learning (ABL), which encourage students to engage deeply with concepts and apply them in real-world contexts. Industrial visits, guest lectures, and seminars expose students to industry insights, while business fests and community initiatives build leadership, teamwork, and social responsibility. Interactive sessions with entrepreneurs and business professionals provide valuable perspectives on contemporary entrepreneurship, innovation, and practical business experience, equipping students for success in today’s evolving business landscape.<br /><br />

                                            The committed faculty members are highly qualified and experienced professionals dedicated to academic excellence and student success. With diverse expertise across various management domains, they bring a blend of industry knowledge and academic rigor to the classroom.<br /><br />

                                            Partnerships with industry leaders like SAP-ABAP and Pearson-Mepro provide students with access to cutting-edge resources and opportunities for professional development.<br /><br />

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