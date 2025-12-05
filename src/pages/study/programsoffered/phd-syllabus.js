import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import StudyBreadcrumb from '../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../components/ScrollTop';
// import SideManu from './sidebar';
import Curriculumimage from './images/curriculum.png';

const backendUrl = process.env.REACT_APP_DATABASEURL;

const Phdsyllabus = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [syllabusData, setSyllabusData] = useState([]);
    const [loading, setLoading] = useState(true);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        fetch(`${backendUrl}api/fetch_curriculum_pg`)
            .then((response) => response.json())
            .then((data) => {
                setSyllabusData(data.curriculum_pg_data); // Adjusted to match your JSON structure
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching syllabus:', error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Header parentMenu='offered' menuCategoryEnable='enable' />

            <div className="react-wrapper background_height">
                <div className="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="PG Program Curriculum" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div className="container">
                            {/* <SideManu /> */}
                            <div className="row m-0 react__title__section-all">
                                <div className="col-md-12 col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <br />
                                    <div className="container">
                                        {loading ? (
                                            <p>Loading syllabus...</p>
                                        ) : (
                                            syllabusData.map((item, index) => (
                                                <div key={index}>
                                                    <button
                                                        className={`accordion ${activeIndex === index ? 'active-card' : ''}`}
                                                        onClick={() => toggleAccordion(index)}
                                                    >
                                                        <img src={Curriculumimage} alt="curriculum" style={{ height: '40px' }} />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;Ph.D
                                                        <span className="symbol">{activeIndex === index ? '▲' : '▼'}</span>
                                                    </button>
                                                    <div style={{ display: activeIndex === index ? 'block' : 'none' }}>
                                                        <br />
                                                        <table style={{ width: "100%" }}>
                                                            <thead>
                                                                <tr>
                                                                    <th style={{ textAlign: 'center' }}>Program</th>
                                                                    <th style={{ textAlign: 'center' }}>{item.regulation}</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {item.papers.map((syllabus, i) => (
                                                                    <tr key={i}>
                                                                        <td>{syllabus.subject_name}</td>
                                                                        <td style={{ textAlign:"center"}}>
                                                                            <a
                                                                                href={`${backendUrl}/${syllabus.attachment}`}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                style={{ color: "#000" ,textAlign:"center"}}
                                                                                className="namehover"
                                                                            >
                                                                                view
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                        <br />
                                                    </div>
                                                </div>
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

export default Phdsyllabus;
