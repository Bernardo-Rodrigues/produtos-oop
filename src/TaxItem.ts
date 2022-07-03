import Item from "./Item";

export default abstract class TaxItem extends Item {
  constructor(description: string, price: number) {
    super(description, price);
  }

  calculateTax() {
    return this.price * this.getTax();
  }

  abstract getTax(): number;
}
