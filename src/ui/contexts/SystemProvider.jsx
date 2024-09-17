/* eslint-disable react/prop-types */
import SystemContext from "./SystemContext";
import Response from "../../logic/models/Response";
import { useState } from "react";
import PlayerProvider from "./PlayerProvider";

export default function SystemProvider({ children }) {
  const [system, setSystem] = useState({
    response: new Response()
  });

  return (
    <PlayerProvider>
      <SystemContext.Provider value={{ system, setSystem }}>
        {children}
      </SystemContext.Provider>
    </PlayerProvider>
  );
}
