/* eslint-disable react/prop-types */
import PlayerContext from "../contexts/PlayerContext";
import SystemContext from "../contexts/SystemContext";
import { useContext } from "react";

export default function MerchandiseItem({ merchandise }) {
  const { system, setSystem } = useContext(SystemContext);
  const { player, setPlayer } = useContext(PlayerContext);
  const { funds, possession, warehouse } = player;
  const { title, imgSrc, info, buy, btnLabel, response, btnImgSrc } = merchandise

  const onClickBuy = () => {
    buy(funds, possession, warehouse);
    setPlayer({ ...player });
    setSystem({ ...system, response: response() });
  };

  return (
    <div className="item">
      <div className="item__img-container">
        <img
          className="item__img"
          src={imgSrc}
          alt={title}
          loading="lazy"/>
      </div>
      <div className="merchandise__title">{title}</div>
      <div className="merchandise__info">{info()}</div>
      <div
        className="item__btn-img-container"
        onClick={onClickBuy}
      >
        <img
          className="item__btn-img"
          src={btnImgSrc(funds)}
          alt={btnLabel(funds)}
          loading="lazy"
        />
      </div>
    </div>
  );
}
