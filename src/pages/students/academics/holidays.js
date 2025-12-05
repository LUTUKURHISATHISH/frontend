import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import StudyBreadcrumb from '../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../components/ScrollTop';
// import SideManu from './sidebar';
import VinayakaChavithi from './images/holidays/Ganesh Chavithi.png';
import EidMiladun from './images/holidays/eid milad un nabi.png';
import SriKrishna from './images/holidays/Sri Krishna janmashtami.png';
import Moharrum from './images/holidays/Moharrum.png';
import Independence from './images/holidays/Independence.png';
// import Gandhiji from './images/holidays/Gandhiji.png';
import Holi from './images/holidays/holi.png';
import Goodfriday from './images/holidays/Good friday.png';
import DIWALI from './images/holidays/DIWALI.png';
import Dasara from './images/holidays/Dasara.png';
import Ambedkar from './images/holidays/ambedkar.png';
import Shivaratri from './images/holidays/shiva ratri.png';
import Ramzan from './images/holidays/Ramzan.png';
import sankrant from './images/holidays/Sankranti.png';
// import Jagajjivan from './images/holidays/Babu jagajjivan Ram Jayanthi.png';
import Ugadi from './images/holidays/Ugadi.png';
import SriRama from './images/holidays/Rama Navami.png';
import Republic from './images/holidays/Republic day.png';
import Christmas from './images/holidays/Christmas.png';
import NewYear from './images/holidays/new year.png';

const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='academics'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="Holidays" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            {/* <SideManu /> */}
                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <br />
                                    <div class="container">
                                        <center><b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">General Holidays (2025-26)</san> </b><br /></center>
                                        <div class="table-responsive table-bordered table-striped ">
                                            <table class="table responsive table_width">
                                                <thead>
                                                    <tr>
                                                        <th style={{ backgroundColor: "#0c6ab0", color: '#fff', width: "4%", textAlign: "center" }}>S.No</th>
                                                        <th style={{ backgroundColor: "#0c6ab0", color: '#fff', width: "15%", textAlign: "center" }}>Date</th>
                                                        <th style={{ backgroundColor: "#0c6ab0", color: '#fff', width: "20%", textAlign: "center" }}>Day</th>
                                                        <th style={{ backgroundColor: "#0c6ab0", color: '#fff', width: "30%", textAlign: "center" }}>Name of the Holiday</th>
                                                        <th style={{ backgroundColor: "#0c6ab0", color: '#fff', width: "1%", textAlign: "center" }}>Image</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>1</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>15-08-2025</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>Friday</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>Independence Day </td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}><img src={Independence} /></td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>2</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>16-08-2025</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>Saturday</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>Krishna Janmashtami</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}><img src={SriKrishna} /></td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>3</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>27-08-2025</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>Wednesday</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>Vinayaka Chavithi</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}><img src={VinayakaChavithi} /> </td>

                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>4</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>05-09-2025</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>Friday</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>Eid Miladun Nabi</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}><img src={EidMiladun} /> </td>

                                                    </tr>
                                                     <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>5</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>28-09-2025 <br />to<br /> 05-10-2025</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Sunday to Sunday</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Dasara Holidays</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><img src={Dasara} /> </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>6</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>20-10-2025</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Monday</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Deepavali</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><img src={DIWALI} /> </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>7</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>25-12-2025</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Thursday</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Christmas</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><img src={Christmas} /></td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>8</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>01-01-2026</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Thursday</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>New Year</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><img src={NewYear} /></td>
                                                    </tr>
                                                     <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>9</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>11-01-2026 <br />to<br /> 18-01-2026</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Sunday to Sunday</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Sankranthi Holidays</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><img src={sankrant} /></td>
                                                    </tr>
                                                     <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>10</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>26-01-2026</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Monday</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Republic day</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><img src={Republic} /></td>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>11</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>04-03-2026</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Wednesday</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Holi</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><img src={Holi} /> </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>12</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>20-03-2026</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Friday</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Ugadi</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><img src={Ugadi} /></td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>13</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>21-03-2026</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Saturday</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>RamZan(Eld-ul-Fitr)</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><img src={Ramzan} /> </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>14</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>26-03-2026</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Thursday</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Sri RamaNavami</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><img src={SriRama} /></td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>14</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>03-04-2026</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Friday</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Good Friday</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><img src={Goodfriday} /> </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>15</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>14-04-2026</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Tuesday</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Dr.B.R Ambdedkar Jayanthi</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><img src={Ambedkar} /> </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>16</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>27-05-2026</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>Wednesday</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>Bakrid (Eid-ul-Azha)</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}><img src={EidMiladun} /></td>

                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>17</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>26-06-2026</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>Friday</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>Moharram  </td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}><img src={Moharrum} /></td>
                                                    </tr>
                                                    
                                                    
                                                    {/* <tr>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>7</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>02-10-2025</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>Wednesday</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>Gandhi Jayanti</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}><img src={Gandhiji} /> </td>
                                                    </tr>
                                                   <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>16</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>05-04-2025</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Saturday</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Babu jagajjivan Ram Jayanthi</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><img src={Jagajjivan} /></td>
                                                    </tr> */}
                                                   
                                                </tbody>
                                            </table>
                                        </div>
                                        <br />
                                        <san className="hedingname_orange">The following festivals fall on Sundays</san> <br />
                                        <div class="table-responsive table-bordered table-striped ">
                                            <table class="table responsive table_width">
                                                <thead>
                                                    <tr>
                                                        <th style={{ backgroundColor: "#0c6ab0", color: '#fff', width: "4%", textAlign: "center" }}>S.No</th>
                                                        <th style={{ backgroundColor: "#0c6ab0", color: '#fff', width: "15%", textAlign: "center" }}>Date</th>
                                                        <th style={{ backgroundColor: "#0c6ab0", color: '#fff', width: "20%", textAlign: "center" }}>Day</th>
                                                        <th style={{ backgroundColor: "#0c6ab0", color: '#fff', width: "30%", textAlign: "center" }}>Name of the Holiday</th>
                                                        <th style={{ backgroundColor: "#0c6ab0", color: '#fff', width: "1%", textAlign: "center" }}>Image</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>01</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>06-07-2025</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>Sunday</td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}>Moharram  </td>
                                                        <td style={{ textAlign: "center", verticalAlign: "middle" }}><img src={Moharrum} /></td>
                                                    </tr>
                                                   
                                                   <tr>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>02</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>15-02-2026</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Sunday</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Maha Shivaratri</td>
                                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><img src={Shivaratri} /> </td>
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