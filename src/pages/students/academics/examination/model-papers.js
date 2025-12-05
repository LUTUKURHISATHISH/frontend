import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../components/ScrollTop';
import ExaminationImage from './model-papers/images/exam.png';
import Loading from '../images/loading.gif';
import SideManu from './sidebar';

const backendUrl = process.env.REACT_APP_DATABASEURL;

const BTechPapers = () => {
    const [programData, setProgramData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [selectedRegulation, setSelectedRegulation] = useState("AUS24");
    const [selectedCourse, setSelectedCourse] = useState("B.Tech");
    const [selectedSemester, setSelectedSemester] = useState("1");


    useEffect(() => {
        // Fetch data from API
        const fetchData = async () => {
            try {
                setLoading(true)
                setProgramData([])
                const response = await axios.get(`${backendUrl}api/mondel_papers/${selectedRegulation}/${selectedCourse}/${selectedSemester}`);
                console.log(response)
                setProgramData(response.data.mondel_paper);
            } catch (error) {
                console.error("Error fetching model papers:", error);
            } finally {
                setLoading(false)
            }
        };
        fetchData();
    }, [selectedRegulation, selectedCourse, selectedSemester, backendUrl]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle open/close state
    };

    return (
        <>
            <Header parentMenu='academics' menuCategoryEnable='enable' />
            <div className="react-wrapper background_height">
                <div className="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="Model Question Papers" />
                    <div className="high_quality-section pt---50 pb---120">
                        <div className="container">
                            <div className="row m-0">
                                <SideManu />
                                <div className="bg_color">
                                    <div className="container">
                                        <div className="col-md-12">
                                            <div className="login-right-form">
                                                <form>
                                                    <div className="row">
                                                        {/* Regulation */}
                                                        <div className="col-md-4">
                                                            <b htmlFor="regulation" className="select-label" style={{ color: '#F05819' }}>Regulation  </b>
                                                            <select
                                                                name="regulation"
                                                                id="regulation"
                                                                className="year-select"
                                                                value={selectedRegulation}
                                                                onChange={(e) => setSelectedRegulation(e.target.value)}
                                                            >
                                                                <option value="AUS24">AUS24</option>
                                                                <option value="AUS25">AUS25</option>
                                                                <option value="AUS26">AUS26</option>
                                                            </select>
                                                        </div>

                                                        {/* Course */}
                                                        <div className="col-md-4">
                                                            <b htmlFor="course" className="select-label" style={{ color: '#F05819' }}>Program  </b>
                                                            <select
                                                                name="course"
                                                                id="course"
                                                                className="year-select"
                                                                value={selectedCourse}
                                                                onChange={(e) => setSelectedCourse(e.target.value)}
                                                            >
                                                                <option value="B.Tech">B.Tech</option>
                                                                <option value="M.Tech">M.Tech</option>
                                                                <option value="MBA">MBA</option>
                                                                <option value="IMBA">MBA (Intergrated)</option>
                                                                <option value="MCA">MCA</option>
                                                                <option value="B.Pharmacy">B.Pharmacy</option>
                                                                <option value="Pharma.D">Pharma.D</option>
                                                                <option value="M.Pharmacy (Pharmaceutics)">M.Pharmacy (Pharmaceutics)</option>
                                                                <option value="M.Pharmacy (Pharmaceutical Analysis)">M.Pharmacy (Pharmaceutical Analysis)</option>
                                                                <option value="B.Sc.(Forensic Science)">B.Sc.(Forensic Science)</option>
                                                                <option value="B.Sc.(Cyber Security & Digital Forensics)">B.Sc.(Cyber Security & Digital Forensics)</option>
                                                                <option value="M.Sc.(Forensic Science)">M.Sc.(Forensic Science)</option>
                                                                <option value="M.Sc.(Cyber Security & Digital Forensics)">M.Sc.(Cyber Security & Digital Forensics)</option>
                                                            </select>
                                                        </div>

                                                        {/* Semester */}
                                                        <div className="col-md-4">
                                                            <b htmlFor="semester" className="select-label" style={{ color: '#F05819' }}>Semester  </b>
                                                            <select
                                                                name="semester"
                                                                id="semester"
                                                                className="year-select"
                                                                value={selectedSemester}
                                                                onChange={(e) => setSelectedSemester(e.target.value)}
                                                            >
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                                <option value="6">6</option>
                                                                <option value="7">7</option>
                                                                <option value="8">8</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <br />
                                        {programData.length === 0 ? <center><b style={{color:'#F05819'}}> There is No available data in the old model papers.</b></center> :
                                            <div>
                                                {programData.map((program, index) => (
                                                    <React.Fragment key={program._id}>
                                                        <button
                                                            className={`accordion ${activeIndex === index ? 'active-card' : ''}`}
                                                            onClick={() => toggleAccordion(index)}
                                                        >
                                                            <img src={ExaminationImage} style={{ height: '40px' }} alt={program.title} />
                                                            &nbsp;&nbsp;&nbsp;&nbsp;{selectedCourse} Model papers
                                                            <span className="symbol">{activeIndex === index ? '▲' : '▼'}</span>
                                                        </button>
                                                        <div className="panel" style={{ display: activeIndex === index ? 'block' : 'none', marginBottom: '14px' }}>
                                                            {loading ? <center><img src={Loading} /> </center> :
                                                                <div>
                                                                    <table style={{ width: "100%" }}>
                                                                        <thead>
                                                                            <tr>
                                                                                <th style={{ textAlign: 'center' }}>Subject Name</th>
                                                                                <th style={{ textAlign: 'center' }}>Action</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {program.papers.map((paper, paperIndex) => (
                                                                                <tr>
                                                                                    <td style={{ textTransform: 'capitalize' }}><div>{paper.subject_name}</div></td>
                                                                                    <td style={{ textAlign: 'center' }}>
                                                                                        <a href={`${backendUrl}${paper.attachment}`} target="_blank" rel="noopener noreferrer" style={{ color: "#000" }} className='namehover'>
                                                                                            View
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                    <br />
                                                                </div>
                                                            }
                                                        </div>
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollToTop />
            </div>
            <FooterTwo />
        </>
    );
};

export default BTechPapers;
