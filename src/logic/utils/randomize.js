import Price from "../models/Price";
import { PRICE_TYPES } from "../constants/priceTypes";

export const randomize = {
  timeSpan: (minTime, maxTime) => {
    return minTime + Math.floor(Math.random() * maxTime);
  },
  price: (minPrice, maxPrice) => {
    return new Price(
      minPrice + Math.floor(Math.random() * maxPrice),
      0,
      PRICE_TYPES.STABLE
    );
  }
};

