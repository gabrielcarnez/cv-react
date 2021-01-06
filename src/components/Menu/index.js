import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import img from "../../assets/photo.jpeg";
import "./Menu.css";

const Menu = () => (
	<nav
		class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
		id="sideNav"
	>
		<a class="navbar-brand js-scroll-trigger" href="#page-top">
			<span class="d-block d-lg-none">Clarence Taylor</span>
			<span class="d-none d-lg-block">
				<img
					class="img-fluid img-profile rounded-circle mx-auto mb-2"
					src={img}
					alt=""
				/>
			</span>
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav">
				<li class="nav-item">
					<Link class="nav-link js-scroll-trigger" to="/">
						About
					</Link>
				</li>
				<li class="nav-item">
					<Link class="nav-link js-scroll-trigger" to="/experience">
						experience
					</Link>
				</li>
				<li class="nav-item">
					<Link class="nav-link js-scroll-trigger" to="/education">
						education
					</Link>
				</li>
				<li class="nav-item">
					<Link class="nav-link js-scroll-trigger" to="/skills">
						skills
					</Link>
				</li>
				<li class="nav-item">
					<a
						class="nav-link js-scroll-trigger"
						href="cv.pdf"
						download="cv"
						target="_blank"
					>
						download Cv
					</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link js-scroll-trigger"
						href="https://github.com/gabrielcarnez/cv-react"
						target="_blank"
					>
						Show code
					</a>
				</li>
				<li><small>In progress</small></li>
				{/*<li class="nav-item">
								<Link class="nav-link js-scroll-trigger" to="/contact">
									contact
								</Link>
							</li>*/}
			</ul>
		</div>
	</nav>
);

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
