import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import SideManu from './sidebar';
import Banner from '../images/banners/au_vision_mision.webp';
const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='university'
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
                                        <h1 className="breadcrumbs-title">Sponsoring Body</h1>
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
                                       
                                        <p className='contentsize'>
                                            Aditya, the premier promoter of quality education in the coastal districts of Andhra Pradesh for the past four decades, leads various institutions ranging from K.G to P.G besides professional colleges like Engineering, Pharmacy, Management and Nursing. Sri Nallamilli Sesha Reddy as a founder Chairman, promoted the educational society in the name and style of Aditya Academy at Kakinada in the year 1984, with a vision and mission to create a platform for holistic growth and success to students at all levels.<br/><br/>

                                            Aditya has made its entry into the educational arena with a public school to meet the needs of primary and secondary education. In succession and with rapid strides, the academy established a number of Junior Colleges, Degree Colleges, PG Colleges, Engineering Colleges, Pharmacy Colleges, Nursing Colleges.<br/><br/>

                                            The Aditya educational group is with 60,000+ students in 60+ institutions with 6000+ staff across the coastal districts in Andhra Pradesh has become the standard bearer for quality education. In every stream, Aditya has become a springboard for success through its powered vision, constant innovation and professional excellence.
                                        </p>
                                        <p className='contentsize'>The Executive Committee of Aditya Academy consisting of the following visionaries.</p>

                                        <div class="table-responsive  table-striped ">
                                            <table class="table responsive">
                                                <thead>
                                                    <tr>
                                                        <th style={{ backgroundColor: "#00428a", color: '#fff', textAlign: "center" }}>S.No</th>
                                                        <th style={{ backgroundColor: "#00428a", color: '#fff', textAlign: "center", width: '40%' }}>Name of the Trustees</th>
                                                        <th style={{ backgroundColor: "#00428a", color: '#fff', textAlign: "center" }}>Designation</th>
                                                      
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>1</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Dr. N. Sesha Reddy</td>
                                                        <td className='center'>President </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>2</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Dr. N Satish Reddy</td>
                                                        <td className='center'>Vice- President</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>3</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Sri P. Bhaskara Reddy</td>
                                                        <td className='center'>Secretary & Correspondent</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>4</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Sri N. Krishna Deepak Reddy</td>
                                                        <td className='center'>Joint Secretary</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>5</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Sri T. Srinivasa Reddy</td>
                                                        <td className='center'>Add. Joint Secretary</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>6</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Sri B. Venkata Rami Reddy</td>
                                                        <td className='center'>Treasurer</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>7</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Smt. N. Lakshmi Rajyam</td>
                                                        <td className='center'>Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>8</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Smt. N. Sruthi</td>
                                                        <td className='center'>Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>9</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Dr. N. Suguna</td>
                                                        <td className='center'>Member</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>10</td>
                                                        <td style={{ verticalAlign: 'middle' }}>Smt. Ch. Bhuvaneswari</td>
                                                        <td className='center'>Member</td>
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
// Having been an educational lighthouse for almost 40 years, it today boasts of a sprawling network of over 40 revered institutions. With an impeccable workforce of over 3,000 staff, it serves a diverse student community of over 40,000 sprawled over different campuses situated in various cities and towns of Andhra Pradesh.