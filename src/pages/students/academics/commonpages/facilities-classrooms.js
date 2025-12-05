import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../../../components/Header';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import point from '../../../../assets/images/icons/image.png';
import ScrollToTop from '../../../../components/ScrollTop';
import FooterTwo from '../../../../components/Footer/index';
import { useParams } from "react-router-dom";
import SideManuDept from '../commonpages/sidebar-menu';

// ✅ Import all side menus statically
import ECESideManu from '../engineering/department/ece/sidebar';
import EEESideManu from '../engineering/department/eee/sidebar';
import CSESideManu from '../engineering/department/cse/sidebar';
import CivilSideManu from '../engineering/department/civil/sidebar';
import ITSideManu from '../engineering/department/it/sidebar';
import AIMLSideManu from '../engineering/department/aiml/sidebar';
import FreshmanSideManu from '../engineering/department/freshman/sidebar';
import MechSideManu from '../engineering/department/mechanical/sidebar';
import MiningSideManu from '../engineering/department/mining/sidebar';
import PTSideManu from '../engineering/department/petroleum/sidebar';
import AGRISideManu from '../engineering/department/agricultural/sidebar';
import MCASideManu from '../engineering/department/mca/sidebar';
import DSSideManu from '../engineering/department/datascience/sidebar';
import MBASideManu from '../business/sidebar';
import SciencesSideManu from '../sciences/sidebar';
import PharmacySideManu from '../pharmacy/sidebar';

import Loading from './loading.gif';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import 'swiper/css/pagination';

const FacilitiesClassRoomDetails = () => {
  const backendUrl = process.env.REACT_APP_DATABASEURL;
  const nodata = "This Section will be update very Soon..";
  const [data, setData] = useState([]);
  const [aboutClass, setAboutClass] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [popupImage, setPopupImage] = useState(null);
  const { parameterId } = useParams();
  const department = `${parameterId}`;
  const sideMenuMap = {
    ece: ECESideManu,
    eee: EEESideManu,
    cse: CSESideManu,
    civil: CivilSideManu,
    it: ITSideManu,
    aiml: AIMLSideManu,
    freshman: FreshmanSideManu,
    mechanical: MechSideManu,
    mining: MiningSideManu,
    petroleum: PTSideManu,
    agricultural: AGRISideManu,
    mca: MCASideManu,
    ds: DSSideManu,
    mba: MBASideManu,
    "forensic-sciences": SciencesSideManu,
    pharmacy: PharmacySideManu,

  };

  const DynamicSideMenu = sideMenuMap[department] || SideManuDept;

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
      <Header parentMenu='academics' menuCategoryEnable='enable' />
      <div className="react-wrapper background_height">
        <div className="react-wrapper-inner background_image">
          <StudyBreadcrumb pageTitle="Overview" />
          <div className="high_quality-section pt---50 pb---120">
            <div className="container">
              <DynamicSideMenu />
              <div className="col-md-12 col-sm-12 col-12 bg_color bg-white">
                <div className="container">
                  <div className="col-md-4 d-flex justify-content-end w-100 mb-1">
                    <SideManuDept department={department} />
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-12 mt-6">
                      <h4 className="hedingname_orange mb-4">Class Rooms</h4>
                    </div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ScrollToTop />
        </div>
      </div>
      <FooterTwo />
    </>
  );
};

export default FacilitiesClassRoomDetails
