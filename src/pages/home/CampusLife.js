import React from 'react';
import "./home.css";
import { Link } from 'react-router-dom';
import campus1 from './images/campus_life/abhinayaclub.webp'
import campus2 from './images/campus_life/sports.webp'
import campus3 from './images/campus_life/inclusive.webp'
import campus4 from './images/campus_life/harmony.webp'
import facebook from './images/campus_life/facebook.webp'
import twitter from './images/campus_life/twitter.webp'
import instagram from './images/campus_life/instagram.webp'
const CampusLife = () => {

    return (
        <div className="container">
            <div className="pt---25 pb---60">
                <center><b className="life_at_aditya"> <span style={{ color: '#0c6ab0' }}>Campus Life</span> </b></center>
                <br />
                <div className="row card_gap">
                    <div class="club-card club_card_main">
                        <div class="social-icons">
                            <a href="https://www.facebook.com/adityauniversity/" class="icon facebook"><img className='image_events' src={facebook} /></a>
                            <a href="https://twitter.com/adityauniv" class="icon twitter"><img className='image_events' src={twitter} /></a>
                            <a href="https://www.instagram.com/aditya_university/" class="icon instagram"><img className='image_events' src={instagram} /></a>
                        </div>
                        <div class="image">
                            <img src={campus1} className="" />
                        </div>
                        <div class="title">
                            <h3 className='event_name'><Link to="/abhinaya-club" className="campuslifename">ABHINAYA CLUB </Link></h3>
                        </div>
                    </div>

                    <div class="club-card club_card_main">
                        <div class="social-icons">
                            <a href="https://www.facebook.com/adityauniversity/" class="icon facebook"><img className='image_events' src={facebook} /></a>
                            <a href="https://twitter.com/adityauniv" class="icon twitter"><img className='image_events' src={twitter} /></a>
                            <a href="https://www.instagram.com/aditya_university/" class="icon instagram"><img className='image_events' src={instagram} /></a>
                        </div>
                        <div class="image">
                            <img src={campus2} className="" />
                        </div>
                        <div class="title">
                            <h3 className='event_name'><Link to="/sports-in-action" className="campuslifename">Sports in Action </Link></h3>
                        </div>
                    </div>

                    <div class="club-card club_card_main">
                        <div class="social-icons">
                            <a href="https://www.facebook.com/adityauniversity/" class="icon facebook"><img className='image_events' src={facebook} /></a>
                            <a href="https://twitter.com/adityauniv" class="icon twitter"><img className='image_events' src={twitter} /></a>
                            <a href="https://www.instagram.com/aditya_university/" class="icon instagram"><img className='image_events' src={instagram} /></a>
                        </div>
                        <div class="image">
                            <img src={campus3} className="" />
                        </div>
                        <div class="title">
                           <h3 className='event_name'><Link to="/inclusive-ecosystem" className="campuslifename">Inclusive Ecosystem </Link></h3>
                        </div>
                    </div>

                    <div class="club-card club_card_main">
                        <div class="social-icons">
                            <a href="https://www.facebook.com/adityauniversity/" class="icon facebook"><img className='image_events' src={facebook} /></a>
                            <a href="https://twitter.com/adityauniv" class="icon twitter"><img className='image_events' src={twitter} /></a>
                            <a href="https://www.instagram.com/aditya_university/" class="icon instagram"><img className='image_events' src={instagram} /></a>
                        </div>
                        <div class="image">
                            <img src={campus4} className="" />
                        </div>
                        <div class="title">
                           <h3 className='event_name'><Link to="/spiritual-harmony" className="campuslifename">Spiritual Harmony</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CampusLife;