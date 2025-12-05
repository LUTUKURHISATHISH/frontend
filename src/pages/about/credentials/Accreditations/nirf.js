import React from 'react';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import ScrollToTop from '../../../../components/ScrollTop';
import Banner from '../../images/banners/nirf.webp';
import SideManu from './sidebar';
import NIRFIMAGE from './images/NIRF.webp';

const diploma_programs = () => {
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
                                        <h1 className="breadcrumbs-title">NIRF</h1>
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
                                         {/* <div class="table-responsive table-bordered table-striped ">
                                            <table class="table responsive">
                                                <thead>
                                                    <tr>
                                                        <th style={{ backgroundColor: "#00428a", color: '#fff', textAlign: "center",width: '4%' }}>S.No</th>
                                                        <th style={{ backgroundColor: "#00428a", color: '#fff', textAlign: "center", width: '25%' }}>NIRF 2024-2025</th>

                                                        <th style={{ backgroundColor: "#00428a", color: '#fff', textAlign: "center", width: '45%' }}>view</th>
                                                        <th style={{ backgroundColor: "#00428a", color: '#fff', textAlign: "center", width: '26%' }}>Download</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>1</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Engineering - IR-E-C-17955</td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>view</td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>Download</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>2</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Overall - IR-O-C-17955</td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>view</td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>Download</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>3</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Innovation-IR-I-C-17955</td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>view</td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>Download</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>4</td>
                                                        <td style={{ verticalAlign: 'middle' }}>SDG-IR-B-C-17955</td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>view</td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>Download</td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div> */}
                                    <center><img src={NIRFIMAGE} alt="NABL Accredited" style={{width:'80%'}}></img></center>
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