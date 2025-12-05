import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loading from './loading.gif';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import 'swiper/css/pagination';

const FacilitiesClassRoomDetails = ({ department }) => {
  const backendUrl = process.env.REACT_APP_DATABASEURL;
  const nodata = "This Section will be update very Soon..";
  const [data, setData] = useState([]);
  const [aboutClass, setAboutClass] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (resp) => {
    setPopupImage(resp);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError("");
      try {

        const [aboutClassResp, classfigures] = await Promise.all([axios.get(`${backendUrl}api/get-dept-classroom/${department}`), axios.get(`${backendUrl}api/get-dept-classrooms_by_name/${department}`)])

        if (aboutClassResp.status === 200) {
          setAboutClass(aboutClassResp.data.dept_about_classroom_data || [])
        }
        if (classfigures.status === 200 && classfigures.data) {
          setData(classfigures.data.class_details || []);
        } else {
          throw new Error("Unexpected API response format.");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(
          err.response?.data?.message ||
          err.message ||
          "Failed to fetch data."
        );
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [backendUrl, department]);
  return (
    <>
      {loading && (
        <div className="col-12 mb-5">
          <div className="emptyData text-center">
            <img src={Loading} alt="loading" />
          </div>
        </div>
      )}

      {error && (
        <div className="col-12 my-5">
          <div className="emptyData text-danger text-center">{error}</div>
        </div>
      )}
      {
        !loading && !error && aboutClass.length > 0 && aboutClass.map(item => (
          <p key={item._id}>{item.about}</p>
        ))
      }

      {!loading && !error && data.length > 0 && (
        <div className="slider-wrapper">
          <Swiper
            modules={[Pagination, Autoplay]}
            className="mine__facility--swiper"
            autoplay={{
              delay: 90000,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            slidesPerGroupSkip={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}

            breakpoints={{
              360: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 20 },
              980: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 30 },
              1200: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 30 },
            }}
            loop={true}
          // onSlideChange={handleSlideChange}
          >

            <>
              {
                data.map(resp => (
                  <SwiperSlide>
                    <div className='swipe__card--wrap'>
                      <div className='swipe__card--imgWrap'>
                        <img src={`${backendUrl}/classrooms/${resp.attachment}`} alt={resp.class_name} className='img-fluid' onClick={() => openPopup(resp.attachment)}
                          style={{ cursor: 'pointer' }} />
                      </div>
                      <div className='swipe__card--textWrap'><h5 className='swipe__card--caption mb-0'>{resp.class_name}</h5></div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </>
          </Swiper>
        </div>
      )}
      {(
        !loading &&
        !error && data.length === 0 && (
          <div className="col-12 my-5">
            <div className="emptyData text-center">{nodata}</div>
          </div>
        )
      )
      }

      {popupImage && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <img src={`${backendUrl}/classrooms/${popupImage}`} alt="Popup" className="popup-image" />
          </div>
        </div>
      )}

    </>
  )
}

export default FacilitiesClassRoomDetails
