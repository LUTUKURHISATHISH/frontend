import React from 'react';
import Header from '../../components/Header';
import FooterTwo from '../../components/Footer/index';
import ScrollToTop from '../../components/ScrollTop';
import Banner from './images/banners/community_activities.webp';

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
                            <div className="breadcrumbs-inner">
                                <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Community Activities</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <div class="container">
                                        <b><san className="hedingname_orange">Engaging in Social Service Activities</san></b><br/><br/>
                                        <p className='contentsize'>We believe in nurturing holistic development by providing our students with diverse opportunities for    engagement in social service activities. While academic excellence remains fundamental, we understand the significance of    extracurricular involvement in shaping well-rounded individuals.<br /><br />
                                            Our students demonstrate vibrant enthusiasm for participation in a wide array of activities that extend beyond the traditional academic realm. From cultural events to community service projects, sports, clubs, and student organizations, there's a plethora of options for involvement at Aditya University.<br /><br />
                                            Our various clubs, including NSS, NCC, Youth, Red Cross, Leo, Rotaract, and departmental clubs, actively promote student participation in activities aimed at fostering societal welfare and development. Through these clubs, students engage in a myriad of social service initiatives both within and outside the campus.<br /><br />
                                            In line with our commitment to social responsibility, we actively participate in the Unnat Bharat Abhiyaan scheme. This initiative facilitates the adoption of villages by educational institutions to promote sustainable development and address local challenges. Our students collaborate with rural communities to implement innovative solutions, ranging from sanitation and healthcare to education and technology access.<br /><br />
                                            From organizing blood donation camps to conducting awareness programs on crucial social issues such as gender equality and mental health, our students are making tangible contributions to society. They work hand in hand with NGOs and community-based organizations to address local needs, including environmental conservation, literacy programs, and community development projects.<br /><br />
                                            Participation in these activities not only cultivates essential skills such as leadership, teamwork, time management, and communication but also instills a profound sense of civic responsibility and empathy in our students. They graduate as well-rounded individuals equipped not only with academic knowledge but also with a deep commitment to making a positive impact in the world.<br /><br />
                                            At Aditya University, we take pride in our students' dedication to social service and their passion for creating a brighter future for all. Join us in our journey of making a meaningful difference through service and leadership.<br />
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