import React from "react";
import "./home.css";
import Image1 from './images/prasanna.png';
import Image2 from './images/sarath.png';
import Image3 from './images/prasad.png';
import logo from './images/logo.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";


const testimonials = [
  {
    img: Image1,
    ImgLogo: logo,
    quote:
      "The greatest success for an engineering student would be to get an opportunity to kick start their career in a reputed organization with a good package. This I was able to find in Aditya which has given me the best by driving out the best from me. Aditya made me to take life seriously and challengingly in the campus. It trained me to be always in win-win situation and helped me get a job in MNC, CONTROL’s with a huge package. The vast hands-on experience and enriching helped me bag this job. Thank you Aditya for shaping me and my skills in both academic and non-academic activities.",
    author: "M. Durga Prasanna,ECE",
    source: "Student",
  },
  {
    img: Image2,
    ImgLogo: logo,

    quote:
      "Life in Aditya is cozy and the warmth of the management, faculty and other staff makes me and my parents to be a part of this good college. The superiors take utmost care to hone the skills of students in all aspects. Administration is great because we have all the activities for the students. It was my immense luck and fortune to be the part of this abode of learning. It helped me to grow. The entire faculty and department leaves no stone unturned to shape one’s future.",
    author: "M. Sri Durga Kalyan, PT",
    source: "Student",
  },
  {
    img: Image3,
    ImgLogo: logo,

    quote:
      "A conducive environment marked my learning at Aditya college. A fine balance of academics and co-curricular activities made me to rethink about my future fostering my ideas to reality. A great support rendered by the teaching fraternity leveraged my skills to prove my talent researching fossil fuels to bio fuels.",
    author: "M. Sarath Chandra, CSE",
    source: "Student",
  },
];

const TestimonialCard = ({ img,ImgLogo, quote, author, source }) => {
  return (
    <>
    <figure className="snip1167">
        <img src={img} alt={author} />
        <img src={ImgLogo} className="ImgLogo_testimonial" alt={author} />
        <div className="author" >
          {author} - <span className="sub_name">{source}</span>
        </div>
      <blockquote>{quote}</blockquote>
      <hr className="testimonials_line"/>
    </figure>
    </> 
  );
};

const TestimonialList = () => {
  return (
    <div className="testimonial_bg">
        <br/><br/>
         <center>
            <b className="testimonial_title_name"> 
                <span style={{ color: '#00428A' }}>What our</span> <span style={{ color: '#f05819' }}>student  saying</span> 
            </b>
         </center>
        <div className="testimonial-container">
         {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
    </div>
  );
};

export default TestimonialList;