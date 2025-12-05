import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import Banner from '../images/banners/patents.webp';
import SideManu from './sidebar';
const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='patents'
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
                                            <h1 className="breadcrumbs-title">Overview</h1>
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
                                    <div class="container">
                                        {/* <center> <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> overview</b> <br /></center> */}
                                        <p className='contentsize'>Aditya University collaborates closely with organisations such as NIMSME, MSME, DST, and NRDC to commercialize research and innovation.  Aditya University is attempting to create firm relationships with investors and entrepreneurs to facilitate technology transfer as part of the creation of an innovation ecosystem.</p>

                                        <b style={{ fontSize: "20px", textAlign: "center" }}>Our Research Focus Areas are:</b><br />
                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> 1.Advanced Engineering Applications</b><br />
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Virtual Reality Learning And Amusement System Based On Artificial Intelligence (AI) And IoT.</span> </li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Fractal Based MultiInput and MultiOutput (MIMO) Antenna for Wideband Applications.</span> </li>

                                            </ul>
                                        </div>


                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> 2.Automobile Engineering</b><br />
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Performance and Emission Analysis of Direct Injection Diesel Engine Fuelled by Biodiesel with Al2O3 Nano Additives.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Development of Clutch based Mechanical oriented Side stand Retrieval system mechanism for 2 wheelers and Method thereof.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Brightness Enhancing and Super Water-Repellent Composition for Transparent Films.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>An Automatic Extendable Rear Seat for a Motorcycle.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>A Clutch Restriction System.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Hydraulic System Based Clutch Lever Restriction for Two-Wheeler and Method There of.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>An Accelerator Restriction System.</span></li>

                                            </ul>
                                        </div>

                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> 3.Renewable Energy</b><br />
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> A system for studying the performance of a photovoltaic panel under shady conditions.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Estimating Method for Optimal Placement of Distributed Generation Units.</span></li>

                                            </ul>
                                        </div>

                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> 4.Medical & Health</b><br />
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Wearable Device and Method for Treatment of Plantar Fasia.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> A Container with a Treatment System for Ion Balancing and Mineralizing Water and Method Thereof.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> An Automatic Sanitizer Dispensing Accessory for Door Handles.</span></li>
                                            </ul>
                                        </div>

                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> 5.Waste Management </b><br />
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> A Floor Drain Trap with an Automatic Waste Cleaning System and Method Thereof.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Automatic Sorting Trash Bin and Method Thereof.</span></li>
                                            </ul>
                                        </div>

                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> 6.Food Processing </b><br />
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Cooking System with Automatic Level Adjustment Mechanism of Containers and Method Thereof.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Sugarcane Harvesting Machine.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Bottle Configuration System for Preparing Beverages and Method Thereof.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> A Multi-Chambered Bottle Configuration for Preparing Beverages.</span></li>
                                            </ul>
                                        </div>
                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> 7.Technology for Disabled and Elderly </b><br />
                                        <div class="degree-list-container">
                                            <ul class="degree-list">
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> A Height Adjustable Seat Apparatus for a Toilet Commode and Method Thereof.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Multi-Chamber Mop Bucket for Cleaning and Squeezing Mop Head and Method Thereof.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> A Self Wringing Mop Stick and Method of Operating Same.</span></li>
                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> A Control System and Method for a Universal Height-Adjustable Seat Apparatus of a Toilet Commode.</span></li>
                                            </ul>
                                        </div>

                                    </div>
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

export default diploma_programs;