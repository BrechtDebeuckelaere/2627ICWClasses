class Voertuig {
  constructor(merk, model) {
    this._merk = merk;
    this._model = model;
  }
  startEngine() {
    console.log(`De motor van de ${merk} ${model} is gestart`);
  }
}
class Auto extends Voertuig {
  constructor(merk, model, aantalDeuren) {
    super(merk, model);
    this.aantalDeuren = aantalDeuren;
  }
  toeter() {
    console.log(`${this.merk} ${this.model} toetert: Beep beep!`);
  }
}

fordFocus = new Auto("ford", "focus", 5);
fordFocus.toeter();
