/* eslint-disable react/prop-types */
import { useState } from "react";
import PlayerContext from "./PlayerContext";
import Possession from "../../logic/models/Possession";
import Warehouse from "../../logic/models/Warehouse";
import Turn from "../../logic/models/Turn";
import Funds from "../../logic/models/Funds";

export default function PlayerProvider({ children }) {
  const [player, setPlayer] = useState({
    funds: new Funds(),
    turn: new Turn(30),
    possession: new Possession(5),
    warehouse: new Warehouse(5),
  });

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
}
