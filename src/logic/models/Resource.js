
export default class Resource {
  constructor(resourceType) {
    this.resourceType = resourceType;
    this.title = resourceType.title;
  }

  imgSrc = () => {
    return this.resourceType.imgSrc;
  }

  btnImgSrc = () => {
    return this.resourceType.btnImgSrc();
  }

  title = () =>  this.resourceType.title;

  isBtnHidden = () => this.resourceType.isBtnHidden();

  btnLabel = () => this.resourceType.btnLabel();

  info = () => this.resourceType.info();

  progress = () => {
    this.resourceType.progress();
  }
  
  process = (gold, warehouse) => {
    this.resourceType.process(gold, warehouse, this);
  }
}