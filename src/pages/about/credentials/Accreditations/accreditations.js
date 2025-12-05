import React from 'react';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import ScrollToTop from '../../../../components/ScrollTop';
import SideManu from './sidebar';
import '../../about.css';
import NBA from './images/nba.webp';
import NAAC from './images/naac.webp';
import Banner from '../../images/banners/accreditations.webp';

const Accreditations = () => {
    return (
        <>
            <Header
                parentMenu='accreditation'
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
                                        <h1 className="breadcrumbs-title">Accreditations</h1>
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
                                    <br />
                                    <div class="container">
                                        <div class="recognition-container">
                                            <div class="recognition-box">
                                                <center><img src={NBA} alt="DSIR Recognized SIRO" class="recognition-logo imagesize"></img></center>
                                                <p class="recognition-text">
                                                    Six programs (CE, EEE, ME, ECE, CSE, IT) accredited by NBA under Tier I.
                                                </p>
                                            </div>

                                            <div class="recognition-box">
                                                <center><img src={NAAC} alt="NABL Accredited" class="recognition-logo imagesize"></img></center>
                                                <p class="recognition-text">
                                                    Accredited with CGPA of 3.60 on four point scale at A++ grade.
                                                </p>
                                            </div>
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

export default Accreditations;