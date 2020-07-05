import React from "react";
import "./styles.css";

const AboutProfile = ({ children, className = "" }) => (
  <article className={`about ${className}`}>{children}</article>
);

export default AboutProfile;
