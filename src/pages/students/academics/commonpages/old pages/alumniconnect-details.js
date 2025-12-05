import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './loading.gif';
import Profile from './man.png';

const backendUrl = process.env.REACT_APP_DATABASEURL;

const AlumniConnectDetails = ({ department }) => {
    const [professor, setProfessor] = useState([]);

    const [AboutAlumini, setAboutAlumini] = useState([]);

    useEffect(() => {
        const fetchProfessorData = async () => {
            try {
                const [aluminiResp, aboutdataResp] = await Promise.all([axios.get(`${backendUrl}api/get-dept-alumni_by_name/${department}`), axios.get(`${backendUrl}api/get-dept-alumni/${department}`)])
                if (aluminiResp.status === 200) {
                    setProfessor(aluminiResp.data.alumni_details)
                }
                if (aboutdataResp.status === 200) {
                    setAboutAlumini(aboutdataResp.data.dept_about_alumni_data)
                }

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
        <>
            <div className='alumin__content'>
                {
                    AboutAlumini.map(item => (
                        <p key={item._id}>{item.about}</p>
                    ))
                }
            </div>
            <div className="staff-container">
                <div className="col-md-12 col-12">
                    <h4 className="hedingname_orange mb-2">Distinguished Alumni</h4>
                </div>
                {professor.map((item, index) => (
                    <div key={item.ID} className={`staff-card ${index % 2 === 0 ? 'cardbleft' : 'cardbright'}`} >
                        {item.attachment ? (
                            <img src={`${backendUrl}alumni/${item.attachment}`} className="staff-image" alt={item.student_name} />
                        ) : (
                            <img src={Profile} className="staff-image" alt="Default Profile" />
                        )}
                        <div className="staff-detail-card">
                            <span className="staff-name">{item.student_name}</span>
                            <p>{item.roll_number}</p>
                            <p className="staff-role">{item.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AlumniConnectDetails;
