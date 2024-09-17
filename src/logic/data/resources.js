import Resource from "../models/Resource";
import CraftableResource from "../models/CraftableResource";
import SellableResource from "../models/SellableResource";
import {
  STONE_SELL_PRICE,
  IRON_SELL_PRICE,
  WINE_SELL_PRICE,
  WOOD_SELL_PRICE,
  CLOTHING_SELL_PRICE,
  JEWELRY_SELL_PRICE,
} from "../data/prices";
import { randomize } from "../utils/randomize";
import { TIME_SPAN } from "../constants/craftingTimeSpans";
import { createPrice } from "../utils/createPrice";
import woodImg from "../../ui/images/wood.svg";
import stoneImg from "../../ui/images/stone.svg";
import ironImg from "../../ui/images/iron.svg";
import grapeImg from "../../ui/images/grape.svg";
import paperImg from "../../ui/images/paper.svg";
import silverImg from "../../ui/images/silver.svg";
import meatImg from "../../ui/images/meat.svg";
import leatherImg from "../../ui/images/leather.svg";
import jewelryImg from "../../ui/images/jewelry.svg";
import wineImg from "../../ui/images/wine.svg";
import clothingImg from "../../ui/images/clothing.svg";
import paintingImg from "../../ui/images/painting.svg";


export const stone = () => {
  return new Resource(new SellableResource(
    "Stone",
    stoneImg,
    STONE_SELL_PRICE
  ));
};

export const wood = () => {
  return new Resource(new SellableResource(
    "Wood",
    woodImg,
    WOOD_SELL_PRICE
  ));
};

export const iron = () => {
  return new Resource(new SellableResource(
    "Iron",
    ironImg,
    IRON_SELL_PRICE
  ));
};

export const grape = () => {
  return new Resource(
    new CraftableResource(
      "Grape",
      grapeImg,
      wineImg,
      WINE_SELL_PRICE,
      TIME_SPAN.WINE,
      "Wine"
    )
  );
};

export const meat = () => {
  return new Resource(
    new SellableResource(
      "Meat",
      meatImg,
      meatImg,
      createPrice.dropping(40)
    ));
};

export const leather = () => {
  return new Resource(
    new CraftableResource(
      "Leather",
      leatherImg,
      clothingImg,
      CLOTHING_SELL_PRICE,
      TIME_SPAN.CLOTHING,
      "Clothing"
    )
  );
};

export const paper = () => {
  return new Resource(
    new CraftableResource(
      "Paper",
      paperImg,
      paintingImg,
      randomize.price(1, 100),
      TIME_SPAN.PAINTING,
      "Painting"
    )
  );
};

export const silver = () => {
  return new Resource(
    new CraftableResource(
      "Silver",
      silverImg,
      jewelryImg,
      JEWELRY_SELL_PRICE,
      randomize.timeSpan(1, 10),
      "Jewelry"
    )
  );
};
