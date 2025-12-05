import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
// import point from '../../../assets/images/icons/image.png';
import PlacementsBanner from '../images/campus_life/abhinaya_banner.webp';
import Leftimage from '../images/campus_life/abhinaya_image.webp';
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
                                        <h1 className="breadcrumbs-title">Abhinaya club</h1>
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
                                            <b className='Title_name'>Abhinay – The Cultural Club of Aditya University</b>
                                            <ul className="degree-list">
                                                <li><span style={{textAlign:"justify"}}>At Aditya University, Abhinay stands as a vibrant and dynamic cultural club that celebrates the creativity, passion, and talents of students beyond academics. True to its name — "Abhinay" meaning expression — the club is dedicated to encouraging students to explore and showcase their artistic side through a wide range of extracurricular activities.</span></li>
                                                <li><span style={{textAlign:"justify"}}>The club organizes regular events, workshops, cultural fests, and competitions, both within the university and on external platforms, helping students gain confidence, leadership qualities, and teamwork skills. From annual cultural extravaganzas to casual open mic nights, Abhinay ensures that creativity always has a stage.</span></li>
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
