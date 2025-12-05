import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import Hostel from './hostel-details';
import Banner from './images/hostel.webp';

const  Hostelfacilities = () => {

    return (
        <>
            <Header
                parentMenu='study'
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
                                        <h1 className="breadcrumbs-title">Hostel Facilities</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Hostel />
                </div>
            </div>
            <FooterTwo />
        </>
    );
}

export default  Hostelfacilities;