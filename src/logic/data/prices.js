import Price from "../models/Price";
import { PRICE_TYPES } from "../constants/priceTypes";

const TRIPLE = 3;
const DOUBLE = 2;

export const FOREST_BUY_PRICE = new Price(
  500, 0, PRICE_TYPES.STABLE);

export const FOREST_SELL_PRICE = new Price(
  500 / DOUBLE, 0, PRICE_TYPES.STABLE);

export const MOUNTAINS_BUY_PRICE = new Price(
  500, 0, PRICE_TYPES.STABLE);

export const MOUNTAINS_SELL_PRICE = new Price(
  500 / DOUBLE, 0, PRICE_TYPES.STABLE);

export const HILLS_BUY_PRICE = new Price(
  500, 0, PRICE_TYPES.STABLE);

export const HILLS_SELL_PRICE = new Price(
  500 / DOUBLE, 0, PRICE_TYPES.STABLE);

export const WOOD_SELL_PRICE = new Price(
  2, 0, PRICE_TYPES.STABLE);

export const WOOD_BUY_PRICE = new Price(
  2 * TRIPLE, 0, PRICE_TYPES.STABLE);

export const STONE_SELL_PRICE = new Price(
  1, 0, PRICE_TYPES.STABLE);

export const STONE_BUY_PRICE = new Price(
  1 * TRIPLE, 0, PRICE_TYPES.STABLE);

export const IRON_SELL_PRICE = new Price(
  3, 0, PRICE_TYPES.STABLE);

export const IRON_BUY_PRICE = new Price(
  3 * TRIPLE, 0, PRICE_TYPES.STABLE);

export const WINE_SELL_PRICE = new Price(
  0, 100, PRICE_TYPES.PROGRESSIVE);

export const CLOTHING_SELL_PRICE = new Price(
  40, 1, PRICE_TYPES.SALES_BASED);

export const JEWELRY_SELL_PRICE = new Price(
  50, 0, PRICE_TYPES.STABLE);

