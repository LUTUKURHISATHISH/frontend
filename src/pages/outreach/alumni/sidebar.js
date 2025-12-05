import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../../components/styles/sidemenu.css";

const Sidebar = () => {
    const location = useLocation(); // Get current URL path

    const programs = [
        { 
            id: "alumniA", 
            paths: ["/alumni"], 
            label: "Overview" 
        },
        { 
            id: "alumniB", 
            paths: ["/alumni-coordination-committee"], 
            label: "Alumni coordination Committee" 
        },
        { 
            id: "events", 
            paths: ["/alumni-events"], 
            label: "Events" 
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

export default Sidebar;
