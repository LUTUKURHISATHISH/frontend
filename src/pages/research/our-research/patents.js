import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../components/Header";
import FooterTwo from "../../../components/Footer/index";
import ScrollToTop from "../../../components/ScrollTop";
import SideManu from "./sidebar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Banner from "../images/banners/our_research.webp";
import Loading from "../images/loading.gif";

const Patents_data = () => {
    const backendUrl = process.env.REACT_APP_DATABASEURL;
    const tabStyle = "nav nav-tabs";
    const itemsPerPage = 10;

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedYear, setSelectedYear] = useState("2025");

    // separate states
    const [grantedData, setGrantedData] = useState([]);
    const [publishedData, setPublishedData] = useState([]);

    // pagination states
    const [currentPageGranted, setCurrentPageGranted] = useState(1);
    const [currentPagePublished, setCurrentPagePublished] = useState(1);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // fetch granted
    const fetchGranted = async (year) => {
        setLoading(true);
        setError("");
        try {
            const res = await axios.get(
                `${backendUrl}api/granted_data_by_year/${year}`
            );
            if (res.status === 200 && res.data) {
                setGrantedData(res.data.Granted_Details || []);
                setCurrentPageGranted(1); // Reset to first page
            } else {
                throw new Error("Unexpected API response format.");
            }
        } catch (err) {
            console.error("Error fetching granted:", err);
            setError(err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };

    // fetch published
    const fetchPublished = async (year) => {
        setLoading(true);
        setError("");
        try {
            const res = await axios.get(
                `${backendUrl}api/published_data_by_year/${year}`
            );
            if (res.status === 200 && res.data) {
                setPublishedData(res.data.Published_Details || []);
                setCurrentPagePublished(1); // Reset to first page
            } else {
                throw new Error("Unexpected API response format.");
            }
        } catch (err) {
            console.error("Error fetching published:", err);
            setError(err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };

    // Pagination logic
    const getPaginatedData = (data, currentPage) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    };

    const getTotalPages = (dataLength) => {
        return Math.ceil(dataLength / itemsPerPage);
    };

    // Pagination component
    const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }

        return (
            <div className="pagination-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    style={{
                        padding: '8px 12px',
                        margin: '0 5px',
                        border: '1px solid #ddd',
                        backgroundColor: currentPage === 1 ? '#f5f5f5' : '#0c6ab0',
                        color: currentPage === 1 ? '#999' : '#fff',
                        cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                        borderRadius: '4px'
                    }}
                >
                    Previous
                </button>

                {pageNumbers.map(number => (
                    <button
                        key={number}
                        onClick={() => onPageChange(number)}
                        style={{
                            padding: '8px 12px',
                            margin: '0 2px',
                            border: '1px solid #ddd',
                            backgroundColor: number === currentPage ? '#0c6ab0' : '#fff',
                            color: number === currentPage ? '#fff' : '#0c6ab0',
                            cursor: 'pointer',
                            borderRadius: '4px'
                        }}
                    >
                        {number}
                    </button>
                ))}

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    style={{
                        padding: '8px 12px',
                        margin: '0 5px',
                        border: '1px solid #ddd',
                        backgroundColor: currentPage === totalPages ? '#f5f5f5' : '#0c6ab0',
                        color: currentPage === totalPages ? '#999' : '#fff',
                        cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                        borderRadius: '4px'
                    }}
                >
                    Next
                </button>
            </div>
        );
    };

    // trigger fetch when tab/year changes
    useEffect(() => {
        if (selectedIndex === 0) {
            fetchPublished(selectedYear);
        } else {
            fetchGranted(selectedYear);
        }
    }, [selectedIndex, selectedYear]);

    return (
        <>
            <Header parentMenu="patents" menuCategoryEnable="enable" />
            <div className="back__course__page_grid react-courses__single-page pb---16">
                <div className="react-wrapper background_height">
                    <div className="react-wrapper-inner background_image">
                        <div className="react-breadcrumbs">
                            <div className="breadcrumbs-wrap">
                                <img className="desktop" src={Banner} alt="Breadcrumbs" />
                                <img className="mobile" src={Banner} alt="Breadcrumbs" />
                                <div className="breadcrumbs-inner">
                                    <div className="container">
                                        <div className="breadcrumbs-text">
                                            <h1 className="breadcrumbs-title">Patents</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="high_quality-section pt---60 pb---120">
                            <div className="container">
                                <SideManu />
                                <div className="row m-0">
                                    <div
                                        className="col-md-12 col-sm-12 col-12 bg_color"
                                        style={{ backgroundColor: "#fff" }}
                                    >
                                        <br />
                                        <Tabs
                                            selectedIndex={selectedIndex}
                                            onSelect={(index) => setSelectedIndex(index)}
                                        >
                                            <div className="course-single-tab">
                                                <TabList className={tabStyle}>
                                                    <Tab className="col-md-6">
                                                        <button>Published</button>
                                                    </Tab>
                                                    <Tab className="col-md-6">
                                                        <button>Granted</button>
                                                    </Tab>
                                                </TabList>



                                                {/* === Published Tab === */}
                                                <TabPanel>
                                                    <div className="container">
                                                        <center>
                                                            <div className="col-md-4 col-sm-4 col-6">
                                                                <select
                                                                    value={selectedYear}
                                                                    onChange={(e) =>
                                                                        setSelectedYear(e.target.value)
                                                                    }
                                                                    className="year-select"
                                                                >
                                                                    <option value="2024">2024</option>
                                                                    <option value="2025">2025</option>
                                                                </select>
                                                            </div>
                                                        </center>
                                                        <br />
                                                        {loading && (
                                                            <center>
                                                                <img src={Loading} alt="loading" />
                                                            </center>
                                                        )}
                                                        {error && <center><p style={{ color: "#f05819" }}>{error}</p></center>}

                                                        {!loading && !error && publishedData.length > 0 && (
                                                            <>
                                                                <div className="table-responsive">
                                                                    <table className="table">
                                                                        <thead>
                                                                            <tr
                                                                                style={{
                                                                                    backgroundColor: "#0c6ab0",
                                                                                    color: "#fff",
                                                                                }}
                                                                            >
                                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>S.No</th>
                                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>Application No</th>
                                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>Title of the Patent</th>
                                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>Patent Sanctioning Authority</th>
                                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>Date of Publication</th>
                                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>Document</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {getPaginatedData(publishedData, currentPagePublished).map((item, index) => (
                                                                                <tr key={item.id || index}>
                                                                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                                        {(currentPagePublished - 1) * itemsPerPage + index + 1}
                                                                                    </td>
                                                                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>{item.application_no}</td>
                                                                                    <td>{item.product_process}</td>
                                                                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>{item.indian_international}</td>
                                                                                    <td style={{ textAlign: "center", verticalAlign: "middle", width: "120px" }}>
                                                                                        {new Date(item.date_publication).toLocaleDateString("en-GB").replace(/\//g, "-")}
                                                                                    </td>
                                                                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                                        {item.attachment && item.attachment.trim() !== '' ? (
                                                                                            <a
                                                                                                href={`${backendUrl}/patents_published/${item.attachment}`}
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer"
                                                                                                className="namehover"
                                                                                            >
                                                                                                View
                                                                                            </a>
                                                                                        ) : (
                                                                                            <span style={{ color: "gray" }}>---</span>
                                                                                        )}
                                                                                    </td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                                {/* Pagination for Published */}
                                                                {getTotalPages(publishedData.length) > 1 && (
                                                                    <PaginationComponent
                                                                        currentPage={currentPagePublished}
                                                                        totalPages={getTotalPages(publishedData.length)}
                                                                        onPageChange={setCurrentPagePublished}
                                                                    />
                                                                )}
                                                            </>
                                                        )}
                                                        {!loading &&
                                                            !error &&
                                                            publishedData.length === 0 && (
                                                                <center>
                                                                    <p>No published data available.</p>
                                                                </center>
                                                            )}
                                                    </div>
                                                </TabPanel>



                                                {/* === Granted Tab === */}
                                                <TabPanel>
                                                    <div className="container">
                                                        <center>
                                                            <div className="col-md-4 col-sm-4 col-6">
                                                                <select
                                                                    value={selectedYear}
                                                                    onChange={(e) =>
                                                                        setSelectedYear(e.target.value)
                                                                    }
                                                                    className="year-select"
                                                                >
                                                                    <option value="2024">2024</option>
                                                                    <option value="2025">2025</option>
                                                                </select>
                                                            </div>
                                                        </center>
                                                        <br />
                                                        {loading && (
                                                            <center>
                                                                <img src={Loading} alt="loading" />
                                                            </center>
                                                        )}
                                                        {error && <center><p style={{ color: "#f05819" }}>{error}</p></center>}

                                                        {!loading && !error && grantedData.length > 0 && (
                                                            <>
                                                                <div className="table-responsive">
                                                                    <table className="table">
                                                                        <thead>
                                                                            <tr
                                                                                style={{
                                                                                    backgroundColor: "#0c6ab0",
                                                                                    color: "#fff",
                                                                                }}
                                                                            >
                                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>S.No</th>
                                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>Application No</th>
                                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>Title of the Patent</th>
                                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>Patent Sanctioning Authority</th>
                                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>Date of Grant</th>
                                                                                <th style={{ textAlign: "center", verticalAlign: "middle" }}>Document</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {getPaginatedData(grantedData, currentPageGranted).map((item, index) => (
                                                                                <tr key={item.id || index}>
                                                                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                                        {(currentPageGranted - 1) * itemsPerPage + index + 1}
                                                                                    </td>
                                                                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>{item.application_no}</td>
                                                                                    <td>{item.title_name}</td>
                                                                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>{item.sanctioning_authority}</td>
                                                                                    <td style={{ textAlign: "center", verticalAlign: "middle", width: "120px" }}>
                                                                                        {new Date(item.date_grant).toLocaleDateString("en-GB").replace(/\//g, "-")}
                                                                                    </td>
                                                                                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                                        {item.attachment && item.attachment.trim() !== '' ? (
                                                                                            <a
                                                                                                href={`${backendUrl}/patents_granted/${item.attachment}`}
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer"
                                                                                                className="namehover"
                                                                                            >
                                                                                                View
                                                                                            </a>
                                                                                        ) : (
                                                                                            <span style={{ color: "gray" }}>---</span>
                                                                                        )}
                                                                                    </td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                                {/* Pagination for Granted */}
                                                                {getTotalPages(grantedData.length) > 1 && (
                                                                    <PaginationComponent
                                                                        currentPage={currentPageGranted}
                                                                        totalPages={getTotalPages(grantedData.length)}
                                                                        onPageChange={setCurrentPageGranted}
                                                                    />
                                                                )}
                                                            </>
                                                        )}
                                                        {!loading &&
                                                            !error &&
                                                            grantedData.length === 0 && (
                                                                <center>
                                                                    <p>No granted data available.</p>
                                                                </center>
                                                            )}
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
};

export default Patents_data;