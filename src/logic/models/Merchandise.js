import Response from "./Response";
import loanImg from "../../ui/images/loan.svg";
import buyImg from "../../ui/images/buy.svg";
import stopImg from "../../ui/images/stop.svg";

export default class Merchandise {
  constructor(title, imgSrc, price, type, createGoods) {
    this.title = title;
    this.imgSrc = imgSrc;
    this.price = price;
    this.type = type;
    this.createGoods = createGoods;
    this._response = new Response();
  }

  response = () => this._response;

  info = () => `Price: ${this.price.value()}G`;

  btnImgSrc = (funds) => {
    return funds.canBePaid(this.price.value())
      ? buyImg : loanImg;
  }

  btnLabel = (funds) => {
    return funds.canBePaid(this.price.value())
      ? "Pay"
      : "Pay with Loan";
  }

  buy = (funds, possession, warehouse) => {
    switch (this.type) {
      case "terrain":
        if (possession.isFull()) {
          this._response = new Response(
            "No Space",
            stopImg,
            "You can't own more properties.",
            false
          );
          return;
        }
        this._response = new Response(
          this.title,
          this.imgSrc,
          `${this.title} has been added to your possesion.`,
          false
        );
        possession.addProperty(this.createGoods());
        break;
      case "resource":
        if (warehouse.isFull()) {
          this._response = new Response(
            "Full Warehouse",
            stopImg,
            "Your warehouse is already full.",
            false
          );
          return;
        }
        this._response = new Response(
          this.title,
          this.imgSrc,
          `${this.title} has been added to your resources.`,
          false
        );
        warehouse.load(this.createGoods());
        break;
      default:
        return;
    }
    funds.pay(this.price.value());
  }
}
