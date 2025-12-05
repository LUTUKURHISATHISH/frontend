import React from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import "../../../../../../components/styles/sidemenu.css";
import Back from '../../../images/back.gif';


const ProgramsOffered = () => {
    return (
        <div className="container">
            <center><span className="hedingname">Mechanical Engineering</span></center> 
            <div className="programs">
                {[
                    { id: "overview", path: "/mechanical", label: "Overview" },
                    { id: "vision", path: "/mechanical-vision-mission", label: "Vision & Mission" },
                    { id: "PeoPso", path: "/mechanical-peo-pso", label: "PEO & PSO" },
                    { id: "offered", path: "/mechanical-programs-offered", label: "Programs Offered" },
                    { id: "faculty", path: "/mechanical-faculty", label: "Faculty" },
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



