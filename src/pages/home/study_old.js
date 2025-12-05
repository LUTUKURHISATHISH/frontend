import React, { useState } from "react";
import "./home.css";
import Placements from './images/study_Aditya/placements.webp';
import Faculty from './images/study_Aditya/faculty.webp';
import Infrastructure from './images/study_Aditya/infrastructure.webp';
import Skilling from './images/study_Aditya/skilling.webp';
import Amenities from './images/study_Aditya/amenities.webp';

import Logo_left from './images/logo_left.webp';
import { Link } from 'react-router-dom';


 
const articles = [
    {
        id: 1,
        imgSrc: Placements,
        title: "Placements",
        linkpath: "/placements",
        content: "100% placements for past 24 years for all registered and eligible students.2000+ Placement offers from 120+ Companies, in 2024-25 (till date) academic year, with Rs.35.36 Lakhs per annum ",
    },
    {
        id: 2,
        imgSrc: Faculty,
        title: "Faculty",
        linkpath: "/faculty",
        content: "300+ faculty with rich industry, academia, and research experience.100+ Doctoral faculty in varied research domains.1000+ Paper Publication in SCI/ SCOPUS indexed Journals.Govt",
    },
    {
        id: 3,
        imgSrc: Skilling,
        title: "Academics & Skilling",
        linkpath: "/academics-skilling",
        content: "Centre of excellences with Industry collaborations.44 Functional MoUs with MNCs & industries Credits for skilling in all relevant courses and curriculum aligned with sector-skills council and MNCs",
    },
    {
        id: 4,
        imgSrc: Infrastructure,
        title: "Infrastructure",
        linkpath: "/infrastructure",
        content: "Wi-Fi enabled campus with 3 Gbps Band Width, ICT and Digital Technologies enabled classrooms.Well-equipped State of the Art Academic Laboratories.24*7 In-House Clinic facility.",
    },
    {
        id: 5,
        imgSrc: Amenities,
        title: "Amenities",
        linkpath: "/amenities",
        content: "Student Clubs, professional society student chapters.Annual national-level techno-management and cultural festivals & national level sports meets.Separate Gymnasiums for boys and girls.",
    },
];
 
const Study = () => {
    const [activeSection, setActiveSection] = useState("Placements");
   
    const handleSectionClick = (section) => {
        setActiveSection(section);
    };
 
    const visibleArticles = articles.filter((article, index) =>
        activeSection === "Placements" ? index < 3 :
        activeSection === "Faculty" ? [1, 2, 3].includes(index) :
        activeSection === "Academics & Skilling" ? [2, 3, 4].includes(index) :
        [3, 4, 0].includes(index)
    );
 
    return (
        <div className="study_bg bg-blue-900 min-h-screen p-7 text-white">
            <br/>
            <img src={Logo_left} className="logoleft"></img>
            <center><b className="testimonial_title_name"> <span style={{ color: '#fff' }}>Study @ Aditya</span></b></center>
           
            <div className="flex justify-center gap-6 mt-1 text-gray-300 linebar">
                {articles.map(article => (
                    <a style={{marginBottom:"30px",padding:"10px"}}
                        key={article.id}
                        href="#"
                        onClick={(e) => { e.preventDefault(); handleSectionClick(article.title); }}
                        className={
                            `font-semibold ${activeSection === article.title ? "text-orange-400 underline" : "text-white"}`
                        }
                    >
                        {article.title}
                    </a>
                ))}
            </div>
           
            <section className="articles transition-all duration-500 ease-in-out">
                {visibleArticles.map((article) => (
                    <article key={article.id} className={activeSection === article.title ? "highlight-card" : ""}>
                        <div className="article-wrapper">
                            <figure>
                                <img src={article.imgSrc} alt={article.title} />
                            </figure>
                            <div className="article-body">
                                <h2 className="study_title_name">{article.title}</h2>
                                <p style={{ color: '#292929' }}>{article.content}</p>
                                <Link to={article.linkpath} className="read-more">
                                    Read more <span className="sr-only">about {article.title}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
            <br /><br />
        </div>
    );
};
 
export default Study;