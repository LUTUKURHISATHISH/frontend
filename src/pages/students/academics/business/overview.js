import React from 'react';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../components/ScrollTop';
import SideManu from './sidebar';
import Popupvideo from './popupvideo.js';
import Overview from '../commonpages/overview';
import SideManuDept from '../commonpages/sidebar-menu';


const MBA_Overview = () => {
    const department = 'mba';
    return (
        <>
            <Header
                parentMenu='academics'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <SideManu />
                            <Popupvideo />
                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <div className="col-md-4 d-flex justify-content-end w-100">
                                        <SideManuDept department={department} />
                                    </div>
                                    <br />
                                    <Overview department={department} />
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

export default MBA_Overview;