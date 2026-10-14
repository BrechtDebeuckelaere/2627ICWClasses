class Vorm {
  constructor() {}
  berekenOppervlakte() {
    return 0;
  }
}
class Cirkel extends Vorm {
  constructor(straal) {
    super();
    this.straal = straal;
  }
  berekenOppervlakte() {
    const pi = Math.PI;
    return super.berekenOppervlakte() + pi * this.straal ** 2;
  }
}
class Rechthoek extends Vorm {
  constructor(breedte, hoogte) {
    super();
    this.breedte = breedte;
    this.hoogte = hoogte;
  }
  berekenOppervlakte() {
    return super.berekenOppervlakte() + this.breedte * this.hoogte;
  }
}

const vormen = [new Cirkel(5), new Rechthoek(4, 6)];
vormen.forEach((vorm) => {
  console.log(`Oppervlakte: ${vorm.berekenOppervlakte().toFixed(2)}`);
});
// Output:
// Oppervlakte: 78.54
// Oppervlakte: 24.00
