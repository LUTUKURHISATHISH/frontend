import React, { useState, useEffect } from "react";
import axios from 'axios';

import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import SideManu from './sidebar';
import Banner from '../images/banners/opportunities.webp';
import Loading from './images/loading.gif';

const Internships = () => {
    const [selectedYear, setSelectedYear] = useState("2025-2026");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const backendUrl = process.env.REACT_APP_DATABASEURL;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError("");
            try {
                const response = await axios.get(`${backendUrl}api/interships_statistics/${selectedYear}`);
                console.log("API Response:", response);

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

    return (
        <>
            <Header parentMenu='opportunities' menuCategoryEnable='enable' />
            <div className="react-wrapper background_height">
                <div className="react-wrapper-inner background_image">
                    <div className="react-breadcrumbs">
                        <div className="breadcrumbs-wrap">
                            <img className="desktop" src={Banner} alt="Breadcrumbs" />
                            <img className="mobile" src={Banner} alt="Breadcrumbs" />
                            <div className="breadcrumbs-inner">
                                <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Internships</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="high_quality-section pt---60 pb---120">
                        <div className="container">
                            <SideManu />
                            <div className="row m-0">
                                <div className="col-md-12 col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <br />
                                    <div className="container">
                                        <b className="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}>
                                            <span className="hedingname_orange">Internships</span>
                                        </b>
                                        <br />
                                        <p className='contentsize'>
                                            Internships play a crucial role in bridging the gap between academic learning and real-world application. They offer students invaluable opportunities to gain hands-on experience, develop industry-specific skills and build professional networks. Through internships, students can explore potential career paths, understand workplace dynamics and enhance their resumes with practical achievements. Our Career Development Centre collaborates with leading companies and organizations across various sectors to provide a wide range of internship opportunities. These experiences not only help students apply their theoretical knowledge in a practical setting but also boost their employability by equipping them with the competencies demanded by today’s employers. Whether it's a summer internship or part-time engagement, our tailored internship offerings are designed to support students in making informed career decisions and achieving their professional goals.
                                        </p>

                                        <center>
                                            <b className="about__title wow animate__fadeInUp" data-wow-duration="0.5s">
                                                <span className="hedingname_orange">Internships Statistics <br /></span>
                                            </b>
                                            <br />
                                            <div className="col-md-4 col-sm-4 col-12">
                                                <div className="login-right-form">
                                                    <form>
                                                        <div className="row">
                                                            <select
                                                                name="Year"
                                                                id="Year"
                                                                value={selectedYear}
                                                                onChange={(e) => setSelectedYear(e.target.value)}
                                                                className="year-select"
                                                            >
                                                               <option value="2025-2026">2025-2026</option>
                                                            </select>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </center>

                                        <br />
                                        {loading && <center><img src={Loading} alt="Loading..." /></center>}
                                        {error && <p style={{ color: "red" }}>{error}</p>}

                                        {!loading && !error && data.length > 0 && (
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr style={{ backgroundColor: '#00428A', color: '#fff' }}>
                                                            <th style={{ textAlign: 'center' }}>S.No</th>
                                                            <th style={{ textAlign: 'center' }}>Name of the Company Visited</th>
                                                            <th style={{ textAlign: 'center' }}>No. of Students Placed</th>
                                                            <th style={{ textAlign: 'center' }}>Package</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data.map((item, index) => (
                                                            <tr key={item.id}>
                                                                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                                                                <td>{item.company_name}</td>
                                                                <td style={{ textAlign: 'center' }}>{item.placed}</td>
                                                                {/* <td>{item.package} LPA</td> */}
                                                                <td>₹ {new Intl.NumberFormat('en-IN', { maximumFractionDigits: 2 }).format(item.package)} Per Month</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                    <tfoot>
                                                        <tr style={{ backgroundColor: '#f1f1f1', fontWeight: 'bold' }}>
                                                            <td colSpan="2" style={{ textAlign: 'center' }}>Total Students Placed</td>
                                                            <td colSpan="2" style={{ textAlign: 'center' }}>
                                                                {data.reduce((total, item) => total + item.placed, 0)}
                                                            </td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        )}
                                        {!loading && !error && data.length === 0 && (
                                            <p>No data available for the selected year.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ScrollToTop />
                </div>
            </div>
            <FooterTwo />
        </>
    );
};

export default Internships;
