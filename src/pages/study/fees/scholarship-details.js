import React, { useState } from 'react';
import ScrollToTop from '../../../components/ScrollTop';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Fees = () => {
    let tab1 = "Scholarship for indian Students",
        tab2 = "Scholarship for NRI Students"


    const tabStyle = 'nav nav-tabs';
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <>
            <div className="container - fluid">
                <div className="back__course__page_grid react-courses__single-page pb---16" >
                    <div class="react-wrapper">
                        <div class="react-wrapper-inner">
                            <div className="high_quality-section pt---110 pb---120">
                                <div className="container">
                                    <div class="row m-0">
                                        <Tabs selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
                                            <div className="course-single-tab">
                                                <TabList className={tabStyle} >
                                                    <Tab className='col-md-6'><button>{tab1}</button></Tab>
                                                    <Tab className='col-md-6'><button>{tab2}</button></Tab>
                                                </TabList>
                                                <div class="col-md-12  col-sm-12 col-12" style={{ backgroundColor: "#f8f9fa" }}>
                                                    <TabPanel>
                                                        <div class="about__content">
                                                            <div style={{ padding: "2%" }} class="table-responsive">
                                                                <table class="table responsive">
                                                                    <thead>
                                                                        <tr>
                                                                            <th colSpan={2} style={{ backgroundColor: "#0c6ab0", color: "white", textAlign: "center" }}>Scholarship(B.Tech)</th>
                                                                            <th colSpan={5} style={{ backgroundColor: "#0c6ab0", textAlign: "center", color: "white" }}>% of Scholarship</th>

                                                                        </tr>
                                                                        <tr>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>Mode ofselection</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>PROGRAME</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>100%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>75%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>50%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>25%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>10%</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody style={{ textAlign: "center" }}>
                                                                        <tr>
                                                                            <td style={{ verticalAlign: "middle" }} rowSpan={2}>ASAT(%)</td>
                                                                            <td>CSE , IT , AI&ML , DS , ECE</td>
                                                                            <td>-</td>
                                                                            <td>&gt; 97</td>
                                                                            <td>95-96.9</td>
                                                                            <td>92-94.9</td>
                                                                            <td>90-91.9</td>
                                                                        </tr>
                                                                        <tr>

                                                                            <td>CE, EEE, ME, Ag.E, MING.E, PT</td>
                                                                            <td>-</td>
                                                                            <td>&gt; 95</td>
                                                                            <td>92-94.9</td>
                                                                            <td>90-91.9</td>
                                                                            <td>85-89.9</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style={{ verticalAlign: "middle" }} rowSpan={2}>JEE(Percentile)</td>
                                                                            <td>CSE , IT , AI&ML , DS , ECE</td>
                                                                            <td>&gt; 98</td>
                                                                            <td>&gt; 95</td>
                                                                            <td>90-94.9</td>
                                                                            <td>80-89.9</td>
                                                                            <td>70-79.9</td>
                                                                        </tr>
                                                                        <tr>

                                                                            <td>CE, EEE, ME, Ag.E, MING.E, PT</td>
                                                                            <td>&gt; 95</td>
                                                                            <td>&gt; 90</td>
                                                                            <td>80-89.9</td>
                                                                            <td>70-79.9</td>
                                                                            <td>65-69.9</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style={{ verticalAlign: "middle" }} rowSpan={2}>ESPCET (AP & TS) RANK</td>
                                                                            <td>CSE ,IT , AI&ML , DS , ECE</td>
                                                                            <td>-</td>
                                                                            <td>1-5000</td>
                                                                            <td>5001-10000</td>
                                                                            <td>10001-25000</td>
                                                                            <td>25001-50000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>CE, EEE, ME, Ag.E, MING.E, PT</td>
                                                                            <td>-</td>
                                                                            <td>1-10000</td>
                                                                            <td>10001-25000</td>
                                                                            <td>25001-50000</td>
                                                                            <td>50001-75000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style={{ verticalAlign: "middle" }} rowSpan={2}>BIE (AP & TS ) (%)</td>
                                                                            <td>CSE , IT , AI&ML , DS , ECE</td>
                                                                            <td>-</td>
                                                                            <td>&gt; 98</td>
                                                                            <td>96-97.9</td>
                                                                            <td>94-95.9</td>
                                                                            <td>92-93.9</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>CE, EEE,ME,Ag.E,MING.E,PT</td>
                                                                            <td>-</td>
                                                                            <td>&gt; 95</td>
                                                                            <td>92.5-95</td>
                                                                            <td>90-92.5</td>
                                                                            <td>85-89.9</td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td style={{ verticalAlign: "middle" }} rowSpan={2}>CBSE B(Marks)</td>
                                                                            <td>CSE , IT , AI&ML , DS , ECE</td>
                                                                            <td>-</td>
                                                                            <td>&gt; 450</td>
                                                                            <td>425-449</td>
                                                                            <td>400-424</td>
                                                                            <td>375-399</td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td>CE, EEE, ME, Ag.E, MING.E, PT</td>
                                                                            <td>-</td>
                                                                            <td>&gt; 425</td>
                                                                            <td>400-425</td>
                                                                            <td>375-399</td>
                                                                            <td>350-374</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>SPORTS</td>
                                                                            <td>All Disciplines</td>
                                                                            <td>International Level</td>
                                                                            <td>National Level</td>
                                                                            <td>-</td>
                                                                            <td>-</td>
                                                                            <td>-</td>
                                                                        </tr>

                                                                    </tbody>
                                                                </table>
                                                                <table class="table responsive">
                                                                    <thead>
                                                                        <tr>
                                                                            <th colSpan={2} style={{ backgroundColor: "#0c6ab0", color: "white", textAlign: "center" }}>Scholarship(B.Pharm, Pharma D)</th>
                                                                            <th colSpan={5} style={{ backgroundColor: "#0c6ab0", textAlign: "center", color: "white" }}>% of Scholarship</th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>Mode ofselection</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>PROGRAME</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>100%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>75%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>50%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>25%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>10%</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                        <tr>
                                                                            <td>ASAT(%)</td>
                                                                            <td rowSpan={4}>B.Pharmacy pharma-D</td>
                                                                            <td>-</td>
                                                                            <td>&gt; 97</td>
                                                                            <td>95-96.9</td>
                                                                            <td>92-94.9</td>
                                                                            <td>90-91.9</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>EAPCET (AP&TS)(Rank)</td>
                                                                            <td>-</td>
                                                                            <td>1 to 4000</td>
                                                                            <td>4001  - 10000</td>
                                                                            <td>10001 - 25000</td>
                                                                            <td>25001 - 35000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>NEET</td>
                                                                            <td>-</td>
                                                                            <td>1 to 10000</td>
                                                                            <td>10001 - 15000</td>
                                                                            <td>15001 - 25000</td>
                                                                            <td>25001 - 35000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Sports</td>
                                                                            <td>International Level Participation</td>
                                                                            <td>National Level Participation</td>
                                                                            <td>-</td>
                                                                            <td>-</td>
                                                                            <td>-</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <table class="table responsive">
                                                                    <thead>
                                                                        <tr>
                                                                            <th colSpan={2} style={{ backgroundColor: "#0c6ab0", color: "white", textAlign: "center" }}>Scholarship[B.Sc , BBA]</th>
                                                                            <th colSpan={5} style={{ backgroundColor: "#0c6ab0", textAlign: "center", color: "white" }}>% of Scholarship</th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>Mode ofselection</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>PROGRAME</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>25%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>20%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>15%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', width: "8%", textAlign: "center" }}>10%</th>

                                                                        </tr>
                                                                    </thead>
                                                                    <tbody style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                        <tr>
                                                                            <td>ASAT(%)</td>
                                                                            <td rowSpan={4}>B.Sc (Forensic Science)<br></br> B.Sc (Cyber Security  & Digital Forensics) <br></br>BBA (All Specializations)</td>
                                                                            <td>-</td>
                                                                            <td>&gt; 95</td>
                                                                            <td>92-94.9</td>
                                                                            <td>90-91.9</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>BIE (AP&TS)(%)</td>
                                                                            <td>-</td>
                                                                            <td>&gt; 95</td>
                                                                            <td>85-94.9</td>
                                                                            <td>75-84.9</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>CBSE Marks</td>
                                                                            <td>-</td>
                                                                            <td>&gt; 475</td>
                                                                            <td>425-474</td>
                                                                            <td>375-424</td>

                                                                        </tr>
                                                                        <tr>
                                                                            <td>Sports</td>
                                                                            <td>International Level Participation</td>
                                                                            <td>National Level Participation</td>
                                                                            <td>-</td>
                                                                            <td>-</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </TabPanel>
  {/*  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                                                    <TabPanel>
                                                        <div class="about__content">
                                                            <div style={{ padding: "2%" }} class="table-responsive table-bordered table-striped ">
                                                                <table class="table responsive">

                                                                    <thead>
                                                                        <tr>
                                                                            <th colSpan={2} style={{ backgroundColor: "#0c6ab0", color: "white", textAlign: "center" }}>Scholarship(B.Tech)</th>
                                                                            <th colSpan={5} style={{ backgroundColor: "#0c6ab0", textAlign: "center", color: "white" }}>% of Scholarship</th>
                                                                        </tr>

                                                                        <tr>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "8%" }}>Mode of selection</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "14%" }}>PROGRAME</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "8%" }}>100%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "8%" }}>75%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "8%" }}>50%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "8%" }}>25%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "8%" }}>10%</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                        <tr>
                                                                            <td style={{ verticalAlign: "middle" }} rowSpan={2}>ASAT(%)</td>
                                                                            <td>CSE , IT , AI&ML , DS , ECE</td>
                                                                            <td>-</td>
                                                                            <td>&gt; 97</td>
                                                                            <td>95-96.9</td>
                                                                            <td>92-94.9</td>
                                                                            <td>90-91.9</td>
                                                                        </tr>
                                                                        <tr>

                                                                            <td>CE, EEE, ME, Ag.E, MING.E, PT</td>
                                                                            <td>-</td>
                                                                            <td>&gt; 95</td>
                                                                            <td>92.94.9</td>
                                                                            <td>90-91.9</td>
                                                                            <td>85-89.9</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style={{ verticalAlign: "middle" }} rowSpan={2}>JEE (Percentile)</td>
                                                                            <td>CSE , IT , AI&ML , DS , ECE</td>
                                                                            <td>&gt; 98</td>
                                                                            <td>&gt; 95</td>
                                                                            <td>90-94.9</td>
                                                                            <td>80-89.9</td>
                                                                            <td>70-79.9</td>
                                                                        </tr>
                                                                        <tr>

                                                                            <td>CE, EEE, ME, Ag.E, MING.E, PT</td>
                                                                            <td>&gt; 95</td>
                                                                            <td>&gt; 90</td>
                                                                            <td>80-89.9</td>
                                                                            <td>70-79.9</td>
                                                                            <td>65-69.9</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>CBSE(Marks)</td>
                                                                            <td>All Disciplines</td>
                                                                            <td>-</td>
                                                                            <td>&gt; 450</td>
                                                                            <td>425-449</td>
                                                                            <td>400-424</td>
                                                                            <td>375-399</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Sports</td>
                                                                            <td>All Disciplines</td>
                                                                            <td>International Level Participation</td>
                                                                            <td>National Level Participation</td>
                                                                            <td>-</td>
                                                                            <td>-</td>
                                                                            <td>-</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <table class="table responsive">
                                                                    <thead>
                                                                        <tr>
                                                                            <th colSpan={2} style={{ backgroundColor: "#0c6ab0", color: "white", textAlign: "center" }}>Scholarship(B.Pharm , Pharma D)</th>
                                                                            <th colSpan={5} style={{ backgroundColor: "#0c6ab0", textAlign: "center", color: "white" }}>% of Scholarship</th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "8%" }}>Mode of selection</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "14%" }}>PROGRAME</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "8%" }}>100%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "8%" }}>75%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "8%" }}>50%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "8%" }}>25%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "8%" }}>10%</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                        <tr>
                                                                            <td>ASAT(%)</td>
                                                                            <td rowSpan={3}>B.Pharmacy Pharma D</td>
                                                                            <td>-</td>
                                                                            <td>&gt; 97</td>
                                                                            <td>95-96.9</td>
                                                                            <td>92-94.9</td>
                                                                            <td>90-91.9</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>CBSE (Marks)</td>
                                                                            <td>-</td>
                                                                            <td>&gt; 450</td>
                                                                            <td>425-449</td>
                                                                            <td>400-424</td>
                                                                            <td>375-399</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Sports</td>
                                                                            <td>International Level Participation</td>
                                                                            <td>National</td>
                                                                            <td>-</td>
                                                                            <td>-</td>
                                                                            <td>-</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <table class="table responsive">
                                                                    <thead>
                                                                        <tr>
                                                                            <th colSpan={2} style={{ backgroundColor: "#0c6ab0", color: "white", textAlign: "center" }}>Scholarship [BSC , BBA]</th>
                                                                            <th colSpan={5} style={{ backgroundColor: "#0c6ab0", textAlign: "center", color: "white" }}>% of Scholarship</th>
                                                                        </tr>
                                                                        <tr>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "8%" }}>Mode of selection</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "9%" }}>PROGRAME</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "8%" }}>25%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "8%" }}>20%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "8%" }}>15%</th>
                                                                            <th style={{ backgroundColor: "#f05819", color: '#fff', textAlign: "center", width: "8%" }}>10%</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                        <tr>
                                                                            <td>ASAT(%)</td>
                                                                            <td rowSpan={4}>B.Sc (Forensic Science)<br></br> B.Sc (Cyber Security  & Digital Forensics) <br></br>BBA (All Specializations)</td>
                                                                            <td>-</td>
                                                                            <td>&gt; 95</td>
                                                                            <td>92-94.9</td>
                                                                            <td>90-91.9</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>BIE (AP&TS) (%)</td>
                                                                            <td>-</td>
                                                                            <td>&gt; 95</td>
                                                                            <td>85-94.9</td>
                                                                            <td>75-84.9</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>CBSE Marks</td>
                                                                            <td>-</td>
                                                                            <td>&gt; 475</td>
                                                                            <td>425-474</td>
                                                                            <td>375-424</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Sports</td>
                                                                            <td>International Level Participation</td>
                                                                            <td>National Level Participation</td>
                                                                            <td>-</td>
                                                                            <td>-</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </TabPanel>
                                                </div>
                                            </div>
                                        </Tabs>
                                    </div>

                                    <br />
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