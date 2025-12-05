import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import "../../../components/styles/sidemenu.css";
import "../study.css";


const ProgramsOffered = () => {
    return (
        <div className="container">
            <br/>
            <center><span className="hedingnamewhite">Study </span> <span className="hedingnameorange"> @ Aditya</span></center> 
            <div className="programs">
                {[
                    { id: "placements", path: "/placements", label: "Placements" },
                    { id: "faculty", path: "/faculty", label: "Faculty" },
                    { id: "infrastructure", path: "/infrastructure", label: "Infrastructure" },
                    // { id: "academics-skilling", path: "/academics-skilling", label: "Academics & Skilling" },
                    // { id: "amenities", path: "/amenities", label: "Amenities" },
                    { id: "awards-recognitions", path: "/awards-recognitions", label: "Awards & Recognitions" },
                ].map(program => (
                    <div className="program_why" key={program.id}>
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
        </div>
    );
};

export default ProgramsOffered;
