/* eslint-disable react/prop-types */

import { useContext } from "react";
import PlayerContext from "../contexts/PlayerContext";

export default function ResourceItem({ resource }) {
  const { player, setPlayer } = useContext(PlayerContext);
  const { funds, warehouse } = player;

  const {
    title,
    imgSrc,
    btnImgSrc,
    info,
    btnLabel,
    process,
    isBtnHidden
  } = resource;

  const onClick = () => {
    process(funds, warehouse);
    setPlayer({ ...player })
  };

  return (
    <div className="item">
      <div className="item__img-container">
        <img
          className="item__img"
          src={imgSrc()}
          alt={title}
          loading="lazy"
        />
      </div>
      <div className="resource__title">{title}</div>
      <div className="resource__info">{info()}</div>

      {isBtnHidden() ? (
        <></>
      ) : (
        <div
          className="item__btn-img-container"
          onClick={onClick}
        >
          <img
            className="item__btn-img"
            src={btnImgSrc()}
            alt={btnLabel()}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
