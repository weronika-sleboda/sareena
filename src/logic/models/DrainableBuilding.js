import stopImg from "../../ui/images/stop.svg";
import Response from "../models/Response";

export default class DrainableBuilding {
  constructor(title, imgSrc, btnImgSrc, createRes) {
    this.title = title;
    this.imgSrc = imgSrc;
    this.btnImgSrc = btnImgSrc;
    this._deposit = 1;
    this._createRes = createRes;
    this.isBtnHidden = false;
    this._response = new Response();
  }

  response = () => this._response;

  info = () => "";

  progress = () => {
    this._deposit = 1;
    this.isBtnHidden = false;
  };

  process = (warehouse) => {
    if (warehouse.isFull()) {
      this._response = new Response(
        "Full Warehouse",
        stopImg,
        "Your warehouse is already full.",
        false
      );
      return;
    }
    if (this._deposit === 1) {
      this._deposit = 0;
      warehouse.load(this._createRes());
      this.isBtnHidden = true;
    }
  };

  destroy = () => {};
}