import React, { useState } from "react";
import "./tracking.css";
import AULOGO from "./au.png";
const backendUrl = process.env.REACT_APP_DATABASEURL;


const TrackingForm = () => {
    const [trackingId, setTrackingId] = useState(""); // State for tracking ID input
    const [profileData, setProfileData] = useState(null); // State for fetched profile data
    const [error, setError] = useState(""); // State for errors

    const handleTrack = async () => {
        if (!trackingId) {
            setError("Please enter a tracking ID.");
            return;
        }

        try {
            setError(""); // Clear previous errors
            const response = await fetch(
                `${backendUrl}api/track_id/${trackingId}` // Replace with your API endpoint
            );

            if (!response.ok) {
                throw new Error("Failed to fetch data. Please try again.");
            }

            const data = await response.json();
            setProfileData(data); // Update profile data with fetched data
        } catch (err) {
            setError(err.message || "An error occurred. Please try again.");
            setProfileData(null); // Clear profile data in case of an error
        }
    };

    // Function to get status color based on value
    const getStatusColor = (status) => {
        if (status === "Pending") return "#D2093C";
        if (status === "Processing") return "#fd7e14";
        if (status === "Completed") return "#198754";
        return "black"; // Default color for unexpected statuses
    };

    return (
        <div className="container">
            <div className="tracking-container">
                <div className="tracking-form">
                    <label htmlFor="trackingId" className="tracking-label">
                        Track Your Status :
                    </label>
                    <input
                        type="text"
                        id="trackingId"
                        className="tracking-input"
                        placeholder="Enter Your Tracking Id"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                    />
                    &nbsp;&nbsp;
                    <button className="tracking-button" onClick={handleTrack}>
                        TRACK
                    </button>
                    {error && <p className="error">{error}</p>}
                </div>
            </div>

            {/* Profile Card */}
            {profileData && (
                <div className="profile-card">
                    <div className="profile-image">
                        <img src={AULOGO} alt="Profile" style={{ marginTop: "66px" }} />
                    </div>
                    <div className="profile-details">
                        <h2 className="m_title">{profileData.name}</h2>
                        <p>
                            <strong>Email:</strong> {profileData.email}
                        </p>
                        <p>
                            <strong>Roll Number:</strong> {profileData.roll_number}
                        </p>
                        <p>
                            <strong>Mobile No:</strong> {profileData.mobile_number}
                        </p>
                        <p>
                            <strong>Grievance:</strong> {profileData.user_grievance_msg}
                        </p>
                        <p>
                            <strong>Status:</strong>{" "}
                            <span
                                style={{
                                    color: getStatusColor(profileData.status),
                                    fontWeight: "bold",
                                }}
                            >
                                {profileData.status}
                            </span>
                        </p>
                        {profileData.status === "Completed" && (
                            <p className="m_title">
                                <strong>Response:</strong> {profileData.grievance_msg}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TrackingForm;
