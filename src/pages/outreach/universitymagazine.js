import React from 'react';
import Header from '../../components/Header';
import FooterTwo from '../../components/Footer/index';
import ScrollToTop from '../../components/ScrollTop';
import Banner from './images/banners/alumni.webp';
import Magazines from './../../data/Magazines.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faFilePdf } from '@fortawesome/free-solid-svg-icons';
const UniversityMagazine = () => {
    const nodata = "This Section will be update Very Soon.."
    return (
        <>
            <Header
                parentMenu='outreach'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <div className="react-breadcrumbs">
                        <div className="breadcrumbs-wrap">
                            <img className="desktop" src={Banner} alt="Breadcrumbs" />
                            <img className="mobile" src={Banner} alt="Breadcrumbs" />

                        </div>
                    </div>
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <div className="col-md-12 col-sm-12 col-12 bg_color bg-white">

                                <div class="container ">
                                    <div className="row ">
                                        <div className="col-md-12 col-12">
                                           <center><h4 className="hedingname_orange mb-4">University Magazine</h4></center>
                                        </div>
                                    </div>
                                </div>
                                <div class="container ">
                                    <div class="row m-0">
                                        <p className='contentsize'>
                                            <b>ANANYA - The Voice of Aditya University </b> <br/>
                                            <b> ANANYA </b>, the bi-annual magazine of Aditya University, is a dynamic showcase of the university's academic excellence, creative energy, and diverse community spirit. True to its name <b>ANANYA</b>, meaning 'unique' the magazine highlights the originality, innovation, and vibrant voices that shape our institution.<br/>
                                            Published twice a year, <b>ANANYA</b> features a rich collection of student and faculty contributions, including insightful articles, research highlights, literary works, artwork, and updates on campus life and achievements. It offers a platform for expression, reflection, and celebration of the Aditya University journey.<br/>
                                            Whether you're a current student, alumnus, faculty member, or visitor, <b>ANANYA</b> invites you to explore the ideas, experiences, and stories that define the heart of Aditya University.

                                        </p>
                                    </div>
                                    <div className='row'>
                                        {
                                            Magazines && Magazines.length > 0 ? (
                                                <>
                                                    {
                                                        Magazines.map(data => (
                                                            <div className='col-12  col-md-6 col-lg-4 col-xl-4 col-xxl-3 mb-5'>
                                                                <div class="magazine--card">
                                                                    <div class="magazine__img--wrap">
                                                                        {
                                                                            data.magazineCoverImg ? (<img src={data.magazineCoverImg} alt={data.magazineAltText} className='img-fluid' />) : (<img src={data.magazinedefaultImg} alt={data.magazineAltText} className='img-fluid' />)
                                                                        }
                                                                    </div>
                                                                    <div class="magazine__text--wrap text-center">
                                                                        <hr style={{ color: '#f60' }} />
                                                                        <h5 class="magazineTitle mb-0 py-7">
                                                                            {data.magazineyear ? (<><span className='me-1'>{data.magazineyear}</span>  | </>) : ("")}
                                                                            {data.magazineVolume ? (<span className='ms-1'>{data.magazineVolume}</span>) : ("")}
                                                                        </h5>


                                                                        <div className='magazine__icons--wrap'>
                                                                            <div className='col-6 text-start'>
                                                                                {data.DocLink ? (
                                                                                    <a href={data.DocLink} target="_blank">
                                                                                        {data.ShowDoc ? (<FontAwesomeIcon icon={faBookOpen} className='docicon doc--clr' />) : ('')}
                                                                                    </a>

                                                                                ) : (<>{data.ShowDoc ? (<FontAwesomeIcon icon={faBookOpen} className='docicon doc--clr' />) : ('')}</>)}
                                                                            </div>
                                                                            <div className='col-6 text-end'>
                                                                                {data.pdfLink ? (
                                                                                    <a href={data.pdfLink} target="_blank">
                                                                                        {data.downloadpdf ? (<FontAwesomeIcon icon={faFilePdf} className='docicon pdf--clr' />) : ('')}
                                                                                    </a>

                                                                                ) : (<>{data.downloadpdf ? (<FontAwesomeIcon icon={faFilePdf} className='docicon pdf--clr' />) : ('')}</>)}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </>

                                            ) : (<p>{nodata}</p>)
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
    )

}

export default UniversityMagazine
