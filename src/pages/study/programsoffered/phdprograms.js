import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar_programs';
// import Ph_D_AU_Regulations_2024 from './files/Ph_D_AU_Regulations_2024.pdf';
import AdmissionSchedule from './images/admission_schedule_2026.webp';
import Comprehensive from './files/comprehensive.pdf';
import Part from './files/Part time.pdf';
import Full from './files/Full time.pdf';
import Part_2025 from './files/part_time_2025.pdf';
import Full_2025 from './files/full_time_2025.pdf';
import Part_2025_july from './files/part_time_2025_july.pdf';
import Full_2025_july from './files/full_time_2025_july.pdf';
import PhDEntrance from './files/Ph D Entrance Syllabus.pdf';
import Academic_calendar_image from './images/calendar.png';

// import Admission from './files/Notification.webp';
import Fees from './files/fee_details.pdf';
import Banner from './images/phd.webp';
const backendUrl = process.env.REACT_APP_DATABASEURL;
const backendUrlPath = process.env.REACT_APP_BACKEND_URL;


const titleMap = {
    "Ph.D": "Doctor of Philosophy"
};

const PHD_programs = () => {
    const [showButtons, setShowButtons] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [calendarType, setCalendarType] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const [regulationData, setRegulationData] = useState([]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        axios.get(`${backendUrlPath}/api/get-phd-regulations`)
            .then((res) => {
                console.log("Fetched data:", res.data); // Debug output
                const formatted = res.data.map((item, index) => ({
                    id: index,
                    title: item._id,
                    title1: titleMap[item._id] || item._id,
                    image: Academic_calendar_image,
                    pdf: item.data
                }));
                console.log("Formatted data:", formatted); // Debug output
                setRegulationData(formatted);
            })
            .catch((err) => console.error("Failed to load PHD regulations", err));
    }, []);

    const handleCalendarClick = () => {
        setShowButtons(!showButtons);
    };

    const handleModalOpen = (type) => {
        setCalendarType(type);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <Header parentMenu='offered' menuCategoryEnable='enable' />
            <div className="react-wrapper background_height">
                <div className="react-wrapper-inner background_image">
                    <div className="react-breadcrumbs">
                        <div className="breadcrumbs-wrap">
                            <img className="desktop" src={Banner} alt="Breadcrumbs" />
                            <img className="mobile" src={Banner} alt="Breadcrumbs" />
                            <div className="breadcrumbs-inner">
                                <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Ph.D Programs</h1>
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
                                    <div id="overview" className="container">
                                        <div className="campus_sec1 row">
                                            <div className="col-lg-6 text-center">
                                                <Link to={AdmissionSchedule} style={{ width: "100%" }} className="more-about animation" target="_blank">
                                                    Ph.D. Jan 2026 Admission Schedule
                                                </Link>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <Link to="https://apply.adityauniversity.in/" style={{ width: "100%" }} className="more-about" target="_blank">
                                                    Apply Now
                                                </Link>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="campus_sec1 row" style={{ justifyContent: "center" }}>
                                            <div className="col-lg-6 text-center">
                                                <Link to={Fees} style={{ width: "100%" }} className="more-about animation" target="_blank">
                                                    Fees Details and Instructions to the Candidates
                                                </Link>
                                            </div>

                                            <div className="col-lg-6 text-center">
                                                <button onClick={handleCalendarClick} className="more-about" style={{ width: "100%" }}>
                                                    Academic Calendar
                                                </button>
                                            </div>
                                        </div>
                                        <br />
                                        {showButtons && (
                                            <div className="campus_sec1 row">
                                                <div className="col-lg-4 text-center">
                                                    <Link to={Comprehensive} target="_blank" className="more-about" style={{ width: "100%" }}>
                                                        Comprehensive Ph.D. Programme Schedule
                                                    </Link>
                                                </div>
                                                <div className="col-lg-4 text-center">
                                                    <button onClick={() => handleModalOpen('August 2024')} className="more-about" style={{ width: "100%" }}>
                                                        Academic Calendar for August 2024 Session
                                                    </button>
                                                </div>
                                                <div className="col-lg-4 text-center">
                                                    <button onClick={() => handleModalOpen('January 2025')} className="more-about" style={{ width: "100%" }}>
                                                        Academic Calendar for January 2025 Session
                                                    </button>
                                                </div>
                                                <div className="col-lg-4 text-center">
                                                    <br />
                                                    <button onClick={() => handleModalOpen('July 2025')} className="more-about" style={{ width: "100%" }}>
                                                        Academic Calendar for July 2025 Session
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                        <br />
                                        <div className="container">
                                            {regulationData.length === 0 ? (
                                                <p style={{ textAlign: 'center', padding: '20px' }}>No PHD regulations found.</p>
                                            ) : (
                                                regulationData.map(({ id, title, title1, image, pdf }) => (
                                                    <React.Fragment key={id}>
                                                        <button
                                                            className={`accordion ${activeIndex === id ? 'active-card' : ''}`}
                                                            onClick={() => toggleAccordion(id)}
                                                        >
                                                            <img src={image} style={{ height: '40px' }} alt={title} />&nbsp;&nbsp;&nbsp;&nbsp;Regulations
                                                            <span className="symbol">{activeIndex === id ? '▲' : '▼'}</span>
                                                        </button>

                                                        <div style={{ display: activeIndex === id ? 'block' : 'none', marginBottom: '14px' }}>
                                                            <table style={{ width: "100%" }}>
                                                                <thead>
                                                                    <tr>
                                                                        <th style={{ textAlign: 'center' }}>Program</th>
                                                                        <th style={{ textAlign: 'center' }}>Regulations</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {pdf.map((item, i) => (
                                                                        <tr key={i}>
                                                                            {i === 0 && (
                                                                                <td rowSpan={pdf.length} style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                                                                    {title1}
                                                                                </td>
                                                                            )}
                                                                            <td style={{ textAlign: 'center' }}>
                                                                                <a
                                                                                    href={`${backendUrl}/regulations/${item.attachment}`}
                                                                                    target="_blank"
                                                                                    rel="noopener noreferrer"
                                                                                    style={{ color: "#000" }}
                                                                                    className='namehover'
                                                                                >
                                                                                    {title}-{item.regulations}
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                            <br />
                                                        </div>
                                                    </React.Fragment>
                                                ))
                                            )}
                                        </div>

                                        <div className="campus_sec1 row">
                                            <div className="col-lg-6 text-center">
                                                <Link to={PhDEntrance} style={{ width: "100%" }} className="more-about" target="_blank">
                                                    Ph.D Entrance Examination Syllabus
                                                </Link>
                                            </div>
                                            <div className="col-lg-6 text-center">
                                                <Link to="/phd-syllabus" className="more-about" style={{ width: "100%" }}>
                                                    Ph.D Course work Syllabus
                                                </Link>
                                            </div>
                                        </div>
                                        <br />

                                        <p className="contentsize">
                                            Doctoral programmes are designed to cultivate advanced research skills, foster critical thinking, and prepare scholars to become leaders in academia, industry, and beyond. Our Doctoral (Ph.D) programs are at the forefront of engineering research, encouraging scholars to pursue fundamental research that advances the boundaries of engineering knowledge. With access to state-of-the-art facilities and mentorship from distinguished faculty, our doctoral candidates are well-positioned to make significant contributions to their fields.
                                        </p>
                                        <br />

                                        <b style={{ color: "#F05819", fontSize: "20px", textAlign: "center" }}>
                                            Ph.D. Programmes are offered in the disciplines of :
                                        </b>
                                        <br />
                                        <span className="contentsize"><img src={point} className="pointimage" /> Engineering (EEE, ECE, CSE, Mechanical, Civil, Agriculture, Petroleum and Mining)</span><br />
                                        <span className="contentsize"><img src={point} className="pointimage" /> Management</span><br />
                                        <span className="contentsize"><img src={point} className="pointimage" /> Mathematics</span><br />
                                        <span className="contentsize"><img src={point} className="pointimage" /> Physics</span><br />
                                        <span className="contentsize"><img src={point} className="pointimage" /> Chemistry</span><br />
                                        <span className="contentsize"><img src={point} className="pointimage" /> English</span><br />
                                        <span className="contentsize"><img src={point} className="pointimage" /> Pharmaceutical Sciences</span><br />

                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ScrollToTop />
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <center>
                    <div className="modal" style={{ display: 'block' }}>
                        <div className="modal-content" style={{ marginTop: '180px' }}>
                            <span className="close" style={{ cursor: 'pointer', width: '25px', color: 'white', background: '#00428A' }} onClick={handleModalClose}>&times;</span>
                            <h4>{calendarType} Session</h4>
                            <div className="campus_sec1 row">
                                <div className="col-lg-6 text-center">
                                    <Link
                                        to={
                                            calendarType === 'August 2024'
                                                ? Full
                                                : calendarType === 'July 2025'
                                                    ? Full_2025_july
                                                    : Full_2025
                                        }
                                        target="_blank"
                                        className="more-about"
                                        style={{ width: "100%" }}
                                    >
                                        Academic Calendar - Ph.D Full time
                                    </Link>
                                </div>
                                <div className="col-lg-6 text-center">
                                    <Link
                                        to={
                                            calendarType === 'August 2024'
                                                ? Part
                                                : calendarType === 'July 2025'
                                                    ? Part_2025_july
                                                    : Part_2025
                                        }
                                        target="_blank"
                                        className="more-about"
                                        style={{ width: "100%" }}
                                    >
                                        Academic Calendar - Ph.D Part time
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>
            )}
            <FooterTwo />
        </>
    );
};

export default PHD_programs;
