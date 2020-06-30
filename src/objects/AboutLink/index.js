import React from "react";
import "./styles.css";

const handleClick = () => {
  console.log('click');
}

const AboutLink = ({ className = '' }) => (
  <a href="#to-do" className={`about-link ${className}`} onClick={handleClick}>
    Sobre
  </a>
);

export default AboutLink;
