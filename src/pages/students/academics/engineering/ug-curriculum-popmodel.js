import React, { useState, useEffect } from 'react';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../components/ScrollTop';
import Modal from 'react-modal';

import SideManu from './sidebar';
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
Modal.setAppElement('#root');
const backendUrl = process.env.REACT_APP_DATABASEURL;


const PGRegulations = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [programData, setProgramData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   

    const openModal = (pdf) => {
        setSelectedPdf(pdf);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedPdf(null);
    };

    useEffect(() => {
        const fetchSyllabusData = async () => {
            try {
                const response = await fetch(`${backendUrl}api/getSyllabusAggregation`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProgramData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchSyllabusData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const imageMap = {
        'Civil': Civil,
        'CSE': CSE,
        'AI&ML': AIML,
        'ECE': ECE,
        'Mech': Mech,
        'PT': PT,
        'CSEDS': CSEDS,
        'IT': IT,
        'AGRI': AGRI,
        'Mining': Mining,
        'EEE': EEE,
    };

    const getImageForProgram = (title) => imageMap[title] || '';
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle open/close state
    };
    return (
        <>
            <Header
                parentMenu='academics'
                menuCategoryEnable='enable'
            />

            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="UG Program Curriculum" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <SideManu />
                            <div class="row m-0 react__title__section-all">
                                <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <br />
                                    <div className="container">
                                        <div className="about__content">
                                            <div>
                                                {programData.map(({ Department_order, title, Department_title, Curriculam, Curriculum_name, filecount }) => (
                                                    <React.Fragment key={Department_order}>
                                                        <button
                                                            className={`accordion ${activeIndex === Department_order ? 'active-card' : ''}`}
                                                            onClick={() => toggleAccordion(Department_order)}
                                                        >
                                                            <img src={getImageForProgram(title)} style={{ height: '40px' }} alt={title} />
                                                            &nbsp;&nbsp;&nbsp;&nbsp; {Department_title}
                                                            <span className="symbol">{activeIndex === Department_order ? '▲' : '▼'}</span>
                                                        </button>
                                                        <div
                                                            className="panel"
                                                            style={{ display: activeIndex === Department_order ? 'block' : 'none', marginBottom: '14px' }}
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
                                                                                <span onClick={() => openModal(curr)} style={{ color: "#000", cursor: 'pointer' }}>
                                                                                    {Curriculum_name[index]}
                                                                                </span>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ScrollToTop />
                </div>
            </div>
            <FooterTwo />
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Curriculum PDF" className="Modal">
                <br /><br />  <br /><br />
                <button onClick={closeModal} className="close-button" style={{
                    float: 'right',
                    background: '#1f3860',
                    color: 'white',
                    height: '39px',
                    width: '79px',
                    padding: '3px'
                }}><b>Close</b></button>
                {selectedPdf && (
                    <center>
                        <iframe
                            src={`https://adityauniversity.in:4001/department_syllabus/${selectedPdf}#toolbar=0`}
                            title="Curriculum PDF"
                            width="60%"
                            height="800px"
                            style={{ marginTop: '25px' }}
                        />
                    </center>
                )}
            </Modal>
        </>
    );
}

export default PGRegulations;