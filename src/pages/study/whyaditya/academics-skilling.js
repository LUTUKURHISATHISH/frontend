import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import PlacementsBanner from './images/academics &skilling banner.webp';
// import Leftimage1 from './images/Academics & Skills_1.webp';
import Leftimage2 from './images/Academics & Skills_2.webp';

import SideManu from './sidebar';

const DiplomaPrograms = () => {
    return (
        <>
            <Header parentMenu='whyaditya' menuCategoryEnable='enable' />
            <div className="react-wrapper background_height">
                <div className="react-wrapper-inner background_whyaditya">
                    {/* Breadcrumbs Section */}
                    <div className="react-breadcrumbs">
                        <div className="breadcrumbs-wrap">
                            <img className="desktop" src={PlacementsBanner} alt="Breadcrumbs" />
                            <img className="mobile" src={PlacementsBanner} alt="Breadcrumbs" />
                            <div className="breadcrumbs-inner">
                                <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Academics & Skilling</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-120 left-image-aditya">
                        <div className="container">
                            <div className="row">
                                <SideManu />
                                {/* Main Content */}
                                <div className="col-lg-12">
                                    <div className="row align-items-center bg-white  rounded shadow">
                                        {/* Left Image */}
                                        <div className="col-md-4 text-center image_left_side">
                                            {/* <img className="img-fluid" src={Leftimage1} alt="Placements" /> */}
                                            <img className="img-fluid" src={Leftimage2} alt="Placements" />

                                        </div>

                                        {/* Right Content */}
                                        <div className="col-md-8">
                                            <b className='Title_name'>Academics & Skilling</b>
                                            <ul className="degree-list">
                                            <li><span class="icon"><img className='pointimage' src={point} /></span><span>Fully Flexible Choice-Based Credit System (CBCS) with an opportunity for each student to design their own program to get major, minor and honors degrees of their choice.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Competency building on language and communication skills through Cambridge University Empower.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Exclusive department to train students in advanced Technologies & Soft Skills making students Industry-ready.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>44 Functional MoUs with MNCs & industries</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Centre of excellences with Industry collaborations</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Competitive coding sessions to imbibe logical thinking and complex problem-solving skills; Hackathons and Mockathons for enhancing design and prototyping skills.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Proctored self-learning for advanced learners and hand-holding care to enhance learning abilities of slow learners.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Credits for skilling in all relevant courses and curriculum aligned with sector-skills council and MNCs.</span></li>
                                                {/* <li><span class="icon"><img className='pointimage' src={point} /></span><span>Inclusion of value-added courses as part of academic mandate to make students industry ready.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Labs taken to class, project-based labs and tinkering labs to furnish students with hands-on expertise on contemporary skills.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Innovative learning pedagogies to make learning easy and enthusiastic.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Internationally reputed MOOCs embedded into academics.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Multi-disciplinary specializations to enhance product building abilities in students.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Comprehensive training and support for students to participate in national and international level competitions such as world skills competitions SAE-BAJA & Smart India Hackathon.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Training for competitive exams as per the choice of the students.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Academic credit sharing with study-abroad under Joint Certification programs in collaboration with internationally reputed Universities.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Global certifications from established skill academies and Centre of Excellences on campus.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Industry driven and vetted curriculum.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Exclusive student counseling for career guidance, academic growth, and personal well-being.</span></li>    */}
                                            </ul>
                                        </div>
                                    </div><br />
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

export default DiplomaPrograms;
