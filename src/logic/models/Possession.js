
export default class Possession {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.size = 0;
    this.properties = [];
  }

  isFull = () => this.size === this.maxSize;

  addProperty = (property) => {
    this.properties.push(property);
    this.size++;
  }

  removeProperty(property) {
    this.properties = this.properties.filter((element) => element !== property);
    this.size--;
  }

  sellProperty = (funds, price, property) => {
    this.removeProperty(property);
    funds.earn(price);
  }
}