import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../../../../components/styles/sidemenu.css";
import Back from '../images/back.gif';
import { Link } from 'react-router-dom';

const ProgramsOffered = () => {
    return (
        <div className="container">
            <center><span className="hedingname">School of Engineering</span></center> 
            <div className="programs">
                {[
                    { id: "notification", path: "/school-of-engineering", label: "Overview" },
                    { id: "department", path: "/departments", label: "Departments" },
                    { id: "calendar", path: "/academic-calendar", label: "Academic Calendar" },
                    { id: "regulations", path: "/ug-regulations", label: "Regulations" },
                    { id: "curriculum", path: "/ug-curriculum", label: "Curriculum" },
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



