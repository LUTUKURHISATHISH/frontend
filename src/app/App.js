import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Preloader from "../components/Preloader";

//Custom Components
import Home from '../pages/home';
import Online from '../pages/online';




// import About from '../pages/about';
// import Login from '../pages/authentication/login';
// import Signup from '../pages/authentication/signup';
import Contact from '../pages/contact';
import Error from '../pages/404';
import LoadTop from '../components/ScrollTop/LoadTop'

//websites
import RDECS2025 from '../pages/websites/rdecs2025';
import ICACTEA2025 from '../pages/websites/icactea2025';
import ICACTEA2026 from '../pages/websites/icactea2026';
import Icmes2025 from '../pages/websites/icmes2025';
import Harshavardhini from '../pages/websites/harshavardhini';

// footerpage
import Gallery from '../pages/footer/gallery';
import Facilities from '../pages/footer/facilities';




// campuslife
import AbhinayaClub from '../pages/home/campus/abhinaya-club';
import SportsInaction from '../pages/home/campus/sports-in-action';
import InclusiveEcosystem from '../pages/home/campus/inclusive-ecosystem';
import SpiritualHarmony from '../pages/home/campus/spiritual-harmony';
// study
import Fees from '../pages/study/fees/fees';
import Scholarship from '../pages/study/fees/scholarship';

import RefundPolicy from '../pages/study/fees/refund-policy';
import AdmissionProcess from '../pages/study/admissions/AdmissionProcess';
import Hostelfacilities from '../pages/study/hostelfacilities/hostel';
import DiplomaPrograms from '../pages/study/programsoffered/diplomaprograms';
import PGPrograms from '../pages/study/programsoffered/pgprograms';
import CorporatePrograms from '../pages/study/programsoffered/corporateprograms';
import UGprograms from '../pages/study/programsoffered/ugprograms';
import PHDprograms from '../pages/study/programsoffered/phdprograms';
import PHDsyllabus from '../pages/study/programsoffered/phd-syllabus';
import PlacementsWhyaditya from '../pages/study/whyaditya/placements';
import FacultyWhyaditya from '../pages/study/whyaditya/faculty';
import AcademicsWhyaditya from '../pages/study/whyaditya/academics-skilling';
import InfrastructureWhyaditya from '../pages/study/whyaditya/infrastructure';
import AmenitiesWhyaditya from '../pages/study/whyaditya/amenities';
import AwardsRecognitions from '../pages/study/whyaditya/awards-recognitions';


// students ---> Facilities

import Infrastructure from '../pages/students/facilities/infrastructure';
import Hostel from '../pages/students/facilities/hostel';
import Health from '../pages/students/facilities/health';
import Sports from '../pages/students/facilities/sports';
import Transport from '../pages/students/facilities/transport';
import Environment from '../pages/students/facilities/environment';

// study close
import Holidays from '../pages/students/academics/holidays';

// students ---> Business
import AcademicsOverview from '../pages/students/academics/academics-overview';
import PGregulations from '../pages/students/academics/business/pg-regulations';
import UGbusinessregulations from '../pages/students/academics/business/ug-regulations';

import PGAcademicCalendar from '../pages/students/academics/business/pg-academic-calendar';
import BusinessPGCurriculum from '../pages/students/academics/business/pg-curriculums';
import BusinessUGCurriculum from '../pages/students/academics/business/ug-curriculums';
import PGOffered from '../pages/students/academics/business/pg-programs-offered';
import AreaSpecialization from '../pages/students/academics/business/area-of-specialization';
import ExamNotifications from '../pages/students/academics/examination/notifications';
import OldQuestionPapers from '../pages/students/academics/examination/old-model-papers';
import ModelPapers from '../pages/students/academics/examination/model-papers';
import ExaminationTeam from '../pages/students/academics/examination/examination-team';

// import MBAOverview from '../pages/students/academics/business/MBA/overview';
import PGOverview from '../pages/students/academics/business/overview';
import MBA_Vision_Mission from '../pages/students/academics/business/vision-mission';
import MBA_PEO_PSO from '../pages/students/academics/business/peo-pso';
import MBAProgramsOffered from '../pages/students/academics/business/MBA/mba-programs-offered';
import MBAFaculty from '../pages/students/academics/business/mba-faculty';

// Engineering
import EngineeringOverview from '../pages/students/academics/engineering/overview';
import EngineeringAcademicCalendar from '../pages/students/academics/engineering/academic-calendar';
import EngineeringUgRegulations from '../pages/students/academics/engineering/ug-regulations';
import EngineeringPgRegulations from '../pages/students/academics/engineering/pg-regulations';
import EngineeringUgCurriculum from '../pages/students/academics/engineering/pg-curriculum';
import UGCurriculum from '../pages/students/academics/engineering/ug-curriculum';
import PDFviewCurriculum from '../pages/students/academics/engineering/pdfview-curriculum';
import Departmentpage from '../pages/students/academics/engineering/department-page';
import EngineeringRegulations from '../pages/students/academics/engineering/eng-regulations';
import EngineeringCurriculum from '../pages/students/academics/engineering/eng-curriculum';

