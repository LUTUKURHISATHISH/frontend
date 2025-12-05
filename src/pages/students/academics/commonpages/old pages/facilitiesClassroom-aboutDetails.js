import React,  { useEffect, useState } from 'react'
import axios from 'axios';
import Loading from './loading.gif';

const FacilitiesClassroomAbout = ({department}) => {
    const backendUrl = process.env.REACT_APP_DATABASEURL;
   
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState("");
      

      useEffect(() => {
        const getData = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await axios.get(`${backendUrl}api/get-dept-classroom/${department}`);

            if (response.status === 200 && response.data) {
            setData(response.data.dept_about_classroom_data || []);
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
           {
            data.map(item =>(
                <p>{item.about}</p>
            ))
           }
           </>
      )}
      

   </>
  )
}

export default FacilitiesClassroomAbout
