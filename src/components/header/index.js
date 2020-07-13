import React from "react";
import AboutLink from "../../objects/AboutLink";
import LogoCollab from "../../objects/LogoCollab";
import MenuGame from "../../objects/MenuGame";
import "./styles.css";

const Header = ({ onClick }) => (
  <header className="header">
    <LogoCollab />
    <AboutLink onClick={onClick} />
    <MenuGame onClick={onClick} />
  </header>
);

export default Header;
