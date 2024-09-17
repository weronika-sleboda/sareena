import Merchandise from "../models/Merchandise";
import {
  FOREST_BUY_PRICE,
  MOUNTAINS_BUY_PRICE,
  HILLS_BUY_PRICE,
  STONE_BUY_PRICE,
  WOOD_BUY_PRICE,
  IRON_BUY_PRICE,
} from "../data/prices";
import { iron, stone, wood } from "../data/resources";
import { forest, hills, mountains } from "../data/terrains";
import forestImg from "../../ui/images/forest.svg";
import mountainsImg from "../../ui/images/mountains.svg";
import hillsImg from "../../ui/images/hills.svg";
import woodImg from "../../ui/images/wood.svg";
import stoneImg from "../../ui/images/stone.svg";
import ironImg from "../../ui/images/iron.svg";

const shopAssortment = [
  new Merchandise(
    "Forest",
    forestImg,
    FOREST_BUY_PRICE,
    "terrain",
    forest
  ),
  new Merchandise(
    "Mountains",
    mountainsImg,
    MOUNTAINS_BUY_PRICE,
    "terrain",
    mountains
  ),
  new Merchandise(
    "Hills", 
    hillsImg,
    HILLS_BUY_PRICE,
    "terrain",
    hills
  ),
  new Merchandise(
    "Stone",
    stoneImg,
    STONE_BUY_PRICE,
    "resource",
    stone
  ),
  new Merchandise(
    "Wood",
    woodImg,
    WOOD_BUY_PRICE,
    "resource",
    wood
  ),
  new Merchandise(
    "Iron",
    ironImg,
    IRON_BUY_PRICE,
    "resource",
    iron
  ),
];

export default shopAssortment;
