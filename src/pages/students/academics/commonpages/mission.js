import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loading from './loading.gif';


const Overview = ({ department }) => {
  const backendUrl = process.env.REACT_APP_DATABASEURL;
  const nodata = "This section will be updated very soon.";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axios.get(`${backendUrl}api/get-dept-mission/${department}`);
        if (response.status === 200 && response.data) {
          setData(response.data.dept_mission_data || []);
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
        <div className="col-12 mb-5 text-center">
          <img src={Loading} alt="loading" />
        </div>
      )}

      {error && (
        <div className="col-12 my-5 text-center text-danger">
          {error}
        </div>
      )}

      {!loading && !error && data.length > 0 && (
        <div className="col-12 container mb-5">
          <b className="about__title wow animate__fadeInUp" data-wow-duration="0.5s" style={{ fontSize: "20px" }}>
            <span className="hedingname_orange">Mission</span>
          </b>
          <div class="degree-list-container">
            <ul class="degree-list">
              {data?.map((item, index) => (
                // <li key={index}><span>{`M ${index + 1}: ${item.about}`}</span></li>
                <li key={index}><span class="icon fw-bold">{`M${index + 1}:`}</span><span>{`${item.about}`}</span></li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {!loading && !error && data.length === 0 && (
        <div className="col-12 my-5 text-center">
          {nodata}
        </div>
      )}
    </>
  );
};

export default Overview;