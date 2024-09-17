import Response from "./Response";
import bankruptImg from "../../ui/images/bankrupt.svg";
import peasantImg from "../../ui/images/peasant.svg";
import lordImg from "../../ui/images/lord.svg";
import baronImg from "../../ui/images/baron.svg";
import taxImg from "../../ui/images/tax.svg";

export default class Turn {
  constructor(maxTurns) {
    this.maxTurns = maxTurns;
    this.turn = 1;
    this._response = new Response();
    this.isGameOver = false;
  }

  response = () => this._response;

  info = () => `Turn: ${this.turn}`;

  next = (funds) => {
    if (this.turn === this.maxTurns) {
      if (funds.value <= 0) {
        this._response = new Response(
          "Bankrupt",
          bankruptImg,
          "You ended game as Bankrupt.",
          false
        );
      } else if (funds.value <= 500) {
        this._response = new Response(
          "Peasant",
          peasantImg,
          "You ended game as Peasant",
          false
        );
      } else if (funds.value <= 1000) {
        this._response = new Response(
          "Lord",
          lordImg,
          "You ended game as Lord",
          false
        );
      } else if (funds.value <= 2000) {
        this._response = new Response(
        "Baron",
        baronImg,
        "You ended game as Baron",
        false
      );
      }
      this.isGameOver = true;
      return;
    }
    this._response = new Response(
      `Tax`,
      taxImg,
      "You have been taxed with 50G.",
      false
    );
    funds.pay(50);
    this.turn++;
  }
}
