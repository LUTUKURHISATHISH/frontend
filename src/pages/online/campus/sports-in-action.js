import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
// import point from '../../../assets/images/icons/image.png';
import PlacementsBanner from '../images/campus_life/sports_banner.webp';
import Leftimage from '../images/campus_life/sports_image.webp';
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
                                        <h1 className="breadcrumbs-title">Sports in Action</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-120 left-image-aditya">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <br />
                                    <div className="row align-items-center bg-white  rounded shadow">
                                        {/* Left Image */}
                                        <div className="col-md-4 text-center image_left_side">
                                            <img className="img-fluid" src={Leftimage} alt="Placements" />
                                        </div>
                                        {/* Right Content */}
                                        <div className="col-md-8">
                                            <b className='Title_name'>At Aditya, We Build Champions — In Classrooms and On Fields</b>
                                            <ul className="degree-list">
                                                <li><span style={{textAlign:"justify"}}> At Aditya University, we believe that education is not complete without the spirit of sports. Sports promote physical fitness, teamwork, leadership, and discipline among our students, shaping them into confident and resilient individuals. Through active participation in sports, our students learn perseverance, fair play, and time management — skills that are essential for success in academics and beyond. At Aditya, we are committed to nurturing well-rounded graduates who are not just academically excellent but also ready to lead and inspire in every field of life.</span></li>
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
