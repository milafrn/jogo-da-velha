import React, { useState } from "react";
import playerO from "../../img/player-o.png";
import playerX from "../../img/player-x.png";
import "./styles.css";

const PlayerGame = ({ onClick, current}) => {
  const [statePlayer, setStatePlayer] = useState(false)
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;

  const handleClick = () => {
    setStatePlayer(current === 'x' ? 'o' : 'x');
    onClick(current === 'x' ? 'o' : 'x')
  }
  
  return (
    <button onClick={handleClick} className="player-game">
      {statePlayer && <img src={players[statePlayer]} alt={`Jogador ${statePlayer.toUpperCase()}`} />}
    </button>
  );
};

export default PlayerGame;
