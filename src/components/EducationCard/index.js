import React from "react";
import PropTypes from "prop-types";
import "./EducationCard.css";

const EducationCard = (props) => {
	const { institute, carrer, date } = props;
	return (
		<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
			<div class="flex-grow-1">
				<h3 class="mb-0">{institute}</h3>
				<div class="subheading mb-3">{carrer}</div>
			</div>
			<div class="flex-shrink-0">
				<span class="text-primary">{date}</span>
			</div>
		</div>
	);
};

EducationCard.propTypes = {};

EducationCard.defaultProps = {};

export default EducationCard;
