import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import Fees from './fees-details';
import Banner from './images/fees.webp';
const Feedata = () => {
    return (
        <>
            <Header
                parentMenu='fees'
                menuCategoryEnable='enable'
            />

            <div class="react-wrapper background_image">
                <div class="react-wrapper-inner background_height">
                    <div className="react-breadcrumbs">
                        <div className="breadcrumbs-wrap">
                            <img className="desktop" src={Banner} alt="Breadcrumbs" />
                            <img className="mobile" src={Banner} alt="Breadcrumbs" />
                            <div className="breadcrumbs-inner">
                                <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Fees</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Fees />
                </div>
            </div>
            <FooterTwo />
        </>
    );
}

export default Feedata;

