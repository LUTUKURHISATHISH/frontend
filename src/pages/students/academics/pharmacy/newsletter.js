import React ,{useState} from 'react';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import SideManu from './sidebar';
import SideManuDept from '../commonpages/sidebar-menu';
import ScrollToTop from '../../../../components/ScrollTop';
import NewsLetterDetails from '../commonpages/newsletter-details';

const MiningNewsLetter = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const department = 'pharmacy';
    const year = selectedYear;

    return (
        <>
            <Header parentMenu='mining' menuCategoryEnable='enable' />
            <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="Overview" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                            <SideManu />
                            <div className="col-md-12 col-sm-12 col-12 bg_color bg-white">

                                <div className="col-md-4 d-flex justify-content-end w-100 mb-3">
                                    <SideManuDept department={department}/>
                                </div>
                                <div class="container ">

                                    <div className="row ">
                                        <div className="col-6 col-md-4 col-lg-4 col-xl-4">
                                            <h4 className="hedingname_orange mb-4">News Letter</h4>
                                        </div>
                                        <div className="col-6 col-md-8 col-lg-8 col-xl-8 pe-lg-0">
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

                                </div>
                                <div class="container my-3 ">
                                    <div className='row'>
                                        <NewsLetterDetails year={year} department={department} />
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

export default MiningNewsLetter;
