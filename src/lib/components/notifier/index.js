// @ts-check
import Notifier from "./Notifier.svelte";

/** @typedef {import('svelte').SvelteComponent} SvelteComponent */

class NotifierElement extends HTMLElement {
  /** @type {SvelteComponent|undefined} */
  _element;

  constructor() {
    super();
  }

  connectedCallback() {
    this._element = new Notifier({
      target: this
    });
  }

  disconnectedCallback() {
    this._element?.destroy();
  }
}

if (!customElements.get("notifier-component")) {
  customElements.define("notifier-component", NotifierElement);
}

export default Notifier;