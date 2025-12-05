import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import './grievance.css';
import { useParams } from 'react-router-dom';
// import Track_status from './track-status';
import Banner from '../../images/banners/grievance.webp';
import Ombudsman_profile from './images/ombudsman_profile.webp';


// const backendUrl = process.env.REACT_APP_DATABASEURL;
const backendUrl = 'https://adityauniversity.in:4001/api';

const GrievanceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    roll_number: '',
    email: '',
    mobile_number: '',
    user_grievance_msg: '',
    category: '',
    status: '',
    grievance_msg: '',
    grievance_status: '',
    track_id: '',
    otp: '', // Store OTP entered by user
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [otpSent, setOtpSent] = useState(false); // Flag to check if OTP has been sent
  const [otpVerified, setOtpVerified] = useState(false); // Flag to check if OTP has been verified
  const [generatedOtp, setGeneratedOtp] = useState(null); // Store generated OTP
  const [formErrors, setFormErrors] = useState({}); // To track form validation errors
  const { parameterId } = useParams();

  useEffect(() => {
    let timer;

    if (error || successMessage) {
      timer = setTimeout(() => {
        setError(null);
        setSuccessMessage(null);
      }, 600000); // Clear message after 1 minute (60,000 milliseconds)
    }

    return () => clearTimeout(timer); // Cleanup timer on component unmount or state change
  }, [error, successMessage]);

  // Handle input change
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile_number") {
      if (/^\d*$/.test(value) && value.length <= 10) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === "roll_number") {
      if (value.length <= 15) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === "name") {
      if (value.length <= 30) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  // Validate form fields
  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.roll_number) errors.roll_number = "Please fill out this field";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.mobile_number) errors.mobile_number = "Mobile number is required";
    if (!formData.user_grievance_msg) errors.user_grievance_msg = "Grievance message is required";
    return errors;
  };

  const generateTrackId = () => {
    const timestamp = new Date().getTime(); // Current timestamp in milliseconds
    const random = Math.floor(Math.random() * 1000); // Random number between 0 and 999
    return `${timestamp}${random}`;
  };

  // Generate OTP function
  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit OTP
  };

  const sendOtp = async () => {
    const validationErrors = validateForm();

    // Mobile number validation
    if (!/^\d{10}$/.test(formData.mobile_number)) {
      validationErrors.mobile_number = "Please enter a valid 10-digit mobile number.";
    }
    // A basic regex for validating email format
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email.";  // Adjusted field name for clarity
    }


    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return; // Don't proceed if validation fails
    }

    setLoading(true);
    setError(null);
    const otp = generateOtp(); // Generate OTP
    setGeneratedOtp(otp); // Store the generated OTP

    try {
      const response = await axios.post(`${backendUrl}/send_otp`, {
        mobile_number: formData.mobile_number,
        name: formData.name,
        otp: otp,
      });

      if (response.status === 200) {
        setOtpSent(true);
        setSuccessMessage('OTP sent successfully!');
      }
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP function
  const verifyOtp = () => {
    if (formData.otp === String(generatedOtp)) {
      setOtpVerified(true);
      setSuccessMessage('OTP verified successfully!');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };


  // Submit the form after OTP verification
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    if (!otpVerified) {
      setError('Please verify the OTP first.');
      setLoading(false);
      return;
    }

    // Generate unique track ID
    const trackId = generateTrackId();

    const testPayload = {
      name: formData.name,
      roll_number: formData.roll_number,
      email: formData.email,
      mobile_number: formData.mobile_number,
      user_grievance_msg: formData.user_grievance_msg,
      category: parameterId,
      status: 'Pending',
      grievance_msg: '',
      grievance_status: '0',
      track_id: trackId,
    };

     try {
      const response = await axios.post(`${backendUrl}/add_grievances`,
        testPayload,
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 201) {
        const serverTrackId = response.data.trackId || trackId;
        setSuccessMessage(`Your grievance has been submitted successfully! Track ID: ${serverTrackId}`);
        setFormData({
          name: '',
          roll_number: '',
          email: '',
          mobile_number: '',
          user_grievance_msg: '',
          category: parameterId,
          status: 'Pending',
          grievance_msg: '',
          grievance_status: '0',
          track_id: '',
          otp: '',
        });
        setOtpSent(false); // Reset OTP state
        setOtpVerified(false); // Reset OTP verification
      } else {
        setError('Failed to submit grievance. Please try again.');
      }
    } catch (err) {
      setError('There was an error submitting your grievance. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header
        parentMenu="credentials"
        menuCategoryEnable="enable"
      />
      <div className="react-wrapper background_height">
        <div className="react-wrapper-inner background_image">
          {/* <AboutBreadcrumb pageTitle={parameterId} /> */}
          <div className="react-breadcrumbs">
            <div className="breadcrumbs-wrap">
              <img className="desktop" src={Banner} alt="Breadcrumbs" />
              <img className="mobile" src={Banner} alt="Breadcrumbs" />
              <div className="breadcrumbs-inner">
                <div className="container">
                  <div className="breadcrumbs-text">
                    <h1 className="breadcrumbs-title">{parameterId}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <br />
            {parameterId === 'Ombudsman Grievance' && (
              <div className="modal-content mx-auto p-4" style={{ maxWidth: "600px" }}>
                <div
                  className="modal-body d-flex flex-column flex-md-row align-items-center bg-light rounded p-3"
                  style={{ backgroundColor: "#dce9f2" }}
                >
                  <div className="text-center text-md-start mb-3 mb-md-0 me-md-3">
                    <img
                      src={Ombudsman_profile}
                      alt="Ombudsman"
                      style={{ width: "100px", height: "100px", borderRadius: "5%" }}
                    />
                  </div>
                  <div className="text-center text-md-start">
                    <h5 className="fw-bold mb-2">Prof. Dr. K. Mallikarjuna Rao</h5>
                    <p className="mb-1">Retired Professor, Dept of ME,JNTUK, Kakinada</p>
                    <p className="mb-0">
                      <strong>Email:</strong>{" "}
                      <a href="mailto:ombudsman@adityauniversity.in">ombudsman@adityauniversity.in</a>
                    </p>
                  </div>
                </div>
              </div>
            )}
            <br />
            <div className="container">
              <div className="form-box">
                <div className="row">
                  <div className="col-lg-12 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                      <div className="card_body_1 bg-light">
                        <div className="container">
                          <form id="contact-form" role="form" onSubmit={handleSubmit}>
                            <div className="controls">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="form_name">Name *</label>
                                    <input
                                      id="form_name"
                                      type="text"
                                      name="name"
                                      className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                                      pattern="[a-zA-Z. ]*"
                                      maxLength="50"
                                      placeholder="Please enter your name *"
                                      value={formData.name}
                                      onChange={(e) => {
                                        let inputValue = e.target.value;
                                        inputValue = inputValue.replace(/^\s+/, "").replace(/\.{2,}/g, ".").replace(/\s{2,}/g, " ");
                                        if (/^[a-zA-Z. ]*$/.test(inputValue)) {
                                          setFormData({ ...formData, name: inputValue });
                                          // Clear error when valid input is detected
                                          if (formErrors.name) {
                                            setFormErrors({ ...formErrors, name: '' });
                                          }
                                        }
                                      }}
                                      disabled={otpSent}
                                      readOnly={otpSent}
                                      onKeyDown={(e) => {
                                        if (!/^[a-zA-Z.]$/.test(e.key) &&
                                          e.key !== " " &&
                                          e.key !== "Backspace" &&
                                          e.key !== "Delete" &&
                                          e.key !== "ArrowLeft" &&
                                          e.key !== "ArrowRight") {
                                          e.preventDefault();
                                        }
                                      }}
                                    />
                                    {formErrors.name && <div className="error errorcolor">{formErrors.name}</div>}
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="form_roll_number">
                                      {parameterId === 'Faculty Grievances' ? 'Faculty ID *' : 'Roll Number *' && parameterId === 'Ombudsman Grievance' ? 'Faculty / Student *' : 'Roll Number *'}
                                    </label>
                                    <input
                                      id="form_roll_number"
                                      type="text"
                                      name="roll_number"
                                      className={`form-control ${formErrors.roll_number ? 'is-invalid' : ''}`}
                                      placeholder={
                                        parameterId === 'Faculty Grievances'
                                          ? 'Please enter your Faculty ID *'
                                          : 'Please enter your Roll Number*' && parameterId === 'Ombudsman Grievance'
                                            ? 'Please enter your Faculty / Student ID*'
                                            : 'Please enter your Roll Number *'

                                      }
                                      value={formData.roll_number}
                                      onChange={(e) => {
                                        handleChange(e);
                                        // Clear error when input changes
                                        if (formErrors.roll_number) {
                                          setFormErrors({ ...formErrors, roll_number: '' });
                                        }
                                      }}
                                      disabled={otpSent}
                                    />
                                    {formErrors.roll_number && (
                                      <div className="error errorcolor">{formErrors.roll_number}</div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <br />
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="form_email">Email *</label>
                                    <input
                                      id="form_email"
                                      type="email"
                                      name="email"
                                      className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                                      placeholder="Please enter your email *"
                                      value={formData.email}
                                      onChange={(e) => {
                                        handleChange(e);
                                        // Clear error when input changes
                                        if (formErrors.email) {
                                          setFormErrors({ ...formErrors, email: '' });
                                        }
                                      }}
                                      disabled={otpSent}
                                    />
                                    {formErrors.email && <div className="error errorcolor">{formErrors.email}</div>}
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label htmlFor="form_mobile_number">Mobile No: *</label>
                                    <input
                                      id="form_mobile_number"
                                      type="tel"
                                      name="mobile_number"
                                      className={`form-control ${formErrors.mobile_number ? 'is-invalid' : ''}`}
                                      placeholder="Please enter your mobile number *"
                                      value={formData.mobile_number}
                                      onChange={(e) => {
                                        handleChange(e);
                                        // Clear error when input changes
                                        if (formErrors.mobile_number) {
                                          setFormErrors({ ...formErrors, mobile_number: '' });
                                        }
                                      }}
                                      disabled={otpSent}
                                      pattern="^\d{10}$"
                                      title="Please enter a valid 10-digit mobile number."
                                    />
                                    {formErrors.mobile_number && <div className="error errorcolor">{formErrors.mobile_number}</div>}
                                  </div>
                                </div>
                              </div>
                              <br />
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label htmlFor="form_message">{parameterId === 'Anti Ragging' ? 'Complaints *' : 'Grievance *'}</label>
                                    <textarea
                                      id="form_message"
                                      name="user_grievance_msg"
                                      className={`form-control custom-textarea ${formErrors.user_grievance_msg ? 'is-invalid' : ''}`}
                                      placeholder="Write your message here."
                                      rows="6"
                                      value={formData.user_grievance_msg}
                                      onChange={(e) => {
                                        handleChange(e);
                                        // Clear error when input changes
                                        if (formErrors.user_grievance_msg) {
                                          setFormErrors({ ...formErrors, user_grievance_msg: '' });
                                        }
                                      }}
                                      disabled={otpSent}
                                    />
                                    {formErrors.user_grievance_msg && <div className="error errorcolor">{formErrors.user_grievance_msg}</div>}
                                  </div>
                                </div>
                              </div>
                              {/* <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label htmlFor="form_message">{parameterId === 'Anti Ragging' ? 'Complaints *' : 'Grievance *'}</label>

                                    <div
                                      id="form_message"
                                      className={`form-control ${formErrors.user_grievance_msg ? 'is-invalid' : ''}`}
                                      style={{
                                        height: '150px',
                                        minHeight: '150px',
                                        maxHeight: '150px',
                                        overflowY: 'auto',
                                        padding: '10px',
                                        whiteSpace: 'pre-wrap',
                                        wordWrap: 'break-word',
                                        backgroundColor: otpSent ? '#e9ecef' : '#fff',
                                        border: formErrors.user_grievance_msg ? '1px solid #dc3545' : '1px solid #ced4da',
                                        borderRadius: '4px',
                                        lineHeight: '1.5',
                                        resize: 'vertical'
                                      }}
                                      contentEditable={!otpSent}
                                      onInput={(e) => {
                                        const value = e.currentTarget.textContent || '';
                                        setFormData({ ...formData, user_grievance_msg: value });
                                        if (formErrors.user_grievance_msg) {
                                          setFormErrors({ ...formErrors, user_grievance_msg: '' });
                                        }
                                      }}
                                      dangerouslySetInnerHTML={{ __html: formData.user_grievance_msg }}
                                    />
                                    {formErrors.user_grievance_msg && (
                                      <div style={{ color: '#dc3545', fontSize: '80%', marginTop: '5px' }}>
                                        {formErrors.user_grievance_msg}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div> */}
                              <br />
                              {/* OTP Verification Section */}
                              {!otpSent ? (
                                <center>
                                  <button
                                    type="button"
                                    className="btn"
                                    onClick={sendOtp}
                                    disabled={loading}
                                    style={{ backgroundColor: '#f05819', color: '#fff' }}
                                  >
                                    {loading ? 'Sending OTP...' : 'Verify'}
                                  </button>
                                </center>
                              ) : (
                                <>
                                  <div className="form-group col-md-6">
                                    <label htmlFor="otp">Enter OTP *</label>
                                    <input
                                      id="otp"
                                      type="text"
                                      name="otp"
                                      className={`form-control ${formErrors.otp ? 'is-invalid' : ''}`}
                                      placeholder="Enter the OTP sent to your mobile"
                                      value={formData.otp}
                                      onChange={(e) => {
                                        handleChange(e);
                                        // Clear error when input changes
                                        if (formErrors.otp) {
                                          setFormErrors({ ...formErrors, otp: '' });
                                        }
                                      }}
                                      required
                                      disabled={otpVerified}
                                    />
                                    {formErrors.otp && <div className="error errorcolor">{formErrors.otp}</div>}
                                  </div>
                                  <br />
                                  {!otpVerified && (
                                    <button
                                      type="button"
                                      onClick={verifyOtp}
                                      className="btn"
                                      disabled={loading}
                                      style={{ backgroundColor: '#f05819', color: '#fff' }}
                                    >
                                      Verify OTP
                                    </button>
                                  )}
                                </>
                              )}

                              {/* Submit Button */}
                              &nbsp;&nbsp;&nbsp;&nbsp;
                              {otpVerified && (
                                <button
                                  type="submit"
                                  className="btn btn-success"
                                  disabled={loading}
                                >
                                  {loading ? 'Submitting...' : 'Submit'}
                                </button>
                              )}
                            </div>
                          </form>

                          {error && <div className="alert alert-danger"><br /> {error}</div>}
                          {successMessage && <div className="alert alert-success">{successMessage}</div>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            {/* <Track_status /> */}
            <br />
          </div>
        </div>
      </div>
      <FooterTwo />
    </>
  );
};

export default GrievanceForm;