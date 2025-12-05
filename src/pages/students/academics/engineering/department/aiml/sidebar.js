import React from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';
import "../../../../../../components/styles/sidemenu.css";
import Back from '../../../images/back.gif';


const AIML_SideBar = () => {
    return (
        <div className="container">
            <center><span className="hedingname">Artificial Intelligence and Machine Learning (AI and ML)</span></center> 
            <div className="programs">
                {[
                    { id: "overview", path: "/aiml", label: "Overview" },
                    { id: "vision", path: "/aiml-vision-mission", label: "Vision & Mission" },
                    { id: "PeoPso", path: "/aiml-peo-pso", label: "PEO & PSO" },
                    { id: "offered", path: "/aiml-programs-offered", label: "Programs Offered" },
                    { id: "faculty", path: "/aiml-faculty", label: "Faculty" },
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

export default AIML_SideBar;



