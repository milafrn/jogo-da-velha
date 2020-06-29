import React from "react";
import AboutLink from "../../objects/AboutLink";
import IconClose from "../../objects/IconClose";
import LogoCollab from "../../objects/LogoCollab";

const HeaderInternal = () => (
  <header className="header-internal">
    <LogoCollab light />
    <AboutLink className="-light" />
    <IconClose />
  </header>
);

export default HeaderInternal;
