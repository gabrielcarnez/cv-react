import React from "react";
import PropTypes from "prop-types";
import "./SocialIcons.css";

const SocialIcons = ({ linkedin, github, twitter, facebook }) => (
	<div className="social-icons">
		{linkedin && (
			<a target="_blank" className="social-icon" href={linkedin}>
				<i className="fab fa-linkedin-in"></i>
			</a>
		)}

		{github && (
			<a target="_blank" className="social-icon" href={github}>
				<i className="fab fa-github"></i>
			</a>
		)}

		{twitter && (
			<a target="_blank" className="social-icon" href={twitter}>
				<i className="fab fa-twitter"></i>
			</a>
		)}

		{facebook && (
			<a target="_blank" className="social-icon" href={facebook}>
				<i className="fab fa-facebook-f"></i>
			</a>
		)}
	</div>
);

SocialIcons.propTypes = {
	linkedin: PropTypes.string,
	github: PropTypes.string,
	twitter: PropTypes.string,
	facebook: PropTypes.string,
};

SocialIcons.defaultProps = {};

export default SocialIcons;
