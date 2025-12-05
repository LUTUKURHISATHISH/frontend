import React from 'react';
// import { Link } from 'react-router-dom';
import breadcrumbsImg from './academics.webp'

const StudyBreadcrumb = (props) => {
	const { pageTitle } = props;
	console.log(pageTitle)

	return (
		<div className="react-breadcrumbs">
			<div className="breadcrumbs-wrap">
				<img className="desktop" src={breadcrumbsImg} alt="Breadcrumbs" />
				<img className="mobile" src={breadcrumbsImg} alt="Breadcrumbs" />
				<div className="breadcrumbs-inner">
					<div className="container">
						<div className="breadcrumbs-text">
							{/* <h1 className="breadcrumbs-title">{pageTitle ? pageTitle : ''}</h1> */}
							<h1 className="breadcrumbs-title"></h1>
							<div className="back-nav">
								{/* <ul>
									<li><Link to="/">Outreach</Link></li>
									<li>outreach</li>
								</ul> */}
							</div>
						</div>
					</div>
				</div>
			</div>                
		</div>
	);
}

export default StudyBreadcrumb;




