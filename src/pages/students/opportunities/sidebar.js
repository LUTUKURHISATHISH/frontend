import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../../../components/styles/sidemenu.css";

const ProgramsOffered = () => {
    return (
        <div className="container">
            <center><span className="hedingname">Opportunities</span></center> 
            <div className="programs">
                {[
                    { id: "opportunities", path: "/opportunities", label: "Overview" },
                    { id: "placements", path: "/opportunities-placements", label: "Placements" },
                    { id: "trainings", path: "/trainings", label: "Trainings" },
                    // { id: "education", path: "/higher-education", label: "Higher Education" },
                    { id: "internships", path: "/internships", label: "Internships" },
                    // { id: "incubation", path: "/entrepreneurship-incubation", label: "Entrepreneurship & Incubation" },
                    // { id: "contact", path: "/contact-us", label: "Contact us" },


                ].map(program => (
                    <div className="program" key={program.id}>
                        <input
                            type="radio"
                            id={program.id}
                            name="program"
                            readOnly
                        />
                        <NavLink to={program.path} activeClassName="active">
                            <label htmlFor={program.id}>{program.label}</label>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgramsOffered;
