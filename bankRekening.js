class Bankrekening {
  #_saldo;
  constructor(beginSaldo = 0) {
    this.#_saldo = beginSaldo;
  }
  get saldo() {
    return this.#_saldo;
  }
  stortBedrag(bedrag) {
    if (bedrag >= 0) {
      this.#_saldo += bedrag;
    } else {
      throw new Error("Parameter onder 0");
    }
  }

  haaldAf(bedrag) {
    if (bedrag >= 0) {
      this.#_saldo -= bedrag;
    } else {
      throw new Error("Parameter onder 0");
    }
  }
}
b = new Bankrekening();
console.log(b.saldo);
