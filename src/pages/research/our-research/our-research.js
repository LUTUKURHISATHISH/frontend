import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import OurResearch from './our-research-detals';
import Sidebar from './sidebar';

import Banner from '../images/banners/our_research.webp';
const OurResearchDetals = () => {
    return (
        <>
            <Header
                parentMenu='blog'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_image">
                <div class="react-wrapper-inner background_height">
                    <div className="react-breadcrumbs">
                        <div className="breadcrumbs-wrap">
                            <img className="desktop" src={Banner} alt="Breadcrumbs" />
                            <img className="mobile" src={Banner} alt="Breadcrumbs" />
                            <div className="breadcrumbs-inner">
                                {/* <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Overview</h1>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <Sidebar />
                    <OurResearch />
                </div>
            </div>
            <FooterTwo />
        </>
    );
}

export default OurResearchDetals;

