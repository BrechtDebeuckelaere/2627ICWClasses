class Boek {
  constructor(titel, auteur, paginaS) {
    this.titel = titel;
    this.auteur = auteur;
    this.paginaS = paginaS;
  }
  beschrijving() {
    return `${this.titel} door ${this.auteur} (${this.paginaS} pagina's)`;
  }
  lees() {
    console.log(`${this.titel} wordt nu gelezen...`);
  }
}
b = new Boek("hungergames", "Dhr. Dekezel", 5);
console.log(b.beschrijving());
b.lees();
