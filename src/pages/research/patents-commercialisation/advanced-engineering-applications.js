import React, { useState } from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import Image1 from '../images/virtual reality learning.webp';
import Image2 from '../images/Fractal Based Multi Input.webp';
import Banner from '../images/banners/patents.webp';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AdvancedAppliation = () => {
    let tab1 = "Virtual Reality Learning and Amusement System Based on Artificial Intelligence (AI) and IoT",
        tab2 = "Fractal Based Multi Input and Multi Output (MIMO) Antenna for Wideband Applications"

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
                                            <h1 className="breadcrumbs-title">Advanced Engineering Applications</h1>
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
                                                        <center> <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Virtual Reality Learning and Amusement System Based on Artificial Intelligence (AI) and IoT</b> <br /></center>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Theme:</b><br />
                                                        <p className='contentsize'>An innovative approach to develop a Virtual Reality Learning and Amusement System based on AI and IOT</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Background</b><br />
                                                        <p className='contentsize'>
                                                            The use of digital technologies to construct a realistic world is known as virtual reality (VR). In contrast to conventional user interfaces, virtual reality immerses the user in an experience. Users are submerged and able to connect with 3D environments rather than watching a screen in front of them. The machine is turned into a facilitator to this artificial reality by simulating as many senses as possible, including vision, sound, touch, and even smell<br />
                                                            <br />
                                                            Near-real VR environments are only limited by the abundance of material and low cost processing resources. Virtual Reality systems that are convincing need more than just graphics. A person sense of space is based on both hearing and vision. In reality, humans respond to audio cues faster than they do to visual cues. Accurate ambient sounds and spatial characteristics are needed to produce fully realistic Virtual Reality experiences.
                                                        </p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Our Invention</b><br />
                                                        <p className='contentsize'>
                                                            This disclosure relates to system that uses virtual reality to realize various learning and amusement space themes. The present invention provides integration of multiple functionalities which realizes cinematic panorama mode, a memory enrichment study room mode and thereby significantly reduces software and hardware implementation costs. This increases user immersion satisfaction and time consumption performance.<br />
                                                            <br />

                                                            The stereo projection unit with panoramic immersion connected with the centralized control and play system unit and includes a user module, a speech recognition sensor, hybrid high definition display device. The convertible and adjustable massage chair accepts virtual reality figure workstation animation scene, and performs the appropriate operation, wherein the client server sub module in the communication network unit is responsible for linking clients, choosing to send or receive data to the appropriate clients based on client forms, and the client sub module is responsible for connecting to the server sub module and receiving or transmitting interactive data from the server sub module based on the types of interactive equipment attached to the said client sub module and wherein the said system when operating in memory enrichment intelligent learning mode provides a database learning resource interface framework and a recommendation based learning framework
                                                        </p>


                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Potential Applications</b><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Household application</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Mineral Water Plants to improve Drinking Water Quality </span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Health Benefits </span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Clinical Applications </span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Enhanced Customer Experience</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Sustainability</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Workplace and Offices</span></li>
                                                            </ul>
                                                        </div>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> IP Status</b><br />
                                                        <p className='contentsize'>
                                                            The invention is the subject of a Granted Patent No. 2021103720 IP Australia <br />
                                                            Application No. 202141021933
                                                        </p>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Inventors</b><br />
                                                        <p className='contentsize'>Dr. S. Ramasree, Dr. A Vanathi</p>
                                                        <center><img src={Image1} />
                                                            <br />
                                                            Block diagram of the AI based virtual reality learning and amusement system </center>
                                                        <br />
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Contact us</b><br />
                                                        <p className='contentsize'>If you are interested in working with our researchers to develop any of our technologies, please contact the Aditya Commercialisation Team at :<b>dean_rc@adityauniversity.in</b></p>
                                                    </div>
                                                </TabPanel>


                                                <TabPanel>
                                                    <div class="container">
                                                        <center> <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Fractal Based Multi Input and Multi Output (MIMO) Antenna for Wideband Applications</b> <br /></center>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Theme:</b><br />
                                                        <p className='contentsize'>An innovative work on fractal based multiple-input multiple-output (MIMO) antenna that makes use of flawed substrate for deployment in wideband applications.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Background</b><br />
                                                        <p className='contentsize'>
                                                            Wireless communication systems have become pervasive and ubiquitous to the point where data rate and quality of service requirements have become comparable to those of wired communication systems. Although the 4G wireless communication system is presently undergoing intensive studies, the next generation communication i.e., fifth-generation (5G) is now drawing even more interest and attention. Because the universal standard for 5G communication system hasn’t been finalized, massive MIMO (multiple-input multiple-output) systems based on multi-antennas become one of the core technologies for 5G operation. Even though applying the massive MIMO technology to consumer devices can enhance its channel capacity, arranging a large number of antennas into a limited space will also lead to deteriorated isolations and efficiencies.<br />
                                                            <br />
                                                            Therefore, loading multiple antennas into consumer devices for 5G communication is presently a challenging topic for antenna engineers. Therefore, there is a need to design a multiple-input multiple-output (MIMO) antenna having characteristics that are within an acceptable range. There is also a need for designing a MIMO antenna having a simple design. There is a need to design a MIMO antenna with decreased dimensions compared to traditional antennas thereby producing symmetrical radiation from the radiating elements. There is a need to design an antenna that provides an increased bandwidth frequency with a small sized fractal antenna. There is a need to eliminate additional components such as capacitors, inductors and the like for designing the antenna.
                                                        </p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Our Invention</b><br />
                                                        <p className='contentsize'>
                                                            The present disclosure proposes a multiple input and multiple output (MIMO) antenna that makes use of flawed substrate for deployment in 5G sub: 6GHz applications. The fractal based MIMO antenna comprises a substrate a plurality of circular patches a primary layer a secondary layer a plurality of slots a feeding means and a wave port. The proposed miniaturized antenna is designed for wideband applications. The proposed low-cost MIMO antenna is uniquely designed with bore sight 10 patterns for high gain. The proposed antenna designs a defective ground structure (DGS) with a recess at the center to attain a wide bandwidth frequency. The proposed antenna occupies less space and provides high diversity and better radiation performance characteristics.
                                                        </p>


                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Potential Applications</b><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Improved Signal Coverage</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Increased Capacity </span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Multi-band Operation </span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Robustness to Environmental Conditions </span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Wireless Sensor Networks</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Satellite and Aerospace Communications</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Military and Defense</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>5G and Beyond</span></li>
                                                            </ul>
                                                        </div>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> IP Status</b><br />
                                                        <p className='contentsize'>
                                                            The invention is the subject of a Granted Patent No. 524363 IP India <br />
                                                            Application No. 202241067265
                                                        </p>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Inventors</b><br />
                                                        <p className='contentsize'>Dr. A. Tathababu, V. Satyanarayana</p>
                                                        <center><img src={Image2} />
                                                            <br />
                                                            Fractal Based MIMO Antenna </center>
                                                        <br />
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Contact us</b><br />
                                                        <p className='contentsize'>If you are interested in working with our researchers to develop any of our technologies, please contact the Aditya Commercialisation Team at: :<b>dean_rc@adityauniversity.in</b></p>
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