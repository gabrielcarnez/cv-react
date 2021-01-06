import React from "react";
import PropTypes from "prop-types";
import "./Loading.css";

const Loading = () => (
	<div class="spinner">
		<div class="rect1"></div>
		<div class="rect2"></div>
		<div class="rect3"></div>
		<div class="rect4"></div>
		<div class="rect5"></div>
	</div>
);

Loading.propTypes = {};

Loading.defaultProps = {};

export default Loading;
