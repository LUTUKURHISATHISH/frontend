import React, { useState } from 'react';
import ScrollToTop from '../../../components/ScrollTop';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Fees = () => {
    let tab1 = "Fee Structure for Indian Students",
        tab2 = "Fee Structure for NRI Students",
        tab3 = "Fee Structure for African Students"

    const tabStyle = 'nav nav-tabs';
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <>
            <div className="container - fluid">
                <div className="back__course__page_grid react-courses__single-page pb---16" >
                    <div class="react-wrapper">
                        <div class="react-wrapper-inner">
                            <div className="high_quality-section pt---50 pb---120">
                                <div className="container">
                                    <Tabs selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
                                        <div className="course-single-tab">
                                            <TabList className={tabStyle} >
                                                <Tab className='col-md-4'><button>{tab1}</button></Tab>
                                                <Tab className='col-md-4'><button>{tab2}</button></Tab>
                                                <Tab className='col-md-4'><button>{tab3}</button></Tab>


                                            </TabList>
                                            <div class="col-md-12  col-sm-12 col-12" style={{ backgroundColor: "#f8f9fa" }}>
                                                <TabPanel>
                                                    {/* Fee Structure for India Students */}
                                                    <div class="bg_color" style={{ backgroundColor: "#fff" }}>
                                                        <center><b class="text-center " data-wow-duration="0.3s" style={{ color: "#f05819", fontSize: "25px", textAlign: 'center' }}>FEE STRUCTURE FOR AY 2025-26 <br /></b></center>
                                                        <div class="table-responsive table-bordered table-striped" style={{ padding: "3px" }}>
                                                            <table className='table responsive'>
                                                                <thead>
                                                                    <tr>
                                                                        <th style={{ backgroundColor: "#00428A", color: '#fff', width: "50%", textAlign: "center" }}> UG PROGRAM</th>
                                                                        <th style={{ backgroundColor: "#00428A", color: '#fff', width: "50%", textAlign: "center" }}>Tuition fee per year in INR *<br /> </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>B.Tech - Computer Science & Engineering</td>
                                                                        <td className='center'>2,75,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Artificial Intelligence & Machine Learning</td>
                                                                        <td className='center'>2,25,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Information Technology</td>
                                                                        <td className='center'>1,75,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Computer Science & Engineering (Data Science)</td>
                                                                        <td className='center'>1,75,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Electronics & Communication Engineering</td>
                                                                        <td className='center'>1,75,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Electrical & Electronics Engineering</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Civil Engineering</td>
                                                                        <td className='center'>85,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Mechanical Engineering</td>
                                                                        <td className='center'>85,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Petroleum Engineering</td>
                                                                        <td className='center'>85,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Agricultural Engineering</td>
                                                                        <td className='center'>85,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Mining Engineering</td>
                                                                        <td className='center'>85,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>BBA</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>BBA - Digital Marketing</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>BBA - Business Analytics</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> B.Pharmacy</td>
                                                                        <td className='center'>2,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> Pharma-D</td>
                                                                        <td className='center'>2,50,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Sc - Forensic Science</td>
                                                                        <td className='center'>90,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Sc - Cyber Security & Digital Forensics</td>
                                                                        <td className='center'>90,000</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <b style={{ color: "#f05819", fontSize: "18px" }}>* Note</b>
                                                            <br />
                                                            <span>1. Admission Fee : ₹ 15,000 (Non-Refundable)</span><br />
                                                            <span>2. Aditya Scholastic Aptitude Test(ASAT) Fee  : ₹ 500 per attempt (Maximum 2 attempts)</span>
                                                            <br />
                                                            <table className='table responsive`'>

                                                                <thead>
                                                                    <tr>
                                                                        <th style={{ backgroundColor: "#00428A", color: '#fff', width: "50%", textAlign: "center" }}> PG PROGRAM</th>
                                                                        <th style={{ backgroundColor: "#00428A", color: '#fff', width: "50%", textAlign: "center" }}>Tuition fee per year in INR *<br /> </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>M.Tech - VLSI Design</td>
                                                                        <td className='center'>75,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Tech - Energy Science & Technology</td>
                                                                        <td className='center'>75,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Tech - Computer Science & Engineering</td>
                                                                        <td className='center'>75,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Tech - Power Electronics and Drives</td>
                                                                        <td className='center'>75,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Tech - Structural Engineering</td>
                                                                        <td className='center'>75,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Tech - CSE (AI & ML)</td>
                                                                        <td className='center'>75,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Master of Computer Applications</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Master of Business Administration</td>
                                                                        <td className='center'>1,00,000</td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Pharmacy - Pharmaceutics</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Pharmacy - Pharmaceutical Analysis</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    
                                                                    <tr>
                                                                        <td>M.Sc - Forensic Science</td>
                                                                        <td className='center'>85,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Sc - Cyber Security & Digital Forensics </td>
                                                                        <td className='center'>85,000</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>


                                                            <b style={{ color: "#f05819", fontSize: "18px" }}>* Note</b>
                                                            <br />
                                                            <span>1. Admission Fee : ₹ 15,000 (Non-Refundable)</span><br />
                                                            <span>2. Aditya Scholastic Aptitude Test(ASAT) Fee  : ₹ 500 per attempt (Maximum 2 attempts)</span>
                                                        </div>
                                                        <br />
                                                    </div>

                                                </TabPanel>
                                                <TabPanel>
                                                    {/* Fee Structure for NRI Students */}
                                                    <div class="bg_color" style={{ backgroundColor: "#fff" }}>
                                                        <center><b class="text-center " data-wow-duration="0.3s" style={{ color: "#f05819", fontSize: "25px", textAlign: 'center' }}>FEE STRUCTURE FOR AY 2025-26 <br /></b></center>
                                                        <div class="table-responsive table-bordered table-striped" style={{ padding: "3px" }}>
                                                            <table className='table responsive'>
                                                                <thead>
                                                                    <tr>
                                                                        <th style={{ backgroundColor: "#00428A", color: '#fff', width: "50%", textAlign: "center" }}> UG PROGRAM</th>
                                                                        <th style={{ backgroundColor: "#00428A", color: '#fff', width: "50%", textAlign: "center" }}>Tuition fee per year in INR *<br /> </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>B.Tech - Computer Science & Engineering</td>
                                                                        <td className='center'>2,75,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Artificial Intelligence & Machine Learning</td>
                                                                        <td className='center'>2,25,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Information Technology</td>
                                                                        <td className='center'>1,75,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Computer Science & Engineering (Data Science)</td>
                                                                        <td className='center'>1,75,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Electronics & Communication Engineering</td>
                                                                        <td className='center'>1,75,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Electrical & Electronics Engineering</td>
                                                                        <td className='center'>1,50,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Civil Engineering</td>
                                                                        <td className='center'>1,25,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Mechanical Engineering</td>
                                                                        <td className='center'>1,25,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Petroleum Engineering</td>
                                                                        <td className='center'>1,25,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Agricultural Engineering</td>
                                                                        <td className='center'>1,25,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Mining Engineering</td>
                                                                        <td className='center'>1,25,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>BBA</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>BBA - Digital Marketing</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>BBA - Business Analytics</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> B.Pharmacy</td>
                                                                        <td className='center'>2,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> Pharma-D</td>
                                                                        <td className='center'>2,50,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Sc - Forensic Science</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Sc - Cyber Security & Digital Forensics</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <b style={{ color: "#f05819", fontSize: "18px" }}>* Note</b>
                                                            <br />
                                                            <span>1. Admission Fee : ₹ 25,000 (Non-Refundable)</span><br />
                                                            <span>2. Eligibility Fee  : ₹25,000</span>
                                                            <br />
                                                            <table className='table responsive`'>

                                                                <thead>
                                                                    <tr>
                                                                        <th style={{ backgroundColor: "#00428A", color: '#fff', width: "50%", textAlign: "center" }}> PG PROGRAM</th>
                                                                        <th style={{ backgroundColor: "#00428A", color: '#fff', width: "50%", textAlign: "center" }}>Tuition fee per year in INR *<br /> </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>M.Tech - VLSI Design</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Tech - Energy Science & Technology</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Tech - Computer Science & Engineering</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Tech - Power Electronics and Drives</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Tech - Structural Engineering</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Tech - CSE (AI & ML)</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Master of Computer Applications</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Master of Business Administration</td>
                                                                        <td className='center'>1,00,000</td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Pharmacy (Pharmaceutics)</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Pharmacy (Pharmaceutical Analysis)</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    
                                                                    <tr>
                                                                        <td>M.Sc - Forensic Science</td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Sc - Cyber Security & Digital Forensics </td>
                                                                        <td className='center'>1,00,000</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>


                                                            <b style={{ color: "#f05819", fontSize: "18px" }}>* Note</b>
                                                            <br />
                                                            <span>1. Admission Fee : ₹ 25,000 (Non-Refundable)</span><br />
                                                            <span>2. Eligibility Fee  : ₹25,000</span>
                                                        </div>
                                                        <br />
                                                    </div>
                                                </TabPanel>

                                                <TabPanel>
                                                    {/* Fee Structure for Africa Students */}
                                                    <div class="bg_color" style={{ backgroundColor: "#fff" }}>
                                                        <center><b class="text-center " data-wow-duration="0.3s" style={{ color: "#f05819", fontSize: "25px", textAlign: 'center' }}>FEE STRUCTURE FOR AY 2025-26 <br /></b></center>
                                                        <div class="table-responsive table-bordered table-striped" style={{ padding: "3px" }}>
                                                            <table className='table responsive'>
                                                                <thead>
                                                                    <tr>
                                                                        <th style={{ backgroundColor: "#00428A", color: '#fff', width: "50%", textAlign: "center" }}>UG PROGRAM</th>
                                                                        <th style={{ backgroundColor: "#00428A", color: '#fff', width: "50%", textAlign: "center" }}>Tuition fee per year in USD *<br /> </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>B.Tech - Computer Science & Engineering</td>
                                                                        <td className='center'>6,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Artificial Intelligence & Machine Learning</td>
                                                                        <td className='center'>6,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Information Technology</td>
                                                                        <td className='center'>6,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Computer Science & Engineering (Data Science)</td>
                                                                        <td className='center'>6,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Electronics & Communication Engineering</td>
                                                                        <td className='center'>6,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Electrical & Electronics Engineering</td>
                                                                        <td className='center'>6,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Civil Engineering</td>
                                                                        <td className='center'>6,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Mechanical Engineering</td>
                                                                        <td className='center'>6,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Petroleum Engineering</td>
                                                                        <td className='center'>6,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Agricultural Engineering</td>
                                                                        <td className='center'>6,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Tech - Mining Engineering</td>
                                                                        <td className='center'>6,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>BBA</td>
                                                                        <td className='center'>2,500</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>BBA - Digital Marketing</td>
                                                                        <td className='center'>2,500</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>BBA - Business Analytics</td>
                                                                        <td className='center'>2,500</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> B.Pharmacy</td>
                                                                        <td className='center'>6,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> Pharma-D</td>
                                                                        <td className='center'>8,000</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Sc - Forensic Science</td>
                                                                        <td className='center'>2,500</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>B.Sc - Cyber Security & Digital Forensics</td>
                                                                        <td className='center'>2,500</td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                            <br />
                                                            <table className='table responsive`'>

                                                                <thead>
                                                                    <tr>
                                                                        <th style={{ backgroundColor: "#00428A", color: '#fff', width: "50%", textAlign: "center" }}> PG PROGRAM</th>
                                                                        <th style={{ backgroundColor: "#00428A", color: '#fff', width: "50%", textAlign: "center" }}>Tuition fee per year in USD*<br /> </th>

                                                                    </tr>
                                                                </thead>
                                                                <tbody>

                                                                    <tr>
                                                                        <td>M.Tech - VLSI Design</td>
                                                                        <td className='center'>3,500</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Tech - Energy Science & Technology</td>
                                                                        <td className='center'>3,500</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Tech - Computer Science & Engineering</td>
                                                                        <td className='center'>3,500</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Tech - Power Electronics and Drives</td>
                                                                        <td className='center'>3,500</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Tech - Structural Engineering</td>
                                                                        <td className='center'>3,500</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Tech - CSE (AI & ML)</td>
                                                                        <td className='center'>3,500</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Master of Computer Applications</td>
                                                                        <td className='center'>3,500</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Master of Business Administration</td>
                                                                        <td className='center'>3,500</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Pharmacy - Pharmaceutics</td>
                                                                        <td className='center'>3,500</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Pharmacy - Pharmaceutical Analysis</td>
                                                                        <td className='center'>3,500</td>
                                                                    </tr>
                                                                    
                                                                    <tr>
                                                                        <td>M.Sc - Forensic Science</td>
                                                                        <td className='center'>3,500</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>M.Sc - Cyber Security & Digital Forensics </td>
                                                                        <td className='center'>3,500</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>

                                                            <b style={{ color: "#f05819", fontSize: "18px" }}>* Note</b>
                                                            <br />
                                                            <span>1. One-time Registration Fee: 250 USD</span><br />
                                                            <span>2. AC Shared Hostel Fee with Food: 1700 USD</span><br />
                                                            <span>3. Includes bus transportation from the hostel to campus, shared A/C rooms, food, medical insurance, and visa assistance (only for hostel students).</span><br />
                                                            <span>4. Electricity Bill: Shared between students.</span><br />
                                                            <span>5. Uniform: Three pairs of uniform material provided in the first year.</span><br />
                                                            <span>6. Tuition Fee: Covers lab, library, and university fees.</span><br />
                                                            <span>7. Additional Fees: Exam fees and book fees are separate.</span><br />
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                            </div>
                                        </div>
                                    </Tabs>
                                </div>
                            </div><br></br>
                        </div>
                    </div>
                    <ScrollToTop />
                </div>
            </div>
        </>
    );
}

export default Fees;