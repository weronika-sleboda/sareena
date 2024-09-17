import Price from "../models/Price";
import { PRICE_TYPES } from "../constants/priceTypes";

export const createPrice = {
  dropping: (price) => {
    return new Price(price, 1,
      PRICE_TYPES.DROPPING);
  }
};