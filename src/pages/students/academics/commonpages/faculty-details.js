import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './loading.gif';
import Profile from './man.png';
import { IoIosMail } from "react-icons/io";


const backendUrl = process.env.REACT_APP_DATABASEURL;

const FacultyDetails = ({ department }) => {
    const [professor, setProfessor] = useState(null);

    useEffect(() => {
        const fetchProfessorData = async () => {
            try {
                const response = await axios.get(`${backendUrl}api/Department_name/${department}`);
                setProfessor(response.data["staffDetails"]);
            } catch (error) {
                console.error('Error fetching professor data:', error);
            }
        };

        fetchProfessorData();
    }, [department]);

    if (!professor) {
        return (
            <div><center><img src={Loading} alt="Loading..." /></center></div>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="staff-container">
                    {professor.map((item, index) => (
                        <div
                            key={item.ID}
                            className={`staff-card ${index % 2 === 0 ? 'cardbleft' : 'cardbright'}`}
                        >
                            {item.Photo ? (
                                <img src={`${backendUrl}staff_photos/${item.Photo}`} className="staff-image" alt={item.Name} />
                            ) : (
                                <img src={Profile} className="staff-image" alt="Default Profile" />
                            )}
                            <div className="staff-detail-card">
                                <span className="staff-name">{item.Name}</span>
                                <p>{item.Qualification}</p>
                                <p className="staff-role">{item.Designation}</p>
                                {item.email ? (
                                <p className="staff-role" style={{fontSize: "13px",fontWeight: "600"}}><IoIosMail style={{color: "#0c6ab0"}} /> : {item.email}</p>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <br/>
            <br/>
        </div>
    );
};

export default FacultyDetails;
