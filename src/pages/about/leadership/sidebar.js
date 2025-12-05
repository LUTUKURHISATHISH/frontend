import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../../../components/styles/sidemenu.css";

const ProgramsOffered = () => {
    return (
        <div className="container">
            {/* <center><span className="hedingname"></span></center>  */}
            <div className="programs">
                {[
                    { id: "leadership", path: "/leadership", label: "Leadership" },
                    { id: "leadership_team", path: "/leadership-team", label: "Leadership Team" },
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
