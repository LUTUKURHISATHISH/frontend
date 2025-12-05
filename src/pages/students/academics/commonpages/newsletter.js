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

const NewsLetterDetails = () => {
    const backendUrl = process.env.REACT_APP_DATABASEURL;
    const nodata = "No data available for the selected year."
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const newsImage = `${backendUrl}newsletters/newsletters.webp`;
    const newsdefaultImg = "https://placehold.jp/256x340.png";
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const year = selectedYear;
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
                                            <h4 className="hedingname_orange mb-4">Newsletters</h4>
                                        </div>
                                        <div className="col-md-12 col-12 mt-6">
                                            <div className='res__pub--pageSlect'>
                                                <p className='mb-0 me-2  d-block d-lg-none d-xl-none d-xxl-none'>Year:</p>
                                                <p className='mb-0 me-2 d-none d-lg-block d-xl-block d-xxl-block'>Select Year:</p>
                                                <select name="Year" id="Year" className="frm--select"
                                                    value={selectedYear}
                                                    onChange={(e) => setSelectedYear(e.target.value)}>
                                                    <option value="2025">2025</option>
                                                    <option value="2024">2024</option>
                                                </select>
                                            </div>
                                        </div>
                                        <br />
                                        {loading && <div className='col-12 mb-5'><div className='emptyData text-center'><img src={Loading} alt='' /></div></div>}
                                        {error && <div className='col-12 my-5'><div className='emptyData text-danger text-center'>{error}</div></div>}
                                        {!loading && !error && data.length > 0 && (
                                            <>
                                                {
                                                    data.map(newsdata => (
                                                        <div className='col-12  col-md-6 col-lg-4 col-xl-4 col-xxl-3 mb-5'>
                                                            {
                                                                newsdata.attachment ? (
                                                                    <a href={`${backendUrl}/newsletters/${newsdata.attachment}`} target="_blank" rel="noopener noreferrer">
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
                                                    ))}
                                            </>
                                        )}
                                        {!loading && !error && data.length === 0 && (<div className='col-12 mb-5'><div className='emptyData text-danger text-center'>{nodata}</div></div>)}
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
    )
}

export default NewsLetterDetails
