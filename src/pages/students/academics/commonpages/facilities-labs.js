
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


const FacilitiesLabsDetails = () => {
  const backendUrl = process.env.REACT_APP_DATABASEURL;
  const nodata = "This Section will be update very Soon..";
  const [popupImage, setPopupImage] = useState(null);
  const openPopup = (item) => {
    setPopupImage(item);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(`${backendUrl}api/get-dept-labs_by_name/${department}`);
        // const response = await axios.get(`${backendUrl}api/get-dept-labs_by_name/ECE`);
        if (response.status === 200 && response.data) {
          setData(response.data.dept_labs_data || []);
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
                      <h4 className="hedingname_orange mb-4">Academic Labs</h4>
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

                    {!loading && !error && data.length > 0 && (
                      <>
                        <div className="col-md-12 col-12 mt-2">
                          {
                            data.map((item, index) => (
                              <>
                                {item.about && item.about.trim() !== "" && (<p>{item.about}</p>)}
                                <div className='row align-items-center'>
                                  {item.attachment ? (
                                    <div className='col-12 col-md-6  col-lg-6 col-xl-6'>
                                      <div className="teaching--card--imgWrap">

                                        <img
                                          src={`${backendUrl}/dept_labs/${item.attachment}`}
                                          alt={item.title_name}
                                          className="img-fluid"
                                          onClick={() => openPopup(item.attachment)}
                                          style={{ cursor: 'pointer' }}
                                        />

                                      </div>
                                    </div>
                                  ) : ("")}
                                  <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
                                    <ul>
                                      {item.labs
                                        ?.split(",")
                                        .map((sentence) => sentence.trim())
                                        .filter(Boolean)
                                        .map((sentence, index) => (
                                          <li key={index}> <span class="icon"><img className='pointimage' src={point} /></span> {sentence}.</li>
                                        ))}
                                    </ul>
                                  </div>
                                </div>
                              </>
                            ))}
                        </div>
                      </>
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
                          <img src={`${backendUrl}/dept_labs/${popupImage}`} alt="Popup" className="popup-image" />
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

export default FacilitiesLabsDetails
