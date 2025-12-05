import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../../components/Header';
import StudyBreadcrumb from '../../../components/Breadcrumb/outreach';
import point from '../../../assets/images/icons/image.png';
import ScrollToTop from '../../../components/ScrollTop';
import FooterTwo from '../../../components/Footer/index';
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import Back from './back.gif';
import { Link } from 'react-router-dom';
const TopicDetails = (course) => {
  const backendUrl = process.env.REACT_APP_DATABASEURL;
  const { parameterId } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const topicsdefaultImg = "https://placehold.jp/520x360.png";

  const [popupImage, setPopupImage] = useState(null);

  const [showPopup, setShowPopup] = useState(null);

  const [currentVideo, setCurrentVideo] = useState(null);

  const [videoEnded, setVideoEnded] = useState(false);

  const openPopup = (item) => {
    setPopupImage(item);
  };

  const closePopup = () => {
    setPopupImage(null);
  };


  const closevideoPopup = () => {
    setShowPopup(false);
    setCurrentVideo(null);

  };

  const getYouTubeID = (url) => {
    if (!url) return null;
    const patterns = [
      /youtu\.be\/([^\?&\/]+)/,
      /youtube\.com\/watch\?v=([^&\/]+)/,
      /youtube\.com\/embed\/([^&\/]+)/,
      /youtube\.com\/v\/([^&\/]+)/,
      /youtube\.com\/shorts\/([^&\/]+)/,
    ];
    for (const p of patterns) {
      const m = url.match(p);
      if (m && m[1]) return m[1];
    }
    return null;
  };

  const openvideoPopup = (youtubeLink) => {
    const videoId = getYouTubeID(youtubeLink); // use your existing helper
    if (videoId) {
      const cleanUrl = `https://www.youtube.com/watch?v=${videoId}`;
      setCurrentVideo(cleanUrl);
      setShowPopup(true);
    }
  };

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
      rel: 0,              // 🔥 no related videos from other channels
      modestbranding: 1,   // hide YouTube logo
      controls: 1,         // show minimal player controls
      showinfo: 0,
      cc_load_policy: 0,   // hide captions
      iv_load_policy: 3,   // hide annotations
      fs: 1,               // allow fullscreen
      disablekb: 0,        // allow keyboard
    },
  };

  const handleEnd = () => {
    // Hide the YouTube player when the video finishes
    setVideoEnded(true);
  };


  useEffect(() => {
    const getData = async () => {
      setError("");
      try {
        const response = await axios.get(
          `${backendUrl}api/topicslist_digital_content/${parameterId}`
        );

        if (response.status === 200 && response.data) {
          setData(response.data.Topiclist || []);
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
      }
    };
    getData();
  }, [backendUrl, course]);


  return (
    <>
      <Header parentMenu='outreach' menuCategoryEnable='enable' />
      <div class="react-wrapper background_height">
        <div class="react-wrapper-inner background_image">
          <StudyBreadcrumb pageTitle="Overview" />
          <div className="high_quality-section pt---60 pb---120">
            <div class="container ">
              <div className="col-md-12 col-sm-12 col-12 bg_color bg-white">
                <div class="container">
                  <div className='row'>
                    <>
                      {data.map((item) => (
                        <div key={item._id} >
                          <div className="row ">
                            <center>
                                <Link to="/digital-content-course">
                                    <img src={Back} alt="Back" style={{ width: '30px', marginTop: '-34px' }} />
                                </Link>
                            </center>
                            <div className="col-md-12 col-12">
                              <h4 className="hedingname_orange mb-4">{item.course}</h4>
                            </div>
                          </div>
                          <p>{item.about}</p>
                          <div className="teaching--card align-items-start mb-4">
                            <div className="col-12 col-lg-8 col-xl-8">
                              <div className="teaching--card--contentWrap p-0">
                                <ul className='topics--list'>
                                  {item.topics.map(data => (
                                    <li><span class="icon"><img className='pointimage' src={point} /></span> <span onClick={() => openvideoPopup(data.youtube_link)}>{data.topic_name} </span></li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="col-12 col-lg-4 col-xl-4">
                              <div className="teaching--card--imgWrap">
                                {item.attachment ? (
                                  <img
                                    src={`${backendUrl}/digital_content/${item.attachment}`}
                                    alt={item.title_name}
                                    className="img-fluid"
                                    onClick={() => openPopup(item.attachment)}
                                    style={{ cursor: 'pointer' }}
                                  />
                                ) : (<img src={topicsdefaultImg} alt='image' />)}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ScrollToTop />
        </div>
      </div>
      <FooterTwo />

      {popupImage && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <img src={`${backendUrl}/digital_content/${popupImage}`} alt="Popup" className="popup-image" />
          </div>
        </div>
      )}

      {showPopup && (
        <div className="popup-overlay" onClick={closevideoPopup} >
          <div
            className="popup-content"
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "800px",
              background: "#000",
              borderRadius: "10px",
            }}
            onClick={(e) => e.stopPropagation()} >

            {/* <YouTube
          videoId={getYouTubeID(currentVideo)}
          opts={{
            height: "500",
            width: "100%",
             playerVars: {
            autoplay: 1,
            controls: 1, // full hide = no settings/cc
            rel: 0,
            modestbranding: 1,
            iv_load_policy: 3,
            cc_load_policy: 0,
            fs: 1,
            disablekb: 1,
          },
          }}
        /> */}

            {!videoEnded ? (
              <YouTube videoId={getYouTubeID(currentVideo)} opts={opts} onEnd={handleEnd} />
            ) : (
              <div className='topics--video--end'>
                <h4 className="mb-4" style={{ color: "#fff" }}>Video ended</h4>
                <button onClick={() => setVideoEnded(false)} className='btn btn-danger btn-md'>Replay</button>
              </div>
            )}
            <button onClick={closevideoPopup} className="close-btn">&times; </button>
          </div>
        </div>
      )}
    </>
  )
}

export default TopicDetails
