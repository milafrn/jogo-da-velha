import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";
import ShowEvents from "./objects/Show-events";
import Checkbox from "./objects/Checkbox";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox />
    <ShowEvents />
  </main>
);

export default App;
