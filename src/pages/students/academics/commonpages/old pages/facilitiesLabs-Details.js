import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loading from './loading.gif';
import point from '../../../../assets/images/icons/image.png';

const FacilitiesLabsDetails = ({ department }) => {
  const backendUrl = process.env.REACT_APP_DATABASEURL;
  const nodata = "This Section will be update very Soon..";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

    const [popupImage, setPopupImage] = useState(null);
  
      const openPopup = (item) => {
          setPopupImage(item);
      };
  
      const closePopup = () => {
          setPopupImage(null);
      };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(`${backendUrl}api/get-dept-labs_by_name/${department}`);

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
          <div className="col-md-12 col-12">
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
                  ):("")}
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

    </>

    
  )
}

export default FacilitiesLabsDetails
