import { LIST_TYPE } from "../constants/listTypes";

export default class Building {
  constructor(btnLabel, buildingType, createTerrain) {
    this.listType = LIST_TYPE.BUILDING;
    this.btnLabel = btnLabel;
    this.buildingType = buildingType;
    this.title = buildingType.title;
    this.createTerrain = createTerrain;
  }

  response = () => this.buildingType.response();

  imgSrc = () => {
    return this.buildingType.imgSrc;
  }

  btnImgSrc = () => {
    return this.buildingType.btnImgSrc;
  }

  info = () => this.buildingType.info();

  isBtnHidden = () => this.buildingType.isBtnHidden;

  progress = () => {
    this.buildingType.progress();
  }

  process = (warehouse) => {
    this.buildingType.process(warehouse);
  }

  destroy = (possession, warehouse) => {
    this.buildingType.destroy(warehouse);
    possession.removeProperty(this);
    possession.addProperty(this.createTerrain());
  }
}
