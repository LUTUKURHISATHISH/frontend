import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
// import point from '../../../assets/images/icons/image.png';
import PlacementsBanner from '../images/campus_life/inclusive_ecosystem_banner.webp';
import Leftimage from '../images/campus_life/inclusive_ecosystem_image.webp';
const DiplomaPrograms = () => {
    return (
        <>
            <Header parentMenu='whyaditya' menuCategoryEnable='enable' />
            <div className="react-wrapper background_height">
                <div className="react-wrapper-inner background_image">
                    {/* Breadcrumbs Section */}
                    <div className="react-breadcrumbs">
                        <div className="breadcrumbs-wrap">
                            <img className="desktop" src={PlacementsBanner} alt="Breadcrumbs" />
                            <img className="mobile" src={PlacementsBanner} alt="Breadcrumbs" />
                            <div className="breadcrumbs-inner">
                                <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Inclusive Ecosystem</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-120 left-image-aditya">
                        <div className="container">
                            <div className="row">
                               <div className="col-lg-12">
                                <br/>
                                    <div className="row align-items-center bg-white  rounded shadow">
                                        {/* Left Image */}
                                        <div className="col-md-4 text-center image_left_side">
                                            <img className="img-fluid" src={Leftimage} alt="Placements" />
                                        </div>
                                        {/* Right Content */}
                                        <div className="col-md-8">
                                            <b className='Title_name'>Inclusive Ecosystem</b>
                                            <ul className="degree-list">
                                                <li><span style={{textAlign:"justify"}}>At Aditya University, we are committed to fostering an inclusive ecosystem where diversity is celebrated and every individual is empowered to thrive. Our campus is a safe, supportive, and accessible space for students, faculty, and staff from all backgrounds. We actively promote equity through inclusive policies, need-based support, accessible infrastructure, mentorship programs, and opportunities that reach beyond barriers—ensuring that no voice goes unheard and no potential goes untapped.</span></li>
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
