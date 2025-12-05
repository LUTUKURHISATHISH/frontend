import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./home.css";

// 2025 images
import Image1_2025 from "./images/placement_images/2025/34.95.webp";
import Image2_2025 from "./images/placement_images/2025/LAVANYA SRI.webp";

// 2026 placement images
import Placement_1_2026 from "./images/placement_images/2026/placement_1.webp";
import Placement_2_2026 from "./images/placement_images/2026/placement_2.webp";


// 2026 images
import Image1_2026 from "./images/placement_images/2026/Google.webp";
import Image2_2026 from "./images/placement_images/2026/T. APOORVANJALI.webp";
import Image3_2026 from "./images/placement_images/2026/P. DARSHINI.webp";
import Image4_2026 from "./images/placement_images/2026/NIHARIKA.webp";
import Image5_2026 from "./images/placement_images/2026/N. DEVI VAISHNAVI.webp";
import Image6_2026 from "./images/placement_images/2026/MADHU.webp";
import Image7_2026 from "./images/placement_images/2026/K. SRINIDHI.webp";
import Image8_2026 from "./images/placement_images/2026/K. SRAVANTHI.webp";
import Image9_2026 from "./images/placement_images/2026/K. NAGA DURGA.webp";
import Image10_2026 from "./images/placement_images/2026/K. DEDEEPYA.webp";
import Image11_2026 from "./images/placement_images/2026/GANILAKSHM.webp";
import Image12_2026 from "./images/placement_images/2026/G. Sathvik.webp";
import Image13_2026 from "./images/placement_images/2026/G. MYTHRI.webp";
import Image14_2026 from "./images/placement_images/2026/B. HARSHINI REDDY.webp";
import Image15_2026 from "./images/placement_images/2026/D. UPANISHA.webp";
import Image16_2026 from "./images/placement_images/2026/C. KEERTANA.webp";
import Image17_2026 from "./images/placement_images/2026/T. Deepika.webp";
import Image18_2026 from "./images/placement_images/2026/thumbnail_ISRO.webp";
import Image19_2026 from "./images/placement_images/2026/1.webp";
import Image20_2026 from "./images/placement_images/2026/10.webp";
import Image21_2026 from "./images/placement_images/2026/2.webp";
import Image22_2026 from "./images/placement_images/2026/3.webp";
import Image23_2026 from "./images/placement_images/2026/4.webp";
import Image24_2026 from "./images/placement_images/2026/5.webp";
import Image25_2026 from "./images/placement_images/2026/6.webp";
import Image26_2026 from "./images/placement_images/2026/7.webp";
import Image27_2026 from "./images/placement_images/2026/8.webp";
import Image28_2026 from "./images/placement_images/2026/9.webp";
import Image29_2026 from "./images/placement_images/2026/Airbus.webp";
import Airbus from "./images/placement_images/2026/Airbus2.webp";

import LG_2026 from "./images/placement_images/2026/LG.webp";
import Lumen_1_2026 from "./images/placement_images/2026/lumen1.webp";
import Lumen_2_2026 from "./images/placement_images/2026/lumen2.webp";
import Lumen_3_2026 from "./images/placement_images/2026/lumen3.webp";



import IQ from "./images/placement_images/2026/IQ.webp";
import Image30_2026 from "./images/placement_images/2026/11.webp";
import Image31_2026 from "./images/placement_images/2026/12.webp";
import Image32_2026 from "./images/placement_images/2026/13.webp";
// import Image33_2026 from "./images/placement_images/2026/balaraju.webp";
// import Image34_2026 from "./images/placement_images/2026/vivek.webp";
// import Image35_2026 from "./images/placement_images/2026/14.webp";
// import Image36_2026 from "./images/placement_images/2026/15.webp";
// import Image37_2026 from "./images/placement_images/2026/16.webp";
// import Image38_2026 from "./images/placement_images/2026/17.webp";
// import Image39_2026 from "./images/placement_images/2026/18.webp";
// import Image40_2026 from "./images/placement_images/2026/19.webp";
// import Image41_2026 from "./images/placement_images/2026/20.webp";
// import Image42_2026 from "./images/placement_images/2026/21.webp";
// import Image43_2026 from "./images/placement_images/2026/22.webp";



