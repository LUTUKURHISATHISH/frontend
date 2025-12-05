import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import Banner from '../images/banners/opportunities.webp';
const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='sustainability'
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
                                        <h1 className="breadcrumbs-title">Sustainability</h1>
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
                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Sustainability at Aditya University </san> </b><br />
                                        <p className='contentsize'>
                                            At Aditya University, sustainability is a fundamental value that shapes our academic vision, research priorities, and community initiatives. We recognize that the challenges of the 21st century demand urgent action, and as a higher education institution, we are committed to being a driving force for positive change. Our approach to sustainability is deeply rooted in the principles of the United Nations' Sustainable Development Goals (SDGs), ensuring that our efforts contribute meaningfully to a more equitable and resilient world <br />

                                            The Sustainable Development Goals (SDGs) were established by the United Nations as a global action plan to address critical challenges such as poverty, inequality, environmental degradation, and climate change. These 17 goals serve as a blueprint for progress, guiding nations, organizations, and institutions in their efforts to create a sustainable future. Higher education institutions play a crucial role in advancing sustainable development. Universities are hubs of knowledge, innovation, and leadership, making them powerful catalysts for social and environmental transformation.
                                        </p>
                                        <b className='hedingname_orange'>Our Commitment to a Sustainable Future </b>
                                        <p className='contentsize'>
                                            Sustainability is not just an initiative at Aditya University—it is an institutional commitment that influences every aspect of our work. We actively invest in renewable energy, water conservation, waste reduction, and social impact projects. Through interdisciplinary academic programs, research-driven solutions, and campus-wide sustainability practices, we ensure that our students and faculty contribute to meaningful global change.<br />
                                            As a university dedicated to shaping the future, we believe that sustainability is not an option but a responsibility. Aditya University stands as a leader in fostering a culture of sustainability, creating an environment where education and action come together to build a better world.<br />
                                            At Aditya University, we embrace the SDGs as a guiding framework for our educational and institutional strategies, ensuring that sustainability remains at the core of everything we do. Our commitment to the SDGs allows us to:<br />
                                        </p>
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Develop future leaders who are equipped with the knowledge and skills to drive sustainable solutions.</span> </li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span></span> Conduct groundbreaking research that addresses global sustainability challenges </li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span></span> Implement responsible campus policies that promote environmental stewardship</li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span></span> Engage with communities to foster awareness and collective action toward sustainability</li>
                                            </ul>
                                        </div>
                                        <br/>
                                        <p className='contentsize'>
                                            <span>We are open for collaboration to leverage the efforts towards SDGs.</span> <br />
                                            <span>Please reach out to
                                                <br /><b>Dr G Ramakrishna,</b>
                                                <br /> Dean IQAC, <br /> E-mail ID:
                                                <span style={{ color: '#00428a' }}>  dean_iqac@adityauniversity.in</span>
                                            </span>
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