// Sciences
import Sciencesoverview from '../pages/students/academics/sciences/overview';
import SciencesVisionMission from '../pages/students/academics/sciences/vision-mission';
import Sciences_PEO_PSO from '../pages/students/academics/sciences/peo-pso';
import Sciencesoffered from '../pages/students/academics/sciences/offered';
import Sciencespecialization from '../pages/students/academics/sciences/specialization';
import SciencesFaculty from '../pages/students/academics/sciences/sciences-faculty';
import SciencesUgRegulations from '../pages/students/academics/sciences/ug-regulations';
import SciencesPgRegulations from '../pages/students/academics/sciences/pg-regulations';
import SciencesUGcurriculums from '../pages/students/academics/sciences/ug-curriculums';
import SciencesPgCurriculums from '../pages/students/academics/sciences/pg-curriculums';
import SciencesAcademicCalendar from '../pages/students/academics/sciences/academic-calendar';


// Pharmacy
import PharmacyOverview from '../pages/students/academics/pharmacy/overview';
import PharmacyVisionMission from '../pages/students/academics/pharmacy/vision-mission';
import PharmacyPeoPso from '../pages/students/academics/pharmacy/peo-pso';
import PharmacyOffered from '../pages/students/academics/pharmacy/offered';
import PharmacyFaculty from '../pages/students/academics/pharmacy/pharmacy-faculty';
import PharmacySpecialization from '../pages/students/academics/pharmacy/specialization';
import PharmacyAcademicCalendar from '../pages/students/academics/pharmacy/academic-calendar';
import PharmacyRegulationsUG from "../pages/students/academics/pharmacy/ug-regulations";
import PharmacyRegulationsPG from "../pages/students/academics/pharmacy/pg-regulations";
import PharmacyUGCurriculums from "../pages/students/academics/pharmacy/ug-curriculums";
import PharmacyPGCurriculums from "../pages/students/academics/pharmacy/pg-curriculums";


// Eng common pages 
import DigitalContentDetails from '../pages/students/academics/commonpages/digital-content-details';
import FacilitiesLabs from '../pages/students/academics/commonpages/facilities-labs';
import FacilitiesClass from '../pages/students/academics/commonpages/facilities-classrooms';
import ResearchProjectsDetails from '../pages/students/academics/commonpages/research-projects-details';
import ResearchPublicationsDetails from '../pages/students/academics/commonpages/research-publications-details';
import ResearchPatentsDetails from '../pages/students/academics/commonpages/research-patents-details';
import InnovativeDetails from '../pages/students/academics/commonpages/innovative-teaching-details';
import MinutesofMeeting from '../pages/students/academics/commonpages/minutes-of-meeting';
import Members from '../pages/students/academics/commonpages/members';
import Newsletter from '../pages/students/academics/commonpages/newsletter';
import AlumniConnect from '../pages/students/academics/commonpages/alumni-connect';


// Freshman Engineering 
import FreshmanOverview from '../pages/students/academics/engineering/department/freshman/overview';
import FreshmanVisionMission from '../pages/students/academics/engineering/department/freshman/vision-mission';
import FreshmanPeoPso from '../pages/students/academics/engineering/department/freshman/peo-pso';
import FreshmanFaculty from '../pages/students/academics/engineering/department/freshman/faculty';

// Civil  Engineering 
import CivilOverview from '../pages/students/academics/engineering/department/civil/overview';
import CivilVisionMission from '../pages/students/academics/engineering/department/civil/vision-mission';
import CivilPeoPso from '../pages/students/academics/engineering/department/civil/peo-pso';
import CivilFaculty from '../pages/students/academics/engineering/department/civil/faculty';
import CivilProgramsOffered from '../pages/students/academics/engineering/department/civil/programs-offered';


// EEE  Engineering 
import EEEOverview from '../pages/students/academics/engineering/department/eee/overview';
import EEEVisionMission from '../pages/students/academics/engineering/department/eee/vision-mission';
import EEEPeoPso from '../pages/students/academics/engineering/department/eee/peo-pso';
import EEEFaculty from '../pages/students/academics/engineering/department/eee/faculty';
import EEEProgramsOffered from '../pages/students/academics/engineering/department/eee/programs-offered';

// CSE  Engineering 

import CSEOverview from '../pages/students/academics/engineering/department/cse/overview';
import CSEVisionMission from '../pages/students/academics/engineering/department/cse/vision-mission';
import CSEPeoPso from '../pages/students/academics/engineering/department/cse/peo-pso';
import CSEFaculty from '../pages/students/academics/engineering/department/cse/faculty';
import CSEProgramsOffered from '../pages/students/academics/engineering/department/cse/programs-offered';


// IT  Engineering 
import ITOverview from '../pages/students/academics/engineering/department/it/overview';
import ITVisionMission from '../pages/students/academics/engineering/department/it/vision-mission';
import ITPeoPso from '../pages/students/academics/engineering/department/it/peo-pso';
import ITFaculty from '../pages/students/academics/engineering/department/it/faculty';
import ITProgramsOffered from '../pages/students/academics/engineering/department/it/programs-offered';


