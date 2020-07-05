import React from "react";
import CardCollab from "../../objects/CardCollab";
import PlayerCollab from "../../objects/PlayerCollab";
import './styles.css';

const Hashtag = () => (
  <CardCollab>
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
  </CardCollab>
);

export default Hashtag;
