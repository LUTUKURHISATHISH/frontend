import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../../../components/styles/sidemenu.css";

const ProgramsOffered = () => {
    return (
        <div className="container">
            <center><span className="hedingname">Aditya University</span></center> 
            <div className="programs">
                {[
                    { id: "overview", path: "/overview", label: "Overview" },
                    { id: "vision", path: "/vision-mission", label: "Vision and Mission" },
                    { id: "corevalues", path: "/core-values", label: "Core Values" },
                    { id: "SponsoringBody", path: "/sponsoring-body", label: "Sponsoring Body" },

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
