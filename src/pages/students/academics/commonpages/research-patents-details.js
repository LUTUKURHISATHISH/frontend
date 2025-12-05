import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../../../components/Header';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
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

const backendUrl = process.env.REACT_APP_DATABASEURL;
const ResearchPublications = () => {
    const nodata = "No data available for the selected year."
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
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

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            setError();
            try {
                const response = await axios.get(`${backendUrl}api/dept_patents_data_by_year/${year}/${department}`);
                console.log("API Data", response);
                if (response.status === 200 && response.data) {
                    setData(response.data.Patents_Details);
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
    }, [year, backendUrl]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

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
                                            <h4 className="hedingname_orange mb-4">Patents</h4>
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
                                    </div>
                                    <div class="table-responsive mb-4">
                                        <table class="table responsive">
                                            <thead>
                                                <tr>
                                                    <th className='dep__table--head'>S.No</th>
                                                    <th className='dep__table--head'>Name of Inventor </th>
                                                    <th className='dep__table--head'>Title of Patent</th>
                                                    <th className='dep__table--head'>Year</th>
                                                    <th className='dep__table--head'>Category</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {loading && <tr><td colSpan={5} className='text-center py-5'><img src={Loading} alt='' /></td> </tr>}
                                                {error && <tr><td colSpan={5} className='text-center py-5'><span className='text-danger'>{error}</span></td></tr>}
                                                {!loading && !error && currentItems.length > 0 && (
                                                    <>
                                                        {
                                                            currentItems?.map((item, index) => (
                                                                <tr key={index}>
                                                                    <td valign='middle' className='text-center'>{indexOfFirstItem + index + 1}</td>
                                                                    <td valign='middle'>{item.inventor}</td>
                                                                    <td valign='middle' className='text-center'>{item.patent_name}</td>
                                                                    <td valign='middle' className='text-center'>{item.year}</td>
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
                                                        <li class="page-item" onClick={() => handlePageChange(currentPage - 1)} disabled={indexOfFirstItem === 0} ><button class="page-link" disabled={indexOfFirstItem === 0} onClick={(e) => { e.preventDefault(); }}>Prev</button></li>
                                                        {
                                                            Array(totalPages).fill(null).map((page, index) => (
                                                                <li class="page-item" key={index + 1} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                                                                    <button class="page-link" onClick={(e) => { e.preventDefault(); }}>{index + 1}</button>
                                                                </li>
                                                            ))}

                                                        <li class="page-item" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}><button class="page-link" onClick={(e) => { e.preventDefault(); }}>Next</button></li>
                                                    </ul>
                                                </>
                                            )}

                                        </>
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
    );
};

export default ResearchPublications
