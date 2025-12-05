import React from 'react';
// import Popup from './popup';
// import Apply_ug_pg from './apply_ug_pg';
import HomeSlider from './SliderSection';
import Raking from './raking';
import AboutAditya from './AboutAditya';
import Placement from './placement';
import CampusLife from './CampusLife';
import Testimonial from './Testimonial';
import Study from './study';
import Companies from './Companies';

// import About from './AboutSection';
// import Service from './ServiceSection';
// import Campus from './CampusSection';
// import Course from './CourseSection';
// import Event from './EventSection';
// import Counter from './CounterSection';
// import Testimonial from './TestimonialSection';
import ScrollToTop from '../../components/ScrollTop';
const HomeMain =() => {
		return (
			<>
				<div className="react-wrapper ">
            		<div className="react-wrapper-inner">
						{/* <Popup /> */}
						{/* <Apply_ug_pg/> */}
						<HomeSlider />
						<Raking/>
						<AboutAditya />
						<Placement/>
						<Study/>
						<CampusLife/>
						<Testimonial />
						<Companies/>
						{/* <Service /> */}
						{/* <About /> */}
						{/* <Campus /> */}
						{/* <Course /> */}
						{/* <Counter /> */}
						{/* <Event /> */}
						{/* <Blog /> */}
						<ScrollToTop
							scrollClassName="home react__up___scroll"
						/>
					</div>
				</div>
			</>
		);
	}
export default HomeMain;