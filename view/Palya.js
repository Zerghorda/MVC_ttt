import Mezo from "./Mezo.js";
export default class Palya {
  #lista = [];
  #tartalomELEM;
  constructor(lista, tartalomELEM) {
    this.#lista = lista;
    this.#tartalomELEM = tartalomELEM;
    this.#tartalomELEM.empty();
    this.mezoKiir();
  }
  mezoKiir() {
    this.#lista.forEach((elem, index) => {
      new Mezo(elem, index, this.#tartalomELEM);
    });
  }
}
