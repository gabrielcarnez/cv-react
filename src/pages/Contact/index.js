import React, { useState } from "react";
import "./Contact.css";
import InputForm from "components/InputForm";
import Loading from "components/Loading";
import SuccessMessage from "components/SuccessMessage";
import ErrorMessage from "components/ErrorMessage";
import axios from "axios";

const validate = (values) => {
	console.log(values)
	let error = [];
	for (const input in values) {
		if (!values[input]) {
			error.push(input);
		}
	}
	return {
		error: error,
		valid: error.length === 0,
	};
};

const Contact = () => {
	const [state, setState] = useState({
		email: "",
		name: "",
		phone: "",
		message: "",
		loading: false,
		error: [],
		success: false,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSendEmail = (e) => {
		const { email, name, phone, message } = state;
		const valid = validate({ email, name, phone, message });

		if (!valid.valid) {
			console.log(valid)
			setState((prevState) => ({
				...prevState,
				error: valid.error,
			}));
			return;
		}

		setState((prevState) => ({
			...prevState,
			loading: true,
			error: [],
			success: false,
		}));

		const params = new URLSearchParams();
		params.append("email", email);
		params.append("name", name);
		params.append("phone", phone);
		params.append("message", message);

		axios
			.post("http://gabrielcarnez.com.ar/send-email.php", params)
			.then((res) => {
				const { data } = res;
				const { success, messsage } = data;
				let error = [];
				if (!success) error = messsage;

				setState((prevState) => ({
					...prevState,
					loading: false,
					error: error,
					success: success,
				}));
			})
			.catch((error) => {
				setState((prevState) => ({
					...prevState,
					loading: false,
					error: error,
					success: false,
				}));
			});
	};

	return (
		<div className="Contact">
			<h2 className="mb-0">
				Contact
			</h2>
			<div className="subheading mb-5">
				<a mail="GABRIEL.CARNEZ@GMAIL.COM"
					>GABRIEL.CARNEZ@GMAIL.COM - tel:+54 221-6138052</a>
			</div>
			{state.error.length !== 0 && <ErrorMessage error={state.error} />}
			{state.success && state.error.length === 0 && <SuccessMessage />}
			{!state.success && (
				<div className="lead mb-5">
					<InputForm
						value={state.email}
						onChange={handleChange}
						label="Email"
						type="text"
						name="email"
					/>
					<InputForm
						value={state.name}
						onChange={handleChange}
						label="Name"
						type="text"
						name="name"
					/>
					<InputForm
						value={state.phone}
						onChange={handleChange}
						label="Phone"
						type="text"
						name="phone"
					/>
					<InputForm
						value={state.message}
						onChange={handleChange}
						label="Message"
						type="textarea"
						name="message"
					/>

					<button onClick={handleSendEmail}>
						{!state.loading && "Send"}
						{state.loading && <Loading />}
					</button>
				</div>
			)}
		</div>
	);
};

export default Contact;
