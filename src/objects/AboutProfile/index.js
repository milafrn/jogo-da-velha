import React from "react";
import "./styles.css";

const AboutProfile = ({ children, className = "" }) => (
  <article className={`about-profile ${className}`}>{children}</article>
);

export default AboutProfile;
