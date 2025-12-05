import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import FooterTwo from '../../../components/Footer/index';
import ScrollToTop from '../../../components/ScrollTop';
import SideManu from './sidebar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Banner from '../images/banners/ala_events.webp';
import axios from 'axios';
import jsPDF from 'jspdf';


const AdvancedAppliation = () => {
    const backendUrl = process.env.REACT_APP_DATABASEURL;
    const [showSuccess, setShowSuccess] = useState(false);
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

    const [showPopup, setShowPopup] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const today = new Date();

    const RandomId = () => {
        const pad = (num) => String(num).padStart(2, "0");
        const year = String(today.getFullYear()).slice(-2);
        const month = pad(today.getMonth() + 1);
        const day = pad(today.getDate());
        const hour = pad(today.getHours());
        const minute = pad(today.getMinutes());
        const second = pad(today.getSeconds());
        return `${year}${month}${day}${hour}${minute}${second}`;
    };

    const id = RandomId();
    const [formData, setFormData] = useState({
        applicationId: id,
        participantName: "",
        salutation: '',
        department: '',
        email: "",
        contactNo: "",
        whatsappNo: "",
        collegeName: "",
        collegeAddress: "",
        state: "",
        category: "",
        designation: "",
        event_amount: "",
        event_name: "",
    });

    const [paymentStatus, setPaymentStatus] = useState(null);
    // const [amount, setAmount] = useState("");
    const { event_amount } = formData;


    // Load Razorpay script dynamically
    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    // Create order on backend
    const createOrder = async (orderAmount) => {
        try {
            const response = await axios.post(`${backendUrl}/payment-events/create-order`, {
                amount: orderAmount,
                currency: 'INR',
                receipt: `receipt_${Date.now()}`,
                notes: {
                    description: 'Event Registration',
                },
            });

            const data = await response.data;
            console.log('Order creation response:', data);

            if (!data.success) {
                throw new Error(data.message || 'Failed to create order');
            }

            return data;
        } catch (error) {
            console.error('Error creating order:', error);
            throw error;
        }
    };

    // Download PDF Receipt Function
    const downloadReceipt = () => {
        if (!paymentStatus || !paymentStatus.receiptData) return;

        const { receiptData, paymentId, orderId, utr } = paymentStatus;
        const doc = new jsPDF();
        const receiptDate = new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        // Set colors
        const primaryColor = [12, 106, 176]; // #0c6ab0
        const secondaryColor = [76, 175, 80]; // #4caf50
        const textColor = [51, 51, 51];

        // Header Background
        doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.rect(0, 0, 210, 40, 'F');

        // University Name
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text('ADITYA UNIVERSITY', 105, 18, { align: 'center' });

        doc.setFontSize(14);
        doc.setFont('helvetica', 'normal');
        doc.text('Receipt', 105, 28, { align: 'center' });

        // Reset text color
        doc.setTextColor(textColor[0], textColor[1], textColor[2]);

        // Receipt Info Box
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.text(`Receipt Date: ${receiptDate}`, 20, 50);
        doc.text(`Application ID: ${receiptData.applicationId}`, 20, 56);

        // Line separator
        doc.setDrawColor(200, 200, 200);
        doc.line(20, 62, 190, 62);

        // Participant Details Section
        let yPos = 72;
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text('PARTICIPANT DETAILS', 20, yPos);

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(textColor[0], textColor[1], textColor[2]);
        yPos += 8;
        doc.text(`Name:`, 20, yPos);
        doc.text(`${receiptData.salutation}.${receiptData.participantName}`, 60, yPos);
        yPos += 6;
        doc.text(`Email:`, 20, yPos);
        doc.text(`${receiptData.email}`, 60, yPos);
        yPos += 6;
        doc.text(`Contact No:`, 20, yPos);
        doc.text(`${receiptData.contactNo}`, 60, yPos);
        yPos += 6;
        doc.text(`Whatsapp No:`, 20, yPos);
        doc.text(`${receiptData.whatsappNo}`, 60, yPos);
        yPos += 6;
        doc.text(`Department:`, 20, yPos);
        doc.text(`${receiptData.department}`, 60, yPos);
        yPos += 6;
        doc.text(`Designation:`, 20, yPos);
        doc.text(`${receiptData.designation}`, 60, yPos);
        // yPos += 6;
        // doc.text(`Category:`, 20, yPos);
        // doc.text(`${receiptData.category}`, 60, yPos);

        // Line separator
        yPos += 8;
        doc.setDrawColor(200, 200, 200);
        doc.line(20, yPos, 190, yPos);

        // Organization Details Section
        yPos += 8;
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text('ORGANIZATION DETAILS', 20, yPos);

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(textColor[0], textColor[1], textColor[2]);
        yPos += 8;
        doc.text(`College/Institute:`, 20, yPos);

        // Handle long college name
        const collegeNameLines = doc.splitTextToSize(receiptData.collegeName, 120);
        doc.text(collegeNameLines, 60, yPos);
        yPos += (collegeNameLines.length * 6);

        doc.text(`Address:`, 20, yPos);
        const addressLines = doc.splitTextToSize(receiptData.collegeAddress, 120);
        doc.text(addressLines, 60, yPos);
        yPos += (addressLines.length * 6);

        doc.text(`State:`, 20, yPos);
        doc.text(`${receiptData.state}`, 60, yPos);

        // Line separator
        yPos += 8;
        doc.setDrawColor(200, 200, 200);
        doc.line(20, yPos, 190, yPos);

        // Event Details Section
        yPos += 8;
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text('EVENT DETAILS', 20, yPos);

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(textColor[0], textColor[1], textColor[2]);
        yPos += 8;
        doc.text(`Event Name:`, 20, yPos);
        const eventNameLines = doc.splitTextToSize(receiptData.event_name, 120);
        doc.text(eventNameLines, 60, yPos);
        yPos += (eventNameLines.length * 6);

        doc.text(`Event Amount:`, 20, yPos);
        doc.setFont('helvetica', 'bold');
        doc.text(`${receiptData.event_amount}`, 60, yPos);
        doc.setFont('helvetica', 'normal');

        // Line separator
        yPos += 8;
        doc.setDrawColor(200, 200, 200);
        doc.line(20, yPos, 190, yPos);

        // Payment Details Section with highlight
        yPos += 8;
        doc.setFillColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
        doc.rect(18, yPos - 5, 174, 32, 'F');

        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(255, 255, 255);
        doc.text('PAYMENT DETAILS', 20, yPos);

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        yPos += 8;
        doc.text(`Payment Status:`, 20, yPos);
        doc.setFont('helvetica', 'bold');
        doc.text(`SUCCESS`, 60, yPos);
        doc.setFont('helvetica', 'normal');
        yPos += 6;
        doc.text(`Payment ID:`, 20, yPos);
        doc.text(`${paymentId}`, 60, yPos);
        // yPos += 6;
        // doc.text(`Order ID:`, 20, yPos);
        // doc.text(`${orderId}`, 60, yPos);
        yPos += 6;
        doc.text(`UTR ID:`, 20, yPos);
        doc.text(`${receiptData.utr}`, 60, yPos);
        yPos += 6;
        doc.text(`Amount Paid:`, 20, yPos);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.text(`${receiptData.event_amount}`, 60, yPos);
        // ₹

        // Footer
        doc.setFontSize(8);
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(100, 100, 100);
        doc.text('Thank you for registering with Aditya University!', 105, 270, { align: 'center' });
        doc.text('For queries, contact: info@adityauniversity.in | https://adityauniversity.in/', 105, 276, { align: 'center' });

        // Border
        doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.setLineWidth(0.5);
        doc.rect(10, 10, 190, 277);

        // Save PDF
        doc.save(`Receipt_${receiptData.applicationId}_${paymentId}.pdf`);
    };

    // Verify payment on backend
    const verifyPayment = async (paymentData) => {
        try {
            const response = await axios.post(`${backendUrl}/payment-events/verify-payment`, paymentData);
            const data = await response.data;
            if (data.success) {
                const payload = {
                    ...formData,
                    designation: finalDesignation,
                    department: finalDepartment,
                    event_name: selectedEvent?.event_name,
                    event_amount: selectedEvent?.event_amount,
                    whatsappLink: selectedEvent?.whatsappLink,

                    order_id: data.orderId,
                    payment_id: data.paymentId,
                    utr: data.utr,
                    payment_status: 'Success',
                };

                console.log("payload", payload);

                const registrationResponse = await axios.post(`${backendUrl}api/add-event-registrations`, payload);
                console.log("response", registrationResponse.data);

                setPaymentStatus({
                    success: true,
                    message: 'Payment successful!',
                    paymentId: data.paymentId,
                    orderId: data.orderId,
                    utr: data.utr,
                    receiptData: payload,
                });

                if (registrationResponse.data.success === true) {
                    setShowSuccess(true);
                    // alert("✅ Registration Successful! You can now download your receipt.");
                } else {
                    alert(`⚠️ Payment Success But Registration Failed! ${registrationResponse.data.message || 'Please try again.'}`);
                }
            }
            return data;
        } catch (error) {
            console.error('Error verifying payment:', error);
            throw error;
        }
    };

    // Handle payment process
    const handlePayment = async (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;



        if (!emailRegex.test(formData.email)) {
            alert("❌ Please enter a valid Email ID");
            return;
        }
        if (!phoneRegex.test(formData.contactNo)) {
            alert("❌ Please enter a valid Phone Number ");
            return;
        }

        if (!formData.collegeName || !formData.collegeAddress ||
            !formData.state || !formData.designation) {
            alert("❌ Please fill all required fields");
            return;
        }
        if (!event_amount || event_amount <= 0) {
            alert('Please enter a valid amount');
            return;
        }



        try {
            setLoading(true);
            setPaymentStatus(null);

            const scriptLoaded = await loadRazorpayScript();

            if (!scriptLoaded) {
                alert('Failed to load Razorpay SDK. Please check your internet connection.');
                setLoading(false);
                return;
            }

            const orderData = await createOrder(parseFloat(selectedEvent?.event_amount));
            // const orderData = await createOrder(parseFloat(amount));


            const options = {
                key: orderData.keyId,
                amount: orderData.order.amount,
                currency: orderData.order.currency,
                name: 'Aditya University',
                description: 'Event Payment',
                image: 'https://adityauniversity.in/admin/static/media/AU_LOGO.b5e661897c751649cf1f2978c02df938.svg',
                order_id: orderData.order.id,
                handler: async function (response) {
                    console.log('Razorpay Payment Response:', response);
                    try {
                        const verificationResult = await verifyPayment({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        });
                        console.log('Payment verification result:', verificationResult);

                        if (!verificationResult.success) {
                            console.log('Payment verification failed:', verificationResult);
                            setPaymentStatus({
                                success: false,
                                message: 'Payment verification failed!',
                            });
                        }
                    } catch (error) {
                        setPaymentStatus({
                            success: false,
                            message: 'Payment verification error!',
                        });
                    }
                    setLoading(false);
                },
                prefill: {
                    name: formData.participantName,
                    email: formData.email,
                    contact: formData.contactNo,
                },
                notes: {
                    address: formData.collegeAddress,
                },
                theme: {
                    color: '#3399cc',
                },
                modal: {
                    ondismiss: function () {
                        setLoading(false);
                        setPaymentStatus({
                            success: false,
                            message: 'Payment cancelled by user',
                        });
                    },
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.error('Payment error:', error);
            setPaymentStatus({
                success: false,
                message: error.message || 'Payment failed!',
            });
            setLoading(false);
        }
    };

    const openPopup = (eventData) => {
        setSelectedEvent(eventData);
        setFormData({
            ...formData,
            event_amount: eventData.event_amount || "",
            event_name: eventData.event_name || "",
            whatsappLink: eventData.whatsappLink || ""
        });
        setShowPopup(true);
        setPaymentStatus(null);
    };

    const closePopup = () => {
        setShowPopup(false);
        setPaymentStatus(null);
        setFormData({
            applicationId: id,
            participantName: "",
            salutation: '',
            department: '',
            email: "",
            contactNo: "",
            collegeName: "",
            collegeAddress: "",
            state: "",
            category: "",
            designation: "",
            event_amount: "",
            event_name: "",
        });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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

                    if (eventStDate <= today && today <= eventDate) {
                        todayList.push(item);
                    } else if (eventStDate > today) {
                        upcomingList.push(item);
                    } else if (eventDate < today) {
                        completedList.push(item);
                    }
                });
                setongoingEvent(todayList)
                setupcomingEvent(upcomingList)
                setcompletedEvent(completedList)
                setLoading(false);
            } catch (error) {
                console.log("Error msg display", error);
                setLoading(false);
            }
        }
        fetcheventData()
    }, [backendUrl])

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = completedEvent.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(completedEvent.length / itemsPerPage);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const finalDesignation = formData.designation === "Other" ? formData.otherDesignation : formData.designation;
    const finalDepartment = formData.department === "Other" ? formData.otherDepartment : formData.department;


    return (
        <>
            <Header
                parentMenu='adityalearning'
                menuCategoryEnable='enable'
            />
            <div className="back__course__page_grid react-courses__single-page pb---16" >
                <div className="react-wrapper background_height">
                    <div className="react-wrapper-inner background_image">
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
                            <div className="container">
                                <SideManu />
                                <div className="row m-0">
                                    <div className="col-md-12 col-sm-12 col-12 bg_color" style={{ backgroundColor: "#fff" }}>
                                        <br />
                                        <Tabs selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
                                            <div className="course-single-tab">
                                                <TabList className={tabStyle}>
                                                    <Tab className='col-md-4'><button>{tab1}</button></Tab>
                                                    <Tab className='col-md-4'><button>{tab2}</button></Tab>
                                                    <Tab className='col-md-4'><button>{tab3}</button></Tab>
                                                </TabList>

                                                <TabPanel>
                                                    <b className="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}>
                                                        <span className="hedingname_orange">Completed Events</span>
                                                    </b><br />
                                                    <div className="degree-list-container">
                                                        <ul className="degree-list">
                                                            {currentItems.map((data, index) => (
                                                                <li key={index}>
                                                                    <span className="icon">{indexOfFirstItem + index + 1}.</span> {data.event_description}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        {totalPages > 0 && (
                                                            <ul className="pagination pagination-sm justify-content-end my-3">
                                                                <li className="page-item" onClick={() => handlePageChange(currentPage - 1)} style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}>
                                                                    <button className="page-link" disabled={currentPage === 1} onClick={(e) => { e.preventDefault(); }}>Prev</button>
                                                                </li>
                                                                {Array(totalPages).fill(null).map((page, index) => (
                                                                    <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index + 1} onClick={() => handlePageChange(index + 1)}>
                                                                        <button className="page-link" onClick={(e) => { e.preventDefault(); }}>{index + 1}</button>
                                                                    </li>
                                                                ))}
                                                                <li className="page-item" onClick={() => handlePageChange(currentPage + 1)} style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}>
                                                                    <button className="page-link" disabled={currentPage === totalPages} onClick={(e) => { e.preventDefault(); }}>Next</button>
                                                                </li>
                                                            </ul>
                                                        )}
                                                    </div>
                                                </TabPanel>

                                                <TabPanel>
                                                    <b className="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}>
                                                        <span className="hedingname_orange">Ongoing Event</span>
                                                    </b><br />
                                                    <div className="degree-list-container">
                                                        {ongoingEvent.length > 0 ? (
                                                            <ul className="degree-list">
                                                                {ongoingEvent.map((data, index) => (
                                                                    <li key={index}>
                                                                        <span className="icon">{index + 1}.</span>
                                                                        {data.attachment ? (
                                                                            <Link to={`${backendUrl}/events_info/${data.attachment}`} target='_blank'>
                                                                                {data.event_description}
                                                                            </Link>

                                                                        ) : (
                                                                            data.event_description
                                                                        )}
                                                                        {new Date(data.reg_end_date) >= new Date(new Date().toISOString().split("T")[0]) ? (
                                                                            <button
                                                                                className="btn animation"
                                                                                style={{ marginLeft: "10px", border: "none", cursor: "pointer" }}
                                                                                onClick={() => openPopup(data)}
                                                                            >
                                                                                Apply Now
                                                                            </button>
                                                                        ) : (
                                                                            <span className="animation" style={{ marginLeft: "10px", }} > Registration Closed</span>
                                                                        )}
                                                                    </li>
                                                                ))}

                                                            </ul>

                                                        ) : (
                                                            <div className='col-12 text-center py-5'>
                                                                <span className='text-danger'>{nodata}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </TabPanel>

                                                <TabPanel>
                                                    <b className="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}>
                                                        <span className="hedingname_orange">Upcoming Event</span>
                                                    </b><br />
                                                    <div className="degree-list-container row">
                                                        {upcomingEvent.length > 0 ? (
                                                            <ul className="degree-list">
                                                                {upcomingEvent.map((data, index) => (
                                                                    <li key={index} className="event-item">
                                                                        <span className="icon">{index + 1}.</span>
                                                                        <span className="event-text">
                                                                            {data.attachment ? (
                                                                                <Link
                                                                                    to={`${backendUrl}/events_info/${data.attachment}`}
                                                                                    target="_blank"
                                                                                    className="more-info-btn"
                                                                                >
                                                                                    {data.event_description}
                                                                                </Link>
                                                                            ) : (
                                                                                <span>{data.event_description}</span>
                                                                            )}

                                                                            {new Date(data.reg_end_date) >= new Date(new Date().toISOString().split("T")[0]) ? (
                                                                                <button
                                                                                    className="btn animation"
                                                                                    style={{ marginLeft: "10px", border: "none", cursor: "pointer" }}
                                                                                    onClick={() => openPopup(data)}
                                                                                >
                                                                                    Apply Now
                                                                                </button>
                                                                            ) : (
                                                                                <span className="animation" style={{ marginLeft: "10px", }} > Registration Closed</span>
                                                                            )}


                                                                        </span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <div className="col-12 text-center py-5">
                                                                <span className="text-danger">{nodata}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </TabPanel>
                                            </div>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {showPopup && (
                            <div className="modal-overlay">
                                <div className="modal-box">
                                    <h4 className="text-center mb-3"><b>Registration</b></h4>

                                    <form onSubmit={handlePayment} className="popup-form">
                                        <label>
                                            Name of the Participant (In Capital Letters & Same Name will be printed on the Certificate) <span className="text-danger">*</span>
                                            <input
                                                className="input"
                                                type='text'
                                                name="participantName"
                                                placeholder="Enter Name"
                                                maxLength={30} // ✅ Limit to 30 characters
                                                onChange={(e) => {
                                                    let value = e.target.value.toUpperCase(); // ✅ Convert to uppercase

                                                    // ✅ Allow only letters and spaces, and max 15 characters
                                                    if (/^[A-Z\s]*$/.test(value) && value.length <= 30) {
                                                        handleChange({
                                                            target: { name: "participantName", value },
                                                        });
                                                    }
                                                }}
                                                value={formData.participantName}
                                                required
                                            />
                                        </label>
                                        <label>
                                            Salutation <span className="text-danger">*</span>

                                            <select
                                                className="input"
                                                name="salutation"
                                                onChange={handleChange}
                                                value={formData.salutation}
                                                required
                                            >
                                                <option value="">Select Salutation</option>
                                                <option value="Dr">Dr</option>
                                                <option value="Mr">Mr</option>
                                                <option value="Ms">Ms</option>
                                                <option value="Miss">Miss</option>
                                                <option value="Other">Other</option>

                                            </select>
                                        </label>

                                        {/* <label>
                                            Department <span className="text-danger">*</span>
                                            <input
                                                className="input"
                                                type="test"
                                                name="department"
                                                placeholder="Enter department"
                                                onChange={handleChange}
                                                value={formData.department}
                                                required
                                            />
                                        </label> */}
                                        <label>
                                            Department of the Participant <span className="text-danger">*</span>

                                            <select
                                                className="input"
                                                name="department"
                                                onChange={handleChange}
                                                value={formData.department}
                                                required
                                            >
                                                <option value="">Select department</option>
                                                <option value="CSE">CSE</option>
                                                <option value="EEE">EEE</option>
                                                <option value="ECE">ECE</option>
                                                <option value="AIML">AIML</option>
                                                <option value="Civil">Civil</option>
                                                <option value="IT">IT</option>
                                                <option value="IOT">IOT</option>
                                                <option value="Petroleum">Petroleum</option>
                                                <option value="Mining">Mining</option>
                                                <option value="Agricultural">Agricultural</option>
                                                <option value="Data Science">Data Science</option>
                                                <option value="Mechanical">Mechanical</option>
                                                <option value="MCA">MCA</option>
                                                <option value="MBA">MBA</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </label>

                                        {formData.department === "Other" && (
                                            <div style={{ marginTop: "10px" }}>
                                                <label>
                                                    Please specify your Department <span className="text-danger">*</span>

                                                    <input
                                                        type="text"
                                                        name="otherDepartment"
                                                        className="input"
                                                        placeholder="Enter your Department"
                                                        value={formData.otherDepartment || ""}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </label>
                                            </div>
                                        )}

                                        <label>
                                            Email Id <span className="text-danger">*</span>
                                            <input
                                                className="input"
                                                type="email"
                                                name="email"
                                                placeholder="Enter Email"
                                                onChange={handleChange}
                                                value={formData.email}
                                                required
                                            />
                                        </label>

                                        {/* <label>
                                            Contact No <span className="text-danger">*</span>
                                            <input
                                                className="input form-control"
                                                type="tel"
                                                name="contactNo"
                                                maxLength="10"
                                                placeholder="Enter Contact Number"
                                                value={formData.contactNo}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    if (!/^\d*$/.test(value)) return;

                                                    // ✅ Update state only if value length ≤ 10
                                                    if (value.length <= 10) {
                                                        handleChange(e);
                                                    }
                                                }}
                                                onBlur={() => {
                                                    // ✅ Check for exactly 10 digits when user leaves the field
                                                    if (formData.contactNo && formData.contactNo.length !== 10) {
                                                        alert("⚠️ Contact number must be exactly 10 digits.");
                                                    }
                                                }}
                                                required
                                            />
                                        </label> */}
                                        <label>
                                            Contact No <span className="text-danger">*</span>
                                            <div style={{
                                                display: "flex",
                                                alignItems: "center",
                                                border: "1px solid #ccc",
                                                borderRadius: "4px",
                                                overflow: "hidden",
                                            }}>
                                                <select
                                                    style={{
                                                        border: "none",
                                                        backgroundColor: "#f8f8f8",
                                                        padding: "8px",
                                                        // fontSize: "14px",
                                                        outline: "none",
                                                    }}
                                                    value={formData.countryCode || "+91"}
                                                    onChange={(e) =>
                                                        setFormData((prev) => ({ ...prev, countryCode: e.target.value }))
                                                    }
                                                >
                                                    <option value="+91">+91</option>
                                                    {/* <option value="+1">+1</option>
                                                    <option value="+44">+44</option>
                                                    <option value="+61">+61</option>
                                                    <option value="+971">+971</option> */}
                                                </select>

                                                <input
                                                    type="tel"
                                                    name="contactNo"
                                                    placeholder="Enter Mobile No"
                                                    value={formData.contactNo}
                                                    onChange={(e) => {
                                                        const value = e.target.value;
                                                        if (/^\d{0,10}$/.test(value)) {
                                                            setFormData((prev) => ({ ...prev, contactNo: value }));
                                                        }
                                                    }}
                                                    required
                                                    style={{
                                                        flex: 1,
                                                        border: "none",
                                                        outline: "none",
                                                        padding: "8px",
                                                        fontSize: "14px",
                                                    }}
                                                />
                                            </div>
                                        </label>

                                        <label>
                                            Whatsapp No <span className="text-danger">*</span>
                                            <input
                                                className="input form-control"
                                                type="tel"
                                                name="whatsappNo"
                                                maxLength="10"
                                                placeholder="Enter whatsapp Number"
                                                value={formData.whatsappNo}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    if (!/^\d*$/.test(value)) return;

                                                    // ✅ Update state only if value length ≤ 10
                                                    if (value.length <= 10) {
                                                        handleChange(e);
                                                    }
                                                }}
                                                onBlur={() => {
                                                    // ✅ Check for exactly 10 digits when user leaves the field
                                                    if (formData.whatsappNo && formData.whatsappNo.length !== 10) {
                                                        alert("⚠️ whatsapp number must be exactly 10 digits.");
                                                    }
                                                }}
                                                required
                                            />
                                        </label>

                                        <label>
                                            Name of the College/Institute/University/Industry/other Professional bodies
                                            <span className="text-danger">*</span>
                                            <input
                                                className="input"
                                                type="text"
                                                name="collegeName"
                                                placeholder="Enter Organization Name"
                                                maxLength={50}
                                                value={formData.collegeName}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    // Allow only letters (A–Z, a–z) and spaces
                                                    const regex = /^[A-Za-z\s]*$/;
                                                    if (regex.test(value) || value === "") {
                                                        handleChange(e); // only update if valid
                                                    }
                                                }}
                                                required
                                            />
                                        </label>

                                        <label>
                                            Address of the College/Institute/University/Industry/Other Professional bodies <span className="text-danger">*</span>
                                            <textarea
                                                className="input"
                                                name="collegeAddress"
                                                placeholder="Enter Address"
                                                onChange={handleChange}
                                                maxLength={100}
                                                value={formData.collegeAddress}
                                                required
                                                rows={2}
                                            ></textarea>
                                        </label>

                                        <label>
                                            Which state do you belong to? <span className="text-danger">*</span>
                                            {/* <input
                                                className="input"
                                                type='text'
                                                name="state"
                                                maxLength={20}
                                                placeholder="Enter State"
                                                value={formData.state}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    // Allow only letters (A–Z, a–z) and spaces
                                                    const regex = /^[A-Za-z\s]*$/;
                                                    if (regex.test(value) || value === "") {
                                                        handleChange(e); // only update if valid
                                                    }
                                                }}
                                                required
                                            /> */}
                                            <select
                                                className="input"
                                                name="state"
                                                onChange={handleChange}
                                                value={formData.state}
                                                required
                                            >
                                                <option value="">Select state</option>
                                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                <option value="Assam">Assam</option>
                                                <option value="Bihar">Bihar</option>
                                                <option value="Chandigarh">Chandigarh</option>
                                                <option value="Chhattisgarh">Chhattisgarh</option>
                                                <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                                <option value="Daman and Diu">Daman and Diu</option>
                                                <option value="Delhi">Delhi</option>
                                                <option value="Goa">Goa</option>
                                                <option value="Gujarat">Gujarat</option>
                                                <option value="Haryana">Haryana</option>
                                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                                <option value="Jharkhand">Jharkhand</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Kerala">Kerala</option>
                                                <option value="Ladakh">Ladakh</option>
                                                <option value="Lakshadweep">Lakshadweep</option>
                                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                <option value="Maharashtra">Maharashtra</option>
                                                <option value="Manipur">Manipur</option>
                                                <option value="Meghalaya">Meghalaya</option>
                                                <option value="Mizoram">Mizoram</option>
                                                <option value="Nagaland">Nagaland</option>
                                                <option value="Odisha">Odisha</option>
                                                <option value="Puducherry">Puducherry</option>
                                                <option value="Punjab">Punjab</option>
                                                <option value="Rajasthan">Rajasthan</option>
                                                <option value="Sikkim">Sikkim</option>
                                                <option value="Tamil Nadu">Tamil Nadu</option>
                                                <option value="Telangana">Telangana</option>
                                                <option value="Tripura">Tripura</option>
                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                <option value="Uttarakhand">Uttarakhand</option>
                                                <option value="West Bengal">West Bengal</option>
                                            </select>
                                        </label>

                                        <label>
                                            Designation of the Participant <span className="text-danger">*</span>
                                        </label>
                                        <select
                                            className="input"
                                            name="designation"
                                            onChange={handleChange}
                                            value={formData.designation}
                                            required
                                        >
                                            <option value="">Select Designation</option>
                                            <option value="Professor">Professor</option>
                                            <option value="Associate Professor">Associate Professor</option>
                                            <option value="Assistant Professor">Assistant Professor</option>
                                            <option value="Other">Other</option>
                                        </select>

                                        {formData.designation === "Other" && (
                                            <div style={{ marginTop: "10px" }}>
                                                <label>
                                                    Please specify your Designation <span className="text-danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="otherDesignation"
                                                    className="input"
                                                    placeholder="Enter your designation"
                                                    value={formData.otherDesignation || ""}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        )}

                                        <label>
                                            <br />
                                            Event Name
                                            <input
                                                className="input"
                                                name="event_name"
                                                placeholder="Enter Event Name"
                                                value={selectedEvent?.event_name || ""}
                                                style={{ background: "antiquewhite" }}
                                                readOnly
                                            />
                                        </label>

                                        <label>
                                            Event Amount
                                            <input
                                                className="input"
                                                name="event_amount"
                                                placeholder="Enter Event Amount"
                                                value={selectedEvent?.event_amount || ""}
                                                style={{ background: "antiquewhite" }}
                                                readOnly
                                            />
                                        </label>
                                        <input
                                            className="input"
                                            name="whatsappLink"
                                            value={selectedEvent?.whatsappLink || ""}
                                            style={{ display: "none" }}

                                        />

                                        <div className="text-end mt-3">
                                            <button type="button" className="btn btn-danger me-2" onClick={closePopup}>Close</button>
                                            <button type="submit" className="btn" style={{ backgroundColor: "#2ecc71", color: "white" }} disabled={loading}>
                                                {loading ? 'Processing...' : 'Payment'}
                                            </button>
                                        </div>
                                    </form>

                                    {paymentStatus && (
                                        <div
                                            className={`p-4 rounded-lg ${paymentStatus.success
                                                ? 'bg-green-100 border border-green-400 text-green-700'
                                                : 'bg-red-100 border border-red-400 text-red-700'
                                                }`}
                                            style={{ marginTop: '20px' }}
                                        >
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0" style={{ width: '100%' }}>
                                                    {paymentStatus.success ? (
                                                        <h1 style={{ fontSize: '18px', marginBottom: '10px', color: '#4caf50' }}>
                                                            ✅ Payment Successful
                                                        </h1>
                                                    ) : (
                                                        <h1 style={{ fontSize: '18px', marginBottom: '10px', color: '#ef4444' }}>
                                                            ❌ Payment Failed
                                                        </h1>
                                                    )}
                                                    {/* <p style={{ marginBottom: '5px', fontSize: '14px' }}>
                                                        {paymentStatus.message}
                                                    </p> */}
                                                    {paymentStatus.paymentId && (
                                                        <>
                                                            <p style={{ marginBottom: '5px', fontSize: '12px' }}>
                                                                <strong>Payment ID:</strong> {paymentStatus.paymentId}
                                                            </p>
                                                            <p style={{ marginBottom: '15px', fontSize: '12px' }}>
                                                                <strong>UTR No :</strong> {paymentStatus.utr}
                                                            </p>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {showSuccess && (
                                        <div
                                            style={{
                                                position: "fixed",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                backgroundColor: "rgba(0,0,0,0.5)",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    backgroundColor: "white",
                                                    padding: "10px",
                                                    borderRadius: "5px",
                                                    textAlign: "center",
                                                    width: "300px",
                                                }}
                                            >
                                                <h4>✅ Registration Successful!</h4>
                                                <p>You can now download your receipt.</p>
                                                <button
                                                    onClick={() => {
                                                        downloadReceipt();
                                                        setShowSuccess(false);
                                                    }}
                                                    style={{
                                                        backgroundColor: "#0c6ab0",
                                                        color: "white",
                                                        padding: "10px 20px",
                                                        border: "none",
                                                        borderRadius: "5px",
                                                        cursor: "pointer",
                                                        fontSize: "10px",
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    📥 Download PDF Receipt
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        <ScrollToTop />
                    </div>
                </div>
            </div>
            <FooterTwo />
        </>
    );
}

export default AdvancedAppliation;