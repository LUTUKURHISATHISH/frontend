import React from 'react';
import Header from '../../../components/Header';
import { Link } from 'react-router-dom';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import PlacementsBanner from './images/Infra Top.webp';
import Leftimage from './images/Infra.webp';
import SideManu from './sidebar';

const Infrastructure = () => {
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
                                        <h1 className="breadcrumbs-title"></h1>
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
                                            <b className='Title_name'>Infrastructure</b>
                                            <ul className="degree-list" style={{textAlign: "justify"}}>
                                                <span className="icon"> The campus offers a technology-enabled environment with high-speed Wi-Fi and ICT-equipped classrooms. Modern academic laboratories support practical learning and research. Separate on-campus hostels for boys, girls, and international students provide diverse cuisines, including North Indian, South Indian, and international meals. A clean and green campus promotes a healthy lifestyle. Medical needs are met with a 24/7 in-house clinic, while ATMs and banking facilities ensure financial convenience. Food courts and stationery stalls cater to everyday needs. Embracing diversity, the campus includes dedicated prayer spaces—a temple, mosque, and church promoting spiritual well being and inclusivity for students of all faiths.
                                                <Link to= '/infrastructure-facilities' className="read-more" style={{color :"#0c6ab0"}}>
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

export default Infrastructure;
