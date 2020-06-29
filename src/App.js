import React from "react";
import "./App.css";
import Hashtag from "./components/Hashtag";
import Header from "./components/Header";
import HeaderInternal from "./components/HeaderInternal";
import Profile from './img/profile.jpeg';
import About from "./objects/About";
import AvatarProfile from "./objects/AvatarProfile";
import Checkbox from "./objects/Checkbox";



const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Checkbox
        id="show"
        value="show"
        type="checkbox"
        content="Mostrar eventos"
      />
      <About>
        <HeaderInternal />
        <AvatarProfile src={Profile} alt="Avatar do Marco Bruno" />
      </About>
    </main>
  );
};

export default App;
