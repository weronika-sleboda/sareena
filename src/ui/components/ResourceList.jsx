import { useContext } from "react";
import PlayerContext from "../contexts/PlayerContext";
import ResourceItem from "./ResourceItem";

export default function ResourceList() {
  const { player } = useContext(PlayerContext);
  const { warehouse } = player;

  return (
    <div className="list">
      {warehouse.storage.map((resource) => {
        return (
          <ResourceItem
            key={self.crypto.randomUUID()}
            resource={resource}
          />
        );
      })}
    </div>
  );
}
