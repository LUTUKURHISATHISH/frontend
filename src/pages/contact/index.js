import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import Breadcrumb from '../../components/Breadcrumb';
import ContactMain from './ContactMain';
import ScrollToTop from '../../components/ScrollTop';

// Image
import Logo from '../../assets/images/logos/logo2.png';
import Banner from './content.webp';


const Contact = () => {
    return (
        <>
            <Header
                parentMenu='contact'
                menuCategoryEnable='enable'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
            />

            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner">
                <div className="react-breadcrumbs">
                       <div className="breadcrumbs-wrap">
                            <img className="desktop" src={Banner} alt="Breadcrumbs" />
                            <img className="mobile" src={Banner} alt="Breadcrumbs" />
                            <div className="breadcrumbs-inner">
                                <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Contact</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ContactMain />

                    {/* scrolltop-start */}
                    <ScrollToTop />
                    {/* scrolltop-end */}
                </div>
            </div>

            <Footer />

        </>
    );
}


export default Contact;

