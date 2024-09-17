import { LIST_TYPE } from "../constants/listTypes";

export default class Terrain {
  constructor(title, imgSrc, price, blueprintOpts) {
    this.listType = LIST_TYPE.TERRAIN;
    this.title = title;
    this.imgSrc = imgSrc;
    this.price = price;
    this.blueprintOpts = blueprintOpts;
  }

  progress = () => {}

  sell = (funds, possession) => {
    possession.sellProperty(
      funds, this.price.value(), this);
  }
}
