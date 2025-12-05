import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../../../../components/styles/sidemenu.css";
import Back from '../images/back.gif';
import { Link } from 'react-router-dom';

const ProgramsOffered = () => {
    return (
        
        <div className="container">
            <center><span className="hedingname">School of Business</span></center> 
            <div className="programs">
                {[
                    { id: "opportunities", path: "/school-of-business", label: "Overview" },
                    { id: "vision", path: "/business-vision-mission", label: "Vision & Mission" },
                    { id: "PeoPso", path: "/business-peo-pso", label: "PEO & PSO" },
                    { id: "calendar", path: "/business-pg-academic-calendar", label: "Academic calendar" },
                    { id: "Regulations", path: "/business-ug-regulations", label: "Regulations" },
                    { id: "Curriculum", path: "/business-ug-curriculum", label: "Curriculum" },
                    { id: "Programsoffered", path: "/business-pg-programs-offered", label: "Programs Offered" },
                    { id: "AreaofSpecialization", path: "/business-pg-area-of-specialization", label: "Area of Specialization" },
                    { id: "mbafaculty", path: "/mba-faculty", label: "Faculty" },

                    // { id: "holidays", path: "/mba", label: "Department of Management Studies" },
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
        </div>
    );
};

export default ProgramsOffered;



