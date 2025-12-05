import React from "react";
import "./home.css";
import Image1 from './images/testimonial/prasanna.webp';
import Image2 from './images/testimonial/sarath.webp';
import Image3 from './images/testimonial/prasad.webp';
import logo from './images/testimonial/logo.webp';




const testimonials = [
  {
    img: Image1,
    ImgLogo: logo,
    quote:
    "Life at Aditya is warm and supportive, making it a great place for both students and parents.The faculty and management genuinely care about skill development and student growth.A wide range of activities and strong administration enhance the learning experience.I'm truly lucky to be part of this nurturing and future-focused institution.",
    author: "M. Durga Prasanna,ECE",
    source: "Student",
  },
  {
    img: Image3,
    ImgLogo: logo,
    quote:
    "Aditya helped me launch my career with a top MNC, CONTROL's, offering a great package.The college brought out the best in me through continuous challenges and support.Hands-on experience and skill-building played a key role in my success.Grateful to Aditya for shaping me both academically and personally.",
    author: "M. Sarath Chandra, CSE",
    source: "Student",
  },
  {
    img: Image2,
    ImgLogo: logo,
    quote:
    "A conducive environment marked my learning at Aditya college. A fine balance of academics and co-curricular activities made me to rethink about my future fostering my ideas to reality. A great support rendered by the teaching fraternity leveraged my skills to prove my talent researching fossil fuels to bio fuels.",
    source: "Student",
    author: "M. Sri Durga Kalyan, PT",
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
    const sliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            }
        ]
    };
  return (
    <div className="testimonial_bg">
        <br/>
         <center>
            <b className="testimonial_title_name"> 
                <span style={{ color: '#0c6ab0' }}>What our student  saying</span> 
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