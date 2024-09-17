import sellImg from "../../ui/images/sell.svg";

export default class SellableResource {
  constructor(title, imgSrc, price) {
    this.title = title;
    this.imgSrc = imgSrc;
    this._btnImgSrc = sellImg;
    this.price = price;
  }

  btnImgSrc = () => this._btnImgSrc;

  isBtnHidden = () => false;

  btnLabel = () => "Sell";

  info = () => `Price: ${this.price.value()}G`;

  progress = () => {
    this.price.progress();
  }

  process = (funds, warehouse, resource) => {
    this.price.process();
    funds.earn(this.price.value());
    warehouse.unload(resource);
  }
}