import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import Banner from '../images/banners/alumni.webp';
import SideManu from './sidebar';
const CommunityActivities = () => {
    return (
        <>
            <Header
                parentMenu='outreach'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <div className="react-breadcrumbs">
                        <div className="breadcrumbs-wrap">
                            <img className="desktop" src={Banner} alt="Breadcrumbs" />
                            <img className="mobile" src={Banner} alt="Breadcrumbs" />
                            {/* <div className="breadcrumbs-inner">
                                <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Alumni</h1>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                        <SideManu />
                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <div class="container">
                                        <p className='contentsize'>
                                        Welcome to the Alumni page of Aditya University, a dedicated space celebrating the accomplishments, connections, and ongoing journeys of our distinguished graduates. Our alumni community is a vital part of the university’s legacy, embodying the values, knowledge, and spirit that define Aditya University. Whether you walked our halls decades ago or are a recent graduate, this page is your gateway to staying connected with the university and your fellow alumni.<br /><br />
                                        The Alumni page serves as a hub for news, events, and resources tailored specifically for our alumni. Here, you will find information about upcoming reunions, professional development opportunities, and ways to engage with current students through mentorship and volunteer programs. Our goal is to foster a lifelong relationship between you and Aditya, providing support and opportunities that extend well beyond your time on campus.<br /><br />
                                        Our alumni have gone on to make significant impacts in a wide array of fields, from academia and research to business, public service, the arts, and beyond. Your achievements and contributions are a testament to the education and experiences gained at Aditya University, and we take immense pride in sharing your stories and successes with the broader community. We encourage you to stay connected, update your contact information, and let us know about the exciting things happening in your life. Your stories not only inspire future generations of students but also strengthen the bonds within our alumni network.<br /><br />
                                        As part of the alumni family, you have access to a range of exclusive benefits, including career services, networking events, and continuing education opportunities. We are committed to supporting your professional and personal growth. We invite you to explore this page, reconnect with old friends, and discover new ways to engage with the university. Whether you are attending an event, joining a local alumni chapter, or contributing to university initiatives, your involvement is invaluable.<br /><br />
                                        Thank you for being an integral part of the community. Your connection to the university enriches our heritage and helps shape the future for the next generation of leaders and innovators. Together, we continue to build on the foundation of excellence and make a positive impact on the world.<br /><br />
                                        Welcome back and stay connected!<br />
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

export default CommunityActivities;