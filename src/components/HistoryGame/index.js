import React from "react";
import TagGame from "../../objects/TagGame";
import "./styles.css";

const HistoryGame = ({ history }) => (
  <ol className="history-game">
    {history.map((action) => (
      <li className="action">
        <TagGame content={`Adicionou ${action.toUpperCase()}`} />
      </li>
    ))}
    <li className="action">
      <TagGame className="-end" content="Empate!" />
    </li>
  </ol>
);

export default HistoryGame;
