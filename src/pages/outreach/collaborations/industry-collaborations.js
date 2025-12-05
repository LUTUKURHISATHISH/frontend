import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import SideManu from './sidebar';
import Image2 from './images/collaborations/Industry/1.webp';
import Image1 from './images/collaborations/Industry/2.webp';
import Image3 from './images/collaborations/Industry/3.webp';
import Image4 from './images/collaborations/Industry/4.webp';
import Image5 from './images/collaborations/Industry/5.webp';
import Image6 from './images/collaborations/Industry/6.webp';
import Image7 from './images/collaborations/Industry/7.webp';
import Image8 from './images/collaborations/Industry/8.webp';
import Banner from '../images/banners/collaborations.webp';

const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='collaborations'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <div className="react-breadcrumbs">
                        <div className="breadcrumbs-wrap">
                            <img className="desktop" src={Banner} alt="Breadcrumbs" />
                            <img className="mobile" src={Banner} alt="Breadcrumbs" />
                            <div className="breadcrumbs-inner">
                                <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Collaborations</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <SideManu />
                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <div class="container outreachcontanter">
                                        <div class="logo-box cardbleft">
                                            <img src={Image1} className='imagecollaborations' alt="RWTH Aachen University"></img>
                                        </div>
                                        <div class="logo-box cardbright">
                                            <img src={Image2} className='imagecollaborations' alt="Stanford University"></img>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="container outreachcontanter">
                                        <div class="logo-box cardbleft">
                                            <img src={Image3} className='imagecollaborations' alt="RWTH Aachen University"></img>
                                        </div>
                                        <div class="logo-box cardbright">
                                            <img src={Image4} className='imagecollaborations' alt="Stanford University"></img>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="container outreachcontanter">
                                        <div class="logo-box cardbleft">
                                            <img src={Image5} className='imagecollaborations' alt="RWTH Aachen University"></img>
                                        </div>
                                        <div class="logo-box cardbright">
                                            <img src={Image6} className='imagecollaborations' alt="Stanford University"></img>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="container outreachcontanter">
                                        <div class="logo-box cardbleft">
                                            <img src={Image7} className='imagecollaborations' alt="RWTH Aachen University"></img>
                                        </div>
                                        <div class="logo-box cardbright">
                                            <img src={Image8} className='imagecollaborations' alt="Stanford University"></img>
                                        </div>
                                    </div>
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

export default diploma_programs;