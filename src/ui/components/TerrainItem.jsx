/* eslint-disable react/prop-types */
import { useContext } from "react";
import PlayerContext from "../contexts/PlayerContext";
import BlueprintOptItem from "./BlueprintOptItem";
import sellImg from "../images/sell.svg";

export default function TerrainItem({ terrain }) {
  const { player, setPlayer } = useContext(PlayerContext);
  const { funds, possession } = player;
  const { title, imgSrc, blueprintOpts, sell } = terrain;

  const onClickSell = () => {
    sell(funds, possession);
    setPlayer({ ...player });
  }

  return (
    <div className="item">
      <div className="item__img-container">
        <img
          className="item__img"
          src={imgSrc}
          alt={title}
          loading="lazy"
        />
      </div>
      <div className="terrain__title">{title}</div>
      <div className="sublist">
        <div
          className="item__btn-img-container"
          onClick={onClickSell}
        >
          <img
            className="item__btn-img"
            src={sellImg}
            alt="sell"
            loading="lazy"
          />
        </div>
        {blueprintOpts.map((blueprintOpt) => {
          return (
            <BlueprintOptItem
              key={self.crypto.randomUUID()}
              blueprintOpt={blueprintOpt}
              terrain={terrain}
            />
          );
        })}
      </div>
    </div>
  );
}