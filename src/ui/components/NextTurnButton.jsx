import { useContext } from "react";
import PlayerContext from "../contexts/PlayerContext";
import SystemContext from "../contexts/SystemContext";
import nexTurnImg from "../images/next-turn.svg";

export default function NextTurnButton() {
  const { setSystem } = useContext(SystemContext);
  const { player, setPlayer } = useContext(PlayerContext);
  const { turn, funds, possession, warehouse } = player;
  const { response, next } = turn;

  const onClick = () => {
    next(funds, possession, warehouse);
    warehouse.storage.forEach((resource) => {
      resource.progress();
    });
    possession.properties.forEach(building => {
      building.progress();
    });
    setPlayer({ ...player });
    setSystem({ response: response() });
  }
  return (
    <div
      onClick={onClick}
      className="next-turn__btn-img-container"
    >
      <img
        className="next-turn__btn-img"
        src={nexTurnImg}
        loading="lazy"
      />
    </div>
  );
}
