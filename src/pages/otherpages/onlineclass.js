import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import FooterTwo from '../../components/Footer/index';
import ScrollToTop from '../../components/ScrollTop';
import Loading from '../../assets/images/icons/loading.gif';
// import Banner from '../images/banners/governance_academic.webp';
import ClassImg from './images/online.png';

const backendUrl = process.env.REACT_APP_DATABASEURL;
const OnlineClassPage = () => {
    const [professor, setProfessor] = useState(null);

    useEffect(() => {
        const fetchProfessorData = async () => {
            try {
                const response = await axios.get(`${backendUrl}api/GetOnlineClassDetails`);
                setProfessor(response.data.onlineClasses);
            } catch (error) {
                console.error('Error fetching professor data:', error);
            }
        };
        fetchProfessorData();
    }, []);
    return (
        <>
            <Header
                parentMenu='governance'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <div className="react-breadcrumbs">
                        <div className="breadcrumbs-wrap">
                            {/* <img className="desktop" src={Banner} alt="Breadcrumbs" />
                            <img className="mobile" src={Banner} alt="Breadcrumbs" /> */}
                            <div className="breadcrumbs-inner">
                                <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">OnlineClass</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <br />
                                    <div class="container">
                                        {professor ?
                                            <div className="table-responsive table-striped" style={{ width: "100%" }}>
                                                <table className="table responsive">
                                                    <thead>
                                                        <tr>
                                                            <th rowSpan={2} style={{ backgroundColor: "#0c6ab0", color: '#fff', textAlign: "center", verticalAlign: 'middle' }}>S.No</th>
                                                            <th rowSpan={2} style={{ backgroundColor: "#0c6ab0", color: '#fff', textAlign: "center", verticalAlign: 'middle', width: "120px" }}>Date</th>
                                                            <th colSpan={2} style={{ backgroundColor: "#0c6ab0", color: '#fff', textAlign: "center", verticalAlign: 'middle' }}>FN - 10.00 AM to 12.00 PM</th>
                                                            <th colSpan={2} style={{ backgroundColor: "#0c6ab0", color: '#fff', textAlign: "center", verticalAlign: 'middle' }}>AN - 02.00 PM to 04.00 PM</th>
                                                        </tr>
                                                        <tr>
                                                            <th style={{ backgroundColor: "#0c6ab0", color: '#fff', textAlign: "center", verticalAlign: 'middle' }}>Topic to be delivered</th>
                                                            <th style={{ backgroundColor: "#0c6ab0", color: '#fff', textAlign: "center", verticalAlign: 'middle' }}>Recording Link</th>
                                                            <th style={{ backgroundColor: "#0c6ab0", color: '#fff', textAlign: "center", verticalAlign: 'middle' }}>Topic to be delivered</th>
                                                            <th style={{ backgroundColor: "#0c6ab0", color: '#fff', textAlign: "center", verticalAlign: 'middle' }}>Recording Link</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {professor.map((item, index) => (
                                                            <tr key={index}>
                                                                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{index + 1}</td>
                                                                <td style={{ textAlign: 'left', verticalAlign: 'middle', width: "120px" }}>{item.date}</td>
                                                                {item.mrnglink !== '' ? (
                                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize:"13px" }}> <a href={item.mrnglink} target="_blank" className='animation'  rel="noopener noreferrer">{item.mrng_topicname} <img src={ClassImg} alt="Class" style={{height: "20px"}}/></a> </td>
                                                                    ) : (
                                                                        <td style={{ textAlign: 'left', verticalAlign: 'middle' }}>{item.mrng_topicname}</td>
                                                                    )}
                                                               
                                                                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                                                    {item.mrng_record_link !== '' ? (
                                                                        <a href={item.mrng_record_link} target="_blank" className='classbutton' rel="noopener noreferrer">Link</a>
                                                                    ) : (
                                                                        ''
                                                                    )}
                                                                </td>
                                                                 {item.afterlink !== '' ? (
                                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle', fontSize:"13px" }}> <a href={item.afterlink} target="_blank" className='animation'  rel="noopener noreferrer">{item.after_topicname} <img src={ClassImg} alt="Class" style={{height: "20px"}}/></a> </td>
                                                                    ) : (
                                                                        <td style={{ textAlign: 'left', verticalAlign: 'middle' }}>{item.after_topicname}</td>
                                                                    )}
                                                                
                                                                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                                                    {item.after_record_link !== '' ? (
                                                                        <a href={item.after_record_link} target="_blank" className='classbutton' rel="noopener noreferrer">Link</a>
                                                                    ) : (
                                                                        ''
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            : <div><center><img src={Loading} alt="Loading..." /></center></div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ScrollToTop />
                </div>
            </div >
            <FooterTwo />
        </>
    );
}

export default OnlineClassPage;