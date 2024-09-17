import { PRICE_TYPES } from "../constants/priceTypes";

export default class Price {
  constructor(startPrice, endPrice, type) {
    this.startPrice = startPrice;
    this.endPrice = endPrice;
    this.type = type;
    this.sales = 0;
  }

  value = () =>  this.startPrice;

  progress = () => {
    switch (this.type) {
      case PRICE_TYPES.STABLE:
        break;
      case PRICE_TYPES.PROGRESSIVE:
        if (this.startPrice === this.endPrice)
          return;
        this.startPrice++;
        break;
      case PRICE_TYPES.DROPPING:
        if (this.startPrice === this.endPrice)
          return;
        this.startPrice--;
        break;
      default:
        break;
    }
  }

  process = () => {
    switch (this.type) {
      case PRICE_TYPES.SALES_BASED:
        if (this.sales === 50) {
          this.sales = 0;
          this.startPrice *= 2;
        } else {
          this.sales++;
        }
        break;
      default:
        break;
    }
  }
}
