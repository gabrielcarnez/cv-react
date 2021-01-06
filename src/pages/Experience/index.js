import React from "react";
import PropTypes from "prop-types";
import ExperienceCard from "../../components/ExperienceCard/";
import "./Experience.css";

const Experience = (props) => {
	const { data } = props;
	return (
		<div className="Experience">
			{data.map((e,index) => (
				<ExperienceCard key={`key-${index}`} {...e} />
			))}
		</div>
	);
};

Experience.propTypes = {
	institute: PropTypes.arrayOf(PropTypes.string),
};

Experience.defaultProps = {};

export default Experience;
