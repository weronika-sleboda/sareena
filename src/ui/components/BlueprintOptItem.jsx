/* eslint-disable react/prop-types */
import { useContext } from "react";
import PlayerContext from "../contexts/PlayerContext";

export default function BlueprintOptItem({ blueprintOpt, terrain }) {
  const { player, setPlayer } = useContext(PlayerContext);
  const { possession } = player;
  const { title, choose, btnImgSrc } = blueprintOpt;

  const onClickOption = () => {
    choose(possession, terrain);
    setPlayer({ ...player });
  }

  return (
    <div
      className="item__btn-img-container"
      onClick={onClickOption}
    >
      <img
        className="item__btn-img"
        src={btnImgSrc}
        alt={title}
        loading="lazy"
      />
    </div>
  );
}
