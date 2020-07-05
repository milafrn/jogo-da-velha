import React from "react";
import playerO from "../../img/player-o.png";
import playerX from "../../img/player-x.png";
import "./styles.css";

const PlayerCollab = ({ player }) => {
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;

  return (
    <button className="player-collab">
      <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`} />
    </button>
  );
};

export default PlayerCollab;
