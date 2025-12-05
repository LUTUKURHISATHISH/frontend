import React, { useState } from 'react';
import "./leadership.css";
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import { Link } from 'react-router-dom';
import image from "./images/Chancellonew.webp"
import image1 from "./images/pro-chan.webp"
import image2 from "./images/vice-proo.webp"
// import image3 from "./images/deputy_chan.webp"
// import image6 from "./images/pro_vic.webp"
import image5 from "./images/vice_pr.webp"
import image7 from "./images/registrarne.webp"
import Banner from '../images/banners/leadership.webp';
import SideManu from './sidebar';


function Leadership() {
    const [setShow] = useState(false);
    const [setSelectedLeader] = useState(null);
    const [setExtraContent] = useState("");
    const [setAnotherExtra] = useState("");
    const [setleaderHead] = useState("");
    const [selectedRole, setSelectedRole] = useState("Chancellor"); // Set "Chancellor" as default

    const leaders = [
        {
            name: "Dr.N.Sesha Reddy",
            image: image,
            new: "Chancellor",
            description: "Motivated by a vision of national development through education, I founded Aditya University to provide top-tier education while nurturing future leaders. Inspired by Charles Darwin's principle of adaptability, we've overcome challenges ",
            spirit: 90,
            extra: "Motivated by a vision of national development through education, I founded Aditya University to provide top-tier education while nurturing future leaders. Inspired by Charles Darwin's principle of adaptability, we've overcome challenges to create an environment where students thrive. At Aditya University, we pride ourselves on offering practical, industry-focused education that attracts the brightest minds. Our alumni's success in top companies worldwide is a testament to the dedication of our faculty, who instill in each student values of dedication, sincerity, and loyalty. Today Aditya University stands as a testament to our commitment to nurturing efficient, confident, and globally minded professionals. With initiatives like the Global Business Incubation Centre and Technical Skill Development Institute, we equip our students to lead with innovation and foresight.",
            anotherextra: "Our dream and commitment lie in shaping every student's journey at Aditya University into a resounding success story.",
            leaderhead: "Chancellor AdityaUniveristy",
            role: "Chancellor",
            Link: "/chancellor",
        },
        {
            name: "Dr.N.Satish Reddy",
            image: image1,
            new: "Pro-Chancellor",
            description: "Welcome to Aditya University Step into a world where education transcends boundaries and transforms livesOur university isn't just a place of learning; it's an immersive experience, a voyage of discovery, and a thriving community all rolled into one",
            spirit: 85,
            anotherextra: "",
            leaderhead: "Pro Chancellor AdityaUniversity",
            role: "Pro-Chancellor",
            Link: "/pro-chancellor(Satishreddy)",
        },
        {
            name: "Sri.N.Deepak Reddy",
            image: image2,
            new: "Pro-Chancellor",
            description: "As Pro Chancellor, I'm thrilled to invite you to join our community dedicated to excellence and innovation in technical education. At Aditya, we prioritize interdisciplinary skills and leadership development, preparing our students to tackle global challenges",
            spirit: 80,
            anotherextra: "Join us at Aditya University, where your potential meets limitless opportunities for success",
            leaderhead: "Pro Chancellor AdityaUniversity",
            role: "Pro-Chancellor",
            Link: "/pro-chancellor(Deepakreddy)",
        },
        // {
        //     name: "Dr.M.Sreenivasa Reddy",
        //     image: image3,
        //     new: "Deputy-Pro-Chancellor",
        //     description: "At Aditya University, our commitment to nurturing leaders and advancing knowledge is guided by our Vision of excellence in education, innovation in research, and dedicated service to society",
        //     spirit: 75,
        //     leaderhead: "Deputy Pro-Chancellor AdityaUniversity",
        //     role: "Deputy-pro-chancellor",
        //     Link: "/deputy-pro-chancellor",
        // },
        {
            name: "Prof.M.B.Srinivas",
            image: image5,
            new: "Vice Chancellor",
            description: "Aditya University, a future-focused University set in idyllic green surroundings, has always been in the forefront in providing skilled student workforce to the global industry,Very much conscious of its rural presence,it is now focused on developing technologies for rural India with",
            spirit: 88,
            leaderhead: "Vice Chancellor AdityaUniversity",
            role: "vice-chancellor",
            Link: "/vice-chancellor",
        },
        // {
        //     name: "Dr. S. RamaSree",
        //     image: image6,
        //     new: "Pro Vice-Chancellor (Academics)",
        //     description: "At Aditya University, academic excellence lies at the heart of our mission. As the Pro Vice-Chancellor (Academics), I am proud to lead a dynamic and progressive academic environment",
        //     spirit: 82,
        //     leaderhead: "Pro Vice-Chancellor (Academics) AdityaUniversity",
        //     role: "pro-vice-chancellor(academics)",
        //     Link: "/pro-vice-chancellor",
        // },
        {
            name: "Dr. G. Suresh",
            image: image7,
            new: "Registrar",
            description: "It is with great pleasure and pride that I welcome you all to our esteemed University, a vibrant hub of learning, innovation, and cultural exchange. As you begin this transformative journey, I would like to highlight the qualities that make our institution a preferred",
            spirit: 88,
            leaderhead: "Registrar AdityaUniversity ",
            role: "registrar",
            Link: "/registrar",
        }
    ];

    const handleShow = (leader) => {
        setSelectedLeader(leader);
        setExtraContent(leader.extra);
        setAnotherExtra(leader.anotherextra);
        setleaderHead(leader.leaderhead);
        setShow(true);
    };

    const handleRoleChange = (role) => {
        setSelectedRole(role);
    };

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
                                        <h1 className="breadcrumbs-title">Leadership</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid leaderBackground py-5'>
                        <div className='container'>
                        <SideManu />
                            {/* Leadarship Rows */}
                            <div className='row  mt-3'>
                                {leaders.slice(0, 3).map((leader, index) => (
                                    <div className='col-lg-4 col-md-6 col-sm-6 d-flex mb-4 responsive_leadership' key={index}>
                                        <div
                                            className={`card LeaderShipCard w-100 ${selectedRole === leader.role ? "highlighted-card" : ""}`}
                                            style={{ cursor: "pointer", minHeight: "100%" }}
                                        >
                                            <img src={leader.image} className="card-img-top chancellor img-fluid" alt="Leadership" />
                                            <div className="card-body d-flex flex-column" style={{ padding: "15px" }}>
                                                <h5 className="card-title fs-5 leadername">{leader.name}</h5>
                                                <p className="card-title fw-bold leadernamerole">{leader.new}</p>
                                                <p className="flex-grow-1 content_leaderShip">{leader.description}</p>
                                                <center>
                                                    <Link to={leader.Link}>
                                                        <button className="leadershipbtn btn btn-primary mt-auto">Read More</button>
                                                    </Link>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='row '>
                                {leaders.slice(3).map((leader, index) => (
                                    <div className='col-lg-4 col-md-6 col-sm-6 d-flex mb-5 responsive_leadership' key={index}>
                                        <div
                                            className={`card LeaderShipCard w-100 ${selectedRole === leader.role ? "highlighted-card" : ""}`}
                                            style={{ cursor: "pointer", minHeight: "100%" }}
                                        >
                                            <img src={leader.image} className="card-img-top chancellor img-fluid" alt="Leadership" />
                                            <div className="card-body d-flex flex-column" style={{ padding: "15px" }}>
                                                <h5 className="card-title fs-5 leadername">{leader.name}</h5>
                                                <p className="card-title fw-bold leadernamerole">{leader.new}</p>
                                                <p className="flex-grow-1 content_leaderShip">{leader.description}</p>
                                                <center>
                                                    <Link to={leader.Link}>
                                                        <button className="leadershipbtn btn btn-primary mt-auto">Read More</button>
                                                    </Link>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Third row with a single card */}
                            <div className='row registrar_card'>
                                {leaders.slice(6, 1).map((leader, index) => (
                                    <div className='col-lg-4 col-md-6 col-sm-6 d-flex mb-5 responsive_leadership' key={index}>
                                        <div
                                            className={`card LeaderShipCard w-100 ${selectedRole === leader.role ? "highlighted-card" : ""}`}
                                            style={{ cursor: "pointer", minHeight: "100%" }}
                                        >
                                            <img src={leader.image} className="card-img-top chancellor img-fluid" alt="Leadership" />
                                            <div className="card-body d-flex flex-column" style={{ padding: "15px" }}>
                                                <h5 className="card-title fs-5 leadername">{leader.name}</h5>
                                                <p className="card-title fw-bold leadernamerole">{leader.new}</p>
                                                <p className="flex-grow-1 content_leaderShip">{leader.description}</p>

                                                <center>
                                                    <Link to={leader.Link}>
                                                        <button className="leadershipbtn btn btn-primary mt-auto">Read More</button>
                                                    </Link>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* <cebter><b>Leadership Team</b></cebter> */}
                </div>
            </div>
            <FooterTwo />
        </>
    );
}

export default Leadership;


