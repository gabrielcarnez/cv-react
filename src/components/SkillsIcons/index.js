import React from "react";
import PropTypes from "prop-types";
import "./SkillsIcons.css";

const SkillsIcons = (props) => {
	const { icons } = props;
	return (
		<ul class="list-inline dev-icons">
			{icons.map((i) => (
				<li key={`key-${i}`} class="list-inline-item">
					<i className={`fab fa-${i}`}></i>
				</li>
			))}
		</ul>
	);
};

SkillsIcons.propTypes = {};

SkillsIcons.defaultProps = {};

export default SkillsIcons;
