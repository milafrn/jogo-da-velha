import React, { useState } from "react";
import "./App.css";
import HashtagGame from "./components/HashtagGame";
import HeaderGame from "./components/HeaderGame";
import HeaderInternal from "./components/HeaderInternal";
import HistoryGame from "./components/HistoryGame";
import ProfileUser from "./components/ProfileUser";
import InputCheckbox from "./objects/InputCheckbox";
import LayerDark from "./objects/LayerDark";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");
  const history = [];

  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout('');

  const addHistory = (player) => {
    console.log('antes do push', history)
    history.push(`Adicionou ${player.toUpperCase()}`);
    console.log('depois do push', history)
  }

  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <HashtagGame callback={addHistory} />
      <InputCheckbox
        id="show"
        value="show"
        type="checkbox"
        content="Mostrar eventos"
      />

      <HistoryGame history={history}/>

      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove}/>
        <ProfileUser />
      </LayerDark>
    </main>
  );
};

export default App;
