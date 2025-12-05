import React, { useState, useEffect } from 'react';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../components/ScrollTop';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Modal from 'react-modal';
import SideManu from './curriculum-sidebar';
import Civil from './images/cv.png';
import CSE from './images/cse.png';
import EEE from './images/eee.png';
import Mech from './images/mech.png';
import ECE from './images/ece.png';
import IT from './images/it.png';
import AIML from './images/aiml.png';
import CSEDS from './images/ds.png';
import PT from './images/pt.png';
import AGRI from './images/age.png';
import Mining from './images/mining.png';
import Loading from '../../../../assets/images/icons/loading.gif';
Modal.setAppElement('#root');
const backendUrl = process.env.REACT_APP_DATABASEURL;


const UGCurriculum = () => {
    // Separate active indices for each tab
    const [activeIndex2024, setActiveIndex2024] = useState(0); // First item active by default
    const [activeIndex2025, setActiveIndex2025] = useState(0); // First item active by default
    const [programData, setProgramData] = useState([]);
    const [programData25, setProgramData25] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let tab1 = "2024-25",
        tab2 = "2025-26"
    const tabStyle = 'nav nav-tabs';
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const fetchSyllabusData = async () => {
            try {
                const response = await fetch(`${backendUrl}api/getSyllabus_24`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProgramData(data);
                
                // Set first item as active when data loads
                if (data && data.length > 0) {
                    setActiveIndex2024(data[0].Department_order);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchSyllabusData();
    }, []);

    useEffect(() => {
        const fetchSyllabusData = async () => {
            try {
                const response = await fetch(`${backendUrl}api/getSyllabus_25`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProgramData25(data);
                
                // Set first item as active when data loads
                if (data && data.length > 0) {
                    setActiveIndex2025(data[0].Department_order);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchSyllabusData();
    }, []);

    if (error) return <div>Error: {error}</div>;

    const imageMap = {
        'Civil': Civil,
        'CSE': CSE,
        'CSE-SAP': CSE,
        'CSE-Google Cloud': CSE,

        'AI&ML': AIML,
        'AI&ML-Microsoft': AIML,
        'AI&ML-Google Cloud': AIML,
        'ECE': ECE,
        'Mech': Mech,
        'PT': PT,
        'CSEDS': CSEDS,
        'DS-Google Cloud': CSEDS,
        'IT': IT,
        'AGRI': AGRI,
        'Mining': Mining,
        'EEE': EEE,
    };

    const getImageForProgram = (title) => imageMap[title] || '';
    
    // Separate toggle functions for each tab
    const toggleAccordion2024 = (index) => {
        setActiveIndex2024(activeIndex2024 === index ? null : index);
    }
    
    const toggleAccordion2025 = (index) => {
        setActiveIndex2025(activeIndex2025 === index ? null : index);
    }
    
    return (
        <>
            <Header
                parentMenu='academics'
                menuCategoryEnable='enable'
            />

            <div class="back__course__page_grid react-courses__single-page  react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="UG Program Curriculum" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <SideManu />
                            <div class="high_quality-section  pb---120 row m-0 react__title__section-all">
                                <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <Tabs selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
                                        <div className="course-single-tab">
                                            <TabList className={tabStyle} >
                                                <Tab className='offset-2 col-md-4'><button>{tab1}</button></Tab>
                                                <Tab className='col-md-4'><button>{tab2}</button></Tab>
                                            </TabList>
                                            <br />
                                            <TabPanel>
                                                <div className="container">
                                                    {programData ?
                                                        <div className="about__content">
                                                            <div>
                                                                {programData.map(({ Department_order, title, Department_title, Curriculam, Curriculum_name, filecount }) => (
                                                                    <React.Fragment key={Department_order}>
                                                                        <button
                                                                            className={`accordion ${activeIndex2024 === Department_order ? 'active-card' : ''}`}
                                                                            onClick={() => toggleAccordion2024(Department_order)}
                                                                        >
                                                                            <img src={getImageForProgram(title)} style={{ height: '40px' }} alt={title} />
                                                                            &nbsp;&nbsp;&nbsp;&nbsp; {Department_title}
                                                                            <span className="symbol">{activeIndex2024 === Department_order ? '▲' : '▼'}</span>
                                                                        </button>
                                                                        <div
                                                                            className="panel"
                                                                            style={{ display: activeIndex2024 === Department_order ? 'block' : 'none', marginBottom: '14px' }}
                                                                        >
                                                                            <br />
                                                                            <table style={{ width: "100%" }}>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th style={{ textAlign: 'center' }}>Program</th>
                                                                                        <th style={{ textAlign: 'center' }}>2024-25</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td rowSpan={filecount + 1}>B.Tech ({Department_title})</td>
                                                                                    </tr>
                                                                                    {Curriculam && Curriculum_name && Curriculam.map((curr, index) => (
                                                                                        <tr key={index}>
                                                                                            <td>
                                                                                                <Link to={`/curriculum-view/${curr}`} target='_blank'>
                                                                                                    <span style={{ color: "#000", cursor: 'pointer' }}>
                                                                                                        {Curriculum_name[index]}
                                                                                                    </span>
                                                                                                </Link>
                                                                                            </td>
                                                                                        </tr>
                                                                                    ))}
                                                                                </tbody>
                                                                            </table>
                                                                            <br />
                                                                        </div>
                                                                    </React.Fragment>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        : <div><center>{loading ? <img src={Loading} alt="Loading..." /> : "No Data Available"}</center></div>
                                                    }
                                                </div>
                                            </TabPanel>
                                            <TabPanel>
                                                <div className="container">
                                                    {programData25 ?
                                                        <div className="about__content">
                                                            <div>
                                                                {programData25.map(({ Department_order, title, Department_title, Curriculam, Curriculum_name, filecount }) => (
                                                                    <React.Fragment key={Department_order}>
                                                                        <button
                                                                            className={`accordion ${activeIndex2025 === Department_order ? 'active-card' : ''}`}
                                                                            onClick={() => toggleAccordion2025(Department_order)}
                                                                        >
                                                                            <img src={getImageForProgram(title)} style={{ height: '40px' }} alt={title} />
                                                                            &nbsp;&nbsp;&nbsp;&nbsp; {Department_title}
                                                                            <span className="symbol">{activeIndex2025 === Department_order ? '▲' : '▼'}</span>
                                                                        </button>
                                                                        <div
                                                                            className="panel"
                                                                            style={{ display: activeIndex2025 === Department_order ? 'block' : 'none', marginBottom: '14px' }}
                                                                        >
                                                                            <br />
                                                                            <table style={{ width: "100%" }}>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th style={{ textAlign: 'center' }}>Program</th>
                                                                                        <th style={{ textAlign: 'center' }}>2025-26</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td rowSpan={filecount + 1}>B.Tech ({Department_title})</td>
                                                                                    </tr>
                                                                                    {Curriculam && Curriculum_name && Curriculam.map((curr, index) => (
                                                                                        <tr key={index}>
                                                                                            <td>
                                                                                                <Link to={`/curriculum-view/${curr}`} target='_blank'>
                                                                                                    <span style={{ color: "#000", cursor: 'pointer' }}>
                                                                                                        {Curriculum_name[index]}
                                                                                                    </span>
                                                                                                </Link>
                                                                                            </td>
                                                                                        </tr>
                                                                                    ))}
                                                                                </tbody>
                                                                            </table>
                                                                            <br />
                                                                        </div>
                                                                    </React.Fragment>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        : <div><center>{loading ? <img src={Loading} alt="Loading..." /> : "No Data Available"}</center></div>
                                                    }
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
            <FooterTwo />
        </>
    );
}

export default UGCurriculum;