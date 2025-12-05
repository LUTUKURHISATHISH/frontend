import React from 'react';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import ScrollToTop from '../../../../components/ScrollTop';
import SideManu from './sidebar';
import '../../about.css';
import Dsir from './images/dsir.webp';
import Nabl from './images/nabl.webp';
import Nptl from './images/nptl.webp';
import Ugc from './images/ugc.webp';

import Banner from '../../images/banners/recognitions.webp';
const Recognitions = () => {
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
                                        <h1 className="breadcrumbs-title">Recognitions</h1>
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
                                                <center><img src={Ugc} alt="UGC Recognized" class="recognition-logo"></img></center>
                                                    <p class="recognition-text">
                                                      Aditya University has been included in the list of universities established as per section 2(f) of the UGC Act, 1956.
                                                    </p>
                                            </div>
                                            <div class="recognition-box">
                                                <center><img src={Dsir} alt="DSIR Recognized SIRO" class="recognition-logo"></img></center>
                                                    <p class="recognition-text">
                                                       Recognized as Scientific and Industrial Research Organisation (SIRO) by the department of Scientific and Industrial Research (DSIR).
                                                    </p>
                                            </div>

                                            <div class="recognition-box">
                                                <center><img src={Nabl} alt="NABL Accredited" class="recognition-logo"></img></center>
                                                    <p class="recognition-text">
                                                    All Civil Engineering Department Laboratories Accredited by National. Accreditation Board for Testing and Calibration Laboratories(NABL).
                                                    </p>
                                            </div>
                                            <div class="recognition-box">
                                                <center><img src={Nptl} alt="NABL Accredited" class="recognition-logo imagesize"></img></center>
                                                    <p class="recognition-text">
                                                      Recognized as valuable NPTEL local chapter with rating 'AA' by Swayam -NPTEL.
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

export default Recognitions;