import React from "react";
import Header from './components/header';
import Logo from "./objects/Logo";
import Sobre from "./objects/Sobre";
import Menu from "./objects/Menu";

function App() {
  return (
    <Header>
      <Logo />
      <Sobre />
      <Menu />
    </Header>
  );
}

export default App;
