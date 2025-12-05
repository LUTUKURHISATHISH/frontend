import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../../../components/styles/sidemenu-dept.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseMedical,
  faHouse,
  faBook,
  faGlobe,
  faUsers,
  faSchool,
  faTachographDigital,
  faChevronDown,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

const DepartmentMenu = ({ department }) => {
  const [open, setOpen] = useState(false);
  const [subMenu, setSubMenu] = useState({
    facilities: false,
    research: false,
    bos: false,
  });

  const location = useLocation();
  const currentPath = location.pathname;

  const slugify = (text) => text.toLowerCase().replace(/[^a-z-]/g, "");

  const isActive = (path) => currentPath === path;

  // Auto expand submenu if path is inside it
  useEffect(() => {
    if (
      (currentPath.includes(`${slugify(department)}-facilities-labs`) ||
        currentPath.includes(`${slugify(department)}-facilities-classroom`)) &&
      !subMenu.facilities
    ) {
      setSubMenu((prev) => ({ ...prev, facilities: true }));
    }

    if (
      (currentPath.includes(`${slugify(department)}-research-projects`) ||
        currentPath.includes(`${slugify(department)}-research-publications`) ||
        currentPath.includes(`${slugify(department)}-research-patents`)) &&
      !subMenu.research
    ) {
      setSubMenu((prev) => ({ ...prev, research: true }));
    }

    if (
      (currentPath.includes(`${slugify(department)}-bos-members`) ||
        currentPath.includes(`${slugify(department)}-bos-minutesofmeeting`)) &&
      !subMenu.bos
    ) {
      setSubMenu((prev) => ({ ...prev, bos: true }));
    }
  }, [currentPath, department]);

  return (
    <div className="dept_sidemenu">
      <div className="header-dept" onClick={() => setOpen((prev) => !prev)}>
        Explore
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{
            marginLeft: "8px",
            transition: "transform 0.3s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>

      {open && (
        <div className="menu-wrapper">
          {/* Overview */}
          <Link to={`/${slugify(department)}`}>
            <div
              className={`menu-item-dept ${isActive(`/${slugify(department)}`) ? "active" : ""
                }`}
            >
              <FontAwesomeIcon icon={faHouse} /> Overview
            </div>
          </Link>

          {/* Facilities */}
          <div
            className={`menu-item-dept ${currentPath.includes(`/facilities-labs/${slugify(department)}`) || currentPath.includes(`/facilities-classrooms/${slugify(department)}`)
                ? "active"
                : ""
              }`}
            onClick={() =>
              setSubMenu((prev) => ({ ...prev, facilities: !prev.facilities }))
            }
          >
            <FontAwesomeIcon icon={faHouseMedical} /> Facilities
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{
                marginLeft: "auto",
                transition: "transform 0.3s",
                transform: subMenu.facilities ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </div>

          {subMenu.facilities && (
            <div className="submenu-down">
              <Link to={`/facilities-labs/${slugify(department)}`}>
                <div
                  className={`submenu-item ${isActive(`/facilities-labs/${slugify(department)}`) ? "active" : ""
                    }`}
                >
                  <FontAwesomeIcon icon={faAnglesRight} /> Labs
                </div>
              </Link>

              <Link to={`/facilities-classrooms/${slugify(department)}`}>
                <div
                  className={`submenu-item ${isActive(`/facilities-classrooms/${slugify(department)}`) ? "active" : ""
                    }`}
                >
                  <FontAwesomeIcon icon={faAnglesRight} /> Classrooms
                </div>
              </Link>
            </div>
          )}


          {/* Research */}
          <div
            className={`menu-item-dept ${currentPath.includes(`/research-projects/${slugify(department)}`) || currentPath.includes(`/research-publications/${slugify(department)}`) || currentPath.includes(`/research-patents/${slugify(department)}`)
                ? "active"
                : ""
              }`}
            onClick={() =>
              setSubMenu((prev) => ({ ...prev, research: !prev.research }))
            }
          >
            <FontAwesomeIcon icon={faBook} /> Research
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{
                marginLeft: "auto",
                transition: "transform 0.3s",
                transform: subMenu.research
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            />
          </div>
          {subMenu.research && (
            <div className="submenu-down">
              <Link to={`/research-projects/${slugify(department)}`}>
                <div
                  className={`submenu-item ${isActive(`/research-projects/${slugify(department)}`)
                      ? "active"
                      : ""
                    }`}
                >
                  <FontAwesomeIcon icon={faAnglesRight} /> Projects
                </div>
              </Link>
              <Link to={`/research-publications/${slugify(department)}`}>
                <div
                  className={`submenu-item ${isActive(`/research-publications/${slugify(department)}`)
                      ? "active"
                      : ""
                    }`}
                >
                  <FontAwesomeIcon icon={faAnglesRight} /> Publications
                </div>
              </Link>
              <Link to={`/research-patents/${slugify(department)}`}>
                <div
                  className={`submenu-item ${isActive(`/research-patents/${slugify(department)}`)
                      ? "active"
                      : ""
                    }`}
                >
                  <FontAwesomeIcon icon={faAnglesRight} /> Patents
                </div>
              </Link>
            </div>
          )}

          {/* Innovative Teaching */}
          <Link to={`/innovative-teaching/${slugify(department)}`}>
            <div
              className={`menu-item-dept ${isActive(`/innovative-teaching/${slugify(department)}`)
                  ? "active"
                  : ""
                }`}
            >
              <FontAwesomeIcon icon={faGlobe} /> Innovative Teaching Methods
            </div>
          </Link>

          {/* BOS */}
          <div
            className={`menu-item-dept ${currentPath.includes(`/members/${slugify(department)}`) || currentPath.includes(`/minutes-of-meeting/${slugify(department)}`) ? "active" : ""
              }`}
            onClick={() =>
              setSubMenu((prev) => ({ ...prev, bos: !prev.bos }))
            }
          >
            <FontAwesomeIcon icon={faBook} /> Board of Studies
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{
                marginLeft: "auto",
                transition: "transform 0.3s",
                transform: subMenu.bos ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </div>
          {subMenu.bos && (
            <div className="submenu-down">
              <Link to={`/members/${slugify(department)}`}>
                <div
                  className={`submenu-item ${isActive(`/members/${slugify(department)}`)
                      ? "active"
                      : ""
                    }`}
                >
                  <FontAwesomeIcon icon={faAnglesRight} /> BoS Members
                </div>
              </Link>
              <Link to={`/minutes-of-meeting/${slugify(department)}`}>
                <div
                  className={`submenu-item ${isActive(`/minutes-of-meeting/${slugify(department)}`)
                      ? "active"
                      : ""
                    }`}
                >
                  <FontAwesomeIcon icon={faAnglesRight} /> BoS Minutes of Meeting
                </div>
              </Link>
            </div>
          )}

          {/* Newsletter */}
          <Link to={`/newsletter/${slugify(department)}`}>
            <div
              className={`menu-item-dept ${isActive(`/newsletter/${slugify(department)}`) ? "active" : ""
                }`}
            >
              <FontAwesomeIcon icon={faUsers} /> Newsletter
            </div>
          </Link>

          {/* Alumni */}
          <Link to={`/alumni-connect/${slugify(department)}`}>
            <div
              className={`menu-item-dept ${isActive(`/alumni-connect/${slugify(department)}`)
                  ? "active"
                  : ""
                }`}
            >
              <FontAwesomeIcon icon={faSchool} /> Alumni Connect
            </div>
          </Link>

          {/* Digital Content */}
          <Link to={`/digital-content/${slugify(department)}`}>
            <div
              className={`menu-item-dept ${isActive(`/digital-content/${slugify(department)}`)
                  ? "active"
                  : ""
                }`}
            >
              <FontAwesomeIcon icon={faTachographDigital} /> Digital Content
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DepartmentMenu;
