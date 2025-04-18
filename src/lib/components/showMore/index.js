// @ts-check
import ShowMore from "./ShowMore.svelte";

/** @typedef {import('svelte').SvelteComponent} SvelteComponent */

class ShowMoreElement extends HTMLElement {
  /** @type {SvelteComponent|undefined} */
  _element;

  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._element = new ShowMore({
      target: this.shadowRoot,
    });
  }

  disconnectedCallback() {
    this._element?.destroy();
  }
}

if (!customElements.get("pc-show-more")) {
  customElements.define("pc-show-more", ShowMoreElement);
}

export default ShowMore;