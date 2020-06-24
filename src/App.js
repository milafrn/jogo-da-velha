import React, { useState } from "react";
import "./App.css";

import Checkbox from "./objects/Checkbox";
import Layer from "./components/Layer";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import CollabCode from "./img/logo.png";

const App = () => {
  const [showLayer, setShowLayer] = useState(false);
  function openLayer () {
    setShowLayer(true)
  }
  function closeLayer () {
    setShowLayer(false);
  }
  return (
    <main className="app">
      {showLayer && <Layer setShowLayer={closeLayer}/>}
      <Header logoImg={CollabCode} setShowLayer={openLayer}/>
      <Hashtag />
      <Checkbox
        id="show"
        value="show"
        type="checkbox"
        content="Mostrar eventos"
      />
    </main>
  );
};

export default App;
