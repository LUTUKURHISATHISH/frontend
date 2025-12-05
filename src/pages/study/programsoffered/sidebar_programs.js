import React from "react";
import { NavLink } from "react-router-dom";
import "../../../components/styles/sidemenu.css";

const ProgramsOffered = () => {
  const programs = [
    // { id: "diploma", path: "/diploma-programs", label: "Diploma Programs" },
    { id: "ug", path: "/ug-programs", label: "UG Programs" },
    { id: "pg", path: "/pg-programs", label: "PG Programs" },
    { id: "phd", path: "/phd-programs", label: "Ph.D Programs" },
    { id: "corporate", path: "/corporate-programs", label: "Corporate PG Diploma Programs" },
    {
      id: "executive",
      path: "https://adityauniversity.in/adtppu/uploads/executive_education.pdf",
      external: true,
      label: "Executive Education Programs",
    },
  ];

  const handleExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer"); // ✅ Opens in a new tab or window
  };

  return (
    <div className="container">
      <center><span className="hedingname">Programs Offered</span></center>
      <div className="programs">
        {programs.map((program) => (
          <div className="program" key={program.id}>
            <input type="radio" id={program.id} name="program" readOnly />
            
            {program.external ? (
              <label
                htmlFor={program.id}
                className="external-link"
                onClick={() => handleExternalLink(program.path)}
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                {program.label}
              </label>
            ) : (
              <NavLink
                to={program.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <label htmlFor={program.id}>{program.label}</label>
              </NavLink>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsOffered;
