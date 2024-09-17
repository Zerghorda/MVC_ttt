export default class Mezo {
  #jel;
  #index;
  constructor(jel, index, szuloElem) {
    this.#jel = jel;
    this.#index = index;
    this.szuloElem = szuloElem;
    this.mezoKiir();
    this.gombELEM = $(".card:last-child");
    if (this.#jel === " ") {
      this.esemenyKezelo();
    }
  }
  mezoKiir() {
    this.szuloElem.append(
      `<div class="card border border-2 border-info col-lg-4">
            <h2 class="card-text text-center">${this.#jel}</h2>
           </div>`
    );
  }
  esemenyKezelo() {
    this.gombELEM.on("click", () => {
      const e = new CustomEvent("kivalaszt", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }
}
