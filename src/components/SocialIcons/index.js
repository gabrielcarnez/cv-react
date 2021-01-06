import React from "react";
import PropTypes from "prop-types";
import "./SocialIcons.css";

const SocialIcons = (props) => (
	<div className="social-icons">
		{props.linkedin && (
			<a target="_blank" className="social-icon" href={props.linkedin}>
				<i className="fab fa-linkedin-in"></i>
			</a>
		)}

		{props.github && (
			<a target="_blank" className="social-icon" href={props.github}>
				<i className="fab fa-github"></i>
			</a>
		)}

		{props.twitter && (
			<a target="_blank" className="social-icon" href={props.twitter}>
				<i className="fab fa-twitter"></i>
			</a>
		)}

		{props.facebook && (
			<a target="_blank" className="social-icon" href={props.facebook}>
				<i className="fab fa-facebook-f"></i>
			</a>
		)}
	</div>
);

SocialIcons.propTypes = {};

SocialIcons.defaultProps = {};

export default SocialIcons;
