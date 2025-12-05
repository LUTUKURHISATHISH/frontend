import React, { useState } from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import Image1 from '../images/technology1.webp';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Banner from '../images/banners/patents.webp';
const AdvancedAppliation = () => {
    let tab1 = "A Height Adjustable Seat Apparatus for a Toilet Commode and Method Thereof"


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
                                            <h1 className="breadcrumbs-title">Technology for Disabled and Elderly</h1>
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
                                                    <Tab className='col-md-12'><button>{tab1}</button></Tab>
                                                    

                                                </TabList>

                                                <TabPanel>
                                                    <div class="container">
                                                        <center> <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>A Height Adjustable Seat Apparatus for a Toilet Commode and Method Thereof
                                                        </b> <br /></center>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Theme:</b><br />
                                                        <p className='contentsize'>An innovative toilet seat accessories, and in specific, relates to a height adjustable toilet seat apparatus designed for elderly and physically challenged people to sit conveniently.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Background</b><br />
                                                        <p className='contentsize'>
                                                            Typically, toilet seats are fixed at a certain angle height which is suitable for physically able people, however such standard toilet seats may not be suitable for disabled or elderly persons or children in the same household. Conventional toilet seats are characteristically low to the ground, making it very difficult for physically disabled or illness weakened persons to use the toilet without the assistance of a nurse or other individual.<br></br><br></br>

                                                            Therefore, there is a need for a novel toilet seat apparatus that can provide height and angle adjustment, a seat that can be mounted and fit on any commode shape, a self-cleaning facility and facility to easily unlock and remove from the commode.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Our Invention</b><br />
                                                        <p className='contentsize'>
                                                            An apparatus and method for locking and adjusting height and angle of a toilet seat for a toilet commode is disclosed. The apparatus comprises a locking unit an adjustable unit and a seating unit. The height adjustable toilet seat apparatus is designed for elderly and physically challenged people to sit conveniently. The proposed apparatus fits on any type of commode design such as elliptical, rectangular, square, and circular-shaped commodes. The apparatus is self-cleaned and requires minimal water consumption. The proposed apparatus can enable height and angle adjustment for allowing various elevated positions. The proposed apparatus is used for raising and lowering a toilet seat that can be easily adapted to existing toilet hardware and be easily operated by children, elderly people and physically challenged people.
                                                        </p>


                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Potential Applications</b><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Post-Surgery or Injury</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Rehabilitation Centres</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Customizable Height</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>  Assisted Living Facilities</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Stability and Safety Features</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Compatibility and Installation</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Improved Comfort and Safety</span></li>
                                                            </ul>
                                                        </div>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> IP Status</b><br />
                                                        <p className='contentsize'>
                                                            The invention is the subject of a Granted Patent 518102 IP India<br></br><br></br>

                                                            Application No. 202241067275
                                                        </p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Inventors</b><br />
                                                        <p className='contentsize'>V. S. N. Ch. Dattu</p>
                                                        <center>
                                                            <img src={Image1} />
                                                            <br />
                                                            A Height Adjustable Seat Apparatus for a Toilet Commode
                                                        </center>
                                                        <br />
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Contact us</b><br />
                                                        <p className='contentsize'>If you are interested in working with our researchers to develop any of our technologies, please contact the Aditya Commercialisation Team at :<b>dean_rc@adityauniversity.in</b></p>
                                                    </div>
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