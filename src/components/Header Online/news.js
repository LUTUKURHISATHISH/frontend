import React, { useState, useEffect } from "react";

const Announcements = () => {
  const announcements = [
    { text: "UG Admissions Open 2025 ", link: "https://apply.adityauniversity.in/" },
    { text: "Times Higher Education Impact Rankings 2025", link: "/rankings" },
    { text: "U.S.A, Dallas Alumni Meet 2K25", link: "/alumni-events" },
    { text: 'Online Certification Course on "AI Tools for Education & Research" from 18/08/2025 to 22/08/2025', link: "/events" },
    { text: "2nd International Conference on RDECS-2025", link: "https://adityauniversity.in/rdecs2025" }, 
    { text: "2nd International conference ICISMT 2K25 - Civil Engineering", link: "https://aec.edu.in/icismt2025/" },
 ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPaused, currentIndex]);

  return (
    <div style={styles.container}>
      <button style={styles.arrow} onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + announcements.length) % announcements.length)}>
        &#8249;
      </button>
      <a
        href={announcements[currentIndex].link}
        style={styles.text}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {announcements[currentIndex].text}
      </a>
      <button style={styles.arrow} onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)}>
        &#8250;
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    color: "#292929",
    position: "relative",
    overflow: "hidden",
    marginTop: "-12px",
  },
  arrow: {
    cursor: "pointer",
    fontSize: "24px",
    padding: "10px",
    color: "#0c6ab0",
    background: "none",
    border: "none",
  },
  text: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    textAlign: "center",
    fontSize: "16px",
    textDecoration: "none",
    color: "#0c6ab0",
    transition: "color 0.3s ease",
  },
};

// Add hover effect using a stylesheet
const dynamicStyles = document.createElement("style");
dynamicStyles.innerHTML = `
  a:hover {
    color: #f05819 !important;
  }
`;
document.head.appendChild(dynamicStyles);

export default Announcements;
