import React from "react";
import PropTypes from "prop-types";
import "./ErrorMessage.css";

const ErrorMessage = (props) => {
	const { error } = props;
	return (
		<div className="ErrorMessage">
			<p>Something happend, please try again.</p>
			{error.map((e, index) => (
				<p key={`key-${index}`}>{e} is required</p>
			))}
		</div>
	);
};

ErrorMessage.propTypes = {
	error: PropTypes.arrayOf(PropTypes.string),
};

ErrorMessage.defaultProps = {};

export default ErrorMessage;