// ECE  Engineering 
import ECEOverview from '../pages/students/academics/engineering/department/ece/overview';
import ECEVisionMission from '../pages/students/academics/engineering/department/ece/vision-mission';
import ECEPeoPso from '../pages/students/academics/engineering/department/ece/peo-pso';
import ECEFaculty from '../pages/students/academics/engineering/department/ece/faculty';
import ECEProgramsOffered from '../pages/students/academics/engineering/department/ece/programs-offered';



// DS  Engineering 
import DSOverview from '../pages/students/academics/engineering/department/datascience/overview';
import DSVisionMission from '../pages/students/academics/engineering/department/datascience/vision-mission';
import DSPeoPso from '../pages/students/academics/engineering/department/datascience/peo-pso';
import DSFaculty from '../pages/students/academics/engineering/department/datascience/faculty';
import DSProgramsOffered from '../pages/students/academics/engineering/department/datascience/programs-offered';


// PT  Engineering 
import PTOverview from '../pages/students/academics/engineering/department/petroleum/overview';
import PTVisionMission from '../pages/students/academics/engineering/department/petroleum/vision-mission';
import PTPeoPso from '../pages/students/academics/engineering/department/petroleum/peo-pso';
import PTFaculty from '../pages/students/academics/engineering/department/petroleum/faculty';
import PTProgramsOffered from '../pages/students/academics/engineering/department/petroleum/programs-offered';


// AIML  Engineering 
import AIMLOverview from '../pages/students/academics/engineering/department/aiml/overview';
import AIMLVisionMission from '../pages/students/academics/engineering/department/aiml/vision-mission';
import AIMLPeoPso from '../pages/students/academics/engineering/department/aiml/peo-pso';
import AIMLFaculty from '../pages/students/academics/engineering/department/aiml/faculty';
import AIMLProgramsOffered from '../pages/students/academics/engineering/department/aiml/programs-offered';


// AGRI  Engineering 
import AGRIOverview from '../pages/students/academics/engineering/department/agricultural/overview';
import AGRIVisionMission from '../pages/students/academics/engineering/department/agricultural/vision-mission';
import AGRIPeoPso from '../pages/students/academics/engineering/department/agricultural/peo-pso';
import AGRIFaculty from '../pages/students/academics/engineering/department/agricultural/faculty';
import AGRIProgramsOffered from '../pages/students/academics/engineering/department/agricultural/programs-offered';

// MCA
import CAOverview from '../pages/students/academics/engineering/department/mca/overview';
import CAVisionMission from '../pages/students/academics/engineering/department/mca/vision-mission';
import CAPeoPso from '../pages/students/academics/engineering/department/mca/peo-pso';
import CAFaculty from '../pages/students/academics/engineering/department/mca/faculty';
import CAProgramsOffered from '../pages/students/academics/engineering/department/mca/programs-offered';

// MECH
import MECHOverview from '../pages/students/academics/engineering/department/mechanical/overview';
import MECHVisionMission from '../pages/students/academics/engineering/department/mechanical/vision-mission';
import MECHPeoPso from '../pages/students/academics/engineering/department/mechanical/peo-pso';
import MECHFaculty from '../pages/students/academics/engineering/department/mechanical/faculty';
import MECHProgramsOffered from '../pages/students/academics/engineering/department/mechanical/programs-offered';

// Mining
import MiningOverview from '../pages/students/academics/engineering/department/mining/overview';
import MiningVisionMission from '../pages/students/academics/engineering/department/mining/vision-mission';
import MiningPeoPso from '../pages/students/academics/engineering/department/mining/peo-pso';
import MiningFaculty from '../pages/students/academics/engineering/department/mining/faculty';
import MiningProgramsOffered from '../pages/students/academics/engineering/department/mining/programs-offered';



import Opportunities from '../pages/students/opportunities/overview';
import OpportunitiesPlacements from '../pages/students/opportunities/opportunities-placements';
import HigherEducation from '../pages/students/opportunities/higher-education';
import Internships from '../pages/students/opportunities/internships';
import EntrepreneurshipIncubation from '../pages/students/opportunities/entrepreneurship-incubation';
import Trainings from '../pages/students/opportunities/trainings';
import ContactUs from '../pages/students/opportunities/contact-us';
// students close


// our research

import OurResearch from '../pages/research/our-research/our-research';
import Publications from '../pages/research/our-research/publications';
import Patents from '../pages/research/our-research/patents';
import Policies from '../pages/research/our-research/policies';
import PatentsCommercialisation from '../pages/research/patents-commercialisation/overview';
import AdvancedEngineeringApplications from '../pages/research/patents-commercialisation/advanced-engineering-applications';
import RenewableEnergy from '../pages/research/patents-commercialisation/renewable-energy';
import AutomobileEngineering from '../pages/research/patents-commercialisation/automobile-engineering';
import Healthcare from '../pages/research/patents-commercialisation/healthcare';
import Sustainability from '../pages/research/patents-commercialisation/sustainability';
import TechnologyDisabledElderly from '../pages/research/patents-commercialisation/technology-disabled-elderly';
import FoodEngineering from '../pages/research/patents-commercialisation/food-engineering';
// our-research closed

