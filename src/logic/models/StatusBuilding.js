import Response from "../models/Response";

export default class StatusBuilding {
  constructor(title, imgSrc, btnImgSrc, info) {
    this.title = title;
    this.imgSrc = imgSrc;
    this.btnImgSrc = btnImgSrc;
    this.isBtnHidden = true;
    this._info = info;
    this._response = new Response();
  }

  response = () => this._response;

  info = () => this._info;

  progress = () => {};

  process = () => {};

  destroy = (warehouse) => {
    warehouse.removeSpace();
  };
}
