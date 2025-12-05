import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import SideManu from './sidebar';
import Banner from '../images/banners/governance_governing_body.webp';

const diploma_programs = () => {
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
                            <img className="desktop" src={Banner} alt="Breadcrumbs" />
                            <img className="mobile" src={Banner} alt="Breadcrumbs" />
                            <div className="breadcrumbs-inner">
                                <div className="container">
                                    <div className="breadcrumbs-text">
                                        <h1 className="breadcrumbs-title">Governing Body</h1>
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
                                        <div class="table-responsive  table-striped ">
                                            <table class="table responsive">
                                                <thead>
                                                    <tr>
                                                        <th style={{ backgroundColor: "#00428a", color: '#fff', textAlign: "center" }}>S.No</th>
                                                        <th style={{ backgroundColor: "#00428a", color: '#fff', textAlign: "center", width: '25%' }}>Name</th>

                                                        <th style={{ backgroundColor: "#00428a", color: '#fff', textAlign: "center" }}>Designation</th>
                                                        <th style={{ backgroundColor: "#00428a", color: '#fff', textAlign: "center", width: '26%' }}>Position in the committee</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>1</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Dr. N Sesha Reddy</td>
                                                        <td className='center'>Chancellor</td>
                                                        <td className='center'>Ex-officio  Chairperson </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>2</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Dr. N Satish Reddy</td>
                                                        <td className='center'>Pro-Chancellor</td>
                                                        <td className='center'>Ex-officio Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>3</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Dr. M. B. Srinivas</td>
                                                        <td className='center'>Vice-Chancellor</td>
                                                        <td className='center'>Ex-officio Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>4</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Sri Kona Sasidhar , IAS</td>
                                                        <td className='center'>The Secretary, Higher Education, Govt of AP</td>
                                                        <td className='center'>Ex-officio Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>5</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Prof.K.Madhu Murthy</td>
                                                        <td className='center'>The Chairman, Andhra Pradesh State Council of Higher Education (APSCHE)</td>
                                                        <td className='center'>Ex-officio Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>6</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Dr. M. Sreenivasa Reddy</td>
                                                        <td className='center'>Deputy Pro-Chancellor</td>
                                                        <td className='center'>Nominated Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>7</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Dr. S. Rama Sree</td>
                                                        <td className='center'>Pro Vice-Chancellor</td>
                                                        <td className='center'>Nominated Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>8</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Prof. Lalit Mohan Patnaik</td>
                                                        <td className='center'>NASI Senior Scientist, Adjunct Professor, National Institute of Advanced Studies, Bangalore.</td>
                                                        <td className='center'>Nominated Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>9</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Prof. Jigisha Parikh</td>
                                                        <td className='center'>Professor, Chemical Engineering Department, SVNIT Gujarat, Scientist-G, SERB, DST.</td>
                                                        <td className='center'>Nominated Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>10</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Mr. D. V. S. Narayana Raju</td>
                                                        <td className='center'>Executive Director,  Deccan Fine Chemicals India Pvt. Ltd., Hyderabad </td>
                                                        <td className='center'>Nominated Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>11</td>
                                                        <td style={{ verticalAlign: 'middle' }}>CA. V.V. Satyanarayana</td>
                                                        <td className='center'>Chartered Accountant</td>
                                                        <td className='center'>Nominated Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>12</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Prof. Ram K. Sharma</td>
                                                        <td className='center'>Vice-Chancellor, University of Petroleum and Energy Studies, Dehradun</td>
                                                        <td className='center'>Nominated Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>13</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Prof. R. Venkata Rao</td>
                                                        <td className='center'>Vice-Chancellor, India International University of Legal Education and Research, Goa.</td>
                                                        <td className='center'>Nominated Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>14</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Dr. N. Suguna Reddy</td>
                                                        <td className='center'>Joint Secretary, Sarojini Educational Society, Kakinada.</td>
                                                        <td className='center'>Nominated Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>15</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Dr. N. Sruthi Reddy</td>
                                                        <td className='center'>Member, Aditya Academy, Kakinada</td>
                                                        <td className='center'>Nominated Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>16</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Dr. G. Suresh</td>
                                                        <td className='center'>Registrar</td>
                                                        <td className='center'>Ex-officio Member Secretary</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
        </>
    );
}

export default diploma_programs;