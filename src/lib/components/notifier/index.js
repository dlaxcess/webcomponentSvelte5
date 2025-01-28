import Notifier from "./Notifier.svelte";

class NotifierElement extends HTMLElement {
  constructor() {
    super();
    new Notifier({
      target: this,
      props: {} 
    });
  }
}

if (!customElements.get("notifier-component")) {
  customElements.define("notifier-component", NotifierElement);
}

export default Notifier;