import React from "react";
import "./styles.css";
import Logo from "../../objects/Logo";
import Sobre from "../../objects/Sobre";
import Menu from "../../objects/Menu";

const Header = ({ logoImg, setShowLayer }) => (
  <header className="header">
    <Logo img={logoImg} />
    <Sobre />
    <Menu setShowLayer={setShowLayer}/>
  </header>
);

export default Header;
