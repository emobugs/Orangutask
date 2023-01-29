import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;

  let newEmojis = this.addBananas();
  const emojisDiv = document.querySelector("#emojis");
  emojisDiv.innerHtml = "";
  let p = document.createElement("p");
  p.textContent = newEmojis.toString();

  emojisDiv.appendChild(p);
  }

  addBananas() {
    return this.emojis.map(e => {
      return `${e}${this.banana}`
    });
  }
}
