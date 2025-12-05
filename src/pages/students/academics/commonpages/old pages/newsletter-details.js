import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loading from './loading.gif';

const NewsLetterDetails = ({ year, department}) => {

    const backendUrl = process.env.REACT_APP_DATABASEURL;

    const nodata = "No data available for the selected year."

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const newsImage = `${backendUrl}newsletters/newsletters.webp`;
    const newsdefaultImg = "https://placehold.jp/256x340.png";


    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            setError();
            try {
                const response = await axios.get(`${backendUrl}api/dept_newsletter_data_by_year/${year}/${department}`);
                if (response.status === 200 && response.data) {
                    setData(response.data.newsletter_details);
                }
                else {
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
    }, [year, backendUrl])

    return (
        <>
            {loading && <div className='col-12 mb-5'><div className='emptyData text-center'><img src={Loading} alt='' /></div></div>}
            {error && <div className='col-12 my-5'><div className='emptyData text-danger text-center'>{error}</div></div>}
            {!loading && !error && data.length > 0 && (
                <>
                    {
                        data.map(newsdata => (
                            <div className='col-12  col-md-6 col-lg-4 col-xl-4 col-xxl-3 mb-5'>
                                {
                                    newsdata.attachment ? (
                                        <a href={`${backendUrl}/newsletters/${newsdata.attachment}`}  target="_blank" rel="noopener noreferrer">
                                            <div className='news--card'>
                                                <div className='news__img--wrap'>
                                                    {
                                                        newsImage ? (<img src={newsImage} alt={newsdata.newsletter_name} className='img-fluid' />) : (<img src={newsdefaultImg} alt={newsdata.newsletter_name} className='img-fluid' />)
                                                    }
                                                </div>
                                                <div className='news__text--wrap text-center'>
                                                    <h5 className='newsTitle lineClamp-2 mb-0'>{newsdata.newsletter_name}</h5>
                                                    <p className='lineClamp-1 mb-0'>{newsdata.newsletter_value}</p>
                                                </div>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className='news--card'>
                                            <div className='news__img--wrap'>
                                                {
                                                    newsImage ? (<img src={newsImage} alt={newsdata.newsletter_name} className='img-fluid' />) : (<img src={newsdefaultImg} alt={newsdata.newsletter_name} className='img-fluid' />)
                                                }
                                            </div>
                                            <div className='news__text--wrap text-center'>
                                                <h5 className='newsTitle lineClamp-2 mb-0'>{newsdata.newsletter_name}</h5>
                                                <p className='lineClamp-1 mb-0'>{newsdata.newsletter_value}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </>
            )}
            {!loading && !error && data.length === 0 && (<div className='col-12 mb-5'><div className='emptyData text-danger text-center'>{nodata}</div></div>)}
        </>
    )
}

export default NewsLetterDetails
