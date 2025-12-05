import React, { useState } from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import Image1 from '../images/sustanabillity1.webp';
import Image2 from '../images/sustanabillity2.webp';
import Banner from '../images/banners/patents.webp';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AdvancedAppliation = () => {
    let tab1 = "A Floor Drain Trap with an Automatic Waste Cleaning System and Method Thereof",
        tab2 = "Automatic Sorting Trash Bin and Method Thereof"

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
                                            <h1 className="breadcrumbs-title">Sustainability</h1>
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
                                                    <div class="container">
                                                        <center> <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>A Floor Drain Trap with an Automatic Waste Cleaning System and Method Thereof </b> <br /></center>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Theme:</b><br />
                                                        <p className='contentsize'>An innovative work on wearable device and method for treatment of plantar fascia and more, particularly to a wearable device and method for performing reflexology to treat plantar fasciitis.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Background</b><br />
                                                        <p className='contentsize'>
                                                            Reflexology is a technique involving massage of strategic or reflex points on the feet, ears, and/or hands. Various organs or muscles of the human body are connected by nerves to certain reflex points or zones on the feet. The feet have reflex points of all organs, glands and parts of the body. Massage applied to these reflex points or zones may promote circulation of blood flow to the organs. Inadequate blood flow in the feet may result in causing diseases. Various types of wearable massaging devices have been proposed for stimulating soles of the user’s feet in order to promote blood circulation and treat the plantar fascia. Conventional wearable massaging devices with a function of stimulating and reflexing the reflective area of the soles laid on the bottom of the shoe are well known. In particular, the insoles of such shoes act on predetermined points of the foot sole by means of suitable projections. Few existing patent references attempted to address the problems caused due to usage of computing devices within an organization are explained as follows. </p>


                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Our Invention</b><br />
                                                        <p className='contentsize'>
                                                            A floor drain trap integrated with an automatic waste cleaning system is disclosed. The floor drain trap automatically cleans clogged waste at an outlet, thereby preventing accumulation of waste at the floor drain trap. The automatic waste cleaning system comprises a lever, a casing, a cylindrical cam, a roller, a ball bearing having a slot, a float buoyancy with a weight, and a submergible body. The cylindrical cam alternatively releases and contacts with the lever at the first end of the cylindrical cam due to slope of the first end upon rotation of the cylindrical cam, thereby creating a reciprocating motion of the lever through the slot to automatically push the clogged waste at the outlet of the floor drain trap without user intervention.
                                                        </p>


                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Potential Applications</b><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Commercial Kitchens and Restaurants</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Hospitals and Healthcare Facilities</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Public Bathrooms and Restrooms</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Swimming Pools and Water Parks</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Food Processing Plants</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Supermarkets and Grocery Stores</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Commercial Laundries</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Residential Building</span></li>
                                                            </ul>
                                                        </div>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> IP Status</b><br />
                                                        <p className='contentsize'>
                                                            The invention is the subject of a Granted Patent No. 495855 IP India<br></br><br></br>

                                                            Application No. 202241067271
                                                        </p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Inventors</b><br />
                                                        <p className='contentsize'>Dr. Papolu Satish</p>
                                                        <center>
                                                            <img src={Image1} />
                                                            <br />
                                                            A Floor Drain Trap with an Automatic Waste Cleaning System
                                                        </center>
                                                        <br />
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Contact us</b><br />
                                                        <p className='contentsize'>If you are interested in working with our researchers to develop any of our technologies, please contact the Aditya Commercialisation Team at:<b>dean_rc@adityauniversity.in</b></p>
                                                    </div>
                                                </TabPanel>


                                                <TabPanel>
                                                    <div class="container">
                                                        <center> <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Automatic Sorting Trash Bin and Method Thereof
                                                        </b> <br /></center>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Theme:</b><br />
                                                        <p className='contentsize'>An innovative trash processing and sorting devices, and in specific relates to a trash bin that automatically sorts pieces of waste and alerts the users for packed waste.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Background</b><br />
                                                        <p className='contentsize'>
                                                            Commercial, industrial, and residential consumers generate large amounts of throw-away and waste products that need to be handled and disposed of in an environmentally satisfactory manner. Today, much waste or waste material from stores, convenience stores, fast food chains, restaurants, retail locations, offices, schools, and commercial, institutional, and government environments or locations is discarded by individuals into waste receptacles provided onsite. These waste receptacles typically are fitted with disposable plastic bags, which can be closed when filled, removed from the waste receptacles, and then disposed of in waste containers (e.g. trash cans, garbage cans, and dumpsters) usually located outside the buildings and/or adjacent to the parking lots of these locations to facilitate removal by a waste disposal service.</p>


                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Our Invention</b><br />
                                                        <p className='contentsize'>
                                                            The present disclosure proposes a trash bin that automatically sorts and stores pieces of waste and alerts the users for packed waste. The trash bin comprises three chambers namely a receiving chamber a sorting chamber and several storage chambers. The chambers are positioned one upon the other. The proposed trash bin enables simple, fast, complex and efficient trash segregation. The proposed trash bin automatically determines pieces of waste such as paper, plastic, and electronic waste and sorts them out accordingly to the determined type. The proposed trash bin is configured with a self-cleaning operation for cleaning the storage chambers.
                                                        </p>


                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Potential Applications</b><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Household Waste Management</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>  Public Spaces and Offices</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Smart Cities and Urban Infrastructure</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Swimming Pools and Water Parks</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>  Enhanced Recycling in Offices</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Public places and Events</span></li>
                                                            </ul>
                                                        </div>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> IP Status</b><br />
                                                        <p className='contentsize'>
                                                            The invention is the subject of a Granted Patent 516813 IP India<br></br><br></br>

                                                            Application No. 202241059289 IP India
                                                        </p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Inventors</b><br />
                                                        <p className='contentsize'>Dr. S. Aruna Kumari</p>
                                                        <center>
                                                            <img src={Image2} />
                                                            <br />
                                                            Automatic Sorting Trash Bin
                                                        </center>
                                                        <br />
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Contact us</b><br />
                                                        <p className='contentsize'>If you are interested in working with our researchers to develop any of our technologies, please contact the Aditya Commercialisation Team at:<b>dean_rc@adityauniversity.in</b></p>
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