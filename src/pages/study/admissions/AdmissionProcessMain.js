import React from 'react';
import { Link } from 'react-router-dom';
import point from '../../../assets/images/icons/image.png';
// import "../study.css"
const AdmissionProcessPart = () => {

    return (
        <div class=" about3__area p-relative pb---60" style={{ marginTop: "20px" }}>
            <div class="container bg_color">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="about__content">
                            <div>
                                {/* <Enquire /> */}
                                <b class="about__title wow animate__fadeInUp headingcolor" data-wow-duration="0.5s" style={{ fontSize: "20px" }}>Admission Process :</b>
                                <p className='contentsize'>Aditya University is renowned for its commitment to academic excellence and innovation. Our university has become a leader in engineering education, research, and technology. Aditya offers a dynamic learning environment that fosters intellectual growth, creativity, and the drive to address real-world challenges.
                                    <br />
                                    B Tech Course aspirants must appear for 10+2 exams or an equivalent exam and must meet the eligibility criteria. The aspirants may have the admission directly or through AP EAPCET.
                                </p>

                                <b class="about__title wow animate__fadeInUp headingcolor" data-wow-duration="0.5s" style={{ fontSize: "20px" }}>Direct  Process : </b><br />
                                <div class="degree-list-container">
                                    <ul class="degree-list">
                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> Register yourself with valid mail id.&nbsp;&nbsp; <a href="https://apply.adityauniversity.in/" style={{ color: "#00428a" }}><b className="applybuttion1" data-text="Apply Now !"> APPLY NOW  🡆</b>
                                            </a> </span></li>
                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> Verify mail id. </span> </li>
                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> Fill the online application form.</span> </li>
                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> Submit the application form .   </span> </li>
                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> The candidate will be called for counselling based on the merit by the admissions team.</span> </li>
                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> Selected candidates need to pay the prescribed fee whatsoever applicable in full.</span> </li>
                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> The candidates can avail scholarships up to 100% based on their performance in Aditya's Scholastic Aptitude Test (ASAT) or any other national-level engineering entrance exams such as JEE mains. Scholarships are also provided based on 10+2 marks and performance in sports. </span> </li>
                                    </ul>
                                </div>
                                <br />
                                <b class="about__title wow animate__fadeInUp headingcolor" data-wow-duration="0.5s" style={{ fontSize: "20px" }}>Admission through AP EAPCET : </b><br />
                                <div class="degree-list-container">
                                    <ul class="degree-list">
                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> Candidates seeking admission through AP EAPCET  must complete their AP EAPCET application process and be successful in EAPCET.</span> </li>
                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> The candidates can choose Aditya University through Counselling Code: <b style={{ color: "#00428a" }}>ADTPPU</b> </span> </li>
                                        <li><span class="icon"><img className='pointimage' src={point} /></span><span> After successful allotment, candidates must report to Aditya University.</span> </li>
                                    </ul>
                                </div>
                             <br />
                           </div>
                       
                        <b class="about__title wow animate__fadeInUp headingcolor" data-wow-duration="0.5s" style={{ fontSize: "20px" }}>Eligibility Criteria for B.Tech Admission </b><br />
                        <div class="degree-list-container">
                            <ul class="degree-list">
                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Applicants must be at least 16 years old by December 31st of the admission year, with no upper age limit. </span> </li>
                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Candidates have to be successful in ASAT (Aditya Scholastic Aptitude Test)/ JEE-Main/ State-Level Engineering Entrance Exams across India including EAPCET and Merit in Sports Activities.</span> </li>
                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Candidates seeking UG Engineering admission must have completed or be appearing in  for one of the specified qualifying examinations. Additionally, a minimum of 60% or equivalent CGPA is required for provisional candidature. </span> </li>
                                <li><span class="icon"><img className='pointimage' src={point} /></span><span> Final examination of 10+2 system by State Boards, CBSE, or CISCE with core subjects as given below.</span> </li>
                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>  Students with Physics, Mathematics & Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/Technical Vocational Subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship are eligible for B.Tech Program in Electrical & Electronics Engineering, Electronics & Communications Engineering, Computer Science & Engineering, Information Technology, Artificial Intelligence & Machine Learning, Data Science.</span> </li>
                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>  Students with Physics, Chemistry and Mathematics (PCM) are eligible for B.Tech Programs in Civil Engineering, Mechanical Engineering, Petroleum Technology & Mining Engineering.</span> </li>
                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>  Students with Physics, Chemistry & Mathematics/ Biology/ Biotechnology/ Agriculture/ Agriculture Stream are eligible for B.Tech program in Agriculture Engineering.</span> </li>
                                <li><span class="icon"><img className='pointimage' src={point} /></span><span>  Applicants who completed Class 12 (or equivalent) exams outside India or from a non-specified board must provide an AIU certificate confirming equivalence to Class 12, with grades/CGPA converted to percentage. </span> </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="campus_sec1 row">
                    <div className="col-lg-4">
                        <div className="text-center" style={{padding:"5px"}}>
                          <Link to="/diploma-programs" style={{ width: "100%" }} className="more-about"> Programs offered </Link>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="text-center" style={{padding:"5px"}}>
                            <Link to="/fees" style={{ width: "100%" }} className="more-about"> Fees </Link>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="text-center" style={{padding:"5px"}}>
                            <Link to="/scholarship" style={{ width: "100%" }} className="more-about"> Scholarship </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdmissionProcessPart;