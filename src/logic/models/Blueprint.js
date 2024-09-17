import { LIST_TYPE } from "../constants/listTypes";
import Response from "./Response";
import siloImg from "../../ui/images/silo.svg";

export default class Blueprint {
  constructor(title, imgSrc, requisite, blocks, addBuilding, isSilo = false) {
    this.listType = LIST_TYPE.BLUEPRINT;
    this.title = title;
    this.imgSrc = imgSrc;
    this.requisite = requisite;
    this.blocks = blocks;
    this.addBuilding = addBuilding;
    this.isSilo = isSilo;
    this._response = new Response();
  }

  response = () =>  this._response;

  progress = () => {}

  info = () => `Requisite: ${this.blocks} ${this.requisite}`;

  build = (possession, warehouse) => {
    if (warehouse.found(this.requisite)) {
      warehouse.use(this.requisite);
      this._response = new Response();
      this.blocks--;
    } else {
      this._response = new Response(
        `No ${this.requisite}`,
        this.imgSrc,
        `You don't have enough ${this.requisite}.`,
        false
      );
    }
    if (this.blocks === 0) {
      if (this.isSilo) warehouse.addSpace();
      possession.addProperty(this.addBuilding());
      possession.removeProperty(this);
      if (this.isSilo) {
        this._response = new Response(
          "Warehouse",
          siloImg,
          "+ 1 Warehouse space.",
          false
        );
      }
      return;
    }
  }
}
