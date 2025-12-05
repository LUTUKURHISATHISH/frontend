import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import PlacementsBanner from './images/Aminities banner.webp';
import Leftimage from './images/Amenities.webp';
// import leftAditya from './images/leftaditya.webp';

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
                                        <h1 className="breadcrumbs-title">Amenities</h1>
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
                                            <img className="img-fluid" src={Leftimage} alt="Placements" />
                                        </div>
                                        {/* Right Content */}
                                        <div className="col-md-8">
                                            <b className='Title_name'>Amenities</b>
                                            <ul className="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Student Clubs and professional society student chapters to enhance the student life skills and holistic development.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Annual national-level techno-management and cultural festivals & national level sports meets.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>NSS, NCC and Extension Activities for imbibing social responsibility among students.</span></li>
                                                {/* <li><span class="icon"><img className='pointimage' src={point} /></span><span>Multi-Cuisine restaurants and 24X7 coffee shops on campus to facilitate the diverse student community.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>High end computers that facilitate students to use computational resources round the clock.</span></li> */}
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Indoor and Outdoor Sport facilities facilitated with State-of-the-Art indoor stadium.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Separate Gymnasiums for boys and girls.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>In-House Clinic as part of an MoU with Apollo Hospitals with 24X7 resident doctor and nursing staff.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Air-conditioned 500 capacity auditorium, 3000 capacity Amphitheatre with multiple seminar halls of varied capacities.</span></li>
                                                {/* <li><span class="icon"><img className='pointimage' src={point} /></span><span>Exclusive centrally air-conditioned Library facility open till 10 PM on all days.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Transport facility from every nook & corner of Kakinada, Rajamahendravaram and their surroundings.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Ragging free environment with staggered timings for freshmen and the seniors.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Students are encouraged to be part of the faculty research leading to international journal paper publications.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Financial assistance for study through tie-up with banks and financial institutions.</span></li> */}
                                            </ul>
                                        </div>
                                    </div><br /><br />
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
