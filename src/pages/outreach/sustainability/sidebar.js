import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../../components/styles/sidemenu.css";
import file1 from "./files/SDG-Report.pdf";

const SideMenu = () => {
    const location = useLocation(); // Get current URL path

    const programs = [
        { 
            id: "overview", 
            paths: ["/sustainability-overview"], 
            label: "Overview" 
        },
        { 
            id: "report", 
            path: file1, 
            label: "SDG Report" 
        },
    ];

    return (
        <div className="container">
            <div className="programs">
                {programs.map((program) => {
                    const isActive = program.paths?.includes(location.pathname);

                    return (
                        <div className={`program ${isActive ? "active" : ""}`} key={program.id}>
                            {program.path ? (
                                // If it's a file, use an anchor tag to open/download
                                <a href={program.path} target="_blank" rel="noopener noreferrer">
                                    <label htmlFor={program.id}>{program.label}</label>
                                </a>
                            ) : (
                                // Otherwise, use NavLink for internal navigation
                                <NavLink to={program.paths[0]} className={isActive ? "active" : ""}>
                                    <input type="radio" id={program.id} name="program" readOnly checked={isActive} />
                                    <label htmlFor={program.id}>{program.label}</label>
                                </NavLink>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SideMenu;
