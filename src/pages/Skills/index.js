import React from "react";
import PropTypes from "prop-types";
import "./Skills.css";
import SkillsIcons from "../../components/SkillsIcons/";
import SkillsList from "../../components/SkillsList/";

const Skills = (props) => {
	const { data } = props;
	const { icons, list } = data;
	return (
		<div class="resume-section-content">
			<h2 class="mb-5">Skills</h2>
			<div class="subheading mb-3">Programming Languages & Tools</div>
			<SkillsIcons icons={icons} />
			<div class="subheading mb-3">Workflow</div>
			<SkillsList list={list} />
		</div>
	);
};

Skills.propTypes = {};

Skills.defaultProps = {};

export default Skills;
