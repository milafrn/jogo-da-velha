import React from "react";
import "./styles.css";

const MenuCollab = ({ onClick }) => (
  <a href="#menu" className="menu" onClick={onClick}>
    <span className="center">Menu</span>
  </a>
);

export default MenuCollab;
