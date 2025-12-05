import React from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import "../../../../../../components/styles/sidemenu.css";
import Back from '../../../images/back.gif';


const ECEsideBar = () => {
    return (
        <div className="container">
            <center><span className="hedingname">Electronics and Communication Engineering</span></center> 
            <div className="programs">
                {[
                    { id: "overview", path: "/ece", label: "Overview" },
                    { id: "vision", path: "/ece-vision-mission", label: "Vision & Mission" },
                    { id: "PeoPso", path: "/ece-peo-pso", label: "PEO & PSO" },
                    { id: "offered", path: "/ece-programs-offered", label: "Programs Offered" },
                    { id: "faculty", path: "/ece-faculty", label: "Faculty" },
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

export default ECEsideBar;



