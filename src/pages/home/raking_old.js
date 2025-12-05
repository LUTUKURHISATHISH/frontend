import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./home.css";

// Import images
import Image1 from "./images/1.png";
import Image2 from "./images/2.png";
import Image3 from "./images/3.png";
import Image4 from "./images/4.png";

// Data for ranking cards
const rankings = [
    { image: Image1 },
    { image: Image2 },
    { image: Image3 },
    { image: Image4 },
    { image: Image2 },
    { image: Image3 },
];

const ImageSlider = () => {
    return (
        <div className="container-fluid bg_raking">
            <br/>
        <div className="container ranking-slider-container">
                <button className="prev-button">❮</button>
                <button className="next-button">❯</button>
            <div className="slider-wrapper"> {/* Added wrapper for better styling control */}
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".prev-button",
                        nextEl: ".next-button",
                    }}
                    slidesPerView={1}  // Start with 1 slide for mobile
                    spaceBetween={5}
                    breakpoints={{
                        360: { // Adjust breakpoint for larger screens (e.g., tablet)
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        750: { // Adjust breakpoint for larger screens (e.g., tablet)
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: { // Adjust breakpoint for laptops
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {rankings.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="ranking-card">
                                <img src={item.image} alt={`Rank ${index + 1}`} className="ranking-logo" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div> {/* End of slider wrapper */}
        </div>
        </div>
    );
};

export default ImageSlider;