import React, { useState, useEffect } from "react";
import Header from "../../../../components/Header";
import FooterTwo from "../../../../components/Footer";
import StudyBreadcrumb from "../../../../components/Breadcrumb/outreach";
import ScrollToTop from "../../../../components/ScrollTop";
import SideManu from "./sidebar";
import NatifactionImage from '../business/images/notifaction.png';
import NotificationAlert from '../business/images/notification-alert.png';
import NatifactionIcon from '../business/images/notification.png';
const backendUrl = process.env.REACT_APP_DATABASEURL;

const Notification = () => {
    const [notifications, setNotifications] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    // Courses to filter and maintain order
    const allowedCourses = ["B.Tech", "M.Tech", "MBA", "IMBA", "MCA","Ph.D","B.Sc","M.Sc","B.Pharmacy","M.Pharmacy","Pharma.D"];

    // Fetch Data from API
    useEffect(() => {
        fetch(`${backendUrl}api/notifcation`)
            .then(response => response.json())
            .then(data => {
                // Filter notifications based on allowed courses
                const filteredData = data.filter(category =>
                    allowedCourses.includes(category.course)
                );

                // Sort the filtered data to match the order of allowedCourses
                const sortedData = allowedCourses.map(course => 
                    filteredData.find(item => item.course === course)
                ).filter(item => item !== undefined);

                setNotifications(sortedData);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <Header parentMenu="academics" menuCategoryEnable="enable" />
            <div className="react-wrapper background_height">
                <div className="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="Examination Notification" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div className="container">
                            <SideManu />
                            <div className="row m-0">
                                <div className="bg_color" style={{ backgroundColor: "#fff" }}>
                                    <div className="container">
                                        {notifications.map((category, index) => (
                                            <div key={index}>
                                                {/* Accordion Button */}
                                                <button 
                                                    className={`accordion ${activeIndex === index ? 'active-card' : ''}`} 
                                                    onClick={() => toggleAccordion(index)}
                                                >
                                                    <img src={NatifactionImage} style={{ height: '30px' }} />&nbsp;{category.course}
                                                    <span className="symbol">{activeIndex === index ? "▲" : "▼"}</span>
                                                </button>

                                                {/* Notification List */}
                                                <div className="panel" style={{ display: activeIndex === index ? "block" : "none" }}>
                                                    <table style={{ width: "100%" }}>
                                                        <thead>
                                                            <tr>
                                                                <th style={{ textAlign: "center" }}>Notification's</th>
                                                                <th style={{ textAlign: "center", width: "10%" }}>Document</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {category.notifications.map((item, idx) => (
                                                                <tr key={idx}>
                                                                    <td>
                                                                        <img src={idx === 0 ? NotificationAlert : NatifactionIcon} style={{ height: "20px" }} />
                                                                        &nbsp;{item.notification_name}
                                                                    </td>
                                                                    <td className="namehover">
                                                                        <a href={`${backendUrl}examination_notification/${item.attachment}`} target="_blank" rel="noopener noreferrer">View</a>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    <br />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ScrollToTop />
                </div>
            </div>
            <FooterTwo />
        </>
    );
};

export default Notification;
