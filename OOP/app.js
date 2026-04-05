class Checkout {
  constructor(cartTotal) {
    this.total = cartTotal;
  }

  // This is the "messy math" hidden from the user
  #calculateReduction(code) {
    if (code === "SAVE10") return this.total * 0.10;
    if (code === "OLDMONEY") return this.total * 0.25;
    return 0;
  }

  // The "Simple Button" the dev uses
  applyCoupon(code) {
    const discount = this.#calculateReduction(code);
    this.total = this.total - discount;
    console.log(`New Total: $${this.total}`);
  }
}

const myOrder = new Checkout(200);
myOrder.applyCoupon("OLDMONEY"); // New Total: $150





class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Watch "extends" Product (it copies name and price)
class Watch extends Product {
  constructor(name, price, warrantyYears) {
    super(name, price); // Passes name/price up to the Product template
    this.warrantyYears = warrantyYears;
  }

  getLuxuryTax() {
    return this.price + (this.warrantyYears * 50); // Extra $50 per year of warranty
  }
}
//
const rolex = new Watch("GMT Master", 5000, 2);
console.log(rolex.name); // "GMT Master" (Inherited)
console.log(rolex.getLuxuryTax()); // 5100