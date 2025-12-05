import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../components/ScrollTop';
import SideManu from './regulations-sidebar';
import Academic_calendar_image from './images/calendar.png';

const backendUrl = process.env.REACT_APP_DATABASEURL;
const backendUrlPath = process.env.REACT_APP_BACKEND_URL;

const titleMap = {
    "M.Sc": "Master of Science",
   };

const PGRegulations = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [regulationData, setRegulationData] = useState([]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    
    useEffect(() => {
        axios.get(`${backendUrlPath}/api/get-sciences-pg-regulations`)
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
            .catch((err) => console.error("Failed to load PG regulations", err));
    }, []);

    return (
        <>
            <Header parentMenu='academics' menuCategoryEnable='enable' />
            <div className="react-wrapper background_height">
                <div className="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="PG Regulations" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div className="container">
                            <SideManu />
                            <div className="row m-0 react__title__section-all">
                                <div className="col-md-12 col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <br />
                                    <div className="container">

                                        {regulationData.length === 0 ? (
                                            <p style={{ textAlign: 'center', padding: '20px' }}>No PG regulations found.</p>
                                        ) : (
                                            regulationData.map(({ id, title, title1, image, pdf }) => (
                                                <React.Fragment key={id}>
                                                    <button
                                                        className={`accordion ${activeIndex === id ? 'active-card' : ''}`}
                                                        onClick={() => toggleAccordion(id)}
                                                    >
                                                        <img src={image} style={{ height: '40px' }} alt={title} />&nbsp;&nbsp;&nbsp;&nbsp;{title}
                                                        <span className="symbol">{activeIndex === id ? '▲' : '▼'}</span>
                                                    </button>

                                                    <div style={{ display: activeIndex === id ? 'block' : 'none', marginBottom: '14px' }}>
                                                        <br />
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

export default PGRegulations;
