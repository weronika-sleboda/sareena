
import { useContext } from "react";
import PlayerContext from "../contexts/PlayerContext";
import TerrainItem from "./TerrainItem";
import BlueprintItem from "./BlueprintItem";
import BuildingItem from "./BuildingItem";

export default function PropertiesList() {
  const { player } = useContext(PlayerContext);
  const { possession } = player;

  return (
    <div className="list">
      {possession.properties.map((item) => {
        if (item.listType === "terrain")
          return (
            <TerrainItem
              key={self.crypto.randomUUID()}
              terrain={item}
            />
          );
        else if (item.listType === "blueprint") 
          return (
            <BlueprintItem
              key={self.crypto.randomUUID()}
              blueprint={item}
            />
          );
        else if (item.listType === "building")
          return (
            <BuildingItem
              key={self.crypto.randomUUID()}
              building={item}
            />
          );
        
      })}
    </div>
  );
}