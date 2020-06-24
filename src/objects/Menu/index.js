import React from "react";
import "./styles.css";

const Menu = ({ setShowLayer }) => (
  <a href="#menu" className="menu" onClick={setShowLayer}>
    <span className="center">Menu</span>
  </a>
);

export default Menu;
