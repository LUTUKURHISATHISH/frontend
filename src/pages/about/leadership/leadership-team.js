import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import SideManu from './sidebar';
import Loading from '../../../assets/images/icons/loading.gif';
import Banner from '../images/banners/leadership.webp';


const backendUrl = process.env.REACT_APP_DATABASEURL;
const LeadershipTeam = () => {
    const [professor, setProfessor] = useState(null);

    useEffect(() => {
        const fetchProfessorData = async () => {
            try {
                const response = await axios.get(`${backendUrl}api/leadership-team`);
                setProfessor(response.data.leadership_team_members);
            } catch (error) {
                console.error('Error fetching professor data:', error);
            }
        };
        fetchProfessorData();
    }, []); 
    return (
        <>
            <Header
                parentMenu='leadership'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <div className="react-breadcrumbs">
                        <div className="breadcrumbs-wrap">
                            <img className="desktop" src={Banner} alt="Breadcrumbs" />
                            <img className="mobile" src={Banner} alt="Breadcrumbs" />
                            <div className="breadcrumbs-inner">
                                <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Leadership Team</h1>
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
                                    <br />
                                    <div class="container">
                                        {professor ?
                                            <div className="table-responsive table-striped" style={{ width: "100%" }}>
                                                <table className="table responsive">
                                                    <thead>
                                                    <tr>
                                                        <th style={{ backgroundColor: "#0c6ab0", color: '#fff', textAlign: "center",width: '4%' }}>S.No</th>
                                                        <th style={{ backgroundColor: "#0c6ab0", color: '#fff', textAlign: "center", width: '25%' }}>Name</th>
                                                        <th style={{ backgroundColor: "#0c6ab0", color: '#fff', textAlign: "center", width: '45%' }}>Designation</th>
                                                        <th style={{ backgroundColor: "#0c6ab0", color: '#fff', textAlign: "center", width: '45%' }}>Contact</th>

                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                        {professor.map((item, index) => (
                                                            <tr key={index}>
                                                                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{index + 1}</td>
                                                                <td style={{ textAlign: 'left', verticalAlign: 'middle' }}>{item.name}</td>
                                                                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>{item.designation}</td>
                                                                <td style={{ verticalAlign: 'middle' }}>{item.contact}</td>

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
            </div>
            <FooterTwo />
        </>
    );
}

export default LeadershipTeam;