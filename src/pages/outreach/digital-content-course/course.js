import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import StudyBreadcrumb from '../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../components/ScrollTop';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";

import axios from 'axios';
const Course = () => {
   const backendUrl = process.env.REACT_APP_DATABASEURL;
   const [data, setData] = useState([]);
    const [error, setError] = useState("");
   const navigate = useNavigate();
   const location = useLocation();

    useEffect(() =>{
        const getData = async () =>{
            try{
                    const response = await axios.get(`${backendUrl}api/courselist_digital_content`);
                    if(response.status === 200 &&  response.data){
                        setData(response.data);
                    }
                    else{
                        throw new Error("Unexpected API response format.");
                    }
                } catch (err) {
                console.error("Error fetching data:", err);
                setError(err.response?.data?.message || err.message || "Failed to fetch data.");
            } 
        }
        getData()
    },[]);
  return (
        <>
            <Header
                parentMenu='outreach'
                menuCategoryEnable='enable'
            />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="" />
                    <div className="high_quality-section pt---60 pb---80">
                        <div class="container" style={{ backgroundColor: "#ffff", padding: "10px" }}>
                           <h2 className="hedingname text-center mt-3 mb-0">Digital Content Course</h2>
                           <div className='row'>
                            <div className='col-12'>
                                <div className='outer-wrap'>
                                <ul className='course--list'>
                                    {
                                        data.map((item, index) =>(
                                            <li key={index}   className={location.pathname === item.path ? "active" : ""}  ><Link to ={`/topics/${item.course}`}>{item.course}</Link></li>
                                        ))
                                    }
                                </ul>
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
}

export default Course
