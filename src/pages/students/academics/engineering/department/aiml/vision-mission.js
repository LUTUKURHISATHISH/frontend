import React from 'react';
import Header from '../../../../../../components/Header';
import FooterTwo from '../../../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../../../components/ScrollTop';
import SideManu from './sidebar';
import SideManuDept from '../../../commonpages/sidebar-menu';
import Vision from '../../../commonpages/vision';
import Mission from '../../../commonpages/mission';

const AIMLVM = () => {
    const department = 'aiml';
   return (
        <>
            <Header
                parentMenu='academics'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="Overview" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <SideManu />
                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <div className="col-md-4 d-flex justify-content-end w-100">
                                        <SideManuDept department={department} />
                                    </div>
                                        <Vision department={department} />
                                        <Mission department={department} />
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

export default AIMLVM;