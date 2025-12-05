import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
const MenuItems = (props) => {
    const { parentMenu } = props;
    const location = useLocation();
    const postURL = location.pathname.split('/');
    const pathLength = Number(postURL.length);
    const [home, setHome] = useState(false);
    const [study, setStudy] = useState(false);
    const [page, setPage] = useState(false);
    const [event, setEvent] = useState(false);
    const [fees, setFees] = useState(false);
    const [whyaditya, setWhyaditya] = useState(false);
    const [patents, setPatents] = useState(false);
    const [opportunities, setOpportunities] = useState(false);
    const [apply, setApply] = useState(false);
    const [login, setLogin] = useState(false);
    const [course, setCourse] = useState(false);
    const [blog, setBlog] = useState(false);
    const [outreach, setOutreach] = useState(false);
    const [about, setAbout] = useState(false);
    const [offered, setOffered] = useState(false);
    const [academics, setAcademics] = useState(false);
    const [university, setUniversity] = useState(false);
    const [research, setResearch] = useState(false);
    const [leadership, setLeadership] = useState(false);
    const [governance, setGovernance] = useState(false);
    const [credentials, setCredentials] = useState(false);
    const [iqac, setIqac] = useState(false);
    const [accreditation, setAccreditation] = useState(false);


    const openMobileMenu = (menu) => {
        // Reset other states and toggle the selected menu
        setHome(menu === 'home' ? !home : false);
        setPage(menu === 'page' ? !page : false);
        setStudy(menu === 'study' ? !study : false);
        setEvent(menu === 'event' ? !event : false);
        setFees(menu === 'fees' ? !fees : false);
        setCourse(menu === 'course' ? !course : false);
        setOpportunities(menu === 'opportunities' ? !opportunities : false);
        setBlog(menu === 'blog' ? !blog : false);
        setOutreach(menu === 'outreach' ? !outreach : false);
        setAbout(menu === 'about' ? !about : false);
        setOffered(menu === 'offered' ? !offered : false);
        setWhyaditya(menu === 'whyaditya' ? !whyaditya : false);
        setPatents(menu === 'patents' ? !patents : false);
        setAcademics(menu === 'academics' ? !academics : false);
        setUniversity(menu === 'university' ? !university : false);
        setLeadership(menu === 'leadership' ? !leadership : false);
        setGovernance(menu === 'governance' ? !governance : false);
        setCredentials(menu === 'credentials' ? !credentials : false);
        setAccreditation(menu === 'accreditation' ? !accreditation : false);
        setResearch(menu === 'research' ? !research : false);

        setIqac(menu === 'iqac' ? !iqac : false);
        setApply(menu === 'apply' ? !apply : false);
        setLogin(menu === 'login' ? !login : false);
    };

    return (
        <>
            <li className={location.pathname === '/' ? 'menu-active' : ''}>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                    Home
                </Link>
            </li>

            <li className={parentMenu === 'page' || parentMenu === 'event' || parentMenu === 'fees' || parentMenu === 'whyaditya' || parentMenu === 'study' || parentMenu === 'offered' ? 'has-sub menu-active' : 'has-sub'}>
                <Link to="#" className={page ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('page'); }}>
                    Study
                    <span className="arrow "></span>
                </Link>
                <ul className={page ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={location.pathname === '/placements' || parentMenu === 'whyaditya' || parentMenu === 'academics-skilling' || parentMenu === 'amenities' || parentMenu === 'faculty' || parentMenu === 'infrastructure' ? 'menu-active' : ''}>
                        <Link to="/placements">Why Aditya</Link>
                    </li>
                    <li className={parentMenu === 'offered' ? 'has-sub menu-active' : 'has-sub'}>
                        <Link to="#" className={offered ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('offered'); }}>
                            Programs Offered
                            <FaChevronDown className={`arrow-icon arrow arrow-icon-new ${offered ? 'rotate' : ''}`} />
                        </Link>
                        <ul className={offered ? "sub-menu sub-menu-open" : "sub-menu"}>
                            {/* <li className={location.pathname === "/diploma-programs" ? "menu-active" : ""}>
                                <Link to="/diploma-programs">Diploma Programs</Link>
                            </li> */}
                            <li className={location.pathname === "/ug-programs" ? "menu-active" : ""}>
                                <Link to="/ug-programs">UG Programs</Link>
                            </li>
                            <li className={location.pathname === "/pg-programs" ? "menu-active" : ""}>
                                <Link to="/pg-programs">PG Programs</Link>
                            </li>
                            <li className={location.pathname === "/phd-programs" || location.pathname === "/phd-syllabus" ? "menu-active" : ""}>
                                <Link to="/phd-programs">Ph.D Programs</Link>
                            </li>
                            <li className={location.pathname === "/corporate-programs" ? "menu-active" : ""}>
                                <Link to="/corporate-programs">Corporate PG Diploma Programs</Link>
                            </li>
                            <li className={location.pathname === "" ? "menu-active" : ""}>
                                <Link to="https://adityauniversity.in/adtppu/uploads/executive_education.pdf" target="_blank">Executive Education Programs</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={location.pathname === "/admission-process" ? "menu-active" : ""}>
                        <Link to="/admission-process">Admission Process</Link>
                    </li>

                    <li className={parentMenu === 'fees' ? 'has-sub menu-active' : 'has-sub'}>
                        <Link to="#" className={fees ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('fees'); }}>
                            Fees Details
                            <FaChevronDown className={`arrow-icon arrow arrow-icon-new ${fees ? 'rotate' : ''}`} />

                        </Link>
                        <ul className={fees ? "sub-menu sub-menu-open" : "sub-menu"}>
                            <li className={location.pathname === "/fees" ? "menu-active" : ""}>
                                <Link to="/fees">Fees</Link>
                            </li>
                            <li className={location.pathname === "/scholarship" ? "menu-active" : ""}>
                                <Link to="/scholarship">Scholarship</Link>
                            </li>
                            <li className={location.pathname === "/refund-policy" ? "menu-active" : ""}>
                                <Link to="/refund-policy">Refund Policy</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li className={parentMenu === 'course' || parentMenu === 'academics' || parentMenu === 'facilities' || parentMenu === 'opportunities' ? 'has-sub menu-active' : 'has-sub'}>
                <span className="arrow "></span>
                <Link to="#" className={course ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('course'); }}>
                    Students
                    <span className="arrow"></span>
                </Link>
                <ul className={course ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={parentMenu === 'academics' ? 'has-sub menu-active' : 'has-sub'}>
                        <Link to="#" className={academics ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('academics'); }}>
                            Academics
                            <FaChevronDown className={`arrow-icon arrow arrow-icon-new ${academics ? 'rotate' : ''}`} />
                        </Link>
                        <ul className={event ? "sub-menu sub-menu-open" : "sub-menu"}>
                            {/* <li className={location.pathname === "/academics-overview" ? "menu-active" : ""}>
                                <Link to="/academics-overview">Academics Overview</Link>
                            </li>
                            <li className={location.pathname === "/school-of-engineering" ? "menu-active" : ""}>
                                <Link to="/school-of-engineering">School of Engineering</Link>
                            </li>
                            <li className={location.pathname === "/school-of-business" ||location.pathname === '/mba' ||location.pathname === '/business-pg-regulations' ||location.pathname === '/business-pg-academic-calendar' ||location.pathname === '/business-pg-curriculum' ||location.pathname === '/mba-programs-offered' ||location.pathname === '/mba-faculty' ? "menu-active" : ""}>
                                <Link to="/school-of-business">School of Business</Link>
                            </li> */}


                            <li className={location.pathname === "/schools" ? "menu-active" : ""}>
                                <Link to="/schools">Schools</Link>
                            </li>
                            <li className={location.pathname === "/examination-centre" || location.pathname === '/model-question-papers' || location.pathname === '/b-tech-model-papers' || location.pathname === '/m-tech-model-papers' || location.pathname === '/mba-model-papers' || location.pathname === '/mbai-model-papers' || location.pathname === '/mca-model-papers' ? "menu-active" : ""}>
                                <Link to="/examination-centre">Examination centre</Link>
                            </li>
                            <li>
                                <Link to="https://adityauniversity.knimbus.com/portal/v2/default/home" target="_blank">Knowledge Resource Center</Link>
                            </li>
                        </ul>
                    </li>


                    <li className={parentMenu === 'opportunities' ? 'has-sub menu-active' : 'has-sub'}>
                        <Link to="#" className={opportunities ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('opportunities'); }}>
                            Opportunities
                            <FaChevronDown className={`arrow-icon arrow arrow-icon-new ${opportunities ? 'rotate' : ''}`} />
                        </Link>
                        <ul className={event ? "sub-menu sub-menu-open" : "sub-menu"}>
                            <li className={location.pathname === "/opportunities" ? "menu-active" : ""}>
                                <Link to="/opportunities">Overview</Link>
                            </li>
                            <li className={location.pathname === "/opportunities-placements" ? "menu-active" : ""}>
                                <Link to="/opportunities-placements">Placements</Link>
                            </li>
                            <li className={location.pathname === "/trainings" ? "menu-active" : ""}>
                                <Link to="/trainings">Trainings</Link>
                            </li>
                            {/* <li className={location.pathname === "/higher-education" ? "menu-active" : ""}>
                                <Link to="/higher-education">Higher Education</Link>
                            </li> */}
                            <li className={location.pathname === "/internships" ? "menu-active" : ""}>
                                <Link to="/internships">Internships</Link>
                            </li>
                            {/* <li className={location.pathname === "/entrepreneurship-incubation" ? "menu-active" : ""}>
                                <Link to="/entrepreneurship-incubation">Entrepreneurship & Incubation</Link>
                            </li> */}
                            {/* <li className={location.pathname === "/contact-us" ? "menu-active" : ""}>
                                <Link to="/contact-us">Contact us</Link>
                            </li> */}
                        </ul>
                    </li>
                    {/* <li className={location.pathname === "/infrastructure-facilities" || location.pathname === '/hostel' || location.pathname === '/health' || location.pathname === '/sports' || location.pathname === '/transport' || location.pathname === '/barrier-free-environment' ? "menu-active" : ""}>
                        <Link to="/infrastructure-facilities">Facilities</Link>
                    </li> */}
                    <li className={location.pathname === "/online" || location.pathname === '/hostel' || location.pathname === '/health' || location.pathname === '/sports' || location.pathname === '/transport' || location.pathname === '/barrier-free-environment' ? "menu-active" : ""}>
                        <Link to="/online">Aditya Online</Link>
                    </li>
                </ul>
            </li>

            <li className={parentMenu === 'blog' || parentMenu === 'patents' ? 'has-sub menu-active' : 'has-sub'}>
                <Link to="#" className={blog ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('blog'); }}>
                    Research
                    <span className="arrow "></span>
                </Link>
                <ul className={blog ? "sub-menu sub-menu-open" : "sub-menu"}>
                    {/* <li className={parentMenu === 'research' ? 'has-sub menu-active' : 'has-sub'}>
                        <Link to="#" className={research ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('research'); }}>
                            Our Research
                            <FaChevronDown className={`arrow-icon arrow arrow-icon-new ${research ? 'rotate' : ''}`} />
                        </Link>
                        <ul className={research ? "sub-menu sub-menu-open" : "sub-menu"}>
                            <li className={location.pathname === "/our-research" ? "menu-active" : ""}>
                                <Link to="/our-research">Overview</Link>
                            </li>
                            <li className={location.pathname === "/Publications" ? "menu-active" : ""}>
                                <Link to="/Publications">Publications</Link>
                            </li>
                            <li className={location.pathname === "/patents" ? "menu-active" : ""}>
                                <Link to="/patents">Patents</Link>
                            </li>
                            <li className={location.pathname === "/patents-commercialisation" ? "menu-active" : ""}>
                                <Link to="/patents-commercialisation">Patents & Commercialisation</Link>
                            </li>
                        </ul>
                    </li> */}
                    <li className={location.pathname === "/our-research" ? "menu-active" : ""}>
                        <Link to="/our-research">Overview</Link>
                    </li>
                    <li className={location.pathname === "/Publications" ? "menu-active" : ""}>
                        <Link to="/Publications">Publications</Link>
                    </li>
                    <li className={location.pathname === "/patents" ? "menu-active" : ""}>
                        <Link to="/patents">Patents</Link>
                    </li>
                    <li className={location.pathname === "/patents-commercialisation" ? "menu-active" : ""}>
                        <Link to="/patents-commercialisation">Patents & Commercialisation</Link>
                    </li>
                    <li className={location.pathname === "/policies" ? "menu-active" : ""}>
                        <Link to="/policies">Policies</Link>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'outreach' || parentMenu === 'adityalearning' || parentMenu === 'collaborations' || parentMenu === 'sustainability' ? 'has-sub menu-active' : 'has-sub'}>
                <Link to="#" className={outreach ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('outreach'); }}>
                    Outreach
                    <span className="arrow"></span>
                </Link>
                <ul className={outreach ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={location.pathname === "/collaborations" || location.pathname === "/institute-collaborations" || location.pathname === "/industry-collaborations" ? "menu-active" : ""}>
                        <Link to="/collaborations">Collaborations</Link>
                    </li>
                    <li className={location.pathname === "/alumni" || location.pathname === "/alumni-coordination-committee" || location.pathname === "/alumni-events" ? "menu-active" : ""}>
                        <Link to="/alumni">Alumni</Link>
                    </li>
                    <li className={location.pathname === "/community-activities" ? "menu-active" : ""}>
                        <Link to="/community-activities">Community Activities</Link>
                    </li>
                    <li className={location.pathname === "/sustainability-overview" ? "menu-active" : ""}>
                        <Link to="/sustainability-overview">Sustainability</Link>
                    </li>
                    <li className={location.pathname === "/university-magazine" ? "menu-active" : ""}>
                        <Link to="/university-magazine">University Magazine</Link>
                    </li>
                    <li className={location.pathname === "/aditya-learning-academy" || parentMenu === 'objectives' || parentMenu === 'comprehensive-support-services' || parentMenu === 'team' || parentMenu === 'events' || parentMenu === 'adityalearning' ? "menu-active" : ""}>
                        <Link to="/aditya-learning-academy">Aditya Learning Academy (ALA)</Link>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'about' || parentMenu === 'university' || parentMenu === 'leadership' || parentMenu === 'governance' || parentMenu === 'iqac' || parentMenu === 'accreditation' ? 'has-sub menu-active' : 'has-sub'}>
                <Link to="#" className={about ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('about'); }}>
                    About
                    <span className="arrow "></span>
                </Link>
                <ul className={about ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={parentMenu === 'university' ? 'has-sub menu-active' : 'has-sub'}>
                        <Link to="#" className={university ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('university'); }}>
                            Aditya University
                            <FaChevronDown className={`arrow-icon arrow arrow-icon-new ${university ? 'rotate' : ''}`} />
                        </Link>
                        <ul className={university ? "sub-menu sub-menu-left sub-menu-open" : "sub-menu-left"}>
                            <li className={location.pathname === "/overview" ? "menu-active" : ""}>
                                <Link to="/overview">Overview</Link>
                            </li>
                            <li className={location.pathname === "/vision-mission" ? "menu-active" : ""}>
                                <Link to="/vision-mission">Vision and Mission</Link>
                            </li>
                            <li className={location.pathname === "/core-values" ? "menu-active" : ""}>
                                <Link to="/core-values">Core Values</Link>
                            </li>
                            <li className={location.pathname === "/sponsoring-body" ? "menu-active" : ""}>
                                <Link to="/sponsoring-body">Sponsoring Body</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={location.pathname === "/leadership" || location.pathname === '/chancellor' || location.pathname === '/pro-chancellor' || location.pathname === '/deputy-pro-chancellor' || location.pathname === '/vice-chancellor' || location.pathname === '/leadership-team' || location.pathname === '/pro-vice-chancellor(academics)' ? "menu-active" : ""}>
                        <Link to="/leadership">Leadership</Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById("mandatory_disclosure");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                            Mandatory Disclosure
                        </Link>
                    </li>
                    <li className={parentMenu === 'governance' ? 'has-sub menu-active' : 'has-sub'}>
                        <Link to="#" className={governance ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('governance'); }}>
                            Governance
                            <FaChevronDown className={`arrow-icon arrow arrow-icon-new ${governance ? 'rotate' : ''}`} />
                        </Link>
                        <ul className={governance ? "sub-menu  sub-menu-left sub-menu-open" : "sub-menu-left"}>
                            <li className={location.pathname === "/governing-body" ? "menu-active" : ""}>
                                <Link to="/governing-body">Governing Body</Link>
                            </li>
                            <li className={location.pathname === "/board-management" ? "menu-active" : ""}>
                                <Link to="/board-management">Board of Management</Link>
                            </li>
                            <li className={location.pathname === "/academic-council" ? "menu-active" : ""}>
                                <Link to="/academic-council">Academic Council</Link>
                            </li>
                            <li className={location.pathname === "/finance-committee" ? "menu-active" : ""}>
                                <Link to="/finance-committee">Finance Committee</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={parentMenu === 'accreditation' ? 'has-sub menu-active' : 'has-sub'}>
                        <Link to="#" className={accreditation ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('accreditation'); }}>
                            Accreditations
                            <FaChevronDown className={`arrow-icon arrow arrow-icon-new ${accreditation ? 'rotate' : ''}`} />
                        </Link>
                        <ul className={accreditation ? "sub-menu sub-menu-left sub-menu-open" : "sub-menu-left"}>
                            <li className={location.pathname === "/accreditations" ? "menu-active" : ""}>
                                <Link to="/accreditations">Accreditations</Link>
                            </li>
                            <li className={location.pathname === "/nirf" ? "menu-active" : ""}>
                                <Link to="/nirf">NIRF</Link>
                            </li>
                            <li className={location.pathname === "/recognitions" ? "menu-active" : ""}>
                                <Link to="/recognitions">Recognitions</Link>
                            </li>
                            <li className={location.pathname === "/rankings" ? "menu-active" : ""}>
                                <Link to="/rankings">Rankings</Link>
                            </li>
                        </ul>
                    </li>
                    {/* <li className={parentMenu === 'iqac' ? 'has-sub menu-active' : 'has-sub'}>
                        <Link to="#" className={iqac ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('iqac'); }}>
                        IQAC
                        <FaChevronDown className={`arrow-icon arrow arrow-icon-new ${iqac ? 'rotate' : ''}`} />
                        </Link>
                        <ul className={iqac ? "sub-menu sub-menu-left sub-menu-open" : "sub-menu-left"}>
                            <li className={location.pathname === "/iqac-vision" ? "menu-active" : ""}>
                                <Link to="/iqac-vision">Vision</Link>
                            </li>
                            <li className={location.pathname === "/iqac-objectives" ? "menu-active" : ""}>
                                <Link to="/iqac-objectives">Objectives</Link>
                            </li>
                            <li className={location.pathname === "/iqac-strategies" ? "menu-active" : ""}>
                                <Link to="/iqac-strategies">Strategies</Link>
                            </li>
                            <li className={location.pathname === "/iqac-functions" ? "menu-active" : ""}>
                                <Link to="/iqac-functions">Functions</Link>
                            </li>
                            <li className={location.pathname === "/iqac-benefits" ? "menu-active" : ""}>
                                <Link to="/iqac-benefits">Benefits</Link>
                            </li>
                            <li className={location.pathname === "/iqac-members" ? "menu-active" : ""}>
                                <Link to="/iqac-members">Members</Link>
                            </li>
                            <li className={location.pathname === "/iqac-events" ? "menu-active" : ""}>
                                <Link to="/iqac-events">Events</Link>
                            </li>
                            
                         </ul>
                    </li> */}
                    {/* <li className={parentMenu === 'credentials' ? 'has-sub menu-active' : 'has-sub'}>
                        <Link to="#" className={credentials ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('credentials'); }}>
                        Credentials
                        <FaChevronDown className={`arrow-icon arrow arrow-icon-new ${credentials ? 'rotate' : ''}`} />
                        </Link>
                        <ul className={credentials ? "sub-menu sub-menu-left sub-menu-open" : "sub-menu-left"}>
                            <li className={location.pathname === "/accreditations" || location.pathname === '/recognitions' || location.pathname === '/rankings' || location.pathname === '/nirf'|| location.pathname === '/naac-public-notice'  ? "menu-active" : ""}>
                                <Link to="/accreditations">Accreditations, Recognitions & Rankings</Link>
                            </li>
                            <li className={location.pathname === "/grievances-redressal" || location.pathname === '/grievances/Women%20Grievances' || location.pathname === '/grievances/Ragging%20Grievances' || location.pathname === '/grievances/Student%20Grievances' || location.pathname === '/grievances/Faculty%20Grievances' ? "menu-active" : ""}>
                                <Link to="/grievances-redressal">Grievance redressal</Link>
                            </li>
                            <li className={location.pathname === "/iqac-vision" || location.pathname === '/iqac-objectives' || location.pathname === '/iqac-members'|| location.pathname === '/iqac-strategies'|| location.pathname === '/iqac-functions'|| location.pathname === '/iqac-benefits' || location.pathname === '/iqac-events' ? "menu-active" : ""}>
                                <Link to="/iqac-vision">IQAC</Link>
                            </li>
                         </ul>
                    </li> */}
                </ul>
            </li>
            <li className={location.pathname === '/contact' ? 'menu-active' : ''}>
                <Link to="/contact">Contact</Link>
            </li>
            <li className={parentMenu === 'login' ? 'mobileview has-sub menu-active' : 'has-sub mobileview'}>
                <Link to="#" className={login ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('login'); }}>
                    Login
                    <span className="arrow"></span>
                </Link>
                <ul className={login ? "sub-menu sub-menu-open" : "sub-menu"}>
                    {/* <li className={location.pathname === "/online-class"  ? "menu-active" : ""}>
                        <Link to="/online-class">Online Class</Link>
                    </li> */}

                    <li className={location.pathname === "https://info.aec.edu.in/aus/default.aspx" ? "menu-active" : ""}>
                        <Link to="https://info.aec.edu.in/aus/default.aspx">Student/Parent</Link>
                    </li>
                    {/* <li className={location.pathname === "https://info.aec.edu.in/aec/olpayment.aspx" ? "menu-active" : ""}>
                        <Link to="https://info.aec.edu.in/aec/olpayment.aspx">Online Payment</Link>
                    </li> */}
                </ul>
            </li>
            <li className={parentMenu === 'apply' ? 'has-sub menu-active' : 'has-sub'}>
                <Link to="#" className={apply ? "hash menu-active" : "hash apply_now"} onClick={() => { openMobileMenu('apply'); }} style={{ backgroundColor: "#0c6ab0", borderRadius: "0px 12px 12px 0px", color: "#fff" }}>
                    Apply Now
                    <span className="arrow "></span>
                </Link>
                <ul className={apply ? "sub-menu apply_now_click sub-menu-open" : "sub-menu apply_now_down"} >
                    <li className={location.pathname === "" ? "menu-active" : ""}>
                        <Link to="https://apply.adityauniversity.in/" target="_blank">National</Link>
                    </li>
                    <li className={location.pathname === ""}>
                        <Link to="https://apply.adityauniversity.in/aditya-international-admission-form" target="_blank">International</Link>
                    </li>
                </ul>
            </li>

            {/* <li>
                <div className="slider-btn wow animate__fadeInUp" data-wow-duration="1.2s">
                    <Link to="https://apply.adityauniversity.in/" target="_blank" className="react-btn-border-menu">Apply Now <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                </div>
            </li> */}
        </>
    );
}

export default MenuItems;
