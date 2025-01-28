import Toaster from "./Toaster.svelte";

class ToasterElement extends HTMLElement {
  constructor() {
    super();
    new Toaster({
      target: this,
      props: {} 
    });
  }
}

if (!customElements.get("toaster-component")) {
  customElements.define("toaster-component", ToasterElement);
}

export default Toaster;