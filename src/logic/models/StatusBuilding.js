
export default class StatusBuilding {
  constructor(title, imgSrc, btnImgSrc, info) {
    this.title = title;
    this.imgSrc = imgSrc;
    this.btnImgSrc = btnImgSrc;
    this.isBtnHidden = true;
    this._info = info;
  }

  info = () => this._info;

  progress = () => {};

  process = () => {};
  
  destroy = (warehouse) => {
    warehouse.removeSpace();
  }
}
