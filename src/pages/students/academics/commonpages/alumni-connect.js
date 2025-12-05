import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../../../components/Header';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../components/ScrollTop';
import FooterTwo from '../../../../components/Footer/index';
import { useParams } from "react-router-dom";

// ✅ Side menus
import SideManuDept from '../commonpages/sidebar-menu';
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
import Profile from './man.png';

const backendUrl = process.env.REACT_APP_DATABASEURL;

const AlumniConnectDetails = () => {

    const [professor, setProfessor] = useState([]);
    const [AboutAlumini, setAboutAlumini] = useState([]);
    const { parameterId } = useParams();
    const department = `${parameterId}`;

    // ✅ Department sidebar mapping
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
        mba:MBASideManu,
        "forensic-sciences": SciencesSideManu,
        pharmacy: PharmacySideManu,

      };

    const DynamicSideMenu = sideMenuMap[department] || SideManuDept;

    useEffect(() => {
        const fetchProfessorData = async () => {
            try {
                const [aluminiResp, aboutdataResp] = await Promise.all([
                    axios.get(`${backendUrl}api/get-dept-alumni_by_name/${department}`),
                    axios.get(`${backendUrl}api/get-dept-alumni/${department}`)
                ]);

                if (aluminiResp.status === 200) {
                    setProfessor(aluminiResp.data.alumni_details);
                }
                if (aboutdataResp.status === 200) {
                    setAboutAlumini(aboutdataResp.data.dept_about_alumni_data);
                }

            } catch (error) {
                console.error('Error fetching alumni data:', error);
            }
        };

        fetchProfessorData();
    }, [department]);

    // ✅ Correct loader check
    // if (!professor.length) {
    //     return (
    //         <div><center><img src={Loading} alt="Loading..." /></center></div>
    //     );
    // }

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
                                            <h4 className="hedingname_orange mb-4">Alumni Connect</h4>
                                        </div>

                                        <div className='alumin__content'>
                                            {AboutAlumini?.map(item => (
                                                <p key={item._id}>{item.about}</p>
                                            ))}
                                        </div>

                                        <div className="staff-container">
                                            <div className="col-md-12 col-12">
                                                <h4 className="hedingname_orange mb-2">Distinguished Alumni</h4>
                                            </div>

                                            {professor.map((item, index) => (
                                                <div
                                                    key={item.ID}
                                                    className={`staff-card ${index % 2 === 0 ? 'cardbleft' : 'cardbright'}`}
                                                >
                                                    {item.attachment ? (
                                                        <img
                                                            src={`${backendUrl}alumni/${item.attachment}`}
                                                            className="staff-image"
                                                            alt={item.student_name}
                                                        />
                                                    ) : (
                                                        <img src={Profile} className="staff-image" alt="Default Profile" />
                                                    )}
                                                    <div className="staff-detail-card">
                                                        <span className="staff-name">{item.student_name}</span>
                                                        <p>{item.roll_number}</p>
                                                        <p className="staff-role">{item.role}</p>
                                                    </div>
                                                </div>
                                            ))}
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
    );
};

export default AlumniConnectDetails;
