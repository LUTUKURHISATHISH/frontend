import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import PlacementsBanner from './images/faculty banner.webp';
import Leftimage from './images/Faculty.webp';
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
                                        <h1 className="breadcrumbs-title">Faculty</h1>
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
                                            <b className='Title_name'>Faculty</b>
                                            <ul className="degree-list" style={{textAlign: "justify"}}>
                                                <span className="icon"> With a strong academic foundation, our institution boasts over 500 highly qualified faculty members who bring a rich blend of industry, academic, and research experience. Among them, more than 200 hold doctoral degrees across diverse research domains, contributing to a thriving research ecosystem. This is reflected in the publication of over 1,963 research papers in prestigious SCI and Scopus-indexed journals, 402 indexed in web of science along with 532 patents published, and 37 patents granted to its credit. The institution has also secured government-funded sponsored projects worth ₹16.3 crores, further underscoring its research excellence. Our customized, student-centric, and outcome-based teaching-learning methodology ensures a transformative educational experience aligned with industry and societal needs.
                                                 </span>
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
