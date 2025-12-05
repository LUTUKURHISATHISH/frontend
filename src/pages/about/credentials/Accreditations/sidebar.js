import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../../../../components/styles/sidemenu.css";

const ProgramsOffered = () => {
    return (
        <div className="container">
            <center><span className="hedingname">Accreditations, NIRF, Recognitions & Rankings</span></center> 
            <div className="programs">
                {[
                    { id: "accreditations", path: "/accreditations", label: "Accreditations" },
                    { id: "nirf", path: "/nirf", label: "NIRF" },
                    { id: "recognitions", path: "/recognitions ", label: "Recognitions" },
                    { id: "rankings", path: "/rankings", label: "Rankings" },
                    // { id: "naac", path: "/naac-public-notice", label: "NAAC Public Notice" },
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
