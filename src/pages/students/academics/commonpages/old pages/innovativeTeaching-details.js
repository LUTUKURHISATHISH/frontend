import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './loading.gif';

  const InnovativeTeachingDetails = ({ department }) => {
  const backendUrl = process.env.REACT_APP_DATABASEURL;

  const nodata = "No data available for the selected year.";
  const defaultImage = "http://localhost:3000/images/mining/teaching.jpg";

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
        const response = await axios.get(
          `${backendUrl}api/get-dept-innovative_by_name/${department}`
        );

        if (response.status === 200 && response.data) {
          setData(response.data.innovative_details || []);
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

      {!loading && !error && data.length > 0 ? (
        <>
          {data.map((item) => (
            <div key={item._id} className="teaching--card mb-4">
              <div className="col-12 col-lg-6 col-xl-6">
                <div className="teaching--card--imgWrap">
                  {item.attachment ? (
                    <img
                      src={`${backendUrl}/innovative_teaching/${item.attachment}`}
                      alt={item.title_name}
                      className="img-fluid"
                      onClick={() => openPopup(item.attachment)}
                        style={{ cursor: 'pointer' }}
                    />
                  ) : (
                    <img
                      src={defaultImage}
                      alt={item.title_name}
                      className="img-fluid"
                    />
                  )}
                </div>
              </div>

              <div className="col-12 col-lg-6 col-xl-6">
                <div className="teaching--card--contentWrap">
                  <h4 className="hedingname_orange mb-3">
                    {item.title_name}
                  </h4>
                  <p className='text-justify'> {item.content}</p>
                  {/* <ul className='default--list'>
                    {item.content
                      ?.split(".")
                      .map((sentence) => sentence.trim())
                      .filter(Boolean)
                      .map((sentence, index) => (
                        <li key={index}> <span class="icon"><img className='pointimage' src={point} /></span> {sentence}.</li>
                      ))}
                  </ul> */}
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        !loading &&
        !error && (
          <div className="col-12 my-5">
            <div className="emptyData text-center">{nodata}</div>
          </div>
        )
      )}


      {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-btn" onClick={closePopup}>&times;</span>
                        <img src={`${backendUrl}/innovative_teaching/${popupImage}`} alt="Popup" className="popup-image" />
                    </div>
                </div>
            )}

    </>
  );
};

export default InnovativeTeachingDetails;
