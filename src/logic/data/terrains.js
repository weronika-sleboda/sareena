import {
  gardenOption,
  ironMineOption,
  leatherFactoryOption,
  paperFactoryOption,
  quarryOption,
  ranchOption,
  sawmillOption,
  siloOption,
  silverMineOption,
} from "../data/blueprintOptions";
import {
  FOREST_SELL_PRICE,
  MOUNTAINS_SELL_PRICE,
  HILLS_SELL_PRICE,
} from "../data/prices";
import Terrain from "../models/Terrain";
import forestImg from "../../ui/images/forest.svg";
import mountainsImg from "../../ui/images/mountains.svg";
import hillsImg from "../../ui/images/hills.svg";

export const forest = () => {
  return new Terrain(
    "Forest",
    forestImg,
    FOREST_SELL_PRICE, [
    sawmillOption(),
    gardenOption(),
    paperFactoryOption(),
  ]);
};

export const mountains = () => {
  return new Terrain(
    "Mountains",
    mountainsImg,
    MOUNTAINS_SELL_PRICE, [
    ironMineOption(),
    quarryOption(),
    silverMineOption(),
  ]);
};

export const hills = () => {
  return new Terrain(
    "Hills",
    hillsImg,
    HILLS_SELL_PRICE, [
    ranchOption(),
    leatherFactoryOption(),
    siloOption(),
  ]);
};
