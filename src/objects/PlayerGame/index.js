import React from "react";
import playerO from "../../img/player-o.png";
import playerX from "../../img/player-x.png";
import "./styles.css";

const handleClick = () => {
  console.log('vamo que vamo!!')
}

const PlayerGame = ({ player = false }) => {
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;

  return (
    <button onClick={handleClick} className="player-game">
      {player && <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`} />}
    </button>
  );
};

export default PlayerGame;
