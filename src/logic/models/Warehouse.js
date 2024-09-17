
export default class Warehouse {
  constructor(maxSize) {
    this.title = "Warehouse";
    this.storage = [];
    this.maxSize = maxSize;
    this.size = 0;
  }

  isFull = () => this.size === this.maxSize;

  addSpace = () => {
    this.maxSize++;
  }

  removeSpace = () => {
    this.maxSize--;
    if (this.size > this.maxSize) {
      this.size--;
      this.storage.pop();
    }
  }

  found = (title) => {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i].title === title) return true;
    }
    return false;
  }

  load = (resource) => {
    this.size++;
    this.storage.push(resource);
  }

  unload = (resource) => {
    this.storage = this.storage.filter((res) => res !== resource);
    this.size--;
  }

  use = (title) => {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i].title === title) {
        this.storage.splice(i, 1);
        this.size--;
        break;
      }
    }
  }
}