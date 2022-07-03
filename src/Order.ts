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
      return acc + cur.price * taxes[cur.category];
    }, 0);
  }
}

const taxes = {
  Beer: 0.2,
  Cigar: 0.25,
  Eletronics: 0.3,
  Water: 0,
};
