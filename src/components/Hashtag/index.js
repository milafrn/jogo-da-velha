import React from "react";
import CardGame from "../../objects/CardGame";
import PlayerCollab from "../../objects/PlayerCollab";
import './styles.css';

const Hashtag = () => (
  <CardGame>
    <ul className="hashtag">
      <li className="item"><PlayerCollab player="o" /></li>
      <li className="item"><PlayerCollab player="x" /></li>
      <li className="item"><PlayerCollab player="x" /></li>

      <li className="item"><PlayerCollab player="o" /></li>
      <li className="item"><PlayerCollab player="x" /></li>
      <li className="item"><PlayerCollab player="o" /></li>

      <li className="item"><PlayerCollab player="x" /></li>
      <li className="item"><PlayerCollab player="o" /></li>
      <li className="item"><PlayerCollab player="x" /></li>
    </ul>
  </CardGame>
);

export default Hashtag;
