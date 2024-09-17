import { RESOURCE_ACTIONS } from "../constants/resourceActions";

export default class CraftableResource {
  constructor(title, imgSrc, btnImgSrc, price, time, product) {
    this.title = title;
    this.imgSrc = imgSrc;
    this.btnImgSrc = btnImgSrc;
    this.price = price;
    this._action = RESOURCE_ACTIONS.CRAFT;
    this._inProgress = false;
    this._time = time;
    this._product = product;
  }

  isBtnHidden = () => this._inProgress;

  btnLabel = () => this._action === RESOURCE_ACTIONS.CRAFT ? "Craft" : "Sell";

  info = () => {
    if (this._inProgress) return `In Progress: ${this._time} turns left`;
    if (this._action === RESOURCE_ACTIONS.CRAFT) return "";
    else return `Price: ${this.price.value()}G`;
  }

  progress = () => {
    if (this._inProgress) this._time--;
    if (this._time === 0) {
      this._action = RESOURCE_ACTIONS.SELL;
      this._inProgress = false;
      this.price.progress();
      return;
    }
  }

  process = (funds, warehouse, resource) => {
    if (this._action === RESOURCE_ACTIONS.CRAFT) {
      this.title = this._product;
      this._inProgress = true;
    } else if (this._action === RESOURCE_ACTIONS.SELL) {
      this.price.process();
      funds.earn(this.price.value());
      warehouse.unload(resource);
    }
  }
}
