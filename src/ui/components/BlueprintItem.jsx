/* eslint-disable react/prop-types */
import PlayerContext from "../contexts/PlayerContext";
import { useContext } from "react";
import SystemContext from "../contexts/SystemContext";
import buildImg from "../images/build.svg";

export default function BlueprintItem({ blueprint }) {
  const { system, setSystem } = useContext(SystemContext);
  const { player, setPlayer } = useContext(PlayerContext);
  const { possession, warehouse } = player;
  const { title, imgSrc, info, build, response } = blueprint;
  
  const onClickBuild = () => {
    build(possession, warehouse);
    setPlayer({ ...player });
    setSystem({ ...system, response: response() });
  };

  return (
    <div className="item">
      <div className="item__img-container">
        <img
          className="blueprint__img"
          src={imgSrc}
          alt={title}
          loading="lazy"
        />
      </div>
      <div className="item__title">{info()}</div>
      <div
        className="item__btn-img-container"
        onClick={onClickBuild}
      >
        <img
          className="item__btn-img"
          src={buildImg}
          alt="build"
          loading="lazy"
        />
      </div>
    </div>
  );
}
