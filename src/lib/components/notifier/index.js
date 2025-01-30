import Notifier from "./Notifier.svelte";

class NotifierElement extends HTMLElement {
  constructor() {
    super();
    new Notifier({
      target: this
    });
  }
}

if (!customElements.get("notifier-component")) {
  customElements.define("notifier-component", NotifierElement);
}

export default Notifier;