import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loading from './loading.gif';

const backendUrl = process.env.REACT_APP_DATABASEURL;
const ResearchProjectDetails = ({department}) => {
    const nodata = "No data available for the selected year."
    
    const [data, setData] = useState([]);
   
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(()=>{
         const fetchData = async () => {
            setLoading(true);
            setError("");
             try {
                const response = await axios.get(`${backendUrl}api/get-dept-projects_by_name/${department}`);
                 console.log("API Response:", response);
                // console.log("syear", selectedYear);
                 // Set data only if the response is valid
                if (response.status === 200 && response.data) {
                    setData(response.data.dept_projects_data);
                } else {
                    throw new Error("Unexpected API response format.");
                }
             }
             catch (err) {
                console.error("Error fetching data:", err);
                setError(err.response?.data?.message || err.message || "Failed to fetch data.");
            } finally {
                setLoading(false);
            }
         };
        fetchData();
    }, [department, backendUrl]);  

  return (
    <>
            <div class="table-responsive mb-4">
            <table class="table responsive">
            <thead>
                <tr>
                    <th className='dep__table--head'>S.No</th>
                    <th className='dep__table--head'>Name of Principal Investigator </th>
                    <th className='dep__table--head'>Funding Agency</th>
                    <th className='dep__table--head'>Amount</th>
                    <th className='dep__table--head'>Year</th>
                </tr>
            </thead>
            <tbody>
                  {loading && <tr><td colSpan={5} className='text-center py-5'><img src={Loading} /></td> </tr>}
                  {error && <tr><td colSpan={5} className='text-center py-5'><span className='text-danger'>{error}</span></td></tr>}
                   {!loading && !error && data.length > 0 && (
                    <>
                              {
                                  data?.map((item, index) => (
                                      <tr key={index}>
                                          <td valign='middle' className='text-center'>{index + 1}</td>
                                          <td valign='middle' className='text-center'>{item.investigator}</td>
                                          <td valign='middle' className='text-left'>{item.funding_agency}</td>
                                          <td valign='middle' className='text-center'>INR {item.amount}</td>
                                          <td valign='middle' className='text-center'>{item.year}</td>
                                      </tr>
                                  ))
                              }
                    </>
                   )}
                  {!loading && !error && data.length === 0 && (<tr><td colSpan={5}><span className='text-danger'>{nodata}</span></td></tr>)}
            </tbody>
            </table>
            </div>
    </>

    
  )
}

export default ResearchProjectDetails
