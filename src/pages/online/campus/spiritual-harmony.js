import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
// import point from '../../../assets/images/icons/image.png';
import PlacementsBanner from '../images/campus_life/temple_banner.webp';
import Leftimage from '../images/campus_life/temple_image.webp';
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
                                        <h1 className="breadcrumbs-title">Spiritual Harmony</h1>
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
                                            <b className='Title_name'>Spiritual Harmony</b>
                                            <ul className="degree-list">
                                                <li><span style={{textAlign:"justify"}}>At Aditya University, we believe in nurturing not just minds, but also hearts and spirits. Rooted in values of respect, compassion, and unity, our campus encourages spiritual harmony through a culture of mutual understanding and inner growth. We honor all faiths and philosophies, providing space for reflection, dialogue, and practices that promote peace, mindfulness, and holistic well-being—helping our community grow with purpose and balance.</span></li>
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
