import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loading from './loading.gif';

const ResearchPublications = ({year, department}) => {
    const nodata = "No data available for the selected year."

    const backendUrl = process.env.REACT_APP_DATABASEURL; 

    const [data, setData] = useState([]);
       
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

     //pagination
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage, setItemsPerPage] = useState(6); 

    useEffect(()=>{
        const getData = async () =>{
                setLoading(true);
                setError();
                try{
                    const response = await axios.get(`${backendUrl}api/dept_publications_data_by_year/${year}/${department}`);
                    console.log( "API Data" , response);
                    if(response.status === 200 &&  response.data){
                        setData(response.data.Publications_Details);
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

  const totalPages = Math.ceil(data.length / itemsPerPage);

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
                          <th className='dep__table--head'>Name of the Author</th>
                          <th className='dep__table--head'>Title of the Article</th>
                          <th className='dep__table--head'>Journal Name</th>
                          <th className='dep__table--head'>SCI/Scopus</th>
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
                                    <td valign='middle' className='' style={{ width: '24%' }}>{item.authors}</td>
                                    <td valign='middle' className='text-left' style={{ width: '36%' }}>{item.article}</td>
                                    <td valign='middle' className='text-left'>{item.journal_name}</td>
                                    <td valign='middle' className='text-center'>{item.category}</td>
                                    
                                </tr>
                            ))
                        }
                    </>
                   )}
                  {!loading && !error && currentItems.length === 0 && (<tr><td colSpan={5} className='text-center py-5'><span className='text-danger'>{nodata}</span></td></tr>)}
                  </tbody>
              </table>
              <>
              {totalPages.length !== 0 && (
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
              ) }
                  
              </>
          </div>
    </>
  )
}

export default ResearchPublications
