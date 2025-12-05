import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../../../components/styles/sidemenu.css";

const ProgramsOffered = () => {
    return (
        <div className="container">
            <center><span className="hedingname">Governance</span></center> 
            <div className="programs">
                {[
                    { id: "governingbody", path: "/governing-body", label: "Governing Body" },
                    { id: "boardmanagement", path: "/board-management", label: "Board of Management" },
                    { id: "academiccouncil", path: "/academic-council", label: "Academic Council" },
                    { id: "financecommittee", path: "/finance-committee", label: "Finance Committee" },

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
