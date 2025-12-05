import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../../../../components/styles/sidemenu.css";

const ProgramsOffered = () => {
    return (
        <div className="container">
            <center><span className="hedingname">Internal Quality Assurance Cell</span></center> 
            <div className="programs">
                {[
                    { id: "overview", path: "/iqac-overview", label: "Overview" },
                    // { id: "objectives", path: "/iqac-objectives", label: "Objectives" },
                    // { id: "strategies", path: "/iqac-strategies", label: "Strategies" },
                    // { id: "functions", path: "/iqac-functions", label: "Functions" },
                    // { id: "benefits", path: "/iqac-benefits", label: "Benefits" },
                    { id: "members", path: "/iqac-members", label: "Members" },
                    { id: "events", path: "/iqac-events", label: "Events" },
                    { id: "idp", path: "/institute-development-plan", label: "Institute Development Plan (IDP)" },



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
