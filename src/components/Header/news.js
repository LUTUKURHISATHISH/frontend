import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import axios from 'axios';
import { Link } from "react-router-dom";


const Announcements = () => {
  const backendUrl = process.env.REACT_APP_DATABASEURL;

  const prevRef = useRef(null);

  const nextRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [data, setData] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    const getNewsData = async () => {
      setError();
      try {
        const newsrec = await axios.get(`${backendUrl}api/get-flash-news`);
        if (newsrec.status === 200 && newsrec.data) {
          setData(newsrec.data.flash_news_data);
        }
        else {
          throw new Error("Unexpected API response format.");
        }
      }
      catch (err) {
        console.error("Error fetching data:", err);
        setError(err.response?.data?.message || err.message || "Failed to fetch data.");
      }
    }
    getNewsData()
  }, [])

  return (
    <div className="container">
      <div className="news__slider--wrapper">
        <button ref={prevRef} className="news__prev-button"> <FontAwesomeIcon icon={faAngleLeft} /></button>
        <button ref={nextRef} className="news__next-button"> <FontAwesomeIcon icon={faAngleRight} /></button>
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
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            360: { slidesPerView: 1, spaceBetween: 10 },
            750: { slidesPerView: 1, spaceBetween: 10 },
            1024: { slidesPerView: 1, spaceBetween: 10 },
          }}
          loop={true}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          onSwiper={(swiper) => setCurrentIndex(swiper.realIndex)} // ensures initial heading
        >
          {
            data.length > 0 && (
              <>
                {data.map(item => (
                  <SwiperSlide>
                    <div className='news__card--wrap'>
                      {
                        item.flash_link ? (
                          <p className="news__card--textWrap"><Link to={item.flash_link} target='_blank'>{item.flash_name}</Link></p>
                        ) : (<p className="news__card--textWrap">{item.flash_name}</p>)
                      }
                    </div>
                  </SwiperSlide>
                ))}
              </>
            )
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Announcements;
