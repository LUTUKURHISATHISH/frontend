import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../../../components/Header';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import point from '../../../../assets/images/icons/image.png';
import ScrollToTop from '../../../../components/ScrollTop';
import FooterTwo from '../../../../components/Footer/index';
import YouTube from "react-youtube";
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



// import Back from './back.gif';
// import { Link } from 'react-router-dom';
const TopicDetails = (course) => {
  const backendUrl = process.env.REACT_APP_DATABASEURL;
  const { parameterId } = useParams();
  const department = `${parameterId}`;

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const topicsdefaultImg = "https://placehold.jp/520x360.png";
  const [popupImage, setPopupImage] = useState(null);
  const [showPopup, setShowPopup] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videoEnded, setVideoEnded] = useState(false);

  // ✅ Map department to correct sidebar
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
    mba:MBASideManu,
    "forensic-sciences": SciencesSideManu,
    pharmacy: PharmacySideManu,
  };

  // ✅ Select correct component (fallback = default SideManuDept)
  const DynamicSideMenu = sideMenuMap[department] || SideManuDept;
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
          `${backendUrl}api/dept_digital_content/${parameterId}`
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
      <Header parentMenu='academics' menuCategoryEnable='enable' />
      <div class="react-wrapper background_height">
        <div class="react-wrapper-inner background_image">
          <StudyBreadcrumb pageTitle="Overview" />
          <div className="high_quality-section pt---60 pb---120">
            <div class="container ">
             <DynamicSideMenu />
              <div className="col-md-12 col-sm-12 col-12 bg_color bg-white">
                <div class="container">
                   <div className="col-md-4 d-flex justify-content-end w-100 mb-1">
                  <SideManuDept department={department} />
                </div>
                  <div className='row'>
                    <div className="col-md-12 col-12 mt-6">
                      <h4 className="hedingname_orange mb-4">Digital Content</h4>
                    </div>
                    <>
                      {data.map((item) => (
                        <div key={item._id} >
                          <div className="row">
                            <div className="col-md-12 col-12">
                              <h4 className="hedingname_orange mb-4">{item.course}</h4>
                            </div>
                          </div>
                          <p>{item.about}</p>
                          <div className="teaching--card align-items-start mb-4">
                            <div className="col-12 col-lg-10 col-xl-10 col-md-10">
                              <div className="teaching--card--contentWrap p-0">
                                <ul className='topics--list'>
                                  {item.topics.map(data => (
                                    <li><span class="icon"><img className='pointimage' src={point} /></span> <span onClick={() => openvideoPopup(data.youtube_link)}>{data.topic_name} </span></li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="col-12 col-lg-2 col-xl-2 col-md-2">
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
