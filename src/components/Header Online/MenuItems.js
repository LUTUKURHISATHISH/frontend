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
                    Programs Offered
                    <span className="arrow "></span>
                </Link>
                <ul className={page ? "sub-menu sub-menu-open" : "sub-menu"}>
                    <li className={location.pathname === "#" ? "menu-active" : ""}>
                        <Link to="#">BBA </Link>
                    </li>
                    <li className={location.pathname === "#" ? "menu-active" : ""}>
                        <Link to="#">MBA </Link>
                    </li>
                    <li className={location.pathname === "#" ? "menu-active" : ""}>
                        <Link to="#">BCA </Link>
                    </li>
                    <li className={location.pathname === "#" ? "menu-active" : ""}>
                        <Link to="#">MCA </Link>
                    </li>
                </ul>
            </li>


            <li className={parentMenu === 'about' || parentMenu === 'university' || parentMenu === 'leadership' || parentMenu === 'governance' || parentMenu === 'iqac' || parentMenu === 'accreditation' ? 'has-sub menu-active' : 'has-sub'}>
                <Link to="#" className={about ? "hash menu-active" : "hash"} onClick={() => { openMobileMenu('about'); }}>
                    About
                    <span className="arrow "></span>
                </Link>

                <ul className={about ? "sub-menu sub-menu-open" : "sub-menu"}>

                    <li className={location.pathname === "/overview" ? "menu-active" : ""}>
                        <Link to="/overview">Overview</Link>
                    </li>
                    <li className={location.pathname === "/vision-mission" ? "menu-active" : ""}>
                        <Link to="/vision-mission">Vision and Mission</Link>
                    </li>
                    <li className={location.pathname === "/Core Values" ? "menu-active" : ""}>
                        <Link to="/Core Values">Core Values</Link>
                    </li>
                    <li className={location.pathname === "/sponsoring-body" ? "menu-active" : ""}>
                        <Link to="/sponsoring-body">Sponsoring Body</Link>
                    </li>

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
                    <li className={location.pathname === "https://info.aec.edu.in/aus/default.aspx" ? "menu-active" : ""}>
                        <Link to="https://info.aec.edu.in/aus/default.aspx">Campus Connect 🎓</Link>
                    </li>
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
