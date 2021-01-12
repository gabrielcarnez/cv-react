import React from "react";
import PropTypes from "prop-types";
import "./Skills.css";
import SkillsIcons from "components/SkillsIcons/";
import SkillsList from "components/SkillsList/";

const Skills = (props) => {
	const { data } = props;
	const { icons, list } = data;
	return (
		<div className="resume-section-content">
			<h2 className="mb-5">Skills</h2>
			<div className="subheading mb-3">Programming Languages & Tools</div>
			<SkillsIcons icons={icons} />
			<div className="subheading mb-3">Workflow</div>
			<SkillsList list={list} />
		</div>
	);
};

Skills.propTypes = {
	institute: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
};

Skills.defaultProps = {};

export default Skills;
