
export default class Funds {
  constructor() {
    this.maxValue = 9999999;
    this.minValue = -9999999;
    this.value = 1000;
  }

  info = () => `${this.value}G`;

  canBePaid = (value) =>  this.value >= value;

  pay = (value) => {
    this.value -= value;
    if (this.value < this.minValue)
      this.value = this.minValue;
  }

  earn = (value) => {
    this.value += value;
    if (this.value > this.maxValue)
      this.value = this.maxValue;
  }
}