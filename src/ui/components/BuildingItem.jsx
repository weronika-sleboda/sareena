/* eslint-disable react/prop-types */
import PlayerContext from "../contexts/PlayerContext";
import { useContext } from "react";
import destroyImg from "../images/destroy.svg";
import SystemContext from "../contexts/SystemContext";

export default function BuildingItem({ building }) {
  const { system, setSystem } = useContext(SystemContext);
  const { player, setPlayer } = useContext(PlayerContext);
  const { possession, warehouse } = player;
  const {
    title,
    imgSrc,
    btnImgSrc,
    btnLabel,
    isBtnHidden,
    destroy,
    process,
    response
  } = building;

  const onClickDestroy = () => {
    destroy(possession, warehouse);
    setPlayer({ ...player });
  };

  const onClickProcess = () => {
    process(warehouse);
    setPlayer({ ...player });
    setSystem({ ...system, response: response() });
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
            onClick={onClickProcess}
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