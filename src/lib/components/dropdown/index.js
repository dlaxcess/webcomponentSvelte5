// @ts-check
import Dropdown from "./Dropdown.svelte";

/** @typedef {import('svelte').SvelteComponent} SvelteComponent */

class DropdownElement extends HTMLElement {
  /** @type {SvelteComponent|undefined} */
  _element;

  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._element = new Dropdown({
      target: this.shadowRoot,
    });
  }

  disconnectedCallback() {
    this._element?.destroy();
  }
}

if (!customElements.get("pc-dropdown")) {
  customElements.define("pc-dropdown", DropdownElement);
}

export default Dropdown;