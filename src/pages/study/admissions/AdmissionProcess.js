import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
// import Breadcrumb from '../../../components/Breadcrumb';
import AdmissionProcessMain from './AdmissionProcessMain';
import Banner from './images/admission_process.webp';
const  AdmissionProcess = () => {
    return (
        <>
            <Header
                parentMenu='study'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_image">
                <div class="react-wrapper-inner background_height">
                    {/* <Breadcrumb
                        pageTitle="Admission Process"
                    /> */}
                    <div className="react-breadcrumbs">
                        <div className="breadcrumbs-wrap">
                            <img className="desktop" src={Banner} alt="Breadcrumbs" />
                            <img className="mobile" src={Banner} alt="Breadcrumbs" />
                            <div className="breadcrumbs-inner">
                                <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Admission Process</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AdmissionProcessMain />
                </div>
            </div>
            <FooterTwo />
        </>
    );
}

export default  AdmissionProcess;

