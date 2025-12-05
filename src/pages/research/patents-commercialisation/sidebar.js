import React from "react";
import { Link,NavLink, useLocation } from 'react-router-dom';
import "../../../components/styles/sidemenu.css";
import Back from '../images/back.gif';

const ProgramsOffered = () => {
    return (
        <div className="container">
            <center><span className="hedingname">Patents & Commercialisation</span></center> 
            <div className="programs">
                {[
                    { id: "Overview", path: "/patents-commercialisation", label: "Overview" },
                    { id: "Advanced Engineering Applications", path: "/advanced-engineering-applications", label: "Advanced Engineering Applications" },
                    { id: "Automobile Engineering", path: "/automobile-engineering", label: "Automobile Engineering" },
                    // { id: "Renewable Energy", path: "/renewable-energy", label: "Renewable Energy" },
                    { id: "Healthcare", path: "/healthcare", label: "Healthcare" },
                    { id: "Sustainability", path: "/sustainability", label: "Sustainability" },
                    { id: "Food Engineering", path: "/food-engineering", label: "Food Engineering" },
                    { id: "Technology for Disabled and Elderly", path: "/technology-disabled-elderly", label: "Technology for Disabled and Elderly" },

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
            <center><Link to="/our-research">  <img src={Back} style={{width:'30px',marginTop: '-34px'}}/> </Link> </center>
        </div>
    );
};

export default ProgramsOffered;
