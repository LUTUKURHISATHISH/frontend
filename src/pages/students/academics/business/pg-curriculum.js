import React, { useState } from 'react';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../components/ScrollTop';
import SideManu from './sidebar';
import Linkimage from './images/link.gif';
import Academic_calendar_image from './images/calendar.png';
import MBA from './files/curriculum/mba.pdf';
import IMBA from './files/curriculum/mbai.pdf';
const PGRegulations = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
            <Header
                parentMenu='academics'
                menuCategoryEnable='enable'
            />
            
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="Curriculum" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <SideManu />
                            <div class="row m-0 react__title__section-all">
                                <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                    <br />
                                    <div class="container">
                                        <div>
                                            {[
                                                { id: 0, title: 'MBA', title1: 'Master of Business Administration', image: Academic_calendar_image, pdf: MBA },
                                                { id: 1, title: 'MBA(Integrated)', title1: 'Master of Business Administration (Integrated)', image: Academic_calendar_image, pdf: IMBA },

                                            ].map(({ id, title, title1, image, pdf }) => (
                                                <React.Fragment key={id}>
                                                    <button className={`accordion ${activeIndex === id ? 'active-card' : ''}`} onClick={() => toggleAccordion(id)}>
                                                        <img src={image} style={{ height: '40px' }} alt={title} />&nbsp;&nbsp;&nbsp;&nbsp;{title}
                                                        <span className="symbol">{activeIndex === id ? '▲' : '▼'}</span>
                                                    </button>
                                                    <div className="panel" style={{ display: activeIndex === id ? 'block' : 'none', marginBottom: '14px' }}>
                                                        <br />
                                                        <table style={{ width: "100%" }}>
                                                            <thead>
                                                                <tr>
                                                                    <th style={{ textAlign: 'center' }}>Program</th>
                                                                    <th style={{ textAlign: 'center' }}>{title === 'MBA' ? '2024-26' : '2024-28'}</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>{title1}</td>
                                                                    <td>
                                                                        <a href={pdf} target="_blank" style={{ color: "#000" }} className='namehover'> Curriculum </a>
                                                                        <img src={Linkimage} style={{ height: '25px' }} alt="link icon" />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <br />
                                                    </div>
                                                </React.Fragment>
                                            ))}
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

export default PGRegulations;