// outreach
import UniversityMagazine from "../pages/outreach/universitymagazine";
import Ananya1 from '../components/ananya/flipbook';
import Ananya2 from '../components/ananya/flipbook_2';
import CommunityActivities from '../pages/outreach/community-activities';
import Alumni from '../pages/outreach/alumni/alumni';
import AlumniCommittee from '../pages/outreach/alumni/alumni-coordination-committee';
import AlumniEvents from '../pages/outreach/alumni/alumni-events';
import Collaborations from '../pages/outreach/collaborations/institute-collaborations';
import InstituteCollaborations from '../pages/outreach/collaborations/institute-collaborations';
import IndustryCollaborations from '../pages/outreach/collaborations/industry-collaborations';
import AdityaLearningAcademy from '../pages/outreach/aditya-learning-academy/aditya-learning-academy';
import AdityaObjectives from '../pages/outreach/aditya-learning-academy/abjectives';
import AnnualReport from '../pages/outreach/aditya-learning-academy/annual-report';
import ComprehensiveSupportServices from '../pages/outreach/aditya-learning-academy/comprehensive-support-services';
import AdityaTeam from '../pages/outreach/aditya-learning-academy/team';
import AdityaEvents from '../pages/outreach/aditya-learning-academy/events';
import AdityaEventsNew from '../pages/outreach/aditya-learning-academy/events_new';
import SustainabilityOverview from '../pages/outreach/sustainability/sustainability-overview';
import DigitalContentCourse from "../pages/outreach/digital-content-course/course";
import TopicDetails from "../pages/outreach/digital-content-course/topic-details";
// outreach close

// About
import Overview from '../pages/about/adityauniversity/overview';
import SponsorshipBody from '../pages/about/adityauniversity/sponsorship-body';
import VisionMission from '../pages/about/adityauniversity/vision-mission';
import CoreValues from '../pages/about/adityauniversity/core-values';
import GoverningBody from '../pages/about/governance/governing-body';
import BoardManagement from '../pages/about/governance/board-management';
import AcademicCouncil from '../pages/about/governance/academic-council';
import FinanceCommittee from '../pages/about/governance/finance-committee';
import Iqacoverview from '../pages/about/credentials/IQAC/iqac-vision';
// import IqacObjectives from '../pages/about/credentials/IQAC/iqac-objectives';
// import IqacStrategies from '../pages/about/credentials/IQAC/iqac-strategies';
// import IqacBenefits from '../pages/about/credentials/IQAC/iqac-benefits';
import IqacFunctions from '../pages/about/credentials/IQAC/iqac-functions';
import IqacMembers from '../pages/about/credentials/IQAC/iqac-members';
import IqacEvents from '../pages/about/credentials/IQAC/iqac-events';
import Criteria from '../pages/about/credentials/IQAC/criteria';
import IDP from '../pages/about/credentials/IQAC/idp';

import Accreditations from '../pages/about/credentials/Accreditations/accreditations';
import Recognitions from '../pages/about/credentials/Accreditations/recognitions';
import Rankings from '../pages/about/credentials/Accreditations/rankings';
import Nirf from '../pages/about/credentials/Accreditations/nirf';
import NaacPublicNotice from '../pages/about/credentials/Accreditations/naac-public-notice';
import GrievancesRedressal from '../pages/about/credentials/Grievance/grievance-redressal';
import Grievances from '../pages/about/credentials/Grievance/grievances';


import Leadership from '../pages/about/leadership/leadership';
import LeadershipTeam from '../pages/about/leadership/leadership-team';

import Chancellor from '../pages/about/leadership/Chancellor';
import ProChancellor from '../pages/about/leadership/pro-chancellor';
import ProChancellor2 from '../pages/about/leadership/pro-chancellor-2';
import DeputyProChancellor from '../pages/about/leadership/deputy-pro-chancellor';
import Vicechancellor from '../pages/about/leadership/vice-chancellor';
import ProViceChancellor from '../pages/about/leadership/pro-vice-chancellor';
import Registrar from '../pages/about/leadership/registrar';


// Committees @ AUS


import InternalCommittee from '../pages/about/credentials/Committees/internal-complaint-committee';
import AntiRagging from '../pages/about/credentials/Committees/anti-ragging-committee';
import SocioEconomically from '../pages/about/credentials/Committees/socio-economically-disadvantaged-groups-cell';
import EqualOpportunity from '../pages/about/credentials/Committees/equal-opportunity-cell';
import OnlineClass from '../pages/otherpages/onlineclass';


// import TrackGrievances from '../pages/about/credentials/Grievance/track-status';


