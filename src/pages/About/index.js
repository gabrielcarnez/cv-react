import React from "react";
import PropTypes from "prop-types";
import "./About.css";
import SocialIcons from "../../components/SocialIcons/";

const About = (props) => {
  const { data } = props;
  const { name, surname, address, email, description, socials } = data;
  return (
    <div className="resume-section-content">
      <h1 className="mb-0">
        {name}
        <span className="text-primary"> {surname}</span>
      </h1>
      <div className="subheading mb-5">
        {address} · <a href="mailto:{email}">{email}</a>
      </div>
      <p className="lead mb-5">{description}</p>
      <SocialIcons {...socials} />
    </div>
  );
};

About.propTypes = {};

About.defaultProps = {};

export default About;
