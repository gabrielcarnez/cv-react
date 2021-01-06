import React from "react";
import PropTypes from "prop-types";
import "./ExperienceCard.css";

const ExperienceCard = (props) => {
	const { company, position, description, date } = props;
	return (
		<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
			<div className="flex-grow-1">
				<h3 className="mb-0">{company}</h3>
				<div className="subheading mb-3">{position}</div>
				<p>{description}</p>
			</div>
			<div className="flex-shrink-0">
				<span className="text-primary">{date}</span>
			</div>
		</div>
	);
};

ExperienceCard.propTypes = {
	institute: PropTypes.string,
	carrer: PropTypes.string,
	description: PropTypes.string,
	date: PropTypes.string,
};

ExperienceCard.defaultProps = {};

export default ExperienceCard;
