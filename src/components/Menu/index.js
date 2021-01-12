import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Menu.css";
import UserAvatar from "components/UserAvatar";

function router(op, index) {
	return (
		<li key={`menu-${index}`} className="nav-item">
			<Link className="nav-link js-scroll-trigger" to={op.url}>
				{op.text}
			</Link>
		</li>
	);
}

function pdf(op, index) {
	return (
		<li key={`menu-${index}`} className="nav-item">
			<a
				className="nav-link js-scroll-trigger"
				href={op.url}
				download="cv"
				rel="noreferrer"
				target="_blank"
			>
				{op.text}
			</a>
		</li>
	);
}

function link(op, index) {
	return (
		<li key={`menu-${index}`} className="nav-item">
			<a
				className="nav-link js-scroll-trigger"
				href={op.url}
				target="_blank"
			>
				{op.text}
			</a>
		</li>
	);
}

const Menu = (props) => {
	const [menuActive, setMenuState] = useState(false);
	const { data, menu } = props;
	const { name, surname } = data;

	const handleClick = (e) => {
		e.preventDefault();
		setMenuState(!menuActive);
	};

	return (
		<nav
			className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
			id="sideNav"
		>
			<UserAvatar fullName={`${name} ${surname}`} />
			<button
				onClick={handleClick}
				className="navbar-toggler"
				type="button"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div
				className={`collapse navbar-collapse ${
					menuActive ? "show" : ""
				}`}
				id="navbarSupportedContent"
			>
				<ul className="navbar-nav">
					{menu.map((op, index) => {
						switch (op.type) {
							case "page":
								return router(op, index);
								break;
							case "download":
								return pdf(op, index);
								break;
							case "link":
								return link(op, index);
								break;
						}
					})}
				</ul>
			</div>
		</nav>
	);
};

Menu.propTypes = {
	data: PropTypes.object, 
	menu: PropTypes.array
};

Menu.defaultProps = {};

export default Menu;
