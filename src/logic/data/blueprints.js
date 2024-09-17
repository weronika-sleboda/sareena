import Blueprint from "../models/Blueprint";
import {
  paperFactory,
  sawmill,
  garden,
  ironMine,
  quarry,
  silverMine,
  ranch,
  leatherFactory,
  silo,
} from "../data/buildings";
import sawmillImg from "../../ui/images/sawmill.svg";
import paperFactoryImg from "../../ui/images/paper-factory.svg";
import leatherFactoryImg from "../../ui/images/leather-factory.svg";
import gardenImg from "../../ui/images/garden.svg";
import ironMineImg from "../../ui/images/iron-mine.svg";
import silverMineImg from "../../ui/images/silver-mine.svg";
import ranchImg from "../../ui/images/ranch.svg";
import quarryImg from "../../ui/images/quarry.svg";
import siloImg from "../../ui/images/silo.svg";

import { BUILDING_BLOCKS } from "../constants/buildingBlocks";

export const sawmillBlueprint = () => {
  return new Blueprint(
    "Sawmill",
    sawmillImg,
    "Wood",
    BUILDING_BLOCKS.SAWMILL,
    sawmill
  );
};

export const paperFactoryBlueprint = () => {
  return new Blueprint(
    "Paper Factory",
    paperFactoryImg,
    "Stone",
    BUILDING_BLOCKS.PAPER_FACTORY,
    paperFactory
  );
};

export const gardenBlueprint = () => {
  return new Blueprint(
    "Garden",
    gardenImg,
    "Iron",
    BUILDING_BLOCKS.GARDEN,
    garden
  );
};

export const ironMineBlueprint = () => {
  return new Blueprint(
    "PaperFactory",
    ironMineImg,
    "Stone",
    BUILDING_BLOCKS.IRON_MINE,
    ironMine
  );
};

export const quarryBlueprint = () => {
  return new Blueprint(
    "Quarry",
    quarryImg,
    "Wood",
    BUILDING_BLOCKS.QUARRY,
    quarry
  );
};

export const silverMineBlueprint = () => {
  return new Blueprint(
    "Silver Mine",
    silverMineImg,
    "Iron",
    BUILDING_BLOCKS.SILVER_MINE,
    silverMine
  );
};

export const ranchBlueprint = () => {
  return new Blueprint(
    "Ranch",
    ranchImg,
    "Wood",
    BUILDING_BLOCKS.RANCH,
    ranch
  );
};

export const leatherFactoryBlueprint = () => {
  return new Blueprint(
    "Leather Factory",
    leatherFactoryImg,
    "Iron",
    BUILDING_BLOCKS.LEATHER_FACTORY,
    leatherFactory
  );
};

export const siloBlueprint = () => {
  return new Blueprint(
    "Silo",
    siloImg,
    "Stone",
    BUILDING_BLOCKS.SILO,
    silo,
    true
  );
};
