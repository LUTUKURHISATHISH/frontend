import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../../../components/styles/sidemenu.css";


const ProgramsOffered = () => {
    return (
        <div className="container">
            {/* <center><span className="hedingname">Collaborations</span></center>  */}
            <div className="programs">
                {[
                    { id: "about", path: "/aditya-learning-academy", label: "About" },
                    { id: "obj", path: "/objectives", label: "Objectives" },
                    { id: "support", path: "/comprehensive-support-services", label: "Comprehensive Support Services" },
                    { id: "team", path: "/team", label: "Team" },
                    { id: "events", path: "/events", label: "Events" },
                    { id: "Annual Report", path: "/annual-report", label: "Annual Report" },


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
