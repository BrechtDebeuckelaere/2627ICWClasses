class Werknemer {
  constructor(naam, salaris) {
    this.naam = naam;
    this.salaris = salaris;
  }
  getDetails() {
    return `${this.naam} verdient €${this.salaris} per maand.`;
  }
}
class Manager extends Werknemer {
  constructor(naam, salaris, bonus) {
    super(naam, salaris);
    this.bonus = bonus;
  }
  getDetails() {
    return super.getDetails() + ` (bonus: ${this.bonus})`;
  }
}

const medewerker = new Werknemer("Jan", 3000);
console.log(medewerker.getDetails());
// Output: Jan verdient €3000 per maand.
const baas = new Manager("An", 5000, 1000);
console.log(baas.getDetails());
// Output: An verdient €5000 per maand. (Bonus: €1000)
