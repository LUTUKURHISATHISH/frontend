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

const BosStudies = () => {
    const backendUrl = process.env.REACT_APP_DATABASEURL;
    const nodata = "No data available for the selected year."
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
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
                const response = await axios.get(`${backendUrl}api/get-dept-bos_by_name/${department}`);
                if (response.status === 200 && response.data) {
                    setData(response.data.dept_bos_data);
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
    }, [backendUrl]);

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
                                            <h4 className="hedingname_orange mb-4">BoS Members</h4>
                                        </div>
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
                                                    {loading && <tr><td colSpan={5} className='text-center py-5'><img src={Loading} alt='' /></td> </tr>}
                                                    {error && <tr><td colSpan={5} className='text-center py-5'><span className='text-danger'>{error}</span></td></tr>}
                                                    {!loading && !error && data.length > 0 && (
                                                        <>
                                                            {
                                                                data?.map((item, index) => (
                                                                    <tr key={index}>
                                                                        <td valign='middle' className='text-center'>{index + 1}</td>
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

export default BosStudies
