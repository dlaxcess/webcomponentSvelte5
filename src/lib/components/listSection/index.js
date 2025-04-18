// @ts-check
import ListSection from "./ListSection.svelte";

/** @typedef {import('svelte').SvelteComponent} SvelteComponent */

class ListSectionElement extends HTMLElement {
  /** @type {SvelteComponent|undefined} */
  _element;

  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._element = new ListSection({
      target: this.shadowRoot,
    });
  }

  disconnectedCallback() {
    this._element?.destroy();
  }
}

if (!customElements.get("pc-list-section")) {
  customElements.define("pc-list-section", ListSectionElement);
}

export default ListSection;
