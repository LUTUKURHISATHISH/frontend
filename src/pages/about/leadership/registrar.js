import React from 'react';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import RegistrarImage from "./images/leadership/suresh.webp";
import Banner from '../images/banners/leadership.webp';

const ProChancellor = () => {
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
                                        <h1 className="breadcrumbs-title">Registrar</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">

                            <div class="row m-0">
                                <div class="col-md-12  col-sm-12 col-12">
                                    <div class="container">
                                        <div class="row">
                                            <div className="col-lg-12" style={{ backgroundColor: 'rgb(248, 249, 250)', padding: '20px' }}>
                                                <center>
                                                    <div className="about__image wow animate__fadeInUp" data-wow-duration="0.3s">
                                                        <img src={RegistrarImage} alt="About" style={{width:"40%"}} />
                                                    </div>
                                                </center>
                                                <div className="about__content about__content1">
                                                    <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s" style={{ textAlign: 'justify' }}>
                                                    It is with great pleasure and pride that I welcome you all to our esteemed University, a vibrant hub of learning, innovation, and cultural exchange. As you begin this transformative journey, I would like to highlight the qualities that make our institution a preferred destination for academic excellence and holistic development. Our university's strong reputation is built on our commitment to quality education, validated by prestigious accreditations and consistent recognition in rankings. These accolades reflect our dedication to maintaining global standards in teaching, research, and community engagement. Our industry-aligned curricula are designed to equip students with the skills to excel in today's dynamic professional world, ensuring they are both job- and future-ready.</p>
                                                    <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s" style={{ textAlign: 'justify' }}>
                                                    Diversity and inclusivity lie at the heart of our university's ethos. With a student body representing various states and nations, we provide a vibrant and multicultural environment that fosters collaboration, mutual respect, and the exchange of ideas. This diversity enriches the learning experience, preparing our students to become global citizens who value collaboration and empathy. To our esteemed parents, we assure you that your children are in a nurturing and stimulating environment where their aspirations will be supported and their potential realized. To our students, I encourage you to immerse yourselves fully in the opportunities available, be it academic pursuits, research initiatives, or extracurricular activities. Our dedicated faculty and staff are here to guide and inspire you every step of the way.<br/><br/>
                                                        Let us come together to forge a legacy of innovation, excellence, and meaningful impact.<br/>
                                                        Welcome to a journey of learning without limits!
                                                    </p>
                                                    <b style={{ float: 'right' }}>
                                                        Best regards,<br />
                                                        Dr. G. Suresh.<br />
                                                        Registrar,<br />
                                                        Aditya university.
                                                    </b>
                                                </div>
                                            </div>
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

export default ProChancellor;