import BlueprintOption from "../models/BlueprintOption";
import {
  gardenBlueprint,
  ironMineBlueprint,
  paperFactoryBlueprint,
  sawmillBlueprint,
  silverMineBlueprint,
  quarryBlueprint,
  siloBlueprint,
  leatherFactoryBlueprint,
  ranchBlueprint,
} from "../data/blueprints";
import sawmillImg from "../../ui/images/sawmill.svg";
import paperFactoryImg from "../../ui/images/paper-factory.svg";
import leatherFactoryImg from "../../ui/images/leather-factory.svg";
import gardenImg from "../../ui/images/garden.svg";
import ironMineImg from "../../ui/images/iron-mine.svg";
import silverMineImg from "../../ui/images/silver-mine.svg";
import ranchImg from "../../ui/images/ranch.svg";
import quarryImg from "../../ui/images/quarry.svg";
import siloImg from "../../ui/images/silo.svg";

export const sawmillOption = () => {
  return new BlueprintOption(
    "Sawmill",
    sawmillImg,
    sawmillBlueprint
  );
};

export const paperFactoryOption = () => {
  return new BlueprintOption(
    "Paper Factory",
    paperFactoryImg,
    paperFactoryBlueprint
  );
};

export const gardenOption = () => {
  return new BlueprintOption(
    "Garden",
    gardenImg,
    gardenBlueprint
  );
};

export const ironMineOption = () => {
  return new BlueprintOption(
    "Iron Mine",
    ironMineImg,
    ironMineBlueprint
  );
};

export const silverMineOption = () => {
  return new BlueprintOption(
    "Silver Mine",
    silverMineImg,
    silverMineBlueprint
  );
};

export const quarryOption = () => {
  return new BlueprintOption(
    "Quarry",
    quarryImg,
    quarryBlueprint
  );
};

export const ranchOption = () => {
  return new BlueprintOption(
    "Ranch",
    ranchImg,
    ranchBlueprint
  );
};

export const leatherFactoryOption = () => {
  return new BlueprintOption(
    "Leather Factory",
    leatherFactoryImg,
    leatherFactoryBlueprint
  );
};

export const siloOption = () => {
  return new BlueprintOption(
    "Silo",
    siloImg,
    siloBlueprint
  );
};
