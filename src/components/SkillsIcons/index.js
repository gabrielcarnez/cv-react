import React from "react";
import PropTypes from "prop-types";
import "./SkillsIcons.css";

const SkillsIcons = (props) => {
	const { icons } = props;
	return (
		<ul className="list-inline dev-icons">
			{icons.map((i) => (
				<li key={`key-${i}`} className="list-inline-item">
					<i className={`fab fa-${i}`}></i>
				</li>
			))}
		</ul>
	);
};

SkillsIcons.propTypes = {
	props: PropTypes.array
};

SkillsIcons.defaultProps = {};

export default SkillsIcons;
