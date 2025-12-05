import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../../../components/styles/sidemenu.css";

const Facilities = () => {
    return (
        <div className="container">
            <center><span className="hedingname">Facilities</span></center> 
            <div className="programs">
                {[
                    { id: "Infrastructure", path: "/infrastructure-facilities", label: "Infrastructure" },
                    { id: "Hostel", path: "/hostel", label: "Hostel" },
                    { id: "Health", path: "/health", label: "Health" },
                    { id: "Sports", path: "/sports", label: "Sports" },
                    { id: "environment", path: "/barrier-free-environment", label: "Barrier free Environment" },
                    { id: "transport", path: "/transport", label: "Transport" },
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

export default Facilities;



