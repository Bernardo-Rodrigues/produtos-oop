import Item from "./Item";

interface Taxes {
  Beer: number;
  Cigar: number;
  Eletronics: number;
  Water: number;
}

export default class TaxItem extends Item {
  taxes: Taxes;

  constructor({ category, description, price }) {
    super(category, description, price);
    this.taxes = {
      Beer: 0.2,
      Cigar: 0.25,
      Eletronics: 0.3,
      Water: 0,
    };
  }
  calculateTax() {
    return this.price * this.taxes[this.category];
  }
}
