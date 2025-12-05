import React from 'react';
import { Link } from 'react-router-dom';
import point from '../../../assets/images/icons/image.png';
import PatentsPublished from '../files/patents_published.pdf';
import ArticlesPublished from '../files/research_articles_published.pdf';


// import "../study.css"
const AdmissionProcessPart = () => {

    return (
        <div class=" about3__area p-relative pb---60" style={{ marginTop: "20px" }}>
            <div class="container bg_color">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="about__content">
                            <div>
                                <p className='contentsize'>We believe in the transformative power of research to shape a better future for society. Our Research & Development Cell serves as a dynamic center for exploration, innovation, and collaboration in the realms of science and technology
                                </p>
                                <b class="about__title wow animate__fadeInUp headingcolor" data-wow-duration="0.5s" style={{ fontSize: "20px" }}>Our Mission </b><br />
                                <p className='contentsize'>We are committed to conducting pioneering research that addresses pressing academic and societal challenges. Our mission is to generate innovative ideas and solutions that contribute to the betterment of humanity. </p>

                                <b class="about__title wow animate__fadeInUp headingcolor" data-wow-duration="0.5s" style={{ fontSize: "20px" }}>Support for Faculty and Students </b>

                                <p className='contentsize'>We provide extensive support for faculty and students to pursue research across all disciplines. From state-of-the-art facilities to mentorship from eminent researchers, we empower our academic community to push the boundaries of knowledge. Seed money grant is being provided to encourage the faculty to implement their ideas. Faculty and students are sponsored to participate in conferences and incentives are provided to faculty for their research publications </p>


                                <b class="about__title wow animate__fadeInUp headingcolor" data-wow-duration="0.5s" style={{ fontSize: "20px" }}>Research Excellence </b><br />
                                <p className='contentsize'>We offer unparalleled opportunities for staff and students to work alongside experts from industry, gaining invaluable insights and real-world experience. Our strong partnerships with leading companies ensure that our research remains relevant and impactful. We are open to collaboration with foreign universities and industries to foster innovation and address global challenges. This commitment fosters a culture of continuous learning and growth. </p>

                                <b class="about__title wow animate__fadeInUp headingcolor" data-wow-duration="0.5s" style={{ fontSize: "20px" }}>Innovation Ecosystem </b><br />
                                <p className='contentsize'>Aditya University is a thriving hub of research and innovation, with a robust ecosystem that encourages creativity and exploration. Our efforts have resulted in the publication of over 250 patents, demonstrating our dedication to translating ideas into tangible solutions for societal problems </p>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <b class="about__title wow animate__fadeInUp headingcolor" data-wow-duration="0.5s" style={{ fontSize: "20px" }}>Funded Projects </b><br />
                <div class="degree-list-container">
                    <ul class="degree-list">
                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Department of Science & Technology (DST) granted Rs. 473.60 Lakhs for the establishment of Technology Business Incubator.</span></li>
                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Coir Board under Ministry of MSME granted Rs. 341.38 Lakhs for the implementation of Coir Cluster at Amalapuram.</span></li>
                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Coir Board under Ministry of MSME granted Rs. 411.19 Lakhs for the implementation of Coir Cluster at Kadiyapulanka</span></li>
                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Department of Science & Technology (DST) granted Rs. 16.74 Lakh for the Project Bibliometric mapping of Solid Waste Management in India from 1986-2016.</span></li>
                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Science for Equity Empowerment and Development (SEED) Division under the Department of Science and Technology granted Rs. 226.0 Lakhs for Science Technology and Innovation Hub for Development of Scheduled Caste Communities in Amalapuram Mandal</span></li>
                        <li><span class="icon"><img className='pointimage' src={point} /></span><span>Ministry of MSME sanctioned Rs. 100 Lakhs for the establishment of IP Facilitation Center.</span></li>
                    </ul>
                </div> */}
                <br />
                <div style={{display:"none"}}>
                    <div>
                        <b class="about__title wow animate__fadeInUp headingcolor" data-wow-duration="0.5s" style={{ fontSize: "20px" }}>Patents Granted</b>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr class="tableizer-firstrow">
                                        <th style={{ textAlign: 'center', background: '#00428a', verticalAlign: 'middle', color: 'white' }}>S.No.</th>
                                        <th style={{ textAlign: 'center', background: '#00428a', verticalAlign: 'middle', color: 'white', width: '300px' }}>Patent Application No <br /> & Sanctioning Authority</th>
                                        <th style={{ textAlign: 'center', background: '#00428a', verticalAlign: 'middle', color: 'white' }}>Title of the Patent</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>1</td>
                                        <td>202141021933 <br /> IP Australia</td>
                                        <td>Virtual Reality Learning And Amusement System Based On Artificial Intelligence (AI) And IoT.</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>2</td>
                                        <td>2021105088 <br />IP Australia</td>
                                        <td>Performance and Emission Analysis of Direct Injection Diesel Engine Fuelled by Biodiesel with Al2O3 Nano Additives.</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>3</td>
                                        <td>20 2022 102 057.4 <br />Federal Republic of Germany</td>
                                        <td>A system for studying the performance of a photovoltaic panel under shady conditions.</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>4</td>
                                        <td>201841038721 <br />IP India</td>
                                        <td>Development of Clutch based Mechanical oriented Side stand Retrieval system mechanism for 2 wheelers and Method thereof.</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>5</td>
                                        <td>202241043771 <br />IP India</td>
                                        <td>Wearable Device and Method for Treatment of Plantar Fasia.</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>6</td>
                                        <td>202241052363<br />IP India</td>
                                        <td>Brightness Enhancing and Super Water-Repellent Composition for Transparent Films</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>7</td>
                                        <td>202241050493 <br />IP India</td>
                                        <td>Bottle Configuration System for Preparing Beverages and Method Thereof</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>8</td>
                                        <td>202241059286 <br />IP India</td>
                                        <td>An Automatic Extendable Rear Seat for a Motorcycle</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>9</td>
                                        <td>201941000382IP  <br />IP India</td>
                                        <td>A Clutch Restriction System</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>10</td>
                                        <td>202241067271 <br />IP India</td>
                                        <td>A Floor Drain Trap with an Automatic Waste Cleaning System and Method Thereof</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>11</td>
                                        <td>202341004501 <br />IP India</td>
                                        <td>A Container with a Treatment System for Ion Balancing and Mineralizing Water and Method Thereof</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>12</td>
                                        <td>202241075066 <br />IP India</td>
                                        <td>An Automatic Sanitizer Dispensing Accessory for Door Handles</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>13</td>
                                        <td>201941027270 <br />IP India</td>
                                        <td>Hydraulic System Based Clutch Lever Restriction for Two Wheeler and Method There of</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>14</td>
                                        <td>202241059287 <br />IP India</td>
                                        <td>Cooking System with Automatic Level Adjustment Mechanism of Containers and Method Thereof</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>15</td>
                                        <td>201841028064 <br />IP India</td>
                                        <td>Sugarcane Harvesting Machine</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>16</td>
                                        <td>202241059289 <br />IP India</td>
                                        <td>Automatic Sorting Trash Bin and Method Thereof</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>17</td>
                                        <td>202241067275 <br />IP India</td>
                                        <td>A Height Adjustable Seat Apparatus for a Toilet Commode and Method Thereof</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>18</td>
                                        <td>202241050495 <br />IP India</td>
                                        <td>Multi-Chamber Mop Bucket for Cleaning and Squeezing Mop Head and Method Thereof</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>19</td>
                                        <td>202241067265 <br />IP India</td>
                                        <td>Fractal Based MultiInput and MultiOutput (MIMO) Antenna for Wideband Applications</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>20</td>
                                        <td>202241075060 <br />IP India</td>
                                        <td>A Multi-Chambered Bottle Configuration for Preparing Beverages</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>21</td>
                                        <td>202141050440<br />IP India</td>
                                        <td>Estimating Method for Optimal Placement of Distributed Generation Unit</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>22</td>
                                        <td>201841039661<br />IP India</td>
                                        <td>An Accelerator Restriction System</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="campus_sec1 row">
                        <div className="col-lg-6">
                            <div className="text-center" style={{ padding: "5px" }}>
                                <Link to={ArticlesPublished} style={{ width: "100%" }} className="more-about" target="blank"> Click here for details of Research Articles Published  </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center" style={{ padding: "5px" }}>
                                <Link to={PatentsPublished} style={{ width: "100%" }} className="more-about" target="blank"> Click here for details of Patents Published </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdmissionProcessPart;