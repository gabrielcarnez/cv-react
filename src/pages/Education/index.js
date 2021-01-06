import React from "react";
import PropTypes from "prop-types";
import "./Education.css";
import EducationCard from "../../components/EducationCard/";

const Education = (props) => {
	const { data } = props;
	return (
		<div className="Education">
			<h2 className="mb-5">EDUCATION</h2>
			{data.map((e, index) => (
				<EducationCard key={`key-${index}`} {...e} />
			))}
		</div>
	);
};

Education.propTypes = {
	institute: PropTypes.arrayOf(PropTypes.string),
};

Education.defaultProps = {};

export default Education;
