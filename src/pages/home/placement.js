import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./home.css";
import axios from 'axios';

const ImageSlider = () => {
  const backendUrl = process.env.REACT_APP_DATABASEURL;
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [data, setData] = useState([]);
  
  const [error, setError] = useState("");

  useEffect(()=>{

    const getPlacements = async() =>{
      try{
        const getRec = await axios.get(`${backendUrl}api/placement-banners`)
        if(getRec.status === 200 && getRec.data){
          setData(getRec.data.placement_banners);
        }
         else {
          throw new Error("Unexpected API response format.");
        }
      }catch(err){
        console.error("Error fetching data:", err);
        setError(err.response?.data?.message || err.message || "Failed to fetch data.");
      }
    }
    getPlacements()
  }, [])

  return (
    <div className="container-fluid bg_placement py-4">
     
      <div className="container ranking-slider-container py-4">
      {
         data.length > 0 && (
          <>
          <h2 className="fw-bold placementfullname text-center"># {data[currentIndex]?.year} {data[currentIndex]?.category} </h2>
         
         {/* Navigation buttons */}
        <button ref={prevRef} className="placement__prev-button"></button>
        <button ref={nextRef} className="placement__next-button"></button> 

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
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <img src={`${backendUrl}/banners_info/${item.attachment}`}  alt={item.category}
                      className="ranking-logo placement_image_border" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          </>
         )
      }
      </div>
    </div>
  );
};

export default ImageSlider;
