export default class tttModel {
  #palyaLista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  #lepes;
  #aktELEM;
  constructor() {
    this.#lepes = 0;
    this.#setAktElem();
  }
  #setAktElem() {
    if (this.#lepes % 2 === 0) {
      this.#aktELEM = "X";
    } else {
      this.#aktELEM = "O";
    }
  }

  lepteto(index) {
    this.#palyaLista[index] = this.#aktELEM;
    this.#lepes++;
    this.#setAktElem();
  }
  
  getLISTA() {
    return this.#palyaLista;
  }
}
