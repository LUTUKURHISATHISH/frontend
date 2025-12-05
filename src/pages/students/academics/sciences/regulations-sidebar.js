import React from "react";
import { Link,NavLink, useLocation } from 'react-router-dom';
import "../../../../components/styles/sidemenu.css";
import Back from '../images/back.gif';



const ProgramsOffered = () => {
    return (
        <div className="container">
            <center><span className="hedingname">Regulations</span></center> 
            <div className="programs">
                {[
                    { id: "regulations", path: "/sciences-ug-regulations", label: "UG Regulations" },
                    { id: "pgregulations", path: "/sciences-pg-regulations", label: "PG Regulations" },
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
            <br/>
              <center><Link to="/school-of-sciences">  <img src={Back} style={{width:'30px',marginTop: '-34px'}}/> </Link> </center>
           
        </div>
    );
};

export default ProgramsOffered;



