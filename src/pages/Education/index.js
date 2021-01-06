import React from "react";
import PropTypes from "prop-types";
import "./Education.css";
import EducationCard from "../../components/EducationCard/";

const Education = (props) => {
	const { data } = props;
	return (
		<div className="Education">
			{data.map((e, index) => (
				<EducationCard key={`key-${index}`} {...e} />
			))}
		</div>
	);
};

Education.propTypes = {};

Education.defaultProps = {};

export default Education;
