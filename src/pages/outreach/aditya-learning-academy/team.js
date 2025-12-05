import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import StudyBreadcrumb from '../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../components/ScrollTop';
import Image1 from '../images/team/veeranjaneyulu.webp';
import Image2 from '../images/team/vjaya kumar.webp';
import Image3 from '../images/team/rajesh.webp';
import Image4 from '../images/team/Ramudu.webp';
import Image5 from '../images/team/neelimaaa.webp';
import Image6 from '../images/team/Jalaiah.webp';
import Image7 from '../images/team/Ganapathi.webp';
import Image8 from '../images/team/Maheswararao.webp';
import Banner from '../images/banners/ala_team.webp';
import SideManu from './sidebar';
import '../outreach.css';
const TeamMember = () => {
    return (
        <>
            <Header
                parentMenu='adityalearning'
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
                                        <h1 className="breadcrumbs-title">Team</h1>
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
                                    <center>
                                        <div className="container">
                                            <div className="team-container">
                                                <div className="team-card cardbleft">
                                                    <img
                                                        src={Image1}
                                                        alt="Dr. K. Ayyappa Swamy"
                                                    />
                                                    <div className='detail-card'>
                                                        <br />
                                                        <h3>Dr. I Veeranjaneyulu</h3>
                                                        <p>Assoc Professor,Dept. of IT,<br />School of Engineering</p>
                                                        <p className="role">Coordinator</p>
                                                    </div>
                                                </div>
                                                <div className="team-card cardbright">
                                                    <img src={Image2} alt="Dr. I Veeranjaneyulu" />
                                                    <div className='detail-card'>
                                                        <br />
                                                        <h3>Dr. P Vijaya Kumar</h3>
                                                        <p>Assoc Professor,Dept. of ECE<br />School of Engineering</p>
                                                        <p className="role">Member</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                             <div className="team-container">
                                                <div className="team-card cardbleft">
                                                    <img
                                                        src={Image5}
                                                        alt="Mrs. S. Neelima"
                                                    />
                                                    <div className='detail-card'>
                                                        <br />
                                                        <h3>Mrs. S. Neelima</h3>
                                                        <p>Asst Professor,Dept. of IT,<br />School of Engineering</p>
                                                        <p className="role">Member</p>
                                                    </div>
                                                </div>
                                                <div className="team-card cardbright">
                                                    <img
                                                        src={Image6}
                                                        alt="Dr. S. Jalaiah" className='img-fluid'
                                                    />
                                                    <div className='detail-card'>
                                                        <br />
                                                        <h3>Dr. S. Jalaiah</h3>
                                                        <p>Asst Professor,Dept.of CSE,<br />School of Engineering</p>
                                                        <p className="role">Member</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="team-container">
                                                 <div className="team-card cardbleft">
                                                    <img
                                                        src={Image3}
                                                        alt="Dr. N. Rajesh"
                                                    />
                                                    <div className='detail-card'>
                                                        <br />
                                                        <h3>Dr. N. Rajesh</h3>
                                                        <p>Asst Professor,Dept. of AI&ML,<br />School of Engineering</p>
                                                        <p className="role">Member</p>
                                                    </div>
                                                </div>

                                                <div className="team-card cardbright">
                                                    <center>  <img
                                                        src={Image4}
                                                        alt="Dr. G. Ramudu"
                                                    />
                                                    </center>
                                                    <div className='detail-card'>
                                                        <br />
                                                        <h3>Dr. G. Ramudu</h3>
                                                        <p>Asst Professor,Dept. of EEE,<br />School of Engineering</p>
                                                        <p className="role">Member</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                           <div className="team-container">
                                                 <div className="team-card cardbleft">
                                                    <img
                                                        src={Image7}
                                                        alt="Dr. N. Rajesh"
                                                    />
                                                    <div className='detail-card'>
                                                        <br />
                                                        <h3>Mr.S.Ganapathi</h3>
                                                        <p>Asst Professor,Dept. of ME,<br />School of Engineering</p>
                                                        <p className="role">Member</p>
                                                    </div>
                                                </div>

                                                <div className="team-card cardbright">
                                                    <center>  <img
                                                        src={Image8}
                                                        alt="Mr. B. Maheswara Rao"
                                                    />
                                                    </center>
                                                    <div className='detail-card'>
                                                        <br />
                                                        <h3>Mr. B. Maheswara Rao</h3>
                                                        <p>Asst Professor,Dept. of CE,<br />School of Engineering</p>
                                                        <p className="role">Member</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
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

export default TeamMember;