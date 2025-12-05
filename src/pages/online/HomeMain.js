import React from 'react';
import HomeSlider from './SliderSection';
import Raking from './raking';
import AboutAditya from './AboutAditya';
import Placement from './placement';
import CampusLife from './CampusLife';
import Testimonial from './Testimonial';
import Study from './study';
import Companies from './Companies';
import ScrollToTop from '../../components/ScrollTop';
const HomeMain =() => {
		return (
			<>
				<div className="react-wrapper ">
            		<div className="react-wrapper-inner">
						<HomeSlider />
						<Raking/>
						<AboutAditya />
						<Placement/>
						<Study/>
						<CampusLife/>
						<Testimonial />
						<Companies/>
						<ScrollToTop
							scrollClassName="home react__up___scroll"
						/>
					</div>
				</div>
			</>
		);
	}
export default HomeMain;