import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import Banner from '../images/banners/governance_finance.webp';
import SideManu from './sidebar';
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
                                        <h1 className="breadcrumbs-title">Finance Committee</h1>
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
                                        <div class="table-responsive table-bordered table-striped ">
                                            <table class="table responsive">
                                                <thead>
                                                    <tr>
                                                        <th style={{ backgroundColor: "#00428a", color: '#fff', textAlign: "center",width: '4%' }}>S.No</th>
                                                        <th style={{ backgroundColor: "#00428a", color: '#fff', textAlign: "center", width: '25%' }}>Name</th>

                                                        <th style={{ backgroundColor: "#00428a", color: '#fff', textAlign: "center", width: '45%' }}>Designation</th>
                                                        <th style={{ backgroundColor: "#00428a", color: '#fff', textAlign: "center", width: '26%' }}>Position in the committee</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>1</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Dr. M. B. Srinivas</td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>Vice-Chancellor</td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>Ex-officio Chairperson</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>2</td>
                                                        <td  style={{ verticalAlign: 'middle' }}>Sri Kona Sasidhar , IAS</td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>The Secretary, Higher Education, Govt of AP</td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>Ex-Officio Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>3</td>
                                                        <td  style={{ verticalAlign: 'middle' }}>Dr. N. Suguna Reddy</td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>Joint Secretary, Sarojini Educational Society, Kakinada. </td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>Nominated member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>4</td>
                                                        <td  style={{ verticalAlign: 'middle' }}>Mr. V. V. Satyanarayana</td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>Chartered Accountant </td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>Nominated member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>5</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Dr. N. Sruthi Reddy</td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>Member, Aditya Academy, Kakinada. </td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>Nominated member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>6</td>
                                                        <td  style={{ verticalAlign: 'middle' }}>Mr. D. Adinarayana</td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>Chief Finance & Accounts Officer (CFAO) </td>
                                                        <td style={{ textAlign: 'center',verticalAlign: 'middle' }}>Ex-Officio Member Secretary</td>
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