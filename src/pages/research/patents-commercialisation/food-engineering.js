import React, { useState } from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import Image1 from '../images/food-engineering1.webp';
import Image2 from '../images/food-engineering2.webp';
import Image3 from '../images/food-engineering3.webp';
import Image4 from '../images/food-engineering4.webp';
import Image5 from '../images/food-engineering5.webp';
import Banner from '../images/banners/patents.webp';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const AdvancedAppliation = () => {
    let tab1 = "Cooking System with Automatic Level Adjustment Mechanism of Containers and Method Thereof",
        tab2 = "Sugarcane Harvesting Machine",
        tab3 = "Bottle Configuration System for Preparing Beverages and Method Thereof",
        tab4 = "Multi-Chamber Mop Bucket for Cleaning and Squeezing Mop Head and Method Thereof"

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
                                            <h1 className="breadcrumbs-title">Food Engineering</h1>
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
                                                        <center> <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Cooking System with Automatic Level Adjustment Mechanism of Containers and Method Thereof
                                                        </b> <br /></center>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Theme:</b><br />
                                                        <p className='contentsize'>An innovative automatic cooking systems with simple level adjustment mechanism for ingredient containers to refill the ingredient containers.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Background</b><br />
                                                        <p className='contentsize'>
                                                            Cooking or cookery is the art or practice of preparing food for consumption with the use of heat. Cooking techniques and ingredients vary widely across, the world, reflecting unique environmental, economic, and cultural traditions. There are many methods of cooking, most of which have been known since antiquity. These include baking, roasting, frying, grilling, barbecuing, smoking, boiling, steaming, braising, and microwaving. The existing methods are generally used by the majority of people for cooking food. The cooking devices available today are compatible with these methods of cooking.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Our Invention</b><br />
                                                        <p className='contentsize'>
                                                            The present disclosure proposes a cooking system with automatic level adjustment mechanism of containers and method thereof. The cooking system comprises a rotating chamber with several ingredient storage containers a level adjusting mechanism and a control unit. The cooking system achieves the automatic level adjustment for ingredient containers to refill the ingredient containers. Further, the cooking system is configured with different ingredient containers which controllably dispense ingredients in a cooking pot based on the recipe. The proposed automatic cooking system provides an alert to a user when the ingredients quantity is less than the threshold quantity in the ingredient containers. The proposed automatic cooking system automatically lowers the empty ingredient containers and aids the user to refill the ingredient containers.
                                                        </p>


                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Potential Applications</b><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Home Cooking Appliances</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Commercial Kitchen Equipment</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Specialized Cooking Devices</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Improved Cooking Experience</span></li>
                                                            </ul>
                                                        </div>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> IP Status</b><br />
                                                        <p className='contentsize'>
                                                            The invention is the subject of a Granted Patent No. 511460 IP India<br></br><br></br>

                                                            Application No. 202241059287 IP India
                                                        </p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Inventors</b><br />
                                                        <p className='contentsize'>K Arun Bhaskar</p>
                                                        <center>
                                                            <img src={Image1} />
                                                            <br />
                                                            Cooking System with Automatic Level Adjustment
                                                        </center>
                                                        <br />
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Contact us</b><br />
                                                        <p className='contentsize'>If you are interested in working with our researchers to develop any of our technologies, please contact the Aditya Commercialisation Team at :<b>dean_rc@adityauniversity.in</b></p>
                                                    </div>
                                                </TabPanel>


                                                <TabPanel>
                                                    <div class="container">
                                                        <center> <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Sugarcane Harvesting Machine
                                                        </b> <br /></center>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Theme:</b><br />
                                                        <p className='contentsize'>An innovative work to develop a sugarcane harvesting machine</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Background</b><br />
                                                        <p className='contentsize'>
                                                            The sugarcane harvesting machine works on shear cutting mechanism. A rotary cutting blade is arranged at the bottom of the harvester to cut the bottom portion of the sugarcane. Due to the rotary motion engine power wheel the shaft will rotate. These shafts are connected to the bevel gears. The bevel gears transfer the rotary power to the top and bottom cutters. The bottom cutter has sharp cutting edges and about 140 sharp teeth. This will take 10 seconds to cut the sugarcane having a maximum diameter of 4 cm. The sugarcane harvesting machine helps to cut the height of sugarcane crop from ground level properly and minimize the crop damage. The sugarcane harvesting machine includes a 4 hp, diesel engine and gear box a frame for mounting reduction unit, cutting unit and transportation wheel.<br></br><br></br>

                                                            Effective cutting width of the sugarcane harvesting machine is 100 cm. Approximate weight of the cutting unit with the engine is 200 kg. Average field capacity of the sugarcane harvesting machine is 0.0132ha/h. Cutting is done with shear cutting blades. Power transmission is done through belt and pulley mechanism. Top cutting is directly connected to base cutting through bevel gear to avoid another power supply to the top cutting. Conveying of material is done by gravity conveying. Improved utility through mounting type system is achieved. Frame and machine are appropriately balanced during operation of the sugarcane harvesting machine.  </p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Our Invention</b><br />
                                                        <p className='contentsize'>
                                                            The present invention relates to a sugarcane harvesting machine. In one embodiment of the invention, the sugarcane harvesting machine works on shear cutting mechanism. A rotary cutting blade is arranged at the bottom of the harvester to cut the bottom portion of the sugarcane. Due to the rotary motion engine power wheel the shaft will rotate. These shafts are connected to the bevel gears. The bevel gears transfer the rotary power to the top and bottom cutters. The bottom cutter has sharp cutting edges and about 140 sharp teeth. This will take 10 seconds to cut the sugarcane having a maximum diameter of 4 cm. The sugarcane harvesting machine helps cut the height of sugarcane crop from ground level properly and minimize the crop damage.
                                                        </p>


                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Potential Applications</b><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Harvesting of Sugarcane</span></li>
                                                            </ul>
                                                        </div>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> IP Status</b><br />
                                                        <p className='contentsize'>
                                                            The invention is the subject of a Granted Patent No. 516165 IP India<br></br><br></br>

                                                            Application No. 201841028064
                                                        </p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Inventors</b><br />
                                                        <p className='contentsize'>Rahul Kumar Gupta | Palagani Vamsi Krishna | Sikharam Siva Sai | Konatham Sivaji | Aadi MahesWara Rao | Manam Naveen Kumar Narayana</p>
                                                        <center>
                                                            <img src={Image2} />
                                                            <br />
                                                            Sugarcane Harvesting Machine
                                                        </center>
                                                        <br />
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Contact us</b><br />
                                                        <p className='contentsize'>If you are interested in working with our researchers to develop any of our technologies, please contact the Aditya Commercialisation Team at :<b>dean_rc@adityauniversity.in</b></p>
                                                    </div>
                                                </TabPanel>



                                                <TabPanel>
                                                    <div class="container">
                                                        <center> <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Bottle Configuration System for Preparing Beverages and Method Thereof
                                                        </b> <br /></center>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Theme:</b><br />
                                                        <p className='contentsize'>An innovative work on beverage containers and in specific relates to a bottle configuration system that facilitates a user to interact and select desired ingredients in the bottle and controls multiple components in the bottle to prepare various beverages.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Background</b><br />
                                                        <p className='contentsize'>
                                                            Water consumption is the primary way humans hydrate themselves. Often, people carry around water bottles so that they can be hydrated when they may not be near a water source. In specific, water bottles are used to store different beverages and to serve as a vessel for bringing beverages to their mouths. Sometimes, water bottles are designed to be reusable and are more eco-friendly than disposable plastic water bottles. Such reusable water bottles typically have a bottle portion for holding a liquid and a cap for covering the opening of the bottle portion. Some water bottles have a cap that is separate from the water bottle and some have a cap that is connected to the water bottle by a strap. Some water bottles may have a spout on the cap that can be opened for drinking or for pouring liquid out of the bottle. Some bottles have filters to remove contaminants and to improve the taste of the drinking water.<br></br><br></br>

                                                            The filters may use ion resin exchange to reduce lead, copper, mercury and other impurities from drinking water. Later, portable refillable bottles are widely used for water and other beverages for health and hydration. In addition, vitamins, health and dietary supplements are available in liquids, powders, gels and solid tablets to consume with water, and storage for the supplements is also available in such bottle configurations. However, one limitation of such bottles is that the consumable contents remain constant and unchanged except for changes in quantity as the contents are consumed and replenished.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Our Invention</b><br />
                                                        <p className='contentsize'>
                                                            The present disclosure proposes a bottle configuration system that facilitates a user to interact and select desired ingredients in the bottle and controls multiple components in the bottle to prepare various beverages. The bottle configuration system comprises a computing module and a controller. The proposed system assists the user in preparing desired beverages. The system analyses various benefits of ingredients present in the bottle for preparing different beverages. The system assists the user by displaying analysed benefits of multiple ingredients or combinations of ingredients present in the bottle. Further, the proposed system aids the user to select healthy beverages based on the benefits of multiple ingredients.
                                                        </p>


                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Potential Applications</b><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Customizable Beverage Dispensing</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Automated Cocktail Making</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Home Beverage Stations</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Commercial Beverage Production</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Event Catering</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Health and Nutrition Industry</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Hotels and Hospitality</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Educational Institutions</span></li>
                                                            </ul>
                                                        </div>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> IP Status</b><br />
                                                        <p className='contentsize'>
                                                            The invention is the subject of a Granted Patent No. 434135 IP India<br></br><br></br>

                                                            Application No. 202241050493
                                                        </p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Inventors</b><br />
                                                        <p className='contentsize'>Dr. A. Vanathi</p>
                                                        <center>
                                                            <img src={Image3} />
                                                            <img style={{ height: "500px" }} src={Image4} />
                                                            <br />
                                                            Bottle Configuration System for Preparing Beverages
                                                        </center>
                                                        <br />
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Contact us</b><br />
                                                        <p className='contentsize'>If you are interested in working with our researchers to develop any of our technologies, please contact the Aditya Commercialisation Team at :<b>dean_rc@adityauniversity.in</b></p>
                                                    </div>
                                                </TabPanel>

                                                <TabPanel>
                                                    <div class="container">
                                                        <center> <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Multi-Chamber Mop Bucket for Cleaning and Squeezing Mop Head and Method Thereof
                                                        </b> <br /></center>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}>Theme:</b><br />
                                                        <p className='contentsize'>An innovative work on mop buckets, and in specific relates to a mop bucket assembly with plurality of chambers and plurality of squeezers to clean and squeeze the mop head efficiently every time while mopping the floor.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Background</b><br />
                                                        <p className='contentsize'>
                                                            Cleaning tasks such as mopping or sponging surfaces often involve the use of a receptacle such as a bucket for holding water and cleaning solutions. Mop is a tool used for cleaning floors. It consists of a bundle of strings or yarn, or a piece of cloth, sponge, or some other absorbent material that is fixed to a pole that acts as a handle. Homemade mops were made from old pieces of cloth and the so-called “mop nail” – a long nail with a wide flat head that holds the pieces and then nailed into a handle.<br></br><br></br>

                                                            Further, a sponge mop that used a lever and flat strip of metal to press against the wet mop and squeeze it dry. This automatic mop eliminated the need to bend over and wring the mop repeatedly by hand. Typically for mopping the floor a user will submerge a mop or sponge in a bucket filled with cleaning solution, remove the excess solution by squeezing or wringing the mop or sponge, and apply the mop or sponge to the surface to be cleaned. Repetitive mopping motions are applied to the surface until an additional solution is needed or the mop or sponge is saturated with dirt and debris. For repeating the process, the sponge or mop is re-submerged into the bucket.</p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Our Invention</b><br />
                                                        <p className='contentsize'>
                                                            The present disclosure proposes a mop bucket assembly with a plurality of chambers and a plurality of squeezers to clean and squeeze the mop head efficiently after mopping the floor. The multi-chamber mop bucket comprises an additive chamber a primary squeezing chamber a reservoir chamber and a secondary squeezing chamber. The multi- chamber mop bucket facilities effective cleaning and squeezing of the mop head. The multi-chamber mop bucket is equipped with a handle and a plurality of wheels to enable easy movement of the mop bucket while mopping the floor. The proposed multi-chambered mop bucket facilitates the use of a fresh and clean mop every time while mopping the floor to avoid the spread of additional dirt and microorganisms.
                                                        </p>


                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Potential Applications</b><br />
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Residential Cleaning</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Industrial Facilities</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Food Service Industrys</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>  Retail Stores</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>  Educational Institutions</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Healthcare Facilities</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Commercial Cleaning Services</span></li>
                                                            </ul>
                                                        </div>
                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> IP Status</b><br />
                                                        <p className='contentsize'>
                                                            The invention is the subject of a Granted Patent No. 523615 IP India<br></br><br></br>

                                                            Application No. 202241050493
                                                        </p>

                                                        <b style={{ color: "#f05819", fontSize: "20px", textAlign: "center" }}> Inventors</b><br />
                                                        <p className='contentsize'>Dr. M. Raja Babu</p>
                                                        <center>
                                                            <img src={Image5} />
                                                            <br />
                                                            Model diagram of Multi-Chamber Mop Bucket for Cleaning
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