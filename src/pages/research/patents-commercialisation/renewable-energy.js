import React, { useState } from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import SideManu from './sidebar';
import Banner from '../images/banners/patents.webp';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AdvancedAppliation = () => {
    let tab1 = "",
        tab2 = ""

    const tabStyle = 'nav nav-tabs';
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <>
            <Header
                parentMenu='patents'
                menuCategoryEnable='enable'
            />
            <div className="back__course__page_grid react-courses__single-page pb---16" >
                <div class="react-wrapper background_height">
                    <div class="react-wrapper-inner background_image">
                        <div className="react-breadcrumbs">
                            <div className="breadcrumbs-wrap">
                                <img className="desktop" src={Banner} alt="Breadcrumbs" />
                                <img className="mobile" src={Banner} alt="Breadcrumbs" />
                                <div className="breadcrumbs-inner">
                                    <div className="container">
                                        <div className="breadcrumbs-text">
                                            <h1 className="breadcrumbs-title">Renewable Energy</h1>
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
                                        <br />
                                        <Tabs selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
                                            <div className="course-single-tab">
                                                <TabList className={tabStyle} >
                                                    <Tab className='col-md-6'><button>{tab1}</button></Tab>
                                                    <Tab className='col-md-6'><button>{tab2}</button></Tab>
                                                </TabList>

                                                <TabPanel>
                                                    
                                                </TabPanel>


                                                <TabPanel>
                                                </TabPanel>

                                            </div>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ScrollToTop />
                    </div>
                </div>
            </div>
            <FooterTwo />
        </>
    );
}

export default AdvancedAppliation;