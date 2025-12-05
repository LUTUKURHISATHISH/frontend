import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
// import point from '../../../assets/images/icons/image.png';
import PlacementsBanner from './images/placements banner.webp';
import Leftimage from './images/Placements.webp';
import SideManu from './sidebar';
// import leftAditya from './images/leftaditya.webp';

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
                                        <h1 className="breadcrumbs-title">Placements</h1>
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
                                            <b className='Title_name'>Placements</b>
                                            <ul className="degree-list" style={{textAlign: "justify"}}>
                                                <span className="icon"> Aditya University places a strong emphasis on placement training and foreign language learning through its Centre for Foreign Languages, enhancing both domestic and international career opportunities. With a robust industry connect and career-focused approach, the university continues its legacy of excellence in placements. In the 2024–25 academic year (till date), over 3,000 placement offers have been secured from 120+ top recruiters, with the highest package at ₹35.36 LPA and an average package of ₹5.26 LPA. A full-semester industry-oriented project ensures real-time industry exposure, while students have also secured prestigious internships at Google, Walmart, Flipkart, Airbus, and other global giants.
                                                <Link to= '/opportunities-placements' className="read-more" style={{color :"#0c6ab0"}}>
                                                    &nbsp;&nbsp;&nbsp;Read more <span className="sr-only"> </span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor" style={{height: "17px"}}
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </Link> </span>
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
