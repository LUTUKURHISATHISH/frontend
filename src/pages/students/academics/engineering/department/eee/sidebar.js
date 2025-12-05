import React from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import "../../../../../../components/styles/sidemenu.css";
import Back from '../../../images/back.gif';


const ProgramsOffered = () => {
    return (
        <div className="container">
            <center><span className="hedingname">Electrical and Electronics Engineering</span></center> 
            <div className="programs">
                {[
                    { id: "overview", path: "/eee", label: "Overview" },
                    { id: "vision", path: "/eee-vision-mission", label: "Vision & Mission" },
                    { id: "PeoPso", path: "/eee-peo-pso", label: "PEO & PSO" },
                    { id: "offered", path: "/eee-programs-offered", label: "Programs Offered" },
                    { id: "faculty", path: "/eee-faculty", label: "Faculty" },
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



