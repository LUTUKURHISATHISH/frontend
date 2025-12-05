import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../../../../components/styles/sidemenu.css";
import Back from '../images/back.gif';
import { Link } from 'react-router-dom';

const ProgramsOffered = () => {
    return (
        <div className="container">
            <center><span className="hedingname">School of Sciences</span></center> 
            <div className="programs">
                {[
                    { id: "overview", path: "/school-of-sciences", label: "Overview" },
                     { id: "vision", path: "/forensic-sciences-vision-mission", label: "Vision & Mission" },
                    { id: "PeoPso", path: "/forensic-sciences-peo-pso", label: "PEO & PSO" },
                    { id: "offered", path: "/sciences-offered", label: "Programs Offered" },
                    { id: "academic-calendar", path: "/sciences-academic-calendar", label: "Academic Calendar" },
                    { id: "regulations", path: "/sciences-ug-regulations", label: "Regulations" },
                    { id: "curriculum", path: "/sciences-ug-curriculum", label: "Curriculum" },
                    { id: "specialization", path: "/sciences-specialization", label: "Area of Specialization" },
                    { id: "faculty", path: "/sciences-faculty", label: "Faculty" },

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
            <br/>
        </div>
    );
};

export default ProgramsOffered;



