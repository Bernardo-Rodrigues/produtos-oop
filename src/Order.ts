import Item from "./Item";
import TaxItem from "./TaxItem";

export default class Order {
  items: Item[];

  constructor() {
    this.items = [];
  }

  addItem(item: Item) {
    this.items.push(item);
  }
  getTotal() {
    return this.items.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
  }
  getTaxes() {
    return this.items.reduce((acc, cur) => {
      const taxItem = new TaxItem(cur);
      return acc + taxItem.calculateTax();
    }, 0);
  }
}
