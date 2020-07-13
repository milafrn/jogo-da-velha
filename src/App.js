import React, { useState } from "react";
import "./App.css";
import Hashtag from "./components/Hashtag";
import Header from "./components/Header";
import HeaderInternal from "./components/HeaderInternal";
import HistoryPlays from "./components/HistoryPlays";
import ProfileUser from "./components/ProfileUser";
import Checkbox from "./objects/Checkbox";
import LayerDark from "./objects/LayerDark";

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
      <HistoryPlays />
      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove}/>
        <ProfileUser />
      </LayerDark>
    </main>
  );
};

export default App;
