import React from 'react';
import Header from '../../../../../../components/Header';
import FooterTwo from '../../../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../../../components/ScrollTop';
import StaffDetails from '../../../commonpages/faculty-details';
import SideManu from './sidebar';
import SideManuDept from '../../../commonpages/sidebar-menu';
const MECHFaculty = () => {
    const department = 'mechanical';
    return (
        <>
            <Header
                parentMenu='academics'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="Faculty" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <SideManu />
                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12 bg_color bg_color_out" style={{ backgroundColor: "#fff" }}>
                                    <div className="col-md-4 d-flex justify-content-end w-100">
                                        <SideManuDept department={department} />
                                    </div>
                                    <br />
                                    <StaffDetails department={department} />
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

export default MECHFaculty;