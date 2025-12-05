import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
// import point from '../../../assets/images/icons/image.png';
import PlacementsBanner from './images/awards_recognitions.webp';
// import Leftimage1 from './images/Academics & Skills_1.webp';
import Leftimage2 from './images/awards.webp';

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
                                        <h1 className="breadcrumbs-title">Awards & Recognitions</h1>
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
                                            <b className='Title_name'> Awards & Recognitions </b>
                                            <ul className="degree-list" style={{textAlign: "justify"}}>
                                            <span>
                                                Aditya University is a beacon of academic excellence and innovation, recognized through prestigious accreditations,national and international rankings. The university holds NAAC A++ accreditation and NBA accreditation for six undergraduate programs, reflecting its strong academic standards. It is proudly placed in the 201 - 300 band of NIRF. Aditya University has also earned the QS I-GAUGE Diamond rating under India's university rating system and features in the Times Higher Education (THE) Impact Rankings, underscoring its global vision and commitment to societal impact 
                                                <Link to= '/accreditations' className="read-more" style={{color :"#0c6ab0"}}>
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

export default DiplomaPrograms;
