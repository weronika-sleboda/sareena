
export default class BlueprintOption {
  constructor(title, btnImgSrc, createBlueprint) {
    this.title = title;
    this.btnImgSrc = btnImgSrc;
    this.createBlueprint = createBlueprint;
  }

  choose = (possession, terrain) => {
    possession.addProperty(this.createBlueprint());
    possession.removeProperty(terrain);
  }
}