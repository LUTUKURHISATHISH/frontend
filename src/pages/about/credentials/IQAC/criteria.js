import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import ScrollToTop from '../../../../components/ScrollTop';
// import "../../../components/Styles/pragram.css"
// import SideManu from './sidebar_iqac';
import Loading from '../../images/loading.gif';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import { useParams } from 'react-router-dom';

const backendUrl = process.env.REACT_APP_DATABASEURL;
const IQAC = () => {

    const [professor, setProfessor] = useState(null);
    const { parameterId } = useParams();
    // console.log(parameterId)

    useEffect(() => {
        const fetchProfessorData = async () => {
            try {
                const response = await axios.get(`${backendUrl}api/qa_gauge_criterias/${parameterId}`);
                setProfessor(response.data.criteria_Details);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching professor data:', error);
            }
        };
        fetchProfessorData();
    }, []);

    // if (!professor) {
    //     return <div><center><img src={Loading} alt="Loading..." /></center></div>;
    // }

    return (
        <>
            <Header
                parentMenu='page'
                menuCategoryEnable='enable'
            />

             <div class="react-wrapper background_height">
             <div class="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle={`Criteria -${parameterId}`} />

                    <div className="high_quality-section pt---60 pb---120">
                        <div className="container">
                            <div className="react__title__section-all">

                                <div class="research" id="">
                                    <div class="container">
                                        <div class="row m-0">
                                            {/* <SideManu /> */}
                                            {/* <div class="col-md-1  col-sm-1 col-2"></div> */}
                                            <div className="col-md-12 col-sm-12 col-12" style={{ backgroundColor: "#f8f9fa" }}>
                                                {professor ? (
                                                    <div className="table-responsive table-striped" style={{ width: "100%" }}>
                                                        <table className="table responsive">
                                                            <thead>
                                                                <tr>
                                                                    <th style={{ backgroundColor: "#3166c7", color: "#fff", textAlign: "center" }}>S.No</th>
                                                                    <th style={{ backgroundColor: "#3166c7", color: "#fff", textAlign: "center", width: "26%" }}>Metric</th>
                                                                    <th style={{ backgroundColor: "#3166c7", color: "#fff", textAlign: "center" }}>Description</th>
                                                                    <th style={{ backgroundColor: "#3166c7", color: "#fff", textAlign: "center", width: "6%" }}>Links</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {professor.map((item, index) => {
                                                                   
                                                                    const isFirstOccurrence =
                                                                        index === 0 || professor[index - 1].metric !== item.metric;
                                                                    const rowSpanCount = isFirstOccurrence
                                                                        ? professor.filter((data) => data.metric === item.metric).length
                                                                        : 0;

                                                                    return (
                                                                        <tr key={index}>
                                                                            <td  style={{ textAlign: "center", verticalAlign: "middle" }}>{index + 1}</td>

                                                                            {/* Render the Metric column only for the first occurrence */}
                                                                            {isFirstOccurrence && (
                                                                                <td
                                                                                    rowSpan={rowSpanCount}
                                                                                    style={{ textAlign: "justify", verticalAlign: "middle" ,verticalAlign:"center"}}
                                                                                >
                                                                                    {item.metric}
                                                                                </td>
                                                                            )}

                                                                            <td style={{ textAlign: "justify", verticalAlign: "middle" }}>
                                                                                {item.description.split("<br/>").map((line, lineIndex) => (
                                                                                    <React.Fragment key={lineIndex}>
                                                                                        {line}
                                                                                        <br />
                                                                                    </React.Fragment>
                                                                                ))}
                                                                            </td>
                                                                            <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                                                {item.attachment.map((file, fileIndex) => (
                                                                                    <div key={fileIndex}>
                                                                                        <a
                                                                                            href={`${backendUrl}/${file}`}
                                                                                            target="_blank"
                                                                                            rel="noopener noreferrer"
                                                                                            style={{ display: "block", margin: "5px 0" }}
                                                                                        >
                                                                                            <i className="fa fa-file-pdf-o" />
                                                                                            <span
                                                                                                style={{
                                                                                                    color: "red",
                                                                                                    marginLeft: "5px",
                                                                                                    fontSize: "15px",
                                                                                                }}
                                                                                            >
                                                                                                Link {fileIndex + 1}
                                                                                            </span>
                                                                                        </a>
                                                                                    </div>
                                                                                ))}
                                                                            </td>
                                                                        </tr>
                                                                    );
                                                                })}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <center>
                                                            <img src={Loading} alt="Loading..." />
                                                        </center>
                                                    </div>
                                                )}
                                            </div>

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
}

export default IQAC;