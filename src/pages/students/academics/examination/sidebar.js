import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../../../../components/styles/sidemenu.css";

const ProgramsOffered = () => {
    return (
        <div className="container">
            <center><span className="hedingname">Examination Centre</span></center> 
            <div className="programs">
                {[
                    { id: "notification", path: "/examination-centre", label: "Examination Notification" },
                    { id: "papers", path: "/model-papers", label: "Model Question Papers" },
                    { id: "oldpapers", path: "/old-model-papers", label: "Old Question Papers" },
                    { id: "team", path: "/examination-team", label: "Team" },


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



