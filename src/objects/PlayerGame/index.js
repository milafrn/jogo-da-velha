import React, { useState } from "react";
import playerO from "../../img/player-o.png";
import playerX from "../../img/player-x.png";
import "./styles.css";

const PlayerGame = ({player = ''}) => {
  const [statePlayer, setStatePlayer] = useState(player)
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;

  const handleClick = () => {
    setStatePlayer(statePlayer === 'x' ? 'o' : 'x');
  }
  
  return (
    <button onClick={handleClick} className="player-game">
      {statePlayer && <img src={players[statePlayer]} alt={`Jogador ${statePlayer.toUpperCase()}`} />}
    </button>
  );
};

export default PlayerGame;
