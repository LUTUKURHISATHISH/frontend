import React from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import "../../../../components/styles/sidemenu.css";
import "./deptsidebar.css";
import Back from '../images/back.gif';

const ProgramsOffered = () => {
    const programs = [
        { id: "civil", path: "/civil", label: "Civil Engineering" },
        { id: "eee", path: "/eee", label: "Electrical and Electronics Engineering" },
        { id: "mechanical", path: "/mechanical", label: "Mechanical Engineering" },
        { id: "ece", path: "/ece", label: "Electronics and Communication Engineering" },
        { id: "agricultural", path: "/agricultural", label: "Agricultural Engineering" },
        { id: "mining", path: "/mining", label: "Mining Engineering " },
        { id: "petroleum", path: "/petroleum", label: "Petroleum Technology" },
        { id: "applications", path: "/mca", label: "Computer Applications" },
        { id: "freshman", path: "/freshman", label: "Freshman Engineering" },
        { id: "science", path: "/ds", label: "Data Science" },
        { id: "information", path: "/it", label: "Information Technology" },
        { id: "cse", path: "/cse", label: "Computer Science Engineering" },
        { id: "aiml", path: "/aiml", label: "Artificial Intelligence & Machine Learning" },
        // { id: "sap", path: "https://adityauniversity.in/static/media/cse_sap.0e3e626c141d9ca7400b.pdf", external: true, label: "CSE in Collaboration with SAP" },
        // { id: "google-cloud", path: "https://adityauniversity.in/static/media/cse_google_cloud.71c5e486f320d97bb5d5.pdf", external: true, label: "CSE in Collaboration with Google - Cloud" },
        // { id: "microsoft", path: "https://adityauniversity.in/static/media/aiml_microsoft.7c7373cdc5dc58dd63df.pdf", external: true, label: "AIML in Collaboration with Microsoft" },
        // { id: "google-cloud-aiml", path: "https://adityauniversity.in/static/media/aiml_google_cloud.71c5e486f320d97bb5d5.pdf", external: true, label: "AIML in Collaboration with Google - Cloud" },
        // { id: "google-cloud-cse-ds", path: "https://adityauniversity.in/static/media/ds_google_cloud.71c5e486f320d97bb5d5.pdf", external: true, label: "CSE(DS) in Collaboration with Google - Cloud" },
    ];

    const leftColumn = programs.slice(0, 7);
    const rightColumn = programs.slice(7);

    const renderProgram = (program) => (
        <div className="program" key={program.id}>
            {program.external ? (
                <a href={program.path} target="_blank" rel="noopener noreferrer">
                    <label>{program.label}</label>
                </a>
            ) : (
                <NavLink 
                    to={program.path} 
                    className={({ isActive }) => isActive ? "active" : ""}
                >
                    <label>{program.label}</label>
                </NavLink>
            )}
        </div>
    );

    return (
        <div className="container" style={{ backgroundColor: "#ffff", padding: "10px" }}>
            <center><span className="hedingname">Departments</span></center>
            <div className="program-columns">
                <div className="column">
                    {leftColumn.map(renderProgram)}
                </div>
                <div className="column">
                    {rightColumn.map(renderProgram)}
                </div>
            </div>
            <center>
                <Link to="/school-of-engineering">
                    <img src={Back} alt="Back" style={{ width: '30px', marginTop: '-34px' }} />
                </Link>
            </center>
            <br />
        </div>
    );
};

export default ProgramsOffered;
