import React, { useState, useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';
import Login from './login';
import News from './news';
import MenuItems from './MenuItems';
import normalLogo from '../../assets/images/logos/au.webp';
// import stickyLogo from '../../assets/images/logos/au.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXTwitter,faWhatsapp} from  "@fortawesome/free-brands-svg-icons";

const Header = (props) => {
	const { topbarEnable, menuCategoryEnable, headerClass, parentMenu, headerNormalLogo, headerStickyLogo } = props;

	const [menuOpen, setMenuOpen] = useState(false)
	const [isVisible, setIsVisible] = useState(false);
	const location = useLocation();

	useEffect(() => {
		// Sticky is displayed after scrolling for 100 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<>

			<header id="react-header" className={headerClass ? headerClass : 'react-header react-header-three'}>
				<div className={isVisible ? 'header-area react-sticky' : 'header-area'}>
					{
						topbarEnable ?
							<div className="topbar-area style1">
								<div className="container">
									<div className="row">
										<div className="col-lg-8">
											{/* <div className="topbar-contact">
												<News />
											</div> */}
										</div>
										<div className="col-lg-3 text-right">
											<div className="toolbar-sl-share">
												<ul className="social-links" style={{ marginTop: '7px' }}>
													<li><a target="_blank" href="https://www.linkedin.com/school/adityauniversity/"><span aria-hidden="true" style={{ color: '#0c6ab0' }} className="social_linkedin socialmedia iconhover"></span></a></li>
													<li><Link to="https://wa.me/919989776661" target="_blank"><FontAwesomeIcon icon={faWhatsapp} className='iconhover' style={{color: "#0c6ab0",height:"18px",marginBottom:"-2px"}}/></Link></li>
													<li><a target="_blank" href="https://x.com/adityauniv"><FontAwesomeIcon icon={faXTwitter} className='iconhover' style={{color: "#0c6ab0" }} /></a></li>
													<li><a target="_blank" href="https://www.youtube.com/@adityauniversity"><span aria-hidden="true" style={{ color: '#0c6ab0' }} className="social_youtube socialmedia iconhover"></span></a></li>
													<li><a target="_blank" href="https://www.facebook.com/adityauniversity"> <span aria-hidden="true" style={{ color: '#0c6ab0' }} className="social_facebook socialmedia iconhover"></span></a></li>
													<li><a target="_blank" href="https://www.instagram.com/aditya_university/"><span aria-hidden="true" style={{ color: '#0c6ab0' }} className="social_instagram socialmedia iconhover"></span></a></li>
                                                </ul>
												
											</div>
										</div>
										<div className="col-lg-1">
											<Login />
										</div>
									</div>
								</div>
								{/* <hr style={{ color: '#292929', margin: '-10px', opacity: 0.1 }} /> */}
							</div> : ''
					}
					{/* <div className="menu-part react-wrapper "> */}
					<div className={`menu-part react-wrapper ${location.pathname !== "/" && location.pathname !== "/online" ? "specialpage" : ""}`}>
                        <div className="container">
							<div className="react-main-menu">
								<nav>
									<div className="menu-toggle">
										<div className="logo">
											{
												isVisible ?
													<Link to="/" className="logo-text">
														<img src={normalLogo} alt="" style={{ height: '90px' }} />
													</Link> :
													<Link to="/" className="logo-text">
														<img src={normalLogo} alt="" style={{ height: '90px' }} />
													</Link>

													// <Link to="/" className="logo-text">
													// <img src={headerStickyLogo ? headerStickyLogo : stickyLogo} alt="" style={{ height: '76px' }} />
													// </Link> :
													// <Link to="/" className="logo-text">
													// <img src={headerNormalLogo ? headerNormalLogo : normalLogo} alt="" style={{ height: '90px' }} />
													// </Link>
											}
										</div>
										<button type="button" id="menu-btn" className={menuOpen ? "mobile-menu-btn open" : "mobile-menu-btn"} onClick={() => { setMenuOpen(!menuOpen) }}>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
										</button>
									</div>
									<div className={menuOpen ? "react-inner-menus menu-open" : "react-inner-menus"}>
										{/* {
											menuCategoryEnable ?
											<div className="cate-part">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
												<ul className="react-category-menu">
													<li><Link to="#">Categories <i className="arrow_carrot-down"></i></Link> 
														<ul>
															<li><Link to="/course">English Book</Link></li>
															<li><Link to="/course">Math Book</Link></li>
															<li><Link to="/course">Story Book</Link></li>
														</ul>
													</li>
												</ul>
											</div> : ''
										} */}
										<ul id="backmenu" className="react-menus react-sub-shadow">
										    <MenuItems
												parentMenu={parentMenu}
											/>
										</ul>
										{/* <div className="searchbar-part"> 
											<form className="search-form">
												<input type="text" className="form-input" placeholder="Search Course" />
												<Link to="/course" className="form-button">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
												</Link>
											</form>
										</div> */}
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;