import React, { useState } from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import Image1 from '../images/healthcare1.webp';
import Image2 from '../images/healthcare2.webp';
import Image3 from '../images/healthcare3.webp';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Banner from '../images/banners/patents.webp';


const AdvancedAppliation = () => {
    let tab1 = "Wearable Device and Method for Treatment of Plantar Fasi",
        tab2 = "A Container with a Treatment System for Ion Balancing and Mineralizing Water and Method Thereof",
        tab3 = "An Automatic Sanitizer Dispensing Accessory for Door Handles"

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
                                            <h1 className="breadcrumbs-title">Healthcare</h1>
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
                                                    <Tab className='col-md-6'><button>{tab3}</button></Tab>
                                                    <Tab className='col-md-6'><button>{tab2}</button></Tab>
                                                </TabList>

                                                <TabPanel>
                                                <div class="container">
                                                        <center> <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Wearable Device and Method for Treatment of Plantar Fasi </b> <br /></center>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Theme:</b><br />
                                                        <p className='contentsize'>An innovative approach to treat plantar fasia using a wearable device.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Background</b><br />
                                                        <p className='contentsize'>
                                                        Reflexology is a technique involving massage of strategic or reflex points on the feet, ears, and/or hands. Various organs or muscles of the human body are connected by nerves to certain reflex points or zones on the feet. The feet have reflex points of all organs, glands and parts of the body. Massage applied to these reflex points or zones may promote circulation of blood flow to the organs. Inadequate blood flow in the feet may result in causing diseases.<br />
                                                            <br />
                                                            Various types of wearable massaging devices have been proposed for stimulating soles of the user’s feet in order to promote blood circulation and treat the plantar fascia. Conventional wearable massaging devices with a function of stimulating and reflexing the reflective area of the soles laid on the bottom of the shoe are well known. In particular, the insoles of such shoes act on predetermined points of the foot sole by means of suitable projections.
                                                        </p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Our Invention</b><br />
                                                        <p className='contentsize'>
                                                        This disclosure relates to a wearable device and method for performing reflexology to treat plantar fasciitis. The wearable device comprises a controller, several stimulation devices, and a sensor unit. The stimulation devices will have communication with the controller and is configured to apply pressure on a sole of a user's foot for stimulating reflex points or zones, thereby treating the plantar fasciitis. The controller may determine at least one therapy or treatment process for treating the plantar fasciitis
                                                        </p>


                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Potential Applications</b><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Individuals</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Hospitals</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Physiotherapy Centres </span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Gymnasiums</span></li>
                                                            </ul>
                                                        </div>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> IP Status</b><br />
                                                        <p className='contentsize'>
                                                        The invention is the subject of a Granted Patent No. 429108 IP India<br></br><br></br>

                                                        Application No. 202241043771
                                                        </p>
                                                      
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Inventors</b><br />
                                                        <p className='contentsize'>J Pavan, V Satyanarayana</p>
                                                        <center>
                                                            <img src={Image1} />
                                                            <br />
                                                         </center>
                                                        <br />
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Contact us</b><br />
                                                        <p className='contentsize'>If you are interested in working with our researchers to develop any of our technologies, please contact the Aditya Commercialisation Team at :<b>dean_rc@adityauniversity.in</b></p>
                                                    </div>
                                                </TabPanel>


                                                <TabPanel>
                                                <div class="container">
                                                        <center> <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>An Automatic Sanitizer Dispensing Accessory for Door Handles
                                                        </b> <br /></center>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Theme:</b><br />
                                                        <p className='contentsize'>An innovative work on self-energized sanitizing door handle and user’s hand by spraying disinfectant upon locking and unlocking the door, thereby maintaining hygiene environment and possibly eliminating the spread of infection diseases.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Background</b><br />
                                                        <p className='contentsize'>
                                                        Many surfaces that humans come into contact with are contaminated with bacteria and other germs that cause diseases. For example, such germs are commonly found on door handles. The nature of many types of handles, such as door handles and the like, requires that the handles are repeatedly contacted by different users. It is important for keeping hands sanitized, particularly after contact with a contaminated surface to prevent the spread of diseases. Individuals often seek to limit their exposure to germs and bacteria on public surfaces, such as door handles, for example, at hospitals in order to minimize the risk of contracting an illness.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Our Invention</b><br />
                                                        <p className='contentsize'>
                                                        The present disclosure proposes an automatic sanitizer dispensing accessory with door handles. In order to overcome the above deficiencies of the prior art, the present disclosure is to solve the technical problem to provide an accessory for automatically self-sanitizing the door handle by spraying disinfectant on door handle surfaces and user’s hand by using push button function, thereby maintaining hygiene environment and possibly eliminating the spread of infection diseases. The housing having one or more nozzles, which is in fluid communication with the conduit are configured to spray the disinfectant onto the door handle and the user’s hand upon rotating the door handle. The housing is detachably secured to the door using one or more fasteners include vacuum grips, adhesives, screws, nut and bolts. Further, objects and advantages of the present invention will be apparent from a study of the following portion of the specification, the claims, and the attached drawings.
                                                        </p>


                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Potential Applications</b><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Schools and Educational Institutions</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Restrooms</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Hospitals and Clinics</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Office Spaces</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Public Transportation</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Airports and railway Stations</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Stores and Shopping Centres</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Conferences and Exhibitions</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>  Sports Venues</span></li>
                                                            </ul>
                                                        </div>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> IP Status</b><br />
                                                        <p className='contentsize'>
                                                        The invention is the subject of a Granted Patent No. 501778 IP India<br></br><br></br>

                                                        Application No. 202241075066
                                                        </p>
                                                      
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Inventors</b><br />
                                                        <p className='contentsize'>P. Shiva Kumar</p>
                                                        <center>
                                                            <img src={Image2} />
                                                            <br />
                                                            Automatic Sanitizer Dispensing Accessory

                                                         </center>
                                                        <br />
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Contact us</b><br />
                                                        <p className='contentsize'>If you are interested in working with our researchers to develop any of our technologies, please contact the Aditya Commercialisation Team at :<b>dean_rc@adityauniversity.in</b></p>
                                                    </div>
                                                </TabPanel>



                                                <TabPanel>
                                                <div class="container">
                                                        <center> <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>A Container with a Treatment System for Ion Balancing and Mineralizing Water and Method Thereof
                                                        </b> <br /></center>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Theme:</b><br />
                                                        <p className='contentsize'>An innovative work to develop a container with a low-cost water treatment system for rapid ion balancing and water mineralization.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Background</b><br />
                                                        <p className='contentsize'>
                                                        Filtering and purifying water to make it suitable for drinking has been an ongoing challenge throughout the world, particularly in developing countries. Sources of drinking water can be naturally contaminated, as by biological impurities, and/or contaminated by chemical and other non-naturally occurring sources.<br></br><br></br>
                                                         
                                                        In existing technology, a multi-stage water purification device is disclosed. The multi-stage water purification device includes an untreated water compartment having an untreated water inlet and a treated water compartment formed from a resilient material. The compartments are segregated from one another. An outlet is in flow communication with the treated water compartment. A first unidirectional valve is disposed between the treated water compartment and the outlet and is configured to permit flow out of the treated water compartment.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Our Invention</b><br />
                                                        <p className='contentsize'>
                                                        In order to overcome the above deficiencies, the present disclosure is to solve the technical problem to provide a container with a low-cost water treatment system for rapid ion balancing and water mineralization. In the first step, the consumable water is received and stored in a water storage chamber. In the next step, a PH meter is used to detect a PH value of the consumable water to know the acidic or basic nature of the consumable water. In the next step, a control unit may be configured to operate the a number of valves of either a negative ion generating unit or a positive ions generating unit based on the PH values of the consumable water. <br></br><br></br>
                                                        

                                                        Later, in the next step, an ion-balancing system may be configured to neutralise the consumable water in the water storage chamber either by supplying negative ions or positive ions based on the PH values. In the next step, the filtering system may be configured to filter the neutralized water by utilizing a several filter layers. A water treated chamber may beconfigured to receive the neutralized water through several layers of filters from the water storage chamber. In the final step, a mineralizing system may be configured to balance the filtered water by mixing minerals in the storage chamber to obtain mineralized water for user consumption.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Potential Applications</b><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Household application</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Improved Drinking Water Quality</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Health Benefits</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Clinical Applications</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Enhanced Customer Experience</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Sustainability</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Workplace and Offices</span></li>
                                                            </ul>
                                                        </div>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> IP Status</b><br />
                                                        <p className='contentsize'>
                                                        The invention is the subject of a Granted Patent 498201 IP India.<br></br><br></br>

                                                        Application No. 202341004501 IP India
                                                        </p>
                                                      
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Inventors</b><br />
                                                        <p className='contentsize'>P Srihari Datta Bhima Raju</p>
                                                        <center>
                                                            <img src={Image3} />
                                                            <br />
                                                            Schematic view of a container with a treatment system

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