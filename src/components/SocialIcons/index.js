import React from "react";
import PropTypes from "prop-types";
import "./SocialIcons.css";

const SocialIcons = (props) => (
	<div class="social-icons">
		{props.linkedin && (
			<a target="_blank" class="social-icon" href={props.linkedin}>
				<i class="fab fa-linkedin-in"></i>
			</a>
		)}

		{props.github && (
			<a target="_blank" class="social-icon" href={props.github}>
				<i class="fab fa-github"></i>
			</a>
		)}

		{props.twitter && (
			<a target="_blank" class="social-icon" href={props.twitter}>
				<i class="fab fa-twitter"></i>
			</a>
		)}

		{props.facebook && (
			<a target="_blank" class="social-icon" href={props.facebook}>
				<i class="fab fa-facebook-f"></i>
			</a>
		)}
	</div>
);

SocialIcons.propTypes = {};

SocialIcons.defaultProps = {};

export default SocialIcons;
