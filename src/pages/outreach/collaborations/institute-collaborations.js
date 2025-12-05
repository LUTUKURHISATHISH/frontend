import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import StudyBreadcrumb from '../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../components/ScrollTop';
import "../outreach.css";
import SideManu from './sidebar';
import Institute from "../../../data/Institute.json"

import Banner from '../images/banners/collaborations.webp';
const Collaborations = () => {
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
                                    {Institute.map(item => (
                                        <div class="container outreachcontanter mb-4">
                                            {
                                                item.list.map(data => (
                                                    <>
                                                        <div class="logo-box">
                                                            <img src={data.image} className='imagecollaborations' alt={data.name}></img>
                                                        </div>
                                                    </>
                                                ))
                                            }
                                        </div>
                                    ))}
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

export default Collaborations;