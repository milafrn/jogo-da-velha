import React from "react";
import CardGame from "../../objects/CardGame";
import PlayerGame from "../../objects/PlayerGame";
import './styles.css';

const HashtagGame = ({onClick , current}) => (
  <CardGame>
    <ul className="hashtag-game">
      <li className="item"><PlayerGame current={current} onClick={onClick}/></li>
      <li className="item"><PlayerGame current={current} onClick={onClick}/></li>
      <li className="item"><PlayerGame current={current} onClick={onClick}/></li>

      <li className="item"><PlayerGame current={current} onClick={onClick}/></li>
      <li className="item"><PlayerGame current={current} onClick={onClick}/></li>
      <li className="item"><PlayerGame current={current} onClick={onClick}/></li>

      <li className="item"><PlayerGame current={current} onClick={onClick}/></li>
      <li className="item"><PlayerGame current={current} onClick={onClick}/></li>
      <li className="item"><PlayerGame current={current} onClick={onClick}/></li>
    </ul>
  </CardGame>
);

export default HashtagGame;
