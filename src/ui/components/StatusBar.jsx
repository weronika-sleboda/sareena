import { useContext } from "react";
import PlayerContext from "../contexts/PlayerContext";
import fundsImg from "../images/funds.svg";
import turnImg from "../images/turn.svg";
import NextTurnButton from "./NextTurnButton";

export default function StatusBar() {
  const { player } = useContext(PlayerContext);
  const { funds, turn } = player;
  
  return (
    <div className="status-bar">
      <div className="status-bar__item">
        <div className="status-bar__img-container">
          <img
            className="funds__img"
            src={fundsImg}
            alt="funds"
            loading="lazy"
          />
        </div>
        <div>{funds.info()}</div>
      </div>
      <div className="status-bar__item">
        <div className="status-bar__img-container">
          <img
            className="turn__img"
            src={turnImg}
            alt="turn"
            loading="lazy"
          />
        </div>
        <div>{turn.info()}</div>
      </div>
      <NextTurnButton/>
    </div>
  );
}