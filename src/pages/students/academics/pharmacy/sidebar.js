import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../../../../components/styles/sidemenu.css";
import Back from '../images/back.gif';
import { Link } from 'react-router-dom';

const Pharmacy = () => {
    return (
        <div className="container">
            <center><span className="hedingname">School of Pharmacy</span></center>
            <div className="programs">
                {[
                    { id: "overview", path: "/pharmacy", label: "Overview" },
                    { id: "vision", path: "/pharmacy-vision-mission", label: "Vision & Mission" },
                    { id: "PeoPso", path: "/pharmacy-peo-pso", label: "PEO & PSO" },
                    { id: "offered", path: "/pharmacy-offered", label: "Programs Offered" },
                    { id: "academic-calendar", path: "/pharmacy-academic-calendar", label: "Academic Calendar" },
                    { id: "regulations", path: "/pharmacy-ug-regulations", label: "Regulations" },
                    { id: "curriculum", path: "/pharmacy-ug-curriculum", label: "Curriculum" },
                    { id: "specialization", path: "/pharmacy-specialization", label: "Area of Specialization" },
                    { id: "faculty", path: "/pharmacy-faculty", label: "Faculty" },

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
            <center>
                <Link to="/schools">
                    <img src={Back} alt="Back" style={{ width: '30px', marginTop: '-34px' }} />
                </Link>
            </center>
            <br />
        </div>
    );
};

export default Pharmacy;



