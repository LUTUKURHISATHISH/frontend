import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../../../components/styles/sidemenu.css";

const Academics = () => {
    return (
        <div className="container">
            <center><span className="hedingname">Schools</span></center> 
            <div className="programs">
                {[
                    // { id: "opportunities", path: "/academics-overview", label: "Academics Overview" },
                    { id: "placements", path: "/school-of-engineering", label: "School of Engineering" },
                    { id: "business", path: "/school-of-business", label: "School of Business" },
                    { id: "sciences", path: "/school-of-sciences", label: "School of Sciences" },
                    { id: "pharmacy", path: "/pharmacy", label: "School of Pharmacy" },

                    
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

export default Academics;
