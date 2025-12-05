import React from 'react';


import infoImg1 from '../../assets/images/contact/2.png'
import infoImg2 from '../../assets/images/contact/3.png'
import infoImg3 from '../../assets/images/contact/4.png'

const ContactInfo = (props) => {
    const { contactBoxClass } = props;
    return (
        <ul className="address-sec">
            <li>
                <em className="icon"><img src={infoImg1} alt="image"  style={{maxWidth:'none'}}/></em>
                <span className="text"><em>Address</em> Aditya Nagar, ADB Road, Surampalem -Pin:533437
                <br/> Kakinada District, Andhra Pradesh, India </span>
            </li>
            <li>
                <em className="icon"><img src={infoImg2} alt="image" /></em>
                <span className="text"><em>Contact</em> <a href="#">Mobile: 9989 77666 1</a> <a href="#">Mail: info@adityauniversity.in</a></span>
            </li>
            <li>
                <em className="icon"><img src={infoImg3} alt="image" /></em>
                <span className="text"><em>Hours of operation </em> Monday - Saturday <br/> 09:00 AM - 06:00 PM</span>
                  {/* <br/>Sunday: 10:30 AM - 5:00 PM */}
            </li>
        </ul>
    );

}

export default ContactInfo;