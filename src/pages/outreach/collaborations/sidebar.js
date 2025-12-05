import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../../components/styles/sidemenu.css";

const ProgramsOffered = () => {
    const location = useLocation(); // Get current URL path

    const programs = [
        { 
            id: "diploma", 
            paths: ["/institute-collaborations", "/collaborations"], 
            label: "Institute Collaborations" 
        },
        { 
            id: "ug", 
            paths: ["/industry-collaborations"], 
            label: "Industry Collaborations" 
        },
    ];

    return (
        <div className="container">
            <div className="programs">
                {programs.map((program) => {
                    // Check if current path matches any of the program paths
                    const isActive = program.paths.includes(location.pathname);

                    return (
                        <div className={`program ${isActive ? "active" : ""}`} key={program.id}>
                            <NavLink to={program.paths[0]} className={isActive ? "active" : ""}>
                                <input type="radio" id={program.id} name="program" readOnly checked={isActive} />
                                <label htmlFor={program.id}>{program.label}</label>
                            </NavLink>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProgramsOffered;
