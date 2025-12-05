import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loading from './loading.gif';


const BosStudies = ({department}) => {

const backendUrl = process.env.REACT_APP_DATABASEURL;

const nodata = "No data available for the selected year."
    
const [data, setData] = useState([]);
    
const [loading, setLoading] = useState(false);

const [error, setError] = useState("");

    useEffect(()=>{
        const getData = async () =>{
                setLoading(true);
                setError();
                try{
                    const response = await axios.get(`${backendUrl}api/get-dept-bos_by_name/${department}`);
                    if(response.status === 200 &&  response.data){
                        setData(response.data.dept_bos_data);
                    }
                    else{
                        throw new Error("Unexpected API response format.");
                    }
                } catch (err) {
                console.error("Error fetching data:", err);
                setError(err.response?.data?.message || err.message || "Failed to fetch data.");
            } finally {
                setLoading(false);
            }
        };
        getData();
    },[backendUrl]);

  return (
    <>
          <div class="table-responsive mb-4">
              <table class="table responsive">
                  <thead>
                      <tr>
                          <th className='dep__table--head'>S.No</th>
                          <th className='dep__table--head' style={{ width: '40%' }}>Name </th>
                          <th className='dep__table--head'>Designation</th>
                          <th className='dep__table--head'>Position in the committee</th>
                      </tr>
                  </thead>
                  <tbody>
                        {loading && <tr><td colSpan={5} className='text-center py-5'><img src={Loading}  alt=''/></td> </tr>}
                        {error && <tr><td colSpan={5} className='text-center py-5'><span className='text-danger'>{error}</span></td></tr>}
                        {!loading && !error && data.length > 0 && (
                         <>
                        {
                            data?.map((item, index) => (
                                <tr key={index}>
                                    <td valign='middle' className='text-center'>{ index + 1}</td>
                                    <td valign='middle' >{item.name}</td>
                                    <td valign='middle' >{item.designation}</td>
                                    <td valign='middle' >{item.position}</td>
                                </tr>
                            ))
                        }
                     </>
                   )}
                  {!loading && !error && data.length === 0 && (<tr><td colSpan={5} className='text-center py-5'><span className='text-danger'>{nodata}</span></td></tr>)}
                  </tbody>
              </table>
          </div>
    </>
  )
}

export default BosStudies
