import { useContext } from "react";
import SystemContext from "../contexts/SystemContext";
import Response from "../../logic/models/Response";
import PlayerContext from "../contexts/PlayerContext";
import Turn from "../../logic/models/Turn";
import Funds from "../../logic/models/Funds";
import Possession from "../../logic/models/Possession";
import Warehouse from "../../logic/models/Warehouse";

export function PopupDialog() {
  const { system, setSystem } = useContext(SystemContext);
  const { player, setPlayer } = useContext(PlayerContext);
  const { isGameOver } = player.turn;
  const { title, imgSrc, message, isHidden } = system.response;
  const className = isHidden ? "close" : "popup-dialog";

  const onClickClose = () => {
    if (isGameOver) {
      player.turn = new Turn(30);
      player.funds = new Funds();
      player.possession = new Possession(10);
      player.warehouse = new Warehouse(5);
      setPlayer({ ...player });
    }
    setSystem({ ...system, response: new Response() });
  }

  return (
    <div className={className}>
      <div className="popup-dialog__container">
        <div className="popup-dialog-content">
          <div className="popup-dialog__title">{title}</div>
          <div className="popup-dialog__img-container">
            <img
              className="popup-dialog__img"
              src={imgSrc}
              alt={title}
              loading="lazy"
            />
          </div>
          <div className="popup-dialog__message">{message}</div>
          <div
            className="popup-dialog__btn"
            onClick={onClickClose}
          >
            OK
          </div>
        </div>
      </div>
    </div>
  );
}