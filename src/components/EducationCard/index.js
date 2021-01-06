import React from "react";
import PropTypes from "prop-types";
import "./EducationCard.css";

const EducationCard = (props) => {
	const { institute, carrer, date } = props;
	return (
		<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
			<div className="flex-grow-1">
				<h3 className="mb-0">{institute}</h3>
				<div className="subheading mb-3">{carrer}</div>
			</div>
			<div className="flex-shrink-0">
				<span className="text-primary">{date}</span>
			</div>
		</div>
	);
};

EducationCard.propTypes = {
	institute: PropTypes.string,
	carrer: PropTypes.string,
	date: PropTypes.string,

};

EducationCard.defaultProps = {};

export default EducationCard;
