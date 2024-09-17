/* eslint-disable react/prop-types */
import PlayerContext from "../contexts/PlayerContext";
import { useContext } from "react";
import destroyImg from "../images/destroy.svg";

export default function BuildingItem({ building }) {
  const { player, setPlayer } = useContext(PlayerContext);
  const { possession, warehouse } = player;
  const {
    title,
    imgSrc,
    btnImgSrc,
    btnLabel,
    isBtnHidden,
    destroy,
    process
  } = building;

  const onClickDestroy = () => {
    destroy(possession, warehouse);
    setPlayer({ ...player });
  };

  const onClickBuild = () => {
    process(warehouse);
    setPlayer({ ...player });
  };

  return (
    <div className="item">
      <div className="item__img-container">
        <img
          className="blueprint__img"
          src={imgSrc()}
          alt={title}
          loading="lazy"
        />
      </div>
      <div className="building__title">{title}</div>
      <div className="building__btns">
        <div
          className="item__btn-img-container"
          onClick={onClickDestroy}
        >
          <img
            className="item__btn-img"
            src={destroyImg}
            alt="destroy"
            loading="lazy"
          />
        </div>
        {isBtnHidden() ? (
          <></>
        ) : (
          <div
            className="item__btn-img-container"
            onClick={onClickBuild}
          >
            <img
              className="item__btn-img"
              src={btnImgSrc()}
              alt={btnLabel}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
}