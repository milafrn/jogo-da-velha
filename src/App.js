import React from "react";
import "./App.css";
import Hashtag from "./components/Hashtag";
import Header from "./components/Header";
import HeaderInternal from "./components/HeaderInternal";
import About from "./objects/About";
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
      </About>
    </main>
  );
};

export default App;
