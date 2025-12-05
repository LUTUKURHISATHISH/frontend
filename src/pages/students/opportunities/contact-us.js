import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import Image1 from './images/contact/nagaraju.webp';
import Image2 from './images/contact/jafarali.webp';
import Image3 from './images/contact/suresh.webp';
import Image4 from './images/contact/vasavi.webp';
import Image5 from './images/contact/harikirshna.webp';
import Phone from './images/contact/phone.webp';
import Email from './images/contact/email.webp';
import Banner from '../images/banners/opportunities.webp';
import SideManu from './sidebar';
import '../../outreach/outreach.css';
const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='opportunities'
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
                                        <h1 className="breadcrumbs-title">Contact Us</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <SideManu />
                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12 bg_color bg_color_out" style={{ backgroundColor: "#fff" }}>
                                    <center>
                                    <div className="container">
                                        <div className="team-container">
                                            <div className="team-card cardbleft">
                                                <img src={Image1} />
                                                <div className='detail-card'>
                                                    <br/>
                                                    <h3>Mr. V. Naga Raju</h3>
                                                    <p><img src={Phone} style={{width:'20px'}}/> +91 70361 76668<br />
                                                    <img src={Email} style={{width:'20px'}}/> nagaraju@aditya.ac.in</p>
                                                    <p className="role">Head Placements</p>
                                                </div>
                                            </div>
                                            <div className="team-card cardbright">
                                                <img src={Image2} />
                                                <div className='detail-card'>
                                                   <br/>
                                                    <h3>Mr. MD.Jafarali</h3>
                                                    <p><img src={Phone} style={{width:'20px'}}/> +91 76609 16662<br />
                                                    <img src={Email} style={{width:'20px'}}/> jafar@aditya.ac.in</p>
                                                    <p className="role">Placement Officer</p>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="team-container">
                                            <div className="team-card cardbleft">
                                                <img src={Image4}/>
                                                <div className='detail-card'>
                                                    <br/>
                                                    <h3>Mrs. K.Vasavi</h3>
                                                    <p><img src={Phone} style={{width:'20px'}}/> +91 92905 49747<br />
                                                    <img src={Email} style={{width:'20px'}}/> vasavi@aditya.ac.in</p>
                                                    <p className="role" style={{marginTop:'-20px'}}>Manager-Industry <br/>Relations & Placements</p>
                                                </div>
                                            </div>
                                            <div className="team-card cardbright">
                                                <img src={Image3}/>
                                                <div className='detail-card'>
                                                    <br/>
                                                    <h3>Mr. L. Suresh</h3>
                                                    <p><img src={Phone} style={{width:'20px'}}/> +91 76609 16662<br />
                                                    <img src={Email} style={{width:'20px'}}/> jafar@aditya.ac.in</p>
                                                    <p className="role">Placement Coordinator</p>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="team-container">
                                            <div className="team-card cardbleft">
                                                <img src={Image5} />
                                                <div className='detail-card'>
                                                    <br/>
                                                    <h3>Mr. G. Hari Krishna</h3>
                                                    <p><img src={Phone} style={{width:'20px'}}/> +91 96181 76664 <br/><img src={Phone} style={{width:'14px'}}/> +91 99664 39688<br />
                                                    <img src={Email} style={{width:'20px'}}/> harikrishna@aditya.ac.in <br/> 
                                                    <img src={Email} style={{width:'14px'}}/> tpo@adityauniversity.in</p>
                                                    <p className="role">Placement Coordinator</p>
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

export default diploma_programs;