import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loading from './loading.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';

const BosMeetingDetails = ({year, department}) => {

const backendUrl = process.env.REACT_APP_DATABASEURL;

const nodata = "No data available for the selected year."
    
const [data, setData] = useState([]);
    
const [loading, setLoading] = useState(false);

const [error, setError] = useState("");

 //pagination
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(10); 

    useEffect(()=>{
        const getData = async () =>{
                setLoading(true);
                setError();
                try{
                    const response = await axios.get(`${backendUrl}api/dept_meeting_data_by_year/${year}/${department}`);
                    if(response.status === 200 &&  response.data){
                        console.log("API" , response);
                        setData(response.data.bos_meeting_details);
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
    },[year, backendUrl]);

   const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
          <div class="table-responsive mb-4">
              <table class="table responsive">
                  <thead>
                      <tr>
                          <th className='dep__table--head'>S.No</th>
                          <th className='dep__table--head'>Minutes of Meeting</th>
                          <th className='dep__table--head'>Documents</th>
                      </tr>
                  </thead>
                  <tbody>
                        {loading && <tr><td colSpan={5} className='text-center py-5'><img src={Loading}  alt=''/></td> </tr>}
                        {error && <tr><td colSpan={5} className='text-center py-5'><span className='text-danger'>{error}</span></td></tr>}
                        {!loading && !error && currentItems.length > 0 && (
                         <>
                              {
                                  currentItems?.map((item, index) => (
                                      <tr key={index}>
                                          <td valign='middle' className='text-center'>{indexOfFirstItem + index + 1}</td>
                                          <td valign='middle' className='text-center'>{item.meeting_name}</td>
                                          <td valign='middle' className='text-center'>
                                              {item.attachment ? (
                                                  <a href={`${backendUrl}/bos_meeting/${item.attachment}`}  target="_blank" rel="noopener noreferrer">
                                                        <FontAwesomeIcon icon={faEye} /> View
                                                  </a>) : (<span className='text-muted'><FontAwesomeIcon icon={faEye} /> View </span>)
                                              }
                                          </td>
                                      </tr>
                                  ))
                              }
                     </>
                   )}
                  {!loading && !error && data.length === 0 && (<tr><td colSpan={5} className='text-center py-5'><span className='text-danger'>{nodata}</span></td></tr>)}
                  </tbody>
              </table>
                <>
                {totalItems > itemsPerPage && (
                <>
                    <ul class="pagination pagination-sm justify-content-end my-2">
                    <li class="page-item" onClick={() => handlePageChange(currentPage - 1)} disabled={indexOfFirstItem === 0} ><button class="page-link" disabled={indexOfFirstItem === 0} onClick={(e) => {e.preventDefault();}}>Prev</button></li>
                    {
                    Array(totalPages).fill(null).map((page, index) => (
                    <li class="page-item" key={index + 1} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                    <button class="page-link" onClick={(e) => {e.preventDefault();}}>{index + 1}</button>
                    </li>
                    ))}

                    <li class="page-item" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}><button class="page-link"  onClick={(e) => {e.preventDefault();}}>Next</button></li>
                    </ul>
                </>
                )}
                </>
          </div>
    </>
  )
}

export default BosMeetingDetails
