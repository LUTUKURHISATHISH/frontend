import React from "react";
import {NavLink, useLocation } from "react-router-dom";
import "../../../components/styles/sidemenu.css";



const ProgramsOffered = () => {
    const location = useLocation(); // Get current URL path

    const programs = [
        { 
            id: "Overview", 
            paths: ["/our-research"], 
            label: "Overview" 
        },
        { 
            id: "ug", 
            paths: ["/Publications"], 
            label: "Publications" 
        },
        { 
            id: "ug", 
            paths: ["/patents"], 
            label: "Patents" 
        },
        { 
            id: "PM", 
            paths: ["/patents-commercialisation"], 
            label: "Patents & Commercialisation" 
        },
    ];

    return (
        <div className="container">
            <center><br/><span class="hedingname">Our Research</span></center>
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
