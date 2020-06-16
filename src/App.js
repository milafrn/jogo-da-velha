import React from "react";
import "./App.css";
import ShowEvents from "./objects/Show-events";
import Header from "./components/Header";
import Hashtag from "./components/Hashtag";

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <ShowEvents />
  </main>
);

export default App;
