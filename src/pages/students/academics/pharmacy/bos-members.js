import React from 'react';
import Header from '../../../../components/Header';
import FooterTwo from '../../../../components/Footer/index';
import StudyBreadcrumb from '../../../../components/Breadcrumb/outreach';
import SideManu from './sidebar';
import SideManuDept from '../commonpages/sidebar-menu';
import ScrollToTop from '../../../../components/ScrollTop';
import BosStudies from '../commonpages/bos-studies';

const MiningBosStudies = () => {
     const department = 'pharmacy';
  return (
    <>
          <Header
                parentMenu='academics'
                menuCategoryEnable='enable'
            />
             <div class="react-wrapper background_height">
                <div class="react-wrapper-inner background_image">
                    <StudyBreadcrumb pageTitle="Overview" />
                    <div className="high_quality-section pt---60 pb---120">
                        <div class="container ">
                             <SideManu />
                             <div className="col-md-12 col-sm-12 col-12 bg_color bg-white">

                              <div className="col-md-4 d-flex justify-content-end w-100 mb-3">
                                   <SideManuDept department = {department} />
                              </div>
                             <div class="container ">
                              <div className="row ">
                                  <div className="col-md-12 col-12">
                                      <h4 className="hedingname_orange mb-2">Board of Studies</h4>
                                    </div>
                                </div>
                                </div>
                                <div class="container ">
                              <div className="row ">
                                  <div className="col-md-12 col-12">
                                       <BosStudies department = {department} />
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

export default MiningBosStudies;
