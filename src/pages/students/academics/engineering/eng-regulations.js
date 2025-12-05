import React from 'react';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../components/ScrollTop';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Back from '../images/back.gif';


// import point from '../../../assets/images/icons/image.png';
import SideManu from './regulations-sidebar';
const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='academics'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="" />
                    <div className="high_quality-section pt---60 pb---80">
                        <div class="container ">
                            <SideManu />
                            {/* <center><Link to="/school-of-engineering">  <img src={Back} style={{width:'30px',marginTop: '-34px'}}/> </Link> </center> */}
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