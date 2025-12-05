import React, { useLocation } from "react-router-dom";
import { Link  } from 'react-router-dom';
import ResFacilities from "../engineering/department/mining/mineFacilityLab";
const DepartmentMenu = ({ department }) => {
  const location = useLocation();
  const currentPage = location.pathname.split("/").filter(Boolean).pop();
//  const submenu = departmentMenus[department] || [];
const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return (
    <div>
            <>
            {department === "ECE" && (
               <>
               <Link to={`/${slugify(department)}-facilities`}><div className="submenu-item"> Labs</div></Link>
                <Link to={`/${slugify(department)}-falicityclass`}><div className="submenu-item"> Classrooms</div></Link>
               
               </>
            )}
            {department === "CSE" && (
               <>
                <a href={`/${slugify(department)}-facilities`}><div className="submenu-item"> Labs</div></a>
                <Link to={`/${slugify(department)}-falicityclass`}><div className="submenu-item"> Classrooms</div></Link>
               </>
            )}
            </>
      {/* <ul>  
        {submenu.map((item, index) => (
          <li key={index}>
                         <Link to={`/${slugify(department)}-${slugify(item)}`}>{item}</Link> 
          </li>
        ))}

      </ul> */}
    </div>
  );
};

export default DepartmentMenu;
