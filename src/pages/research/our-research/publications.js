import React, { useState, useEffect } from "react";
import axios from 'axios';
import Slider from 'react-slick';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar';
// import '../students.css';

import Loading from '../images/loading.gif';
import Banner from '../images/banners/our_research.webp';
const backendUrl = process.env.REACT_APP_DATABASEURL;
const PlacementStatistics = () => {
    const [selectedYear, setSelectedYear] = useState("2025"); // Default selected year
    const [data, setData] = useState([]); // Data to display
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Fetch data based on selected year
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError("");
            try {
                const response = await axios.get(`${backendUrl}api/publications_data/${selectedYear}`);
                console.log("API Response:", response);

                // Set data only if the response is valid
                if (response.status === 200 && response.data) {
                    setData(response.data.Publications_Details);
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
  return (
        <>
            <Header
                parentMenu='blog'
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
                                            <h1 className="breadcrumbs-title">Publications</h1>
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

                                        <center>
                                            <div className="col-md-4 col-sm-4 col-12">
                                                <div className="login-right-form">
                                                    <form>
                                                        <div className="row">
                                                            <b htmlFor="Year" className="select-label" style={{ color: '#d3143f' }}>Select Year </b>
                                                            <select
                                                                name="Year"
                                                                id="Year"
                                                                value={selectedYear}
                                                                onChange={(e) => setSelectedYear(e.target.value)}
                                                                className="year-select"
                                                            >
                                                                <option value="2021">2021</option>
                                                                <option value="2022">2022</option>
                                                                <option value="2023">2023</option>
                                                                <option value="2024">2024</option>
                                                                <option value="2025">2025</option>

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
                                                        <tr style={{ backgroundColor: '#0c6ab0', color: '#fff' }}>
                                                            <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>S.No</th>
                                                            <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Author Name</th>
                                                            <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Article Title</th>
                                                            <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Journal Name</th>
                                                            <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Volume</th>
                                                            <th style={{ textAlign: 'center', verticalAlign: 'middle' }}>Issue No</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data.map((item, index) => (
                                                            <tr key={item.id}>
                                                                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{index + 1}</td>
                                                                <td style={{ verticalAlign: 'middle' }}>{item.authors}</td>
                                                                <td style={{ verticalAlign: 'middle' }}>{item.article_title}</td>
                                                                <td style={{ verticalAlign: 'middle' }}>{item.journal_name}</td>
                                                                <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>{item.volume}</td>
                                                                <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>{item.issue_no}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                    
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
                        <ScrollToTop />
                    </div>
                </div>
            </div>
            <FooterTwo />
        </>
    );
}

export default PlacementStatistics;