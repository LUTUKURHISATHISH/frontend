import React from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import "../../../../../components/styles/sidemenu.css";
import Back from '../../images/back.gif';


const ProgramsOffered = () => {
    return (
        <div className="container">
            <center><span className="hedingname">Master of Business Administration</span></center> 
            <div className="programs">
                {[
                    { id: "opportunities", path: "/mba", label: "Overview" },
                    { id: "placements", path: "/mba-programs-offered", label: "Programs Offered" },
                    { id: "trainings", path: "/mba-faculty", label: "Faculty" },
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
              <center><Link to="/school-of-business">  <img src={Back} style={{width:'30px',marginTop: '-34px'}}/> </Link> </center>
            <br/>
        </div>
    );
};

export default ProgramsOffered;



