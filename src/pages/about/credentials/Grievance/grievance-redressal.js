import React, { useState } from 'react';
import Header from '../../../../components/Header';
import { Link } from 'react-router-dom';
import FooterTwo from '../../../../components/Footer/index';
import ScrollToTop from '../../../../components/ScrollTop';
import Ombudsman from './images/Ombudsman.webp';
import General from './images/general.png';
import Women from './images/Gender.webp';
import General1 from './images/student.png';
import General2 from './images/faculty.png';
import Banner from '../../images/banners/grievance.webp';


const GrievanceRedressal = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalToggle = () => {
        setShowModal(!showModal);
    };
    const [showOmbudsmanModal, setShowOmbudsmanModal] = useState(false);

    const handleOmbudsmanModalToggle = () => {
        setShowOmbudsmanModal(!showOmbudsmanModal);
    };

    return (
        <>
            <Header
                parentMenu="credentials"
                menuCategoryEnable="enable"
            />
            <div className="react-wrapper background_height">
                <div className="react-wrapper-inner background_image">
                    <div className="react-breadcrumbs">
                        <div className="breadcrumbs-wrap">
                            <img className="desktop" src={Banner} alt="Breadcrumbs" />
                            <img className="mobile" src={Banner} alt="Breadcrumbs" />
                            <div className="breadcrumbs-inner">
                                <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Grievance</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="container" style={{ padding: '20px' }}>
                        <div className="row justify-content-center">
                            {/* General Grievances */}
                            <div className="col-lg-4 col-md-6 col-sm-12 text-center" style={{ padding: '10px' }}>
                                <img
                                    src={General}
                                    alt="General Grievances"
                                    className="img-fluid rounded shadow-sm cardimage"
                                    style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
                                    onClick={handleModalToggle} // Open modal on click
                                />
                            </div>
                            {/* Gender Grievances */}
                            <div className="col-lg-4 col-md-6 col-sm-12 text-center" style={{ padding: '10px' }}>
                                <Link to='/grievances/Gender Grievances'>
                                    <img
                                        src={Women}
                                        alt="Gender Grievances"
                                        className="img-fluid rounded shadow-sm cardimage"
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                    />
                                </Link>
                            </div>
                            {/* Ombudsman Grievances */}
                            {/* <div className="col-lg-4 col-md-6 col-sm-12 text-center" style={{ padding: '10px' }}>
                                <img
                                    src={Ombudsman}
                                    alt="Ragging Grievances"
                                    className="img-fluid rounded shadow-sm cardimage"
                                    style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
                                    onClick={handleOmbudsmanModalToggle}
                                />
                            </div> */}
                            <div className="col-lg-4 col-md-6 col-sm-12 text-center" style={{ padding: '10px' }}>
                                <Link to='/grievances/Ombudsman Grievance'>
                                    <img
                                        src={Ombudsman}
                                        alt="Ombudsman Grievance"
                                        className="img-fluid rounded shadow-sm cardimage"
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Modal */}
                    {showModal && (
                        <div className="modal-overlay">
                            <div className="modal-content" style={{ padding: "30px" }}>
                                <button className="close_button" onClick={handleModalToggle}>×</button>
                                <div className="modal-body" style={{ backgroundColor: "#dce9f2" }}>
                                    <Link to='/grievances/Student Grievances'> <img
                                        src={General1}
                                        alt="General Grievance 1"
                                        className="img-fluid"
                                        style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px', padding: '10px', borderRadius: '20px' }}
                                    />
                                    </Link>
                                    <Link to='/grievances/Faculty Grievances'>
                                        <img
                                            src={General2}
                                            alt="General Grievance 2"
                                            className="img-fluid rounded"
                                            style={{ maxWidth: '90%', height: 'auto', marginTop: '-12px' }}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* <br />
                    {showOmbudsmanModal && (
                        <div className="modal-overlay">
                            <div className="modal-content" style={{ padding: "30px", maxWidth: '600px' }}>
                                <button className="close_button" onClick={handleOmbudsmanModalToggle}>×</button>
                                <div className="modal-body" style={{ backgroundColor: "#dce9f2", borderRadius: '15px', padding: '20px' }}>
                                    <h5 style={{ fontWeight: 'bold' }}>Prof. Dr. K. Mallikarjuna Rao</h5>
                                    <p>Retired Professor, Department of Mechanical Engineering</p>
                                    <p>JNTUK.Kakinda</p>

                                    <p><strong>Email:</strong> <a href="mailto:mallikjntu@gmail.com">mallikjntu@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                    )} */}
                    <ScrollToTop />
                </div>
            </div>
            <FooterTwo />
        </>
    );
};

export default GrievanceRedressal;
