import React from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import "../../../../../../components/styles/sidemenu.css";
import Back from '../../../images/back.gif';


const ProgramsOffered = () => {
    return (
        <div className="container">
            <center><span className="hedingname">Computer Science and Engineering</span></center> 
            <div className="programs">
                {[
                    { id: "overview", path: "/cse", label: "Overview" },
                    { id: "vision", path: "/cse-vision-mission", label: "Vision & Mission" },
                    { id: "offered", path: "/cse-peo-pso", label: "PEOs & PSOs" },
                    { id: "offered", path: "/cse-programs-offered", label: "Programs Offered" },
                    { id: "faculty", path: "/cse-faculty", label: "Faculty" },
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
            <center><Link to="/departments">  <img src={Back} style={{width:'30px',marginTop: '-34px'}}/> </Link> </center>
            <br/>
        </div>
    );
};

export default ProgramsOffered;



