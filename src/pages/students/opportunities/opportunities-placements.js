import React, { useState, useEffect } from "react";
import axios from 'axios';
import Slider from 'react-slick';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import '../students.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TopRecruiters from './images/top-recruiters.webp';
// import Statistics from './images/placement-statistics.webp';
import Loading from './images/loading.gif';
import Banner from '../images/banners/opportunities.webp';
const backendUrl = process.env.REACT_APP_DATABASEURL;
const PlacementStatistics = () => {
    const [selectedYear, setSelectedYear] = useState("2025-2026"); // Default selected year
    const [data, setData] = useState([]); // Data to display
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Fetch data based on selected year
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError("");
            try {
                const response = await axios.get(`${backendUrl}api/placement_statistics/${selectedYear}`);
                console.log("API Response:", response);

                // Set data only if the response is valid
                if (response.status === 200 && response.data) {
                    setData(response.data.Statistics_Details);
                } else {
                    throw new Error("Unexpected API response format.");
                }
            } catch (err) {
                console.error("Error fetching data:", err);
                setError(err.response?.data?.message || err.message || "Failed to fetch data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedYear, backendUrl]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    let tab1 = "Placement Statistics",
        tab2 = "Student Testimonials",
        tab3 = "Top Recruiters",
        tab4 = "Placement Rules"


    const tabStyle = 'nav nav-tabs';
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <>
            <Header
                parentMenu='opportunities'
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
                                            <h1 className="breadcrumbs-title">Placements</h1>
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
                                                {/* Placement Statistics */}
                                                <TabPanel>
                                                    <center>
                                                        <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" ><san class="hedingname_orange">Placement Statistics <br /></san> </b><br />
                                                        {/* <img src={Statistics} /><br /><br /> */}
                                                        <div className="col-md-4 col-sm-4 col-12">
                                                            <div className="login-right-form">
                                                                <form>
                                                                    <div className="row">
                                                                        {/* <b htmlFor="Year" className="select-label" style={{ color: '#d3143f' }}>Select Year </b> */}
                                                                        <select
                                                                            name="Year"
                                                                            id="Year"
                                                                            value={selectedYear}
                                                                            onChange={(e) => setSelectedYear(e.target.value)}
                                                                            className="year-select"
                                                                        >
                                                                            <option value="2021-2022">2021-2022</option>
                                                                            <option value="2022-2023">2022-2023</option>
                                                                            <option value="2023-2024">2023-2024</option>
                                                                            <option value="2024-2025">2024-2025</option>
                                                                            <option value="2025-2026">2025-2026 (Still Counting)</option>
                                                                        </select>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </center>
                                                    <br />
                                                    {loading && <center><img src={Loading} /> </center>}
                                                    {error && <p style={{ color: "red" }}>{error}</p>}
                                                    {!loading && !error && data.length > 0 && (
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr style={{ backgroundColor: '#00428A', color: '#fff' }}>
                                                                        <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>S.No</th>
                                                                        <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Name of the Company Visited</th>
                                                                        <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>No. of Students Placed</th>
                                                                        <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Package</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {data.map((item, index) => (
                                                                        <tr key={item.id}>
                                                                            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{index + 1}</td>
                                                                            <td style={{ verticalAlign: 'middle' }}>{item.company_name}</td>
                                                                            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{item.placed}</td>
                                                                            <td style={{ verticalAlign: 'middle' }}>{item.package} LPA</td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                                <tfoot>
                                                                    <tr style={{ backgroundColor: '#f1f1f1', fontWeight: 'bold' }}>
                                                                        <td colSpan="2" style={{ textAlign: 'center', verticalAlign: 'middle' }}>Total Students Placed</td>
                                                                        <td colSpan="2" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                                                            {data.reduce((total, item) => total + item.placed, 0)}
                                                                        </td>
                                                                        {/* <td> {data.length > 0 ? `${Math.max(...data.map(item => item.package))} LPA` : 'N/A'} </td> */}
                                                                    </tr>
                                                                </tfoot>
                                                            </table>
                                                        </div>
                                                    )}
                                                    {!loading && !error && data.length === 0 && (
                                                        <p>No data available for the selected year.</p>
                                                    )}
                                                </TabPanel>
                                                {/* Placement Statistics close */}

                                                <TabPanel>
                                                    <center> <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" ><san class="hedingname_orange">Students Testimonials</san> </b><br /><br /></center>
                                                    <Slider {...settings}>
                                                        <div>
                                                            <iframe src="https://www.youtube.com/embed/O9B8MEUW7cM" allowFullScreen title="Video 1" style={{ width: "100%", height: '550px' }}></iframe>
                                                        </div>
                                                        <div>
                                                            <iframe src="https://www.youtube.com/embed/ocfXp3nY8RU" allowFullScreen title="Video 4" style={{ width: "100%", height: '550px' }}></iframe>
                                                        </div>
                                                        <div>
                                                            <iframe src="https://www.youtube.com/embed/2Cd13B4d9rk" allowFullScreen title="Video 4" style={{ width: "100%", height: '550px' }}></iframe>
                                                        </div>
                                                        <div>
                                                            <iframe src="https://www.youtube.com/embed/NbmJCjQo7-Y" allowFullScreen title="Video 4" style={{ width: "100%", height: '550px' }}></iframe>
                                                        </div>
                                                    </Slider>
                                                    <br /><br />
                                                </TabPanel>

                                                <TabPanel>
                                                    <div class="container">
                                                        <img src={TopRecruiters} /> 
                                                    </div>
                                                </TabPanel>

                                                <TabPanel>
                                                    <div class="container">
                                                        <center> <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" ><san class="hedingname_orange">Placement rules <br /></san> </b><br /></center>
                                                        <div class="degree-list-container">
                                                            <ul class="degree-list">
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>It is mandatory for all the students to register for all the campus drives using their college email id only.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Update your details of Academic percentages, Backlogs etc.. @ AJIVIKA time to time.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Before applying for the drive, carefully go through the Job Description and required skillset for the respective role.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>To maintain good relationships with the recruiters, all the registered students ought to attend the drives without fail.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>If, we find any student not participating in Two drives after Registration, they will be removed from all the upcoming campus drives.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Whenever a Survey link is shared to the students, they have to fill required details immediately for follow up.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>For all Virtual Campus drives make sure of System requirements, Internet connectivity, Webcam and Mic to avoid technical issues.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>As Virtual Campus drives are web proctored, students need to be away from malpractice to avoid disqualification.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Give equal importance to English (Verbal Ability) as it also plays a pivotal role in the evaluation process of recruitment.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>To grab Higher packages in Product-Based Companies, practice more in Coding. Also participate in all Contest-Based hiring, Hackathons and other competitions.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Apply for more companies to explore all possibilities to enhance your capability for Industry requirements.</span></li>

                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Conditions for allowing students for multiple offers.</span></li>
                                                                <div style={{ padding: "0px 0px 0px 20px" }}>
                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>If the CTC of new offer is more than 50% or above the existing offer</span></li>
                                                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>If core background students got the offer in IT sector.</span></li>
                                                                </div>

                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>For Quick communications, Join the respective campus drive WhatsApp groups.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Students must carry their Xerox copies of the necessary certificates along with two passport size photographs and a copy of their resume for the interview.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Maintain Punctuality for all Placement-related activities.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>Students must be in Formal attire and be Professional.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>For International Placement drives, learn concern foreign languages as per the schedule given by the Placement department.</span></li>
                                                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>90% attendance is mandatory in concern foreign language trainings to attend any International Placements.</span></li>
                                                            </ul>
                                                        </div>
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

export default PlacementStatistics;