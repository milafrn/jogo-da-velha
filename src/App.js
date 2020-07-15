import React, { useState } from "react";
import "./App.css";
import HashtagGame from "./components/HashtagGame";
import HeaderGame from "./components/HeaderGame";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";
import InputCheckbox from "./objects/InputCheckbox";
import LayerDark from "./objects/LayerDark";
import TagGame from "./objects/TagGame";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");

  const handleClickRemove = () => setActiveAbout('');

  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <HashtagGame />
      <InputCheckbox
        id="show"
        value="show"
        type="checkbox"
        content="Mostrar eventos"
      />

      <TagGame content="Adicionou O" />

      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove}/>
        <ProfileUser />
      </LayerDark>
    </main>
  );
};

export default App;
