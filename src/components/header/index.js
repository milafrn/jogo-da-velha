import React from "react";
import AboutLink from "../../objects/AboutLink";
import LogoCollab from "../../objects/LogoCollab";
import Menu from "../../objects/Menu";
import "./styles.css";

const Header = ({ onClick }) => (
  <header className="header">
    <LogoCollab />
    <AboutLink onClick={onClick} />
    <Menu onClick={onClick} />
  </header>
);

export default Header;
