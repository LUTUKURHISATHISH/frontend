import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import point from '../../../assets/images/icons/image.png';
import SideManu from './sidebar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Banner from '../images/banners/ala_events.webp';
import axios from 'axios';
const AdvancedAppliation = () => {
    const backendUrl = process.env.REACT_APP_DATABASEURL;
    let tab1 = "Completed Events",
        tab2 = "Ongoing Event",
        tab3 = "Upcoming Event"
    const tabStyle = 'nav nav-tabs';
    const [selectedIndex, setSelectedIndex] = useState(2);

   const nodata = "Currently No Event Scheduled"

  const [ongoingEvent, setongoingEvent] = useState([]);
  const [upcomingEvent, setupcomingEvent] = useState([]);
  const [completedEvent, setcompletedEvent] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

    useEffect(() => {
        const fetcheventData = async () => {
            setLoading(true);
            setError("")
            try {
                const response = await axios.get(`${backendUrl}api/get-events`);
                const rec = response.data.event_data;

                const today = new Date().toISOString().split("T")[0];

                const todayList = [];
                const upcomingList = [];
                const completedList = [];

                rec.forEach((item) => {
                     const eventDate = item.event_end_date;
                     const eventStDate = item.event_start_date;
 
                    if (eventStDate <= today && today <= eventDate ) {
                        todayList.push(item);
                        console.log(todayList);
                    } else if (eventStDate > today) {
                        upcomingList.push(item);
                    } else if (eventDate < today) {
                        completedList.push(item);
                    }
                });
                setongoingEvent(todayList)
                setupcomingEvent(upcomingList)
                setcompletedEvent(completedList)
            } catch (error) {
                console.log("Error msg diaplay", error);
            }
        }
        fetcheventData()
    }, [])

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8); 
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = completedEvent.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(completedEvent.length / itemsPerPage);
     const handlePageChange = (page) => {
    setCurrentPage(page);
  };

    return (
        <>
            <Header
                parentMenu='adityalearning'
                menuCategoryEnable='enable'
            />
            <div className="back__course__page_grid react-courses__single-page pb---16" >
                <div class="react-wrapper background_height">
                    <div class="react-wrapper-inner background_image">
                        <div className="react-breadcrumbs">
                            <div className="breadcrumbs-wrap">
                                <img className="desktop" src={Banner} alt="Breadcrumbs" />
                                <img className="mobile" src={Banner} alt="Breadcrumbs" />
                                <div className="breadcrumbs-inner">
                                    <div className="container">
                                        <div className="breadcrumbs-text">
                                            <h1 className="breadcrumbs-title">Events</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="high_quality-section pt---60 pb---120">
                            <div class="container ">
                                <SideManu />
                                <div class="row m-0">
                                    <div class="col-md-12  col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                        <br />
                                        <Tabs selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
                                            <div className="course-single-tab">
                                                <TabList className={tabStyle} >
                                                    <Tab className='col-md-4'><button>{tab1}</button></Tab>
                                                    <Tab className='col-md-4'><button>{tab2}</button></Tab>
                                                    <Tab className='col-md-4'><button>{tab3}</button></Tab>
                                                </TabList>

                                                <TabPanel>
                                                    <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Completed Events</san> </b><br />
                                                    <div class="degree-list-container">
                                                  
                                                    <ul class="degree-list">
                                                       {currentItems.map((data, index) =>(
                                                            <li><span class="icon">{indexOfFirstItem + index+1}.</span> {data.event_description}</li>
                                                        ))}
                                                    </ul>
                                                        <>
                                                            {totalPages.length !== 0 && (
                                                                <>
                                                                    <ul class="pagination pagination-sm justify-content-end my-3">
                                                                        <li class="page-item" onClick={() => handlePageChange(currentPage - 1)} disabled={indexOfFirstItem === 0} ><button class="page-link" disabled={indexOfFirstItem === 0} onClick={(e) => { e.preventDefault(); }}>Prev</button></li>
                                                                        {
                                                                            Array(totalPages).fill(null).map((page, index) => (
                                                                                <li class="page-item" key={index + 1} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                                                                                    <button class="page-link" onClick={(e) => { e.preventDefault(); }}>{index + 1}</button>
                                                                                </li>
                                                                            ))}

                                                                        <li class="page-item" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}><button class="page-link" onClick={(e) => { e.preventDefault(); }}>Next</button></li>
                                                                    </ul>
                                                                </>
                                                            )}
                                                        </>
                                                    </div>
                                                </TabPanel>


                                                <TabPanel>
                                                    <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Ongoing Event</san> </b><br />
                                                    <div class="degree-list-container">
                                                        {
                                                            ongoingEvent.length > 0 ? (
                                                                <>
                                                                    <ul class="degree-list">
                                                                        {
                                                                            ongoingEvent.map((data, index) => (
                                                                                <>
                                                                                    {
                                                                                        data.attachment ? (
                                                                                            <li><span class="icon">{index + 1}.</span> <Link to={`${backendUrl}/events_info/${data.attachment}`} target='_blank'>{data.event_description}</Link></li>
                                                                                        ) : (<li><span class="icon">{index + 1}.</span> {data.event_description}</li>)
                                                                                    }</>
                                                                            ))}
                                                                    </ul>
                                                                </>
                                                            ) : (<div className='col-12 text-center py-5'><span className='text-danger'>{nodata}</span></div>)
                                                        }
                                                       
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}><san className="hedingname_orange">Upcoming Event</san> </b><br />
                                                    <div class="degree-list-container">
                                                        {
                                                            upcomingEvent.length > 0 ? (
                                                                <>
                                                                    <ul class="degree-list">
                                                                        {upcomingEvent.map((data, index) => (
                                                                            <>
                                                                                {
                                                                                    data.attachment ? (
                                                                                        <li><span class="icon">{index + 1}.</span> <Link to={`${backendUrl}/events_info/${data.attachment}`} target='_blank'>{data.event_description}</Link></li>
                                                                                    ) : (<li><span class="icon">{index + 1}.</span> {data.event_description}</li>)
                                                                                }</>
                                                                        ))}
                                                                    </ul>
                                                                </>
                                                            ) : (<div className='col-12 text-center py-5'><span className='text-danger'>{nodata}</span></div>)
                                                        }
                                                    </div>
                                                </TabPanel>
                                            </div>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ScrollToTop />
                    </div>
                </div>
            </div>
            <FooterTwo />
        </>
    );
}

export default AdvancedAppliation;