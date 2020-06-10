import React from "react";
import Logoimg from '../../assets/logo.png';
import './styles.css';

const Logo = () => {
  return (
    <a className="logo" href="#to-do">
      <img src={Logoimg} ></img>
    </a>
  );
};

export default Logo