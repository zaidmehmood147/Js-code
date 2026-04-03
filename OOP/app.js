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