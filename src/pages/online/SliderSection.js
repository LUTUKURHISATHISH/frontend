import { useState } from 'react';
import ModalVideo from 'react-modal-video';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
// import video from "./videos/Website.mp4";
import Downimage from "./videos/down_image.gif";
import banner from "./images/sliders/mainimage.webp";
// import ConfettiEffect from './ConfettiEffect'; 
const HomeSlider = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    const sliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        margin: 0,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true, // <-- Enable autoplay
        // autoplaySpeed: 5000, // <-- Time between slides in milliseconds
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
        <>
           {/* <ConfettiEffect /> */}
            <div className="react-slider-part">
                <ModalVideo channel='youtube' isOpen={isOpen} videoId='EFj_Qlbz-rE' onClose={() => { openModal(); }} />
                <div className="home-sliders home2">
                    <Slider {...sliderSettings}>
                         <div className="single-slide">
                            <div className="slider-img">
                                <img className="desktop" src={banner} style={{ width: '100%' }} />
                                <img className="mobile" src={banner} alt="Slider Image 1" />
                            </div>
                            <div className="container slidernamemobile">
                                <div className="slider-content">
                                    <div className="content-part">
                                        <h2 className="slider-title wow animate__fadeInUp" data-wow-duration="1s" style={{textShadow:"rgb(22 22 21 / 48%) 0px -4px"}}>
                                            Cultivating excellence <br /> <span id="nameanimation_old"> for tomorrow's leaders.</span>
                                        </h2>
                                        <hr style={{color:'#f05819',width:'210px',opacity:'1.5',borderTop:'3px solid'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Slider>
                    <center><img className="downarrow" src={Downimage} ></img></center>
                </div>
            </div>
        </>
    );
}

export default HomeSlider;