// 2027 images
import Image1_2027 from "./images/placement_images/2027/Flipkart.webp";
import Image2_2027 from "./images/placement_images/2027/Airbus.webp";
import Image3_2027 from "./images/placement_images/2027/Andino_Labs.webp";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const rankings_2025 = [{ image: Image1_2025 }, { image: Image2_2025 }];
  const rankings_2026_P = [{ image: Placement_1_2026 },{ image: Placement_2_2026 }];
  const rankings_2026 = [
    { image: Image1_2026 }, { image: Image2_2026 }, { image: Image3_2026 },
    { image: Image4_2026 }, { image: Image5_2026 }, { image: Image6_2026 },
    { image: Image7_2026 }, { image: Image8_2026 }, { image: Image9_2026 },
    { image: Image10_2026 }, { image: Image11_2026 }, { image: Image12_2026 },
    { image: Image13_2026 }, { image: Image14_2026 }, { image: Image15_2026 },
    { image: Image16_2026 }, { image: Image17_2026 }, { image: Image18_2026 },
    { image: Image19_2026 }, { image: Image20_2026 }, { image: Image21_2026 },
    { image: Image22_2026 }, { image: Image23_2026 }, { image: Image24_2026 },
    { image: Image25_2026 }, { image: Image26_2026 }, { image: Image27_2026 },
    { image: Image28_2026 }, { image: Image29_2026 }, { image: Airbus }, { image: LG_2026 },
    { image: Lumen_1_2026 }, { image: Lumen_2_2026 }, { image: Lumen_3_2026 },
    { image: IQ },  { image: Image30_2026 },
    { image: Image31_2026 }, { image: Image32_2026 },
   
  ];
  const rankings_2027 = [
    { image: Image1_2027 },
    { image: Image2_2027 },
    { image: Image3_2027 },
  ];

  const rankings = [
    ...rankings_2025,
    ...rankings_2026_P,
    ...rankings_2026,
    ...rankings_2027,
  ];

  const total2025Images = rankings_2025.length;
  const total2026_P_Images = rankings_2026_P.length;
  const total2026Images = rankings_2026.length;

  const heading = (() => {
    if (currentIndex < total2025Images) {
      return "#2025 Placements";
    } else if (currentIndex < total2025Images + total2026_P_Images) {
      return "#2026 Placements";
    } else if (
      currentIndex <
      total2025Images + total2026_P_Images + total2026Images
    ) {
      return "#2026 Internships";
    } else {
      return "#2027 Internships";
    }
  })();

  return (
    <div className="container-fluid bg_placement">
      <br />
      <div className="container ranking-slider-container">
        <center>
          <h2 className="fw-bold placementfullname">{heading}</h2>
        </center>

        {/* Navigation buttons */}
        <button ref={prevRef} className="prev-button">❮</button>
        <button ref={nextRef} className="next-button">❯</button>

        <center>
          <div className="slider-wrapper">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              slidesPerView={3}
              spaceBetween={10}
              breakpoints={{
                360: { slidesPerView: 1, spaceBetween: 20 },
                750: { slidesPerView: 2, spaceBetween: 10 },
                1024: { slidesPerView: 3, spaceBetween: 10 },
              }}
              loop={true}
              onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
              onSwiper={(swiper) => setCurrentIndex(swiper.realIndex)} // ensures initial heading
            >
              {rankings.map((item, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <img
                      src={item.image}
                      alt={`Placement ${index + 1}`}
                      className="ranking-logo placement_image_border"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </center>
      </div>
      <br />
    </div>
  );
};

export default ImageSlider;
