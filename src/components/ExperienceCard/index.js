import React from "react";
import PropTypes from "prop-types";
import "./ExperienceCard.css";

const ExperienceCard = (props) => {
	const { company, position, description, date } = props;
	return (
		<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
			<div class="flex-grow-1">
				<h3 class="mb-0">{company}</h3>
				<div class="subheading mb-3">{position}</div>
				<p>{description}</p>
			</div>
			<div class="flex-shrink-0">
				<span class="text-primary">{date}</span>
			</div>
		</div>
	);
};

ExperienceCard.propTypes = {};

ExperienceCard.defaultProps = {};

export default ExperienceCard;
