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

  const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]/g, "");

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
              className={`menu-item-dept ${
                isActive(`/${slugify(department)}`) ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={faHouse} /> Overview
            </div>
          </Link>

          {/* Facilities */}
          <div
            className={`menu-item-dept ${
              currentPath.includes(`${slugify(department)}-facilities`)
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
                transform: subMenu.facilities
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              }}
            />
          </div>
          {subMenu.facilities && (
            <div className="submenu-down">
              <Link to={`/${slugify(department)}-facilities-labs`}>
                <div
                  className={`submenu-item ${
                    isActive(`/${slugify(department)}-facilities-labs`)
                      ? "active"
                      : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faAnglesRight} /> Labs
                </div>
              </Link>
              <Link to={`/${slugify(department)}-facilities-classroom`}>
                <div
                  className={`submenu-item ${
                    isActive(`/${slugify(department)}-facilities-classroom`)
                      ? "active"
                      : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faAnglesRight} /> Classrooms
                </div>
              </Link>
            </div>
          )}

          {/* Research */}
          <div
            className={`menu-item-dept ${
              currentPath.includes(`${slugify(department)}-research`)
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
              <Link to={`/${slugify(department)}-research-projects`}>
                <div
                  className={`submenu-item ${
                    isActive(`/${slugify(department)}-research-projects`)
                      ? "active"
                      : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faAnglesRight} /> Projects
                </div>
              </Link>
              <Link to={`/${slugify(department)}-research-publications`}>
                <div
                  className={`submenu-item ${
                    isActive(`/${slugify(department)}-research-publications`)
                      ? "active"
                      : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faAnglesRight} /> Publications
                </div>
              </Link>
              <Link to={`/${slugify(department)}-research-patents`}>
                <div
                  className={`submenu-item ${
                    isActive(`/${slugify(department)}-research-patents`)
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
          <Link to={`/${slugify(department)}-innovativeteaching`}>
            <div
              className={`menu-item-dept ${
                isActive(`/${slugify(department)}-innovativeteaching`)
                  ? "active"
                  : ""
              }`}
            >
              <FontAwesomeIcon icon={faGlobe} /> Innovative Teaching Methods
            </div>
          </Link>

          {/* BOS */}
          <div
            className={`menu-item-dept ${
              currentPath.includes(`${slugify(department)}-bos`) ? "active" : ""
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
              <Link to={`/${slugify(department)}-bos-members`}>
                <div
                  className={`submenu-item ${
                    isActive(`/${slugify(department)}-bos-members`)
                      ? "active"
                      : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faAnglesRight} /> BoS Members
                </div>
              </Link>
              <Link to={`/${slugify(department)}-bos-minutesofmeeting`}>
                <div
                  className={`submenu-item ${
                    isActive(`/${slugify(department)}-bos-minutesofmeeting`)
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
          <Link to={`/${slugify(department)}-newsletter`}>
            <div
              className={`menu-item-dept ${
                isActive(`/${slugify(department)}-newsletter`) ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={faUsers} /> Newsletter
            </div>
          </Link>

          {/* Alumni */}
          <Link to={`/${slugify(department)}-aluminiconnect`}>
            <div
              className={`menu-item-dept ${
                isActive(`/${slugify(department)}-aluminiconnect`)
                  ? "active"
                  : ""
              }`}
            >
              <FontAwesomeIcon icon={faSchool} /> Alumni Connect
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DepartmentMenu;
