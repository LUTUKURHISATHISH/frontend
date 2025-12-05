import React from 'react';
// import { Link } from 'react-router-dom';
import point from '../../../assets/images/icons/image.png';

const Hostelfacilities = () => {
    return (
        <div class=" about3__area p-relative pb---60" style={{ marginTop: "50px" }}>
            <div class="container bg_color">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="about__content">
                            <b class="about__title wow animate__fadeInUp headingcolor" data-wow-duration="0.5s" style={{ fontSize: "20px" }}>Hostel Facilities : </b><br />
                            <div class="degree-list-container">
                                <ul class="degree-list">
                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span> Hostel Fee: 100000/- per year for Non-AC Accommodation & 110000/- per year for AC Accommodation (Includes Laundry expenses & Medical Insurance coverage of 200000/-). </span> </li>
                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span> For all type of rooms, Electric power charges to be paid as per individual consumption.</span> </li>
                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span> Rooms are allotted on First-Come-First serve basis and subject to availability.    </span> </li>
                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span> Round the Clock (24*7) Ambulance Facility.</span> </li>
                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span> AC & non-AC 3-Sharing Accommodation with attached Bath & Balcony.</span> </li>
                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span> 24*7 CCTV Surveillance. </span> </li>
                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span> Uninterrupted Power Supply.</span> </li>
                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span> Women Security in Women's Hostels.</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hostelfacilities;