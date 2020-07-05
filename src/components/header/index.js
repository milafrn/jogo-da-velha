import React from "react";
import AboutLink from "../../objects/AboutLink";
import LogoCollab from "../../objects/LogoCollab";
import MenuCollab from "../../objects/MenuCollab";
import "./styles.css";

const Header = ({ onClick }) => (
  <header className="header">
    <LogoCollab />
    <AboutLink onClick={onClick} />
    <MenuCollab onClick={onClick} />
  </header>
);

export default Header;
