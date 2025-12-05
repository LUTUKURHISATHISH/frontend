import React, { useState } from 'react';
import point from '../../../assets/images/icons/image.png';



const Fees = () => {
    return (
        <div class=" about3__area p-relative pb---60" style={{ marginTop: "50px" }}>
         <center> <b class="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: '35px',fontWeight:'600' }}>REFUND / ADMISSION CANCELLATION POLICY
         </b></center>
         <br />
            <div class="container bg_color">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="about__content">
                            <div class="container">
                                <p class="contentsize">This policy is in accordance with the Government directions based on UGC guidelines.
                                    The Admission fee paid by the candidate is not refundable under any circumstances. A percentage of the Tuition fee paid by the student shall be refunded to eligible students as per the below table only when he/she applies for refund in writing.</p>
                                <div class="about__content">
                                    <div class="table-responsive table-bordered table-striped ">
                                        <table class="table responsive">
                                            <thead>
                                                <tr>
                                                    <th style={{ backgroundColor: "#00428A", color: '#fff', width: "10%", textAlign: "center" }}>Category</th>
                                                    <th style={{ backgroundColor: "#00428A", color: '#fff', width: "30%", textAlign: "center" }}>Percentage of Refund of fees*</th>
                                                    <th style={{ backgroundColor: "#00428A", color: '#fff', width: "60%", textAlign: "center" }}>Point of time when notice of withdrawal of admission is received in the University<br /> </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }} >1</td>
                                                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>100 %</td>
                                                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>15 days or more before the formally notified last date of admission.</td>
                                                </tr>

                                                <tr>
                                                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }} >2</td>
                                                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>90 %</td>
                                                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>Less than 15 days before the formally notified last date of admission.</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }} >3</td>
                                                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>80 %</td>
                                                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>15 days or less after the formally notified last date of admission</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }} >4</td>
                                                    <td style={{ textAlign: 'center',verticalAlign:'middle' }}> 50 %</td>
                                                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>30 days or less, but more than 15 days after formally notified last date of admission.</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }} >5</td>
                                                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}> 0 %</td>
                                                    <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>More than 30 days after formally notified last date of admission. </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <b class="about__title wow animate__fadeInUp hedingname_orange" data-wow-duration="0.5s" style={{ fontSize: "24px" }}>Refund of Hostel fee : </b><br />
                            <div class="degree-list-container">
                                <ul class="degree-list">
                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span> Once the student completes enrolment and classes commence, the hostel room rent is non-refundable.</span> </li>
                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>	Hostel fee includes both room rent and mess (Food) charges.</span> </li>
                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>	If a student decides to leave the hostel within 15 days from the date of commencement of class work, he/she shall be eligible for refund of food charges, after deduction as per his/hers stay.</span> </li>

                                </ul>
                            </div>
                            <br />

                            <b class="about__title wow animate__fadeInUp hedingname_orange" data-wow-duration="0.5s" style={{ fontSize: "24px" }}>Refund of Transport fee : </b><br />
                            <div class="degree-list-container">
                                <ul class="degree-list">
                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span> Transport charges are collected in two terms (Once per every semester).</span> </li>
                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>	Once the fee for utilising the transport facility is paid, it is non-refundable, even if the student does not use the facility for a single day.</span> </li>
                                </ul>
                            </div>
                            <br />

                            <b class="about__title wow animate__fadeInUp hedingname_orange" data-wow-duration="0.5s" style={{ fontSize: "24px" }}>General Guidelines : </b><br />
                            <div class="degree-list-container">
                                <ul class="degree-list">
                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span> The last date of Admission/ date of commencement of Class Work shall be notified or as per UGC notification for the A.Y. 2025-26. The University reserves the right to change the above mentioned date.</span> </li>
                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span>Refunds shall be done online through bank transfer after verifying the application or documents and after completion of the dues process.</span> </li>
                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span> No interest shall be payable on the refund of any fees.</span> </li>
                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span> The University reserves all rights to modify and amend this policy.</span> </li>
                                    <li><span class="icon"><img className='pointimage' src={point} /></span><span> The decision of the University authorities is final in all refund-related matters.</span> </li>
                                </ul>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fees;