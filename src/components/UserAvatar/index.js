import React from "react";
import PropTypes from "prop-types";
import "./UserAvatar.css";
import img from "assets/photo.jpeg";

const UserAvatar = (props) => {
	const { fullName } = props;
	return (
		<a className="navbar-brand js-scroll-trigger" href="#page-top">
			<span className="d-block d-lg-none">
				{fullName}
			</span>
			<span className="d-none d-lg-block">
				<img
					className="img-fluid img-profile rounded-circle mx-auto mb-2"
					src={img}
					alt=""
				/>
			</span>
		</a>
	);
};

UserAvatar.propTypes = {
	fullName: PropTypes.string,
};

UserAvatar.defaultProps = {};

export default UserAvatar;