// About Close

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate data loading delay
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
    }, []);

    return (
        <div className='App'>
            {isLoading ?
                <Preloader /> : ''
            }
            <>
                <LoadTop />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/online-new" exact element={<Online />} />

                    {/* <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} /> */}
                    <Route path="/contact" element={<Contact />} />
                    <Route path='*' element={<Error />} />


                    <Route path='/rdecs2025' element={<RDECS2025 />} />
                    <Route path='/ICACTEA2026' element={<ICACTEA2026 />} />
                    <Route path='/icmes2025' element={<Icmes2025 />} />
                    <Route path='/harshavardhini' element={<Harshavardhini />} />
                    <Route path='/icactea' element={<ICACTEA2025 />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='/facilities' element={<Facilities />} />


                    <Route path='/abhinaya-club' element={<AbhinayaClub />} />
                    <Route path='/sports-in-action' element={<SportsInaction />} />
                    <Route path='/inclusive-ecosystem' element={<InclusiveEcosystem />} />
                    <Route path='/spiritual-harmony' element={<SpiritualHarmony />} />

                    {/* study */}
                    <Route path="/fees" exact element={<Fees />} />
                    <Route path="/scholarship" exact element={<Scholarship />} />
                    <Route path="/refund-policy" exact element={<RefundPolicy />} />
                    <Route path="/admission-process" exact element={<AdmissionProcess />} />
                    <Route path="/hostel-facilities" exact element={<Hostelfacilities />} />
                    <Route path="/diploma-programs" exact element={<DiplomaPrograms />} />
                    <Route path="/pg-programs" exact element={<PGPrograms />} />
                    <Route path="/corporate-programs" exact element={<CorporatePrograms />} />
                    <Route path="/ug-programs" exact element={<UGprograms />} />
                    <Route path="/phd-programs" exact element={<PHDprograms />} />
                    <Route path="/phd-syllabus" exact element={<PHDsyllabus />} />

                    <Route path="/placements" exact element={<PlacementsWhyaditya />} />
                    <Route path="/faculty" exact element={<FacultyWhyaditya />} />
                    <Route path="/academics-skilling" exact element={<AcademicsWhyaditya />} />
                    <Route path="/infrastructure" exact element={<InfrastructureWhyaditya />} />
                    <Route path="/amenities" exact element={<AmenitiesWhyaditya />} />
                    <Route path="/awards-recognitions" exact element={<AwardsRecognitions />} />

                    <Route path="/infrastructure-facilities" exact element={<Infrastructure />} />
                    <Route path="/hostel" exact element={<Hostel />} />
                    <Route path="/health" exact element={<Health />} />
                    <Route path="/sports" exact element={<Sports />} />
                    <Route path="/transport" exact element={<Transport />} />
                    <Route path="/barrier-free-environment" exact element={<Environment />} />
                    {/* study close */}
                    {/* Students */}
                    {/* Academics  */}
                    <Route path="/schools" exact element={<AcademicsOverview />} />
                    <Route path="/sponsoring-body" exact element={<SponsorshipBody />} />
                    <Route path="/academic-calendar" exact element={<EngineeringAcademicCalendar />} />
                    <Route path="/ug-regulations" exact element={<EngineeringUgRegulations />} />
                    <Route path="/pg-regulations" exact element={<EngineeringPgRegulations />} />
                    <Route path="/pg-curriculum" exact element={<EngineeringUgCurriculum />} />
                    <Route path="/ug-curriculum" exact element={<UGCurriculum />} />
                    <Route path="/curriculum-view/:parameterId" exact element={<PDFviewCurriculum />} />

                    <Route path="/departments" exact element={<Departmentpage />} />
                    <Route path="/eng-regulations" exact element={<EngineeringRegulations />} />
                    <Route path="/eng-curriculum" exact element={<EngineeringCurriculum />} />

                    <Route path="/holidays" exact element={<Holidays />} />

                    {/* Engineering */}
                    <Route path="/school-of-engineering" exact element={<EngineeringOverview />} />

                    {/* Engineering COMMON PAGES */}
                    <Route path="/digital-content/:parameterId" exact element={<DigitalContentDetails />} />
                    <Route path="/facilities-labs/:parameterId" exact element={<FacilitiesLabs />} />
                    <Route path="/facilities-classrooms/:parameterId" exact element={<FacilitiesClass />} />
                    <Route path="/research-projects/:parameterId" exact element={<ResearchProjectsDetails />} />
                    <Route path="/research-publications/:parameterId" exact element={<ResearchPublicationsDetails />} />
                    <Route path="/research-patents/:parameterId" exact element={<ResearchPatentsDetails />} />
                    <Route path="/innovative-teaching/:parameterId" exact element={<InnovativeDetails />} />
                    <Route path="/minutes-of-meeting/:parameterId" exact element={<MinutesofMeeting />} />
                    <Route path="/members/:parameterId" exact element={<Members />} />
                    <Route path="/newsletter/:parameterId" exact element={<Newsletter />} />
                    <Route path="/alumni-connect/:parameterId" exact element={<AlumniConnect />} />

                    {/* Freshman Engineering */}
                    <Route path="/freshman" exact element={<FreshmanOverview />} />
                    <Route path="/freshman-vision-mission" exact element={<FreshmanVisionMission />} />
                    <Route path="/freshman-peo-pso" exact element={<FreshmanPeoPso />} />
                    <Route path="/freshman-faculty" exact element={<FreshmanFaculty />} />

                    {/* Civil Engineering */}
                    <Route path="/civil" exact element={<CivilOverview />} />
                    <Route path="/civil-vision-mission" exact element={<CivilVisionMission />} />
                    <Route path="/civil-peo-pso" exact element={<CivilPeoPso />} />
                    <Route path="/civil-faculty" exact element={<CivilFaculty />} />
                    <Route path="/civil-programs-offered" exact element={<CivilProgramsOffered />} />

                    {/* EEE Engineering */}
                    <Route path="/eee" exact element={<EEEOverview />} />
                    <Route path="/eee-vision-mission" exact element={<EEEVisionMission />} />
                    <Route path="/eee-peo-pso" exact element={<EEEPeoPso />} />
                    <Route path="/eee-faculty" exact element={<EEEFaculty />} />
                    <Route path="/eee-programs-offered" exact element={<EEEProgramsOffered />} />

                    {/* ECE Engineering */}
                    <Route path="/ece" exact element={<ECEOverview />} />
                    <Route path="/ece-vision-mission" exact element={<ECEVisionMission />} />
                    <Route path="/ece-peo-pso" exact element={<ECEPeoPso />} />
                    <Route path="/ece-faculty" exact element={<ECEFaculty />} />
                    <Route path="/ece-programs-offered" exact element={<ECEProgramsOffered />} />


                    {/* CSE Engineering */}
                    <Route path="/cse" exact element={<CSEOverview />} />
                    <Route path="/cse-vision-mission" exact element={<CSEVisionMission />} />
                    <Route path="/cse-peo-pso" exact element={<CSEPeoPso />} />
                    <Route path="/cse-faculty" exact element={<CSEFaculty />} />
                    <Route path="/cse-programs-offered" exact element={<CSEProgramsOffered />} />

                    {/* IT Engineering */}
                    <Route path="/it" exact element={<ITOverview />} />
                    <Route path="/it-vision-mission" exact element={<ITVisionMission />} />
                    <Route path="/it-peo-pso" exact element={<ITPeoPso />} />
                    <Route path="/it-faculty" exact element={<ITFaculty />} />
                    <Route path="/it-programs-offered" exact element={<ITProgramsOffered />} />


                    {/* DS Engineering */}
                    <Route path="/ds" exact element={<DSOverview />} />
                    <Route path="/ds-vision-mission" exact element={<DSVisionMission />} />
                    <Route path="/ds-peo-pso" exact element={<DSPeoPso />} />
                    <Route path="/ds-faculty" exact element={<DSFaculty />} />
                    <Route path="/ds-programs-offered" exact element={<DSProgramsOffered />} />

                    {/* PT Engineering */}
                    <Route path="/petroleum" exact element={<PTOverview />} />
                    <Route path="/petroleum-vision-mission" exact element={<PTVisionMission />} />
                    <Route path="/petroleum-peo-pso" exact element={<PTPeoPso />} />
                    <Route path="/petroleum-faculty" exact element={<PTFaculty />} />
                    <Route path="/petroleum-programs-offered" exact element={<PTProgramsOffered />} />

                    {/* AIML Engineering */}
                    <Route path="/aiml" exact element={<AIMLOverview />} />
                    <Route path="/aiml-vision-mission" exact element={<AIMLVisionMission />} />
                    <Route path="/aiml-peo-pso" exact element={<AIMLPeoPso />} />
                    <Route path="/aiml-faculty" exact element={<AIMLFaculty />} />
                    <Route path="/aiml-programs-offered" exact element={<AIMLProgramsOffered />} />

                    {/* AGRI Engineering */}
                    <Route path="/agricultural" exact element={<AGRIOverview />} />
                    <Route path="/agricultural-vision-mission" exact element={<AGRIVisionMission />} />
                    <Route path="/agricultural-peo-pso" exact element={<AGRIPeoPso />} />
                    <Route path="/agricultural-faculty" exact element={<AGRIFaculty />} />
                    <Route path="/agricultural-programs-offered" exact element={<AGRIProgramsOffered />} />

                    {/* CA Engineering */}
                    <Route path="/mca" exact element={<CAOverview />} />
                    <Route path="/mca-vision-mission" exact element={<CAVisionMission />} />
                    <Route path="/mca-peo-pso" exact element={<CAPeoPso />} />
                    <Route path="/mca-faculty" exact element={<CAFaculty />} />
                    <Route path="/mca-programs-offered" exact element={<CAProgramsOffered />} />

                    {/* Mech Engineering */}
                    <Route path="/mechanical" exact element={<MECHOverview />} />
                    <Route path="/mechanical-vision-mission" exact element={<MECHVisionMission />} />
                    <Route path="/mechanical-peo-pso" exact element={<MECHPeoPso />} />
                    <Route path="/mechanical-faculty" exact element={<MECHFaculty />} />
                    <Route path="/mechanical-programs-offered" exact element={<MECHProgramsOffered />} />

                    {/* Mining Engineering */}
                    <Route path="/mining" exact element={<MiningOverview />} />
                    <Route path="/mining-vision-mission" exact element={<MiningVisionMission />} />
                    <Route path="/mining-peo-pso" exact element={<MiningPeoPso />} />
                    <Route path="/mining-faculty" exact element={<MiningFaculty />} />
                    <Route path="/mining-programs-offered" exact element={<MiningProgramsOffered />} />



                    {/* School of Business  */}
                    <Route path="/school-of-business" exact element={<PGOverview />} />
                    <Route path="/mba" exact element={<PGOverview />} />
                    <Route path="/business-vision-mission" exact element={<MBA_Vision_Mission />} />
                    <Route path="/business-peo-pso" exact element={<MBA_PEO_PSO />} />
                    <Route path="/business-pg-regulations" exact element={<PGregulations />} />
                    <Route path="/business-ug-regulations" exact element={<UGbusinessregulations />} />
                    <Route path="/business-pg-academic-calendar" exact element={<PGAcademicCalendar />} />
                    <Route path="/business-pg-programs-offered" exact element={<PGOffered />} />
                    <Route path="/business-pg-area-of-specialization" exact element={<AreaSpecialization />} />
                    <Route path="/business-ug-curriculum" exact element={<BusinessUGCurriculum />} />
                    <Route path="/business-pg-curriculum" exact element={<BusinessPGCurriculum />} />


                    {/* Sciences */}
                    <Route path="/school-of-sciences" exact element={<Sciencesoverview />} />
                    <Route path="/forensic-sciences" exact element={<Sciencesoverview />} />
                    <Route path="/forensic-sciences-vision-mission" exact element={<SciencesVisionMission />} />
                    <Route path="/forensic-sciences-peo-pso" exact element={<Sciences_PEO_PSO />} />
                    <Route path="/sciences-offered" exact element={<Sciencesoffered />} />
                    <Route path="/sciences-specialization" exact element={<Sciencespecialization />} />
                    <Route path="/sciences-faculty" exact element={<SciencesFaculty />} />
                    <Route path="/sciences-ug-regulations" exact element={<SciencesUgRegulations />} />
                    <Route path="/sciences-pg-regulations" exact element={<SciencesPgRegulations />} />
                    <Route path="/sciences-ug-curriculum" exact element={<SciencesUGcurriculums />} />
                    <Route path="/sciences-pg-curriculum" exact element={<SciencesPgCurriculums />} />
                    <Route path="/sciences-academic-calendar" exact element={<SciencesAcademicCalendar />} />
                    {/* Sciences close */}

                    {/* Pharmacy */}
                    <Route path="/pharmacy" exact element={<PharmacyOverview />} />
                    <Route path="/pharmacy-vision-mission" exact element={<PharmacyVisionMission />} />
                    <Route path="/pharmacy-peo-pso" exact element={<PharmacyPeoPso />} />
                    <Route path="/pharmacy-offered" exact element={<PharmacyOffered />} />
                    <Route path="/pharmacy-faculty" exact element={<PharmacyFaculty />} />
                    <Route path="/pharmacy-specialization" exact element={<PharmacySpecialization />} />
                    <Route path="/pharmacy-academic-calendar" exact element={<PharmacyAcademicCalendar />} />
                    <Route path="/pharmacy-ug-regulations" exact element={<PharmacyRegulationsUG />} />
                    <Route path="/pharmacy-pg-regulations" exact element={<PharmacyRegulationsPG />} />
                    <Route path="/pharmacy-ug-curriculum" exact element={<PharmacyUGCurriculums />} />
                    <Route path="/pharmacy-pg-curriculum" exact element={<PharmacyPGCurriculums />} />
                    {/* Pharmacy close */}

                    {/* examination */}
                    <Route path="/examination-centre" exact element={<ExamNotifications />} />
                    <Route path="/old-model-papers" exact element={<OldQuestionPapers />} />
                    <Route path="/model-papers" exact element={<ModelPapers />} />
                    <Route path="/examination-team" exact element={<ExaminationTeam />} />



                    {/* MBA */}
                    
                    <Route path="/mba-programs-offered" exact element={<MBAProgramsOffered />} />
                    <Route path="/mba-faculty" exact element={<MBAFaculty />} />



                    <Route path="/opportunities" exact element={<Opportunities />} />
                    <Route path="opportunities-placements" exact element={<OpportunitiesPlacements />} />
                    <Route path="/higher-education" exact element={<HigherEducation />} />
                    <Route path="/internships" exact element={<Internships />} />
                    <Route path="/entrepreneurship-incubation" exact element={<EntrepreneurshipIncubation />} />
                    <Route path="/trainings" exact element={<Trainings />} />
                    <Route path="/contact-us" exact element={<ContactUs />} />
                    {/* Students close */}


                    {/* our research*/}
                    <Route path="/university-magazine" exact element={<UniversityMagazine />} />
                    <Route path="/ananya-issue-1" element={<Ananya1 />} />
                    <Route path="/ananya-issue-2" element={<Ananya2 />} />
                    <Route path="/our-research" exact element={<OurResearch />} />
                    <Route path="/publications" exact element={<Publications />} />
                    <Route path="/patents" exact element={<Patents />} />
                    <Route path="/policies" exact element={<Policies />} />
                    <Route path="/patents-commercialisation" exact element={<PatentsCommercialisation />} />
                    <Route path="/renewable-energy" exact element={<RenewableEnergy />} />
                    <Route path="/advanced-engineering-applications" exact element={<AdvancedEngineeringApplications />} />
                    <Route path="/automobile-engineering" exact element={<AutomobileEngineering />} />
                    <Route path="/healthcare" exact element={<Healthcare />} />
                    <Route path="/sustainability" exact element={<Sustainability />} />
                    <Route path="/technology-disabled-elderly" exact element={<TechnologyDisabledElderly />} />
                    <Route path="/food-engineering" exact element={<FoodEngineering />} />
                    {/* our-research closed*/}

                    {/* Outreach */}
                    <Route path="/community-activities" exact element={<CommunityActivities />} />
                    <Route path="/alumni" exact element={<Alumni />} />
                    <Route path="/alumni-coordination-committee" exact element={<AlumniCommittee />} />
                    <Route path="/alumni-events" exact element={<AlumniEvents />} />
                    <Route path="/collaborations" exact element={<Collaborations />} />
                    <Route path="/institute-collaborations" exact element={<InstituteCollaborations />} />
                    <Route path="/industry-collaborations" exact element={<IndustryCollaborations />} />
                    <Route path="/aditya-learning-academy" exact element={<AdityaLearningAcademy />} />
                    <Route path="/objectives" exact element={<AdityaObjectives />} />
                    <Route path="/annual-report" exact element={<AnnualReport />} />
                    <Route path="/comprehensive-support-services" exact element={<ComprehensiveSupportServices />} />
                    <Route path="/team" exact element={<AdityaTeam />} />
                    <Route path="/events" exact element={<AdityaEvents />} />
                    <Route path="/events-new" exact element={<AdityaEventsNew />} />

                    <Route path="/sustainability-overview" exact element={<SustainabilityOverview />} />
                    <Route path="/digital-content-course" exact element={<DigitalContentCourse />} />
                    <Route path="/topics/:parameterId" exact element={<TopicDetails />} />
                    {/* Outreach close */}

                    {/* about */}
                    <Route path="/overview" exact element={<Overview />} />
                    <Route path="/vision-mission" exact element={<VisionMission />} />
                    <Route path="/core-values" exact element={<CoreValues />} />
                    <Route path="/governing-body" exact element={<GoverningBody />} />
                    <Route path="/board-management" exact element={<BoardManagement />} />
                    <Route path="/academic-council" exact element={<AcademicCouncil />} />
                    <Route path="/finance-committee" exact element={<FinanceCommittee />} />
                    <Route path="/iqac-overview" exact element={<Iqacoverview />} />
                    {/* <Route path="/iqac-objectives" exact element={<IqacObjectives />} />
                    <Route path="/iqac-strategies" exact element={<IqacStrategies />} />
                    <Route path="/iqac-benefits" exact element={<IqacBenefits />} /> */}
                    <Route path="/iqac-functions" exact element={<IqacFunctions />} />
                    <Route path="/iqac-members" exact element={<IqacMembers />} />
                    <Route path="/iqac-events" exact element={<IqacEvents />} />
                    <Route path="/institute-development-plan" exact element={<IDP />} />

                    <Route path="/criteria/:parameterId" element={<Criteria />} />
                    <Route path="/accreditations" exact element={<Accreditations />} />
                    <Route path="/recognitions" exact element={<Recognitions />} />
                    <Route path="/rankings" exact element={<Rankings />} />
                    <Route path="/nirf" exact element={<Nirf />} />
                    <Route path="/naac-public-notice" exact element={<NaacPublicNotice />} />
                    <Route path="/grievances" element={<GrievancesRedressal />} />
                    <Route path="/grievances/:parameterId" element={<Grievances />} />
                    <Route path="/leadership" element={<Leadership />} />
                    <Route path="/leadership-team" element={<LeadershipTeam />} />

                    <Route path="/chancellor" element={<Chancellor />} />
                    <Route path="/pro-chancellor(Satishreddy)" element={<ProChancellor />} />
                    <Route path="/pro-chancellor(Deepakreddy)" element={<ProChancellor2 />} />
                    <Route path="/deputy-pro-chancellor" element={<DeputyProChancellor />} />
                    <Route path="/vice-chancellor" element={<Vicechancellor />} />
                    <Route path="/pro-vice-chancellor" element={<ProViceChancellor />} />
                    <Route path="/registrar" element={<Registrar />} />

                    {/* Committees @ AUS */}

                    <Route path="/internal-complaint-committee" element={<InternalCommittee />} />
                    <Route path="/anti-ragging-committee" element={<AntiRagging />} />
                    <Route path="/socio-economically-disadvantaged-groups-cell" element={<SocioEconomically />} />
                    <Route path="/equal-opportunity-cell" element={<EqualOpportunity />} />
                    <Route path="/online-class" element={<OnlineClass />} />




                    {/* <Route path="/track-status"  element={<Track_Grievances />} /> */}



                    {/* about close*/}

                </Routes>
            </>
        </div>
    );
}

export default App;
