import React from "react";
import PropTypes from "prop-types";
import "./InputForm.css";

const InputForm = (props) => {
	const { label, type, name, onChange, value } = props;
	return (
		<div>
			<label>{label}</label>
			<br />
			{type === "textarea" && (
				<textarea onChange={onChange} name={name} value={value}/>
			)}
			{type === "text" && (
				<input
					onChange={onChange}
					type={type}
					name={name}
					value={value}
				/>
			)}
		</div>
	);
};

InputForm.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
};

InputForm.defaultProps = {};

export default InputForm;
