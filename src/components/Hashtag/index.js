import React from "react";
import CardCollab from "../../objects/CardCollab";
import Player from "../../objects/Player";
import './styles.css';

const Hashtag = () => (
  <CardCollab>
    <ul className="hashtag">
      <li className="item"><Player player="o" /></li>
      <li className="item"><Player player="x" /></li>
      <li className="item"><Player player="x" /></li>

      <li className="item"><Player player="o" /></li>
      <li className="item"><Player player="x" /></li>
      <li className="item"><Player player="o" /></li>

      <li className="item"><Player player="x" /></li>
      <li className="item"><Player player="o" /></li>
      <li className="item"><Player player="x" /></li>
    </ul>
  </CardCollab>
);

export default Hashtag;
