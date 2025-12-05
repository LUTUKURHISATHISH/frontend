import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./home.css";
import Image1 from "./images/raking/naac.webp";
import Image2 from "./images/raking/nirf.webp";
import Image3 from "./images/raking/nba.webp";
import Image4 from "./images/raking/thumbnail_Impact Ranking.webp";
import Image5 from "./images/raking/thumbnail_QS.webp";
import Image6 from "./images/raking/week.webp";
import Image7 from "./images/raking/tia.webp";
import Image8 from "./images/raking/si.webp";


import LogoRight from "./images/logo_right.webp";

const rankings = [
    { image: Image1 },
    { image: Image2 },
    { image: Image3 },
    { image: Image4 },
    { image: Image5 },
    { image: Image6 },
    { image: Image7 },
    { image: Image8 },


];

const ImageSlider = () => {
    return (
        <div className="container-fluid bg_raking">
            <br/>
            <div className="container container-width ranking-slider-container">
                <button className="prev-button"> ❮ </button>
                <button className="next-button"> ❯ </button>
                <div className="slider-wrapper">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: ".prev-button",
                            nextEl: ".next-button",
                        }}
                        // autoplay={{
                        //     delay: 2000,
                        //     disableOnInteraction: false,
                        // }}
                        slidesPerView={1}
                        spaceBetween={1}
                        breakpoints={{
                            360: { slidesPerView: 2, spaceBetween: 5 },
                            750: { slidesPerView: 4, spaceBetween: 5 },
                            1024: { slidesPerView: 4, spaceBetween: 5 },
                        }}
                        loop={true} 
                    >
                        {rankings.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="ranking-card">
                                    <img src={item.image} alt={`Rank ${index + 1}`} className="ranking-logo" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <img src={LogoRight} className="logoright"></img>
        </div>
    );
};

export default ImageSlider;
