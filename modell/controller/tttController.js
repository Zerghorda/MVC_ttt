import Palya from "../../view/Palya.js";
import tttModel from "../tttModel.js";

export default class tttController {
  constructor() {
    this.taroloElem = $(".tartalom");
    this.asideELEM = $(".lepes_szam");
    this.model = new tttModel();
    new Palya(this.model.getLISTA(), this.taroloElem);
    this.#esemenyKezelo();
  }
  #esemenyKezelo() {
    $(window).on("kivalaszt", (event) => {
      console.log(event.detail);
      this.model.lepteto(event.detail);
      new Palya(this.model.getLISTA(), this.taroloElem);
    });
  }
}
