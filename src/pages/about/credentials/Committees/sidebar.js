import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../../../../components/styles/sidemenu.css";

const ProgramsOffered = () => {
    return (
        <div className="container">
            <center><span className="hedingname">Committees @ AUS</span></center> 
            <div className="programs">
                {[
                    { id: "vision", path: "/internal-complaint-committee", label: "Internal Complaint Committee" },
                    { id: "objectives", path: "/anti-ragging-committee", label: "Anti ragging committee" },
                    { id: "strategies", path: "/equal-opportunity-cell", label: "Equal opportunity Cell" },
                    { id: "functions", path: "/socio-economically-disadvantaged-groups-cell", label: "Socio-Economically Disadvantaged Groups Cell" },
                    


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
