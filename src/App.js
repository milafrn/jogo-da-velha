import React, { useState } from "react";
import "./App.css";
import Hashtag from "./components/Hashtag";
import Header from "./components/Header";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";
import AboutProfile from "./objects/AboutProfile";
import Checkbox from "./objects/Checkbox";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");

  const handleClickRemove = () => setActiveAbout('');

  return (
    <main className="app">
      <Header onClick={handleClickAdd} />
      <Hashtag />
      <Checkbox
        id="show"
        value="show"
        type="checkbox"
        content="Mostrar eventos"
      />
      <AboutProfile className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove}/>
        <ProfileUser />
      </AboutProfile>
    </main>
  );
};

export default App;
