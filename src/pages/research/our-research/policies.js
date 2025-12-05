import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import Banner from '../images/banners/our_research.webp';
import GrantPolicy from '../files/policy/seed_grant_policy.pdf';
import IncentivePolicy from '../files/policy/incentive_policy.pdf';


const AdvancedAppliation = () => {
    return (
        <>
            <Header
                parentMenu='patents'
                menuCategoryEnable='enable'
            />
            <div className="back__course__page_grid react-courses__single-page pb---16" >
                <div class="react-wrapper background_height">
                    <div class="react-wrapper-inner background_image">
                        <div className="react-breadcrumbs">
                            <div className="breadcrumbs-wrap">
                                <img className="desktop" src={Banner} alt="Breadcrumbs" />
                                <img className="mobile" src={Banner} alt="Breadcrumbs" />
                                <div className="breadcrumbs-inner">
                                    <div className="container">
                                        <div className="breadcrumbs-text">
                                            <h1 className="breadcrumbs-title">Policies </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="high_quality-section pb---70">
                            <div class="container ">
                               <br/><br/>
                                <div class="row m-0">
                                    <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                        <br />
                                        <div class="container">
                                            <div className="campus_sec1 row">
                                                <div className="col-lg-6">
                                                    <div className="text-center" style={{ padding: "5px" }}>
                                                        <Link to={GrantPolicy} style={{ width: "100%" }} className="more-about" target="blank"> Seed Grant Policy</Link>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="text-center" style={{ padding: "5px" }}>
                                                        <Link to={IncentivePolicy} style={{ width: "100%" }} className="more-about" target="blank"> Incentive Policy</Link>
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
                </div>
            </div>
            <FooterTwo />
        </>
    );
}

export default AdvancedAppliation;