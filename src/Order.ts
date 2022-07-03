import Beer from "./Beer";
import Cigar from "./Cigar";
import Eletronics from "./Eletronics";
import Item from "./Item";

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
      if (
        cur instanceof Beer ||
        cur instanceof Cigar ||
        cur instanceof Eletronics
      )
        return acc + cur.calculateTax();
      else return acc;
    }, 0);
  }
}
