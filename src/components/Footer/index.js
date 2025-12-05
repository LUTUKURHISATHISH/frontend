import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Email from './images/email.png';
import Contact from './images/contact.png';
import Location from './images/location.png';
import Thub from './images/newlogo_thub.webp';
import Act_statue from './images/act_statue.pdf';
import Public_self_disclosure from './images/public_self_disclosure.pdf';


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXTwitter,faWhatsapp} from  "@fortawesome/free-brands-svg-icons";

import "./footer.css";
const backendUrl = process.env.REACT_APP_DATABASEURL;
const Footer = (props) => {
    const { footerLogo, footerClass } = props;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile_number: "",
        otp: "",
    });

    const [errors, setErrors] = useState({});
    const [otpSent, setOtpSent] = useState(false);
    const [generatedOtp, setGeneratedOtp] = useState("");
    const [otpVerified, setOtpVerified] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate form fields
    const validateForm = () => {
        let errors = {};
        if (!formData.name.trim()) {
            errors.name = "Full Name is required";
        }
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            errors.email = "Enter a valid email";
        }
        if (!formData.mobile_number.match(/^[6-9]\d{9}$/)) {
            errors.mobile_number = "Enter a valid 10-digit mobile number";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Send OTP API Call
    const sendOtp = async () => {
        if (!formData.mobile_number.match(/^[6-9]\d{9}$/)) {
            setErrors({ mobile_number: "Enter a valid 10-digit mobile_number number" });
            return;
        }

        try {
            setLoading(true);
            const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate OTP
            setGeneratedOtp(otp);

            const response = await axios.post(`${backendUrl}api/send_otp`, {
                mobile_number: formData.mobile_number,
                name: formData.name,
                otp: otp,
            });

            if (response.status === 200) {
                setOtpSent(true);
                setMessage("OTP sent successfully!");
                // alert(`OTP Sent: ${otp}`); 
            }
        } catch (error) {
            setMessage("Failed to send OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Verify OTP
    const verifyOtp = () => {
        if (formData.otp === generatedOtp) {
            setOtpVerified(true);
            setMessage("OTP verified successfully!");
        } else {
            setErrors({ otp: "Invalid OTP. Please try again." });
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        if (!otpSent) {
            await sendOtp();
            return;
        }

        if (formData.otp !== generatedOtp) {
            setErrors({ otp: "Invalid OTP. Please try again." });
            return;
        }

        // Prepare data for API submission
        const regData = {
            name: formData.name,
            email: formData.email,
            mobile_number: formData.mobile_number,
        };

        try {
            setLoading(true);
            const response = await axios.post(`${backendUrl}api/add_Enquiry_user`,
                regData,
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.status === 201) {
                setMessage("Registration Successful!");
                setTimeout(() => {
                    setMessage("");
                }, 10000);
                setFormData({ name: "", email: "", mobile_number: "", otp: "" });
                setOtpSent(false);
                setOtpVerified(false);
                setErrors({});
            } else {
                setMessage("Failed to submit . Please try again.");
            }
        } catch (err) {
            setMessage("There was an error submitting . Please try again later.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div className='container-fluid'>
                <div className='row mt-5'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-8'>
                        <div className='card bg-white card_with' style={{ position: "relative", marginBottom: "-225px", zIndex: "10" }}>
                            <div className='card-body card-body-footer laptop_1024'>
                                <div className="container">
                                    <div className="row g-4 d-flex mobile_width align-items-stretch">
                                        {/* Contact Box */}
                                        <div className="col-md-6 d-flex">
                                            <div className="contact-box w-100 p-4 text-white rounded d-flex flex-column">
                                                <h3>Get in touch for any questions</h3>
                                                <div className="contact-info d-flex align-items-center gap-3 mt-3">
                                                    <a
                                                        href="https://www.google.com/maps?q=Aditya+University+Andhra+Pradesh"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{ color: "#fff" }}
                                                    > <img src={Location} className="location" alt="Location"/></a>
                                                    <div>
                                                        <strong>Address</strong><br />
                                                        <a
                                                            href="https://www.google.com/maps?q=Aditya+University+Andhra+Pradesh"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            style={{ color: "#fff" }}
                                                        >   Aditya Nagar, ADB Road, Surampalem. Pin:533437<br />
                                                            Kakinada District, Andhra Pradesh, INDIA.</a>
                                                    </div>
                                                </div>
                                                <div className="contact-info d-flex align-items-center gap-3 mt-3">
                                                    <a href="tel:+919989776661" target="_blank" style={{ color: "#fff" }}><img src={Contact} alt="Contact" /></a>
                                                    <div>
                                                        <strong>Contact Us</strong><br />
                                                        <a href="tel:+919989776661" target="_blank" style={{ color: "#fff" }}>+91 9989 776661</a>
                                                    </div>
                                                </div>
                                                <div className="contact-info d-flex align-items-center gap-3 mt-3">
                                                    <a href="mailto:info@adityauniversity.in" target="_blank" style={{ color: "#fff" }}><img src={Email} alt="Email" /></a>
                                                    <div>
                                                        <strong>E-Mail Us</strong><br />
                                                        <a href="mailto:info@adityauniversity.in" target="_blank" style={{ color: "#fff" }}>info@adityauniversity.in</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Form Box */}
                                        <div className="col-md-6 d-flex">
                                            <div style={{ padding: "40px" }} className="form-box w-100 bg-white rounded shadow d-flex flex-column">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="mb-3">
                                                        <label className="form-label">Name</label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            className="form-control"
                                                            pattern="[a-zA-Z. ]*"
                                                            maxLength="50"
                                                            value={formData.name}
                                                            onChange={(e) => {
                                                                let inputValue = e.target.value;

                                                                if (inputValue.length === 0) {
                                                                    inputValue = " ";
                                                                } else {
                                                                    inputValue = inputValue.replace(/\s{3,}/g, "  ");
                                                                }

                                                                if (/^[a-zA-Z. ]*$/.test(inputValue)) {
                                                                    setFormData({ ...formData, name: inputValue });

                                                                    // Minimum length validation
                                                                    if (inputValue.trim().length < 3) {
                                                                        setErrors({ ...errors, name: "Name must be at least 3 characters" });
                                                                    } else {
                                                                        setErrors({ ...errors, name: "" });
                                                                    }
                                                                }
                                                            }}
                                                            readOnly={otpSent}
                                                            onKeyDown={(e) => {
                                                                if (!/^[a-zA-Z. ]$/.test(e.key) &&
                                                                    e.key !== "Backspace" &&
                                                                    e.key !== "Delete" &&
                                                                    e.key !== "ArrowLeft" &&
                                                                    e.key !== "ArrowRight") {
                                                                    e.preventDefault();
                                                                }
                                                            }}
                                                        />

                                                        {errors.name && <small className="text-danger">{errors.name}</small>}
                                                    </div>


                                                    <div className="mb-3">
                                                        <label className="form-label">Email Address</label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            className="form-control"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            readOnly={otpSent} // Prevent editing after OTP is sent
                                                        />
                                                        {errors.email && <small className="text-danger">{errors.email}</small>}
                                                    </div>

                                                    <div className="mb-3">
                                                        <label className="form-label">Mobile Number</label>
                                                        <input
                                                            type="tel"
                                                            name="mobile_number"
                                                            className="form-control"
                                                            maxLength="10"
                                                            value={formData.mobile_number}
                                                            onChange={handleChange}
                                                            readOnly={otpSent} // Prevent editing after OTP is sent
                                                            onKeyDown={(e) => {
                                                                if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete") {
                                                                    e.preventDefault();
                                                                }
                                                            }}
                                                        />
                                                        {errors.mobile_number && <small className="text-danger">{errors.mobile_number}</small>}
                                                    </div>

                                                    {otpSent && (
                                                        <div className="mb-3">
                                                            <label className="form-label">Enter OTP</label>
                                                            <input
                                                                type="text"
                                                                name="otp"
                                                                className="form-control"
                                                                value={formData.otp}
                                                                onChange={(e) => {
                                                                    const onlyNumbers = e.target.value.replace(/\D/g, "");
                                                                    setFormData({ ...formData, otp: onlyNumbers });
                                                                }}
                                                                onKeyDown={(e) => {
                                                                    if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete") {
                                                                        e.preventDefault();
                                                                    }
                                                                }}
                                                                maxLength="6"
                                                            />
                                                            {errors.otp && <small className="text-danger">{errors.otp}</small>}
                                                        </div>

                                                    )}

                                                    <button style={{ width: "30%", backgroundColor: "#0c6ab0" }} type="submit" className="btn text-white">
                                                        {otpSent ? "Register" : "Send"}
                                                    </button>
                                                </form>
                                                {message && <p className="mt-3 text-success">{message}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2'></div>
                </div>
            </div>

            <footer id="react-footer" className={footerClass ? footerClass : 'react-footer home-main'}>
                <div className="footer-top" id="mandatory_disclosure">
                    <div className="container-fluid">
                        <div className="row">
                            <div className='col-md-2'></div>
                            <div className="col-lg-3 md-mb-30">
                                <div className="footer-widget footer-widget-2">
                                    <h3 className="footer-title">Popular Links</h3>
                                    <hr className='line_footer' />
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/overview">About US</Link></li>
                                            <li><Link to="/iqac-overview">IQAC</Link></li>
                                            <li><Link to="/opportunities-placements">Placements</Link></li>
                                            <li><Link to="/fees">Fee</Link></li>
                                            <li><Link to="https://adityauniversity.knimbus.com/portal/v2/default/home"  target="_blank">Library</Link></li>
                                            <li><Link to="https://apply.adityauniversity.in/" target="_blank">National Admissions</Link></li>
                                            <li><Link to="https://apply.adityauniversity.in/aditya-international-admission-form" target="_blank">International Admissions</Link></li>
                                            <li><Link to="https://www.google.com/maps?q=Aditya+University+Andhra+Pradesh" target="_blank">Maps and direction</Link></li>
                                            <li><Link to="/careers" target="_blank">Careers</Link></li>
                                            <li><Link to="/holidays">Holidays</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 md-mb-30">
                                <div className="footer-widget footer-widget-3">
                                    <h3 className="footer-title">Programs Offered</h3>
                                    <hr className='line_footer' />
                                    <div className="footer-menu">
                                        <ul>
                                            {/* <li><Link to="/diploma-programs">Diploma</Link></li> */}
                                            <li><Link to="/ug-programs">UG</Link></li>
                                            <li><Link to="/pg-programs">PG</Link></li>
                                            <li><Link to="/phd-programs">Ph.D</Link></li>
                                            <li><Link to="/corporate-programs">Corporate PG Diploma</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-3 md-mb-30 quick_side"> */}
                            <div className="col-lg-3 md-mb-30">
                                <div className="footer-widget footer-widget-3">
                                    <h3 className="footer-title">Mandatory Disclosure</h3>
                                    <hr className='line_footer' />
                                    <div className="footer-menu">
                                        <ul>
                                           
                                            <li><Link to={Act_statue} target="_blank">University Act & Statute</Link></li>
                                            <li><Link to="/adtppu/flash_news/UGC.pdf" target="_blank">Information to UGC under Section 13</Link></li>
                                            <li><Link to={Public_self_disclosure} target="_blank">Public Self-Disclosure </Link></li>
                                            <li><Link to="https://samadhaan.ugc.ac.in/" target="_blank">UGC e-samadhaan portal</Link></li>
                                            <li><Link to="/grievances">Grievances</Link></li>
                                            <li><Link to="/grievances/Anti%20Ragging">Anti Ragging</Link></li>
                                            <li><Link to="/internal-complaint-committee">Committees @ AUS</Link></li>
                                            <li><Link to="/infrastructure-facilities">Facilities</Link></li>
                                            <li><Link to="/gallery">Gallery</Link></li>
                                            {/* <li><Link to="/institute-development-plan.pdf" target="_blank">Institute Development Plan (IDP)</Link></li>
                                             <li><Link to="/hostel-facilities">Hostel Facilities</Link></li> */}
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-2'></div>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: "#0c6ab0", position: "relative", zIndex: "5" }} className="copyright">
                    <div className="container">
                        <div style={{ color: "white" }} className="react-copy-left">
                            <Link to="/"></Link> @ CopyRight All Rights Reserved by <b>Aditya University</b>
                        </div>
                        <div style={{ color: "white" }} className="react-copy-left">
                            <Link to="https://technicalhub.io/" target="_blank" style={{color:'#fff'}}>Powered By <img src={Thub}  style={{height:'80px'}}/></Link> 
                        </div>
                        <div className="react-copy-right">
                            <ul className="social-links">
                                <li><Link to="https://www.linkedin.com/school/adityauniversity/" target="_blank"><span aria-hidden="true" className="social_linkedin"></span></Link></li>
                                <li><Link to="https://wa.me/919989776661" target="_blank"><FontAwesomeIcon icon={faWhatsapp} className="iconhover" style={{color: "#fff",height:"28px",marginBottom:"-3px"}}/></Link></li>
                                <li><Link to="https://x.com/adityauniv" target="_blank"><FontAwesomeIcon icon={faXTwitter} className="iconhover" style={{color: "#fff"}} /></Link></li>
                                <li><Link to="https://www.instagram.com/aditya_university/" target="_blank"><span aria-hidden="true" className="social_instagram"></span></Link></li>
                                <li><Link to="https://www.youtube.com/@adityauniversity" target="_blank"><span aria-hidden="true" className="social_youtube"></span></Link></li>
                                <li><Link to="https://www.facebook.com/adityauniversity" target="_blank"><span aria-hidden="true" className="social_facebook"></span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    );

}

export default Footer;
