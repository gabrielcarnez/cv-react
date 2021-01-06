import React from "react";
import PropTypes from "prop-types";
import "./SkillsList.css";

const SkillsList = (props) => {
	const { list } = props;
	return (
		<ul className="fa-ul mb-0">
			{list.map((l) => (
				<li key={`key-${l}`}>
					<span className="fa-li">
						<i className="fas fa-check"></i>
					</span>
					{l}
				</li>
			))}
		</ul>
	);
};

SkillsList.propTypes = {};

SkillsList.defaultProps = {};

export default SkillsList;
