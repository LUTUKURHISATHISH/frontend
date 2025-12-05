import React from 'react';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import ScrollToTop from '../../../../components/ScrollTop';
import Banner from '../../images/banners/rankings.webp';
import SideManu from './sidebar';
import Insighys from './images/insighys.webp';
import Careers from './images/careers.webp';
import Siliconindis from './images/siliconindis.webp';
import WordRaking from './images/word raking.webp';
import Dataquest from './images/dataquest.webp';
import Engineering from './images/engineering.webp';
import Theweek from './images/theweek.webp';
import Thumbnail_Impact from './images/thumbnail_Impact.webp';
import QS from './images/qs.webp';







const diploma_programs = () => {
    return (
        <>
            <Header
                parentMenu='accreditation'
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
                                        <h1 className="breadcrumbs-title">Rankings</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <SideManu />
                            <div class="row m-0">
                                <center>
                                    <div class="col-md-10  col-sm-12 col-10" style={{ backgroundColor: "#fff",padding:"50px  10px 50px 10px",borderRadius:"10px"}}>

                                        <hr className='hr_line_image' style={{display:'none'}}/>
                                        <div class="container_card">
                                            <div class="logo">
                                                <img src={Thumbnail_Impact} alt="Thumbnail_Impact"></img>
                                            </div>
                                            <div class="content container_card">
                                               <p> Times Higher Education across India <br />
                                                <hr className='hr_line_image_480'/>
                                                  <spn class="rank">50<sup>th</sup> RANK </spn></p>
                                            </div>
                                        </div>
                                         <br/>
                                        <hr className='hr_line_image' style={{display:'none'}}/>
                                        <div class="container_card">
                                            <div class="logo">
                                                <img src={Thumbnail_Impact} alt="Thumbnail_Impact"></img>
                                            </div>
                                            <div class="content container_card">
                                               <p> Times Higher Education across world wide <br />
                                                <hr className='hr_line_image_480'/>
                                                  <spn class="rank">1001-1500 RANK </spn></p>
                                            </div>
                                        </div>
                                        <br/>
                                        <hr className='hr_line_image' style={{display:'none'}}/>
                                        <div class="container_card">
                                            <div class="logo">
                                                <img src={QS} alt="QS I Gauge"></img>
                                            </div>
                                            <div class="content container_card">
                                               <p> Indian University Rating  <br />
                                                <hr className='hr_line_image_480'/>
                                                  <spn class="rank"> Diamond</spn></p>
                                            </div>
                                        </div>
                                        <br/>
                                        <div class="container_card">
                                            <div class="logo">
                                                <img src={Theweek} alt="NABL Accredited"></img>
                                            </div>
                                            <div class="content container_card">
                                               <p> Technical Universities in India <br />
                                                <hr className='hr_line_image_480'/>
                                                  <spn class="rank">36<sup>th</sup> RANK </spn></p>
                                            </div>
                                        </div>
                                        <br/>
                                        <hr className='hr_line_image' style={{display:'none'}}/>
                                        <div class="container_card">
                                            <div class="logo">
                                                <img src={Insighys} alt="NABL Accredited"></img>
                                            </div>
                                            <div class="content container_card">
                                                <p>India’s top 50 engineering colleges survey <br />
                                                <hr className='hr_line_image_480'/>
                                                    <spn class="rank">27<sup>th</sup> RANK </spn></p>
                                            </div>
                                        </div>
                                        <br/>
                                        <hr className='hr_line_image' style={{display:'none'}}/>
                                        <div class="container_card">
                                            <div class="logo">
                                                <img src={Careers} alt="NABL Accredited"></img>
                                            </div>
                                            <div class="content container_card">
                                                <p>India's best engineering colleges in south zone <br />
                                                <hr className='hr_line_image_480'/>
                                                    <spn class="rank">AAA<sup>+</sup> RANK </spn></p>
                                            </div>
                                        </div>
                                        <br/>
                                        <hr className='hr_line_image' style={{display:'none'}}/>
                                        <div class="container_card">
                                            <div class="logo">
                                                <img src={Siliconindis} alt="NABL Accredited"></img>
                                            </div>
                                            <div class="content container_card">
                                                <p>Among top 10 engineering colleges in south India <br />
                                                <hr className='hr_line_image_480'/>
                                                    <spn class="rank">4<sup>th</sup> RANK </spn></p>
                                            </div>
                                        </div>
                                        <br/>
                                        <hr className='hr_line_image' style={{display:'none'}}/>
                                        <div class="container_card">
                                            <div class="logo">
                                                <img src={Siliconindis} alt="NABL Accredited"></img>
                                            </div>
                                            <div class="content container_card">
                                                <p>Among top 100 engineering colleges in India <br />
                                                <hr className='hr_line_image_480'/>
                                                    <spn class="rank">15<sup>th</sup> RANK </spn></p>
                                            </div>
                                        </div>
                                        <br/>
                                        <hr className='hr_line_image' style={{display:'none'}}/>
                                        <div class="container_card">
                                            <div class="logo">
                                                <img src={WordRaking} alt="NABL Accredited"></img>
                                            </div>
                                            <div class="content container_card">
                                                <p>Green ranking <br />
                                                <hr className='hr_line_image_480'/>
                                                    <spn class="rank">PLATINUM BAND</spn></p>
                                            </div>
                                        </div>
                                        <br/>
                                        <hr className='hr_line_image' style={{display:'none'}}/>
                                        <div class="container_card">
                                            <div class="logo">
                                                <img src={Dataquest} alt="NABL Accredited"></img>
                                            </div>
                                            <div class="content container_card">
                                                <p>Among Government & Private Institutions across India <br />
                                                <hr className='hr_line_image_480'/>
                                                    <spn class="rank">54<sup>th</sup> RANK </spn></p>
                                            </div>
                                        </div>
                                        <br/>
                                        <hr className='hr_line_image' style={{display:'none'}}/>
                                        <div class="container_card">
                                            <div class="logo">
                                                <img src={Dataquest} alt="NABL Accredited"></img>
                                            </div>
                                            <div class="content container_card">
                                                <p>Among  Private Institutions across India <br />
                                                <hr className='hr_line_image_480'/>
                                                    <spn class="rank">50<sup>th</sup> RANK </spn></p>
                                            </div>
                                        </div>
                                        <br/>
                                        <hr className='hr_line_image' style={{display:'none'}}/>
                                        <div class="container_card">
                                            <div class="logo">
                                                <img src={Engineering} alt="NABL Accredited"></img>
                                            </div>
                                            <div class="content container_card">
                                               <p> Times Engineering <br />
                                                <hr className='hr_line_image_480'/>
                                                  <spn class="rank">14<sup>th</sup> RANK </spn></p>
                                            </div>
                                        </div>
                                        <br/>
                                        
                                    </div>
                                </center>
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