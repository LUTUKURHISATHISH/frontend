import React, { useState } from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import Image2 from '../images/automoblie1.webp';
import Image1 from '../images/automoblie2.webp';
import Image3 from '../images/automoblie3.webp';
import Image4 from '../images/automoblie4.webp';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Banner from '../images/banners/patents.webp';


const AdvancedAppliation = () => {
    let tab1 = "Development of Clutch Based Mechanical Oriented Side Stand Retrieval System Mechanism for 2 Wheelers and Method Thereof",
        tab2 = "Brightness Enhancing and Super Water-Repellent Composition for Transparent Films",
        tab3 = "An Automatic Extendable Rear Seat for a Motorcycle",
        tab4 = "A Clutch Restriction System"


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
                                            <h1 className="breadcrumbs-title">Automobile Engineering</h1>
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
                                                    <Tab className='col-md-6'><button>{tab3}</button></Tab>
                                                    <Tab className='col-md-6'><button>{tab4}</button></Tab>

                                                </TabList>

                                                <TabPanel>
                                                    <div class="container">
                                                        <center> <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Development of Clutch Based Mechanical Oriented Side Stand Retrieval System Mechanism for 2 Wheelers and Method Thereof</b> <br /></center>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Theme:</b><br />
                                                        <p className='contentsize'>An innovative approach to develop a Clutch Based Mechanical Oriented Side Stand Retrieval System Mechanism for 2 Wheelers.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Background</b><br />
                                                        <p className='contentsize'>
                                                            Motorized two wheelers are generally provided with a supporting stand on its side, attached pivotally to the wheeler. The term supporting stand refers to all the kind of arrangements such as a rod, bar on one side or arranged to be on both the sides of the two wheeler vehicle. The side stand is swung upwardly so that it does not interfere during the running of the two wheeler and is moved downwardly to rest the two wheeler. The two wheeler rests upon the supporting stand, while not in motion.<br />
                                                            <br />
                                                            If a two wheeler is started, with its side stand remaining upright, the side stand tends to impinge on the road surface, particularly when the two wheeler is turned to the side of the side stand, thus leading to the overturning of the motorcycle and leading to skidding of bike. This invention relates to a device for controlling the movement of the clutch, if the supporting stand is in a downward position, so as to avoid the motion of the two wheeler.
                                                        </p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Our Invention</b><br />
                                                        <p className='contentsize'>
                                                            The system of present invention restricts the movement of the clutch in case the supporting stand is in a downward direction. The three gear arrangement comprising of a top and bottom sector gear, capable of moving over a idler gear; a supporting stand attached to the bottom sector gear; a right angle lever attached to the top sector gear at one end and is closely placed to the clutch lever. When the supporting stand is in a downward position, the upper sector gear moves over the idler gear so as to move the right angle lever towards the clutch lever, thereby restricting the movement of the clutch.
                                                        </p>


                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Potential Applications</b><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Two wheeler assembling companies</span></li>
                                                            </ul>
                                                        </div>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> IP Status</b><br />
                                                        <p className='contentsize'>
                                                            The invention is the subject of a Granted Patent No. 411065 IP India
                                                        </p>
                                                        <p>Application No. 201841038721</p>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Inventors</b><br />
                                                        <p className='contentsize'>Dr P S Ranjit, Dr V V Kamesh,Dr V S N Ch Dattu</p>
                                                        <center><img src={Image2} />
                                                            <br />
                                                        </center>
                                                        <br />
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Contact us</b><br />
                                                        <p className='contentsize'>If you are interested in working with our researchers to develop any of our technologies, please contact the Aditya Commercialisation Team at :<b>dean_rc@adityauniversity.in</b></p>
                                                    </div>
                                                </TabPanel>


                                                <TabPanel>
                                                    <div class="container">
                                                        <center> <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Brightness Enhancing and Super Water-Repellent Composition for Transparent Films</b> <br /></center>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Theme:</b><br />
                                                        <p className='contentsize'>An innovative work on polymerizable compositions, and in specific relates to a composition for transparent films that provides enhanced brightness and extreme hydrophobic properties.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Background</b><br />
                                                        <p className='contentsize'>
                                                            Headlights or headlamps are one of the most essential features of an automotive vehicle. They play a very significant role in ensuring safety and drivability. Ever since the advent of the automobile, automotive manufacturers are striving to improve roadway illumination by various vehicle headlight configurations to improve the drivability and safety aspects of operating the vehicle in dark or day light or otherwise low visibility conditions such as night-time driving conditions. Driving during low visibility conditions leads to improper vision to the drivers and causes accidents. Numerous automotive vehicle headlight configurations and systems are proposed to automatically control the state of a vehicle's headlights. For example, many vehicles today include daytime running lights where the vehicle's headlights are illuminated continuously during daylight to make the vehicle more noticeable to other vehicles. Many vehicles also include headlights that automatically become active when low light level conditions are detected.<br />
                                                            <br />
                                                            Automotive headlamps, constructed using different components are likely affected by haziness, dirtiness, fogginess, cloudiness, or white patches caused by oxidation, chemical attack, water vapors, flying debris, and dirt. Yellowness is mostly caused by the liberation of lower-temperature volatile organic compounds due to thermal decomposition and oxidation of lower molecular weight additives present in the polymers. The liberation of lower temperature volatile organic components and their deposition onto the inside layer of the outer lens result in the yellowness issue in the headlamp. This yellowness issue makes the headlamps dull and decreases the brightness intensity.
                                                        </p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Our Invention</b><br />
                                                        <p className='contentsize'>
                                                            The present disclosure proposes a composition for transparent films that provides enhanced brightness and extreme hydrophobic properties. The composition comprises single crystal phosphorus a first monomer a second monomer a cross-linking agent a photo initiator and a copolymer solution. The composite solution is sprayed on the transparent film to achieve enhanced brightness and extreme hydrophobicity on the transparent film. The transparent film coated with the composite solution is utilized for automobile headlamps or any other light-emitting apparatus outer lens and thereof to enhance brightness and extreme hydrophobicity for the outer lens.<br />

                                                        </p>


                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Potential Applications</b><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Optical Films and Displays</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Automotive Industry</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Solar Panels and Photovoltaics</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Architectural Glass and Windows</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Consumer Electronics</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Aviation and Aerospace</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Packaging and Protective Films</span></li>
                                                            </ul>
                                                        </div>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> IP Status</b><br />
                                                        <p className='contentsize'>
                                                            The invention is the subject of a Granted Patent No.429811 IP India <br />
                                                            Application No. 202241052363
                                                        </p>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Inventors</b><br />
                                                        <p className='contentsize'>M S R Sekhar</p>
                                                        <center>
                                                            <img src={Image1} />
                                                            <br />
                                                            Brightness Enhancing and Super Water-Repellent Composition</center>
                                                        <br />
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Contact us</b><br />
                                                        <p className='contentsize'>If you are interested in working with our researchers to develop any of our technologies, please contact the Aditya Commercialisation Team at :<b>dean_rc@adityauniversity.in</b></p>
                                                    </div>
                                                </TabPanel>

                                                <TabPanel>
                                                    <div class="container">
                                                        <center> <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> An Automatic Extendable Rear Seat for a Motorcycle</b> <br /></center>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Theme:</b><br />
                                                        <p className='contentsize'>An innovative work to develop a motorcycle seat assembly, and in specific, relates to an automatic extendable rear seat attached to a motorcycle that provides comfort for the pillion rider while traveling.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Background</b><br />
                                                        <p className='contentsize'>
                                                            Long distance motorcycle travelling has become a popular recreational activity in developed countries. The passenger seat of a motorcycle is small and built to complement the motorcycle's sleek appearance. This form of function strategy improves the rider's aesthetic value while having significant negative effects on the passenger. In conventional rear seats, the seats do not provide comfort and security for the passengers or pillion riders during a ride or long rides.<br />
                                                            <br />
                                                            The existing seat extension devices do not provide support for long distance motorbike excursions that frequently result in the back pain and muscle tenderness. Therefore, there is a need for a rear seat that provides additional support and comfort for the pillion rider while travelling. There is a need for a rear seat that provides security for the passengers or pillion riders while adjusting in the seat during rides. There is a need for a rear seat mechanism that provides support for long distance motorbike excursions that frequently result in the back pain and muscle tenderness
                                                        </p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Our Invention</b><br />
                                                        <p className='contentsize'>
                                                            The present disclosure proposes an automatic extendable rear seat attached to a motorcycle that provides comfort for the pillion rider while traveling. The automatic seat extendable device comprises a housing, at least one extendable support at least one sensing unit and a control unit. The proposed rear seat supporting device enables seat extension horizontally and provides support to the thighs of the pillion rider. The proposed rear seat extendable device monitors the sitting position of the pillion rider. The proposed rear seat extendable device enables the motorcycle to start the engine based on the sitting position of the pillion rider. The proposed automatic rear seat extendable device allows the extension without affecting the vehicle balancing factor.
                                                        </p>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Potential Applications</b><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Enhanced Passenger Comfort</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Increased Safety</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Expanded Market</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Tourism and Leisure</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Urban Mobility Solutions</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Technology Integration</span></li>
                                                            </ul>
                                                        </div>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> IP Status</b><br />
                                                        <p className='contentsize'>
                                                            The invention is the subject of a Granted Patent No. 470047 IP India<br />
                                                            Application No. 202241059286
                                                        </p>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Inventors</b><br />
                                                        <p className='contentsize'>Chitturi S S N Murthy</p>
                                                        <center><img src={Image3} />
                                                            <br />
                                                            An Automatic Extendable Rear Seat</center>
                                                        <br />
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Contact us</b><br />
                                                        <p className='contentsize'>If you are interested in working with our researchers to develop any of our technologies, please contact the Aditya Commercialisation Team at:<b>dean_rc@adityauniversity.in</b></p>
                                                    </div>
                                                </TabPanel>

                                                <TabPanel>
                                                    <div class="container">
                                                        <center> <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> A Clutch Restriction System</b> <br /></center>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Theme:</b><br />
                                                        <p className='contentsize'>An innovative work to restrict the movement of a two-wheeler when supporting stand is in downward direction. More particularly, present invention, provides a clutch restriction system, which does not allow the movement of clutch and thereby, avoiding movement of two-wheeler, when the supporting stand is in downward direction.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Background</b><br />
                                                        <p className='contentsize'>
                                                            Motorized two wheelers are generally provided with a supporting stand on its side, attached pivotally to the wheeler. The term supporting stand refers to all the kind of arrangements such as a rod, bar on one side or arranged to be on both the sides of the two-wheeler vehicle. The side stand is swung upwardly so that it does not interfere during the running of the two-wheeler and is moved downwardly to rest the two-wheeler.<br />
                                                            <br />
                                                            The two-wheeler rests upon the supporting stand, while not in motion. If a two-wheeler is started, with its side stand remaining upright, the side stand tends to impinge on the road surface, particularly when the two-wheeler is turned to the side of the side stand, thus leading to the overturning of the motorcycle and leading to skidding of bike. This invention relates to a device for controlling the movement of the clutch, if the supporting stand is in a downward position, so as to avoid the motion of the two-wheeler.
                                                        </p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Our Invention</b><br />
                                                        <p className='contentsize'>
                                                            According to an embodiment of the invention, provided a clutch restriction system to avoid the pressing of clutch, when a two wheeler supporting stand is in downward direction, said system comprises a cord connected between a clutch lever and supporting stand; wherein the length of the cord is just enough to tighten the clutch lever when supporting stand is in downward direction and allowing the clutch lever to operate when the supporting stand is in upward direction.
                                                        </p>


                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Potential Applications</b><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Automobile Industry</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Manual Transmission Assistance</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Aerospace and Aviation</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Marine Applications</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Robotics and Automation</span></li>
                                                            </ul>
                                                        </div>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> IP Status</b><br />
                                                        <p className='contentsize'>
                                                            The invention is the subject of a Granted Patent No. 493844 IP India<br />
                                                            Application No. 201941000382
                                                        </p>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Inventors</b><br />
                                                        <p className='contentsize'>Dr. P. S. Ranjit | Dr. P. S. Ranjit | Dr. M Sreenivasa Reddy | Mr. D.V.S.S.Bhimesh Reddy | Mr. V S N Ch Dattu | Mr K L Kishore | Dr. K.V.S.R.Murthy</p>
                                                        <center><img src={Image4} />
                                                            <br />
                                                            Clutch Restriction System </center>
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