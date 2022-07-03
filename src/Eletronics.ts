import TaxItem from "./TaxItem";

export default class Eletronics extends TaxItem {
  constructor(description: string, price: number) {
    super(description, price);
  }

  getTax() {
    return 0.3;
  }
}
