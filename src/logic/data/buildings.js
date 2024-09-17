import Building from "../models/Building";
import DrainableBuilding from "../models/DrainableBuilding";
import StatusBuilding from "../models/StatusBuilding";
import {
  wood,
  stone,
  iron,
  paper,
  grape,
  silver,
  meat,
  leather,
} from "../data/resources";
import {
  forest,
  hills,
  mountains
} from "../data/terrains";
import sawmillImg from "../../ui/images/sawmill.svg";
import paperFactoryImg from "../../ui/images/paper-factory.svg";
import leatherFactoryImg from "../../ui/images/leather-factory.svg";
import gardenImg from "../../ui/images/garden.svg";
import ironMineImg from "../../ui/images/iron-mine.svg";
import silverMineImg from "../../ui/images/silver-mine.svg";
import ranchImg from "../../ui/images/ranch.svg";
import quarryImg from "../../ui/images/quarry.svg";
import siloImg from "../../ui/images/silo.svg";
import woodImg from "../../ui/images/wood.svg";
import stoneImg from "../../ui/images/stone.svg";
import ironImg from "../../ui/images/iron.svg";
import grapeImg from "../../ui/images/grape.svg";
import paperImg from "../../ui/images/paper.svg";
import silverImg from "../../ui/images/silver.svg";
import meatImg from "../../ui/images/meat.svg";
import leatherImg from "../../ui/images/leather.svg";

export const sawmill = () => {
  return new Building(
    "Wood",
    new DrainableBuilding(
      "Sawmill",
      sawmillImg,
      woodImg,
      wood
    ),
    forest
  );
};

export const paperFactory = () => {
  return new Building(
    "Paper",
    new DrainableBuilding(
      "Paper Factory",
      paperFactoryImg,
      paperImg,
      paper
    ),
    forest
  );
};

export const garden = () => {
  return new Building(
    "Grape",
    new DrainableBuilding(
      "Garden",
      gardenImg,
      grapeImg,
      grape
    ),
    forest
  );
};

export const ironMine = () => {
  return new Building(
    "Iron",
    new DrainableBuilding(
      "Iron Mine",
      ironMineImg,
      ironImg,
      iron
    ),
    mountains
  );
};

export const quarry = () => {
  return new Building(
    "Stone",
    new DrainableBuilding(
      "Quarry",
      quarryImg,
      stoneImg,
      stone
    ),
    mountains
  );
};

export const silverMine = () => {
  return new Building(
    "Silver",
    new DrainableBuilding(
      "Silver Mine",
      silverMineImg,
      silverImg,
      silver
    ),
    mountains
  );
};

export const ranch = () => {
  return new Building(
    "Meat",
    new DrainableBuilding(
      "Ranch",
      ranchImg,
      meatImg,
      meat
    ),
    hills
  );
};

export const leatherFactory = () => {
  return new Building(
    "Leather",
    new DrainableBuilding(
      "Leather Factory",
      leatherFactoryImg,
      leatherImg,
      leather
    ),
    hills
  );
};

export const silo = () => {
  return new Building(
    "Silo",
    new StatusBuilding("Silo",
      siloImg,
      siloImg,
      "+1 Warehouse"
    ),
    hills
  );